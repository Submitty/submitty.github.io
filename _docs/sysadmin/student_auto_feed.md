---
title: Submitty Student Auto Feed
category: System Administrator
order: 7
---

_Submitty Student Auto Feed is an optional command-line PHP script that can automatically
fill or update classlists on a cron schedule._

## Table of Contents
1. [Requirements](#requirements)
2. [Files](#files)
3. [Deprecated Files](#deprecated_files)
4. [Course Database Backups](#database_backups)
5. [Student CSV](#student_csv)
  * [CSV Layout](#csv_layout)
6. [Install on Ubuntu 16.04](#install)
7. [Configuration](#configuration)
  * [Configurations (top)](#configurations_top)
  * [Database Connection](#config_database)
  * [Error Logging](#config_logs)
  * [CSV Validation](#config_csv_validation)
  * [Timezones](#config_timezones)

### 1. Requirements <a name="requirements"></a>
* Submitty Student Auto Feed is intended to be managed by a systems administrator or similar IT professional.
* PHP 5.4 or higher with `pgsql` and `iconv` extensions.
  * Although not a necessity, the auto feed script can operate on the same server that Submitty is running on.  In which case, you may need to install the `iconv` extension.
  * The `ssh2` extension is also required if the data feed CSV resides on a different server than the script is running from (this also includes running the script on the Submitty server).
* A regularly updated CSV data feed of student enrollment.
  * Contact your university's registrar and/or data warehouse for assistance.

### 2. Files <a name="files"></a>
Latest version of the auto feed script and supplmental files will be checked into the `master` branch in [`Submitty/Docs/student_auto_feed/`](https://github.com/Submitty/Submitty/tree/master/Docs/student_auto_feed)
* `submitty_student_auto_feed.php` -- Executable PHP script to read student registration CSV and update Submitty classlist enrollment.
* `config.php` -- **REQUIRED** config file for `submitty_student_auto_feed.php`
* `accounts.php` -- **IMPORTANT** for Submitty servers utilizing PAM authentication.

### 3. Deprecated Files <a name="deprecated_files"></a>
These files remain in the repository but have not been updated.
They are incompatible with the latest auto feed script and database schema.
It is **highly _inadvisable_** to use these files.
* `driver.php`
* `restore_backup.php`
* `submitty_users_data_backup.php`

### 4. Course Database Backups <a name="student_csv"></a>
Please use `db_backup.py` (located in [`Submitty/Docs/nightly_db_backup/`](https://github.com/Submitty/Submitty/tree/master/Docs/nightly_db_backup)) on a cron schedule to create nightly backups of course databases.

### 5. Before Installing Auto Feed Script <a name="before_installing"></a>
It is important that you can receive a regularly updated data feed of student enrollment.
The data should be tabulated (like a spreadsheet), but must be written as a CSV file.
You will likely need the cooperation from your university's data warehouse and/or registrar.
The CSV file will need to be delivered or provided somewhere that the auto feed script can access.

_Please note where this location is as you will need it later._

**IMPORTANT** -- CSV files are traditionally human readable raw text files and the CSVs required by the auto feed script will contain
student enrollment data protected by FERPA ([U.S. federal statute 20 U.S.C. § 1232g](https://en.wikipedia.org/wiki/Family_Educational_Rights_and_Privacy_Act)).
Please take appropriate information protection measures.
**_SUBMITTY IS NOT RESPONSIBLE FOR YOUR COURSE'S, DEPARTMENT'S, OR UNIVERSITY'S INFORMATION CONTROL POLICIES OR ACTIVITIES._**

#### 5.1 Student CSV Layout <a name="csv_layout"></a>
TO DO

### 6. Install On Ubuntu 16.04 <a name="install"></a>
As these are PHP scripts, they _should_ run on any computer that has PHP 5.4+ and the appropriate extensions installed.
However, these instructions will focus on Ubuntu 16.04 (which uses PHP 7.0 by default).

As Ubuntu is part of the Debian Linux family, these instructions are very likely to work with other Debian family distributions with, perhaps, minor adjustments.

1. If they haven't already been installed, install PHP and the required extensions.
```bash
sudo apt-get install php php-pgsql php-iconv php-ssh2
```
2. Ensure the extensions are active.
```bash
sudo phpenmod php-pgsql php-iconv php-ssh2
```
3. Create a directory on the server to run the scripts and copy `submitty_student_auto_feed.php` and `config.php` from the repository to your new directory.
  *  `submitty_student_auto_feed.php` and `config.php` both should reside in the same directory and both must be accessible by the same user account.
  * `root` is technically _not_ required to run the auto feed, but the account owning the script files will be responsible to run the auto feed via cron.
4. It is highly advisable for sysadmins to set user-level only permissions to the auto feed script files.
  * `submitty_student_auto_feed.php` is intended to be executable.
  * `config.php` is _not_ intended to be executable.
  * The following sets owner only permissions of "Read/Write/Execute" to `submitty_student_auto_feed.php` and "Read/Write" (non executable) to `config.php`:
```bash
sudo chmod 0700 student_submitty_auto_feed.php
sudo chmod 0600 config.php
```

### 7. Configuration <a name="configuration"></a>
Configuration options exist in `config.php` as "constants".
The goal, here, is to redefine each constant to a value reflective of your use of Submitty.
The provided defaults, while illustrative, will not work.

**IMPORTANT** -- these lines are treated as actual PHP program code.
`define` is a function that requires parentheses.
Inside the parentheses are (usually) string-values arguments, comma separated.
String values must be enclosed in single or double quotes.
Each line must end with a semicolon.
Otherwise, the auto feed will throw a syntax or parse error and won't run.

Here is an example option:
```php
define('CSV_FILE', '/path/to/datafile.csv');
```
This defines the constant `CSV_FILE` and sets it to the value `/path/to/datafile.csv`.
We would need to change the value to reflect where the student data CSV is located (did you [note this](#before_installing) back in chapter 5?).
For example, if your data warehouse delivers the feed CSV to `/users/datawarehouse/enrollment.csv` -- then change the line to read:
```php
define('CSV_FILE', '/users/datawarehouse/enrollment.csv');
```

There are a couple other options to set besides `define`:  `date_default_timezone_set` and `ini_set`.

Following is a list of each constant and what they represent.
Summaries are also provided as "code comments" within `config.php`.
Consistent with C and Java styles, PHP code comments either begin with double slashes `//` or are multiple lines between `/*` and `*/`.
Using a text editor with syntax highlighting will be highly beneficial as code comments will be given a unique text color (text coloring will vary from editor to editor).

### 7.1 Configurations <a name="configurations_top"></a>
These options are set in `config.php`.

#### Database Connection<a name="config_database"></a>

```php
define('DB_HOST',     'submitty.cs.myuniversity.edu');
define('DB_LOGIN',    'hsdbu');
define('DB_PASSWORD', 'DB.p4ssw0rd');
```

These options specify the login to the Submitty database for the hostname of the database, the user login (typically `hsdbu`), and the password (same as used in Submitty setup).

**IMPORTANT** -- Without this configuration, the auto feed cannot add or update course enrollments.

Note that the database is often on the same server as Submitty, but this is not required.  The database can be hosted on a separate server from Submitty.

#### Error Logging <a name="config_logs"></a>
```php
define('ERROR_EMAIL',    'sysadmins@lists.myuniversity.edu');
define('ERROR_LOG_FILE', '/location/of/auto_feed_error.log');
```
When an error occurs, it is written to a raw text logfile.
The location of the logfile must be specified and must be accessible by the user account running the auto feed.

Error messages can also be emailed, presumably to a sysadmin or a mailing list monitored by an IT dept (highly recommended).
Emailing error messages can be disabled by setting the value to `null` (without quotes).

**IMPORTANT** -- error-log email may be considered _unauthenticated_ email by many Universities.
Your campus may restrict or outright deny delivery of the error-log emails.
Consult with your University's IT department about how its email delivery policy may affect the auto-feed's error-log email.

#### CSV Validation <a name="config_csv_validation"></a>
```php
define('VALIDATE_MIN_FILESIZE', 65536);
define('VALIDATE_NUM_FIELDS',   10);
```

These options are used to (loosely) detect a bad CSV file.
* `VALIDATE_MIN_FILESIZE` sets the acceptable minimum file size as an _integer_ in bytes.
This is useful to detect an egregiously small CSV that could indicate data corruption (such as a file containing end-of-line characters, but no actual data).

  It is possible to snare a legitimate CSV as a false-positive, so setting this value relatively small, but greater than zero, is advised.
  * A CSV with 5,120 end-of-line chars (empty rows) will be 5,120 bytes (5 kilobytes) in size.
    Windows-1252 encoded CSVs have _two_ end-of-line chars per row, so 5,120 empty rows will make up a 10 kilobyte CSV.
  * 65,536 bytes = 64 kilobytes.

* `VALIDATE_NUM_FIELDS` is a check to make sure that an exact number of fields/columns is present in every row of the CSV.
Any row that does not have this exact value is expected to have unreliable data and is ignored by the auto feed script.
This value includes any extraneous fields/columns that your University's registrar/data warehouse provides.

  Even though the auto feed requires ten columns, the CSV being provided may have more.
  If so, use the number of columns _in the CSV_ to set this option.
  Otherwise, all columns may be ignored and no enrollment additions or updates will be recorded.



#### Timezone <a name="config_timezones"></a>
```php
date_default_timezone_set('America/New_York');
```
This option must be set to your timezone.  The example, above, is set to Eastern timezone.

##### Suggested Settings For Timezones in USA

Timezone | Suggested Setting
--- | ---
Eastern | `America/New_York`
Central | `America/Chicago`
Mountain | `America/Denver`
Mountain (no daylight savings) | `America/Phoenix`
Pacific | `America/Los_Angeles`
Alaska | `America/Anchorage`
Hawaii | `America/Adak`
Hawaii (no daylight savings) | `Pacific/Honolulu`

For a complete list of timezones: <http://php.net/manual/en/timezones.php>


