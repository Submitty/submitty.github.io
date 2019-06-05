---
title: Submitty Student Auto Feed
category: System Administrator
order: 7
---

_Submitty Student Auto Feed is an optional command-line PHP script that can automatically
fill or update classlists on a cron schedule._

## Table of Contents
1. [Requirements](#1-requirements)
2. [Files](#2-files)
3. [Course Database Backups](#3-course-database-backups)
4. [Before Installing Auto Feed Script](#4-before-installing-auto-feed-script)
  * [Student CSV Layout](#41-student-csv-layout)
5. [Install on Ubuntu Server](#5-install-on-ubuntu-server)
6. [Command Line Arguments](#6-command-line-arguments)
7. [Configuration](#7-configuration)
  * [Configurations (top)](#71-configurations)
  * [Database Connection](#database-connection)
  * [Error Logging](#error-logging)
  * [CSV File Access](#csv-file-access)
  * [CSV Delimiter](#csv-delimiter)
  * [CSV Validation](#csv-validation)
  * [CSV Fields Mapping](#csv-fields-mapping)
  * [Student Registration Codes](#student-registration-codes)
  * [Expected Term Code](#expected-term-code)
  * [Windows Encoding Conversion](#windows-encoding-conversion)
  * [End of Line Detection](#end-of-line-detection)
  * [About "allow_url_fopen"](#about-allow_url_fopen)
  * [Timezone](#timezone)
8. [PAM Authentication and `accounts.php`](#8-pam-authentication-and-accountsphp)

### 1. Requirements
* Submitty Student Auto Feed is intended to be managed by a systems administrator or similar IT professional.
* PHP 5.6 or higher with `pgsql` and `iconv` extensions.
  * Although not a necessity, the auto feed script can operate on the same server that Submitty is running on.
  * The `ssh2` extension is also required if the data feed CSV resides on a different server than the script is running from (this also includes running the script on the Submitty server).
* A regularly updated CSV data feed of student enrollment.
  * Contact your university's registrar and/or data warehouse for assistance.

<small>[Back To Table of Contents](#table-of-contents)</small>
### 2. Files
Latest version of the auto feed script and supplmental files will be checked into the `master` branch in [`SysadminTools/student_auto_feed/`](https://github.com/Submitty/SysadminTools/tree/master/student_auto_feed)
* `submitty_student_auto_feed.php` -- Executable PHP script to read student registration CSV and update Submitty classlist enrollment.
* `config.php` -- **REQUIRED** config file for `submitty_student_auto_feed.php`
* `accounts.php` -- **IMPORTANT** for Submitty servers utilizing PAM authentication.

<small>[Back To Table of Contents](#table-of-contents)</small>
### 3. Course Database Backups
Please use `db_backup.py` (located in [`SysadminTools/nightly_db_backup/`](https://github.com/Submitty/SysadminTools/tree/master/nightly_db_backup)) on a cron schedule to create nightly backups of course databases.

Run `db_backup.py -h` to see extended help and argument list.

<small>[Back To Table of Contents](#table-of-contents)</small>
### 4. Before Installing Auto Feed Script
It is important that you can receive a regularly updated data feed of student enrollment.
The data should be tabulated (like a spreadsheet), but must be written as a CSV file.
You will likely need the cooperation from your university's data warehouse and/or registrar.
The CSV file will need to be delivered or provided somewhere that the auto feed script can access.

_Please note where the CSV location is as you will need it later._

**IMPORTANT** -- CSV files are traditionally human readable raw text files and the CSVs required by the auto feed script will contain
student enrollment data protected by FERPA ([U.S. federal statute 20 U.S.C. § 1232g](https://en.wikipedia.org/wiki/Family_Educational_Rights_and_Privacy_Act)).
Please take appropriate information protection measures.
**_SUBMITTY IS NOT RESPONSIBLE FOR YOUR COURSE'S, DEPARTMENT'S, OR UNIVERSITY'S INFORMATION CONTROL POLICIES OR ACTIVITIES._**

<small>[Back To Table of Contents](#table-of-contents)</small>
### 4.1 Student CSV Layout

There are ten _required_ columns/fields, and one optional column/field processed by the submitty auto feed script.
The student CSV data file may have additional fields, which will be ignored by, _but there may not be less than the ten columns/fields required_.
The columns/fields may be in any order.
`config.php` will map the requisite (and optional) columns/fields to their respective data points.
(q.v. [CSV Fields Mapping](#csv-fields-mapping) for additional explanation)

##### The student CSV file _must_ have fields/columns for these data points:
1. Student's legal first name
2. Student's legal last name
3. Student's campus computer systems user account ID
  * The student CSV file should **_NEVER_** contain account passwords.
4. An alternate numeric ID.
  * This is intended to be the student's campus assign ID number, but could be
    any alternate alphanumeric ID code assigned to the student by the data feed.
  * This ID code can contain delimiter characters, such as dashes.
5. Student's email address
6. Course the student is enrolled in
  * This is actually **_two_** fields/columns.
    One is the course "prefix" (often the dept. code), and the other is the course "number".
    Combined, they make up the course code as listed in the course catalog.
    e.g. Prefix is "CSIS" and number is "101" as in "CSIS 101" in the course catalog.
7. Student's registration status
  * A student can drop enrollment during an academic term, and this may be reflected by a code in the student CSV file.
    Alternatively, the student's enrollment entry, in the CSV file, can be entirely omitted when a course is dropped.
    The student auto feed script is intended to work with either case.
8. Which lab/course section a student is enrolled in.
9. The "term code" for the current academic term must exist in every data row.

##### This data point is _optional_ in the student CSV file:
1. Student's "preferred" first name
  * This is any name a student prefers to be known by.
  * Submitty permits students to manually set their own "preferred" name, even if the student CSV file contains no record of it.

##### Other Requirements:
* Every column/field must be delimited by a the same character.
* While commas are a common delimiter, `tab` characters are recommended.
* Columns/field data should *not* be enclosed by quotes.
  Quotation marks may be picked up as part of the data and fail certain validation checks.

<small>[Back To Table of Contents](#table-of-contents)</small>
### 5. Install On Ubuntu Server
As these are PHP scripts, they _should_ run on any computer that has PHP 5.6+ and the appropriate extensions installed.
However, these instructions will focus on Ubuntu server (same OS that is supported for Submitty).  Ubuntu 16.04 uses PHP 7.0 by default, and Ubuntu 18.04 uses PHP 7.2 by default.

As Ubuntu is part of the Debian Linux family, these instructions are very likely to work with other Debian family distributions with, perhaps, minor adjustments.

1. If they haven't already been installed, install PHP and the required extensions.
```bash
sudo apt-get install php php-pgsql php-iconv php-ssh2
```
   NOTE: `php-iconv` is not needed in Ubuntu 18.04.  It is part of the `php-common` package installed with `php`.
2. Ensure the extensions are active.
```bash
sudo phpenmod php-pgsql php-iconv php-ssh2
```
3. Create a directory on the server to run the scripts and copy `submitty_student_auto_feed.php` and `config.php` from the repository to your new directory.
  *  `submitty_student_auto_feed.php` and `config.php` both should reside in the same directory and both must be accessible by the same user account.
  * `root` is technically _not_ required to run the auto feed, but the account owning the script files will be responsible to run the auto feed via cron.
4. File permissions:
  * `submitty_student_auto_feed.php` is intended to be executable.
  * `config.php` is _not_ intended to be executable.
  * The following sets owner only permissions of "Read/Write/Execute" to `submitty_student_auto_feed.php` and "Read/Write" (non executable) to `config.php`:
```bash
sudo chmod 0700 student_submitty_auto_feed.php
sudo chmod 0600 config.php
```

<small>[Back To Table of Contents](#table-of-contents)</small>
### 6. Command Line Arguments

--- | ---
`-h` `--help`    | Extended help including usage and argument list.
`-t [term code]` | Manually set the term code.
`-g`             | Guess the term code based on calendar month and year.

Notes:
- `-t` _and_ `-g` are mutually exclusive, but one or the other is required.
- `-g` will guess the semester code in the form of **TYY**.
  - **T** is the term:
    - **s** for Spring (Jan - May)
    - **u** for Summer (Jun - Jul)
    - **f** for Fall (Aug - Dec)
  - **YY** is the two digit year.
  - e.g. **s18** is Spring of 2018.

<small>[Back To Table of Contents](#table-of-contents)</small>
### 7. Configuration
Configuration options exist in `config.php` as "constants".
The goal, here, is to define each constant to a value reflective of your use of Submitty.
The provided defaults, while illustrative, typically will not work.

**IMPORTANT** -- these lines are treated as actual PHP program code.
`define` is a function that requires parentheses.
Inside the parentheses are (usually) string-values arguments, comma separated.
String values must be enclosed in single or double quotes.
However, sometimes the value is a whole number or of the keywords `true`, `false`, or `null`.
These are not string values and therefore are not enclosed in single or double quotes.
Each line must end with a semicolon.
Otherwise, the auto feed will throw a syntax or parse error and won't run.

_Best practice is to follow the format as seen in the examples._

---

Here is an example option:
```php
define('CSV_FILE', '/path/to/datafile.csv');
```
This defines the constant `CSV_FILE` and sets it to the value `/path/to/datafile.csv`.

_Do not change the constant_.
Only change the constant's value.

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

<small>[Back To Table of Contents](#table-of-contents)</small>
### 7.1 Configurations
These options are set in `config.php`.
`config.php` must exist in the same directory and be accessible by the same user account as `submitty_student_auto_feed.php`.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### Database Connection
```php
define('DB_HOST',     'submitty.cs.myuniversity.edu');
define('DB_LOGIN',    'submitty_dbuser');
define('DB_PASSWORD', 'DB.p4ssw0rd');
```

These options specify the login to the Submitty database for the hostname of the database, the user login (typically `submitty_dbuser`), and the password (same as used in Submitty setup).

**IMPORTANT** -- Without this configuration, the auto feed cannot add or update course enrollments.

Note that the database is often on the same server as Submitty, but this is not required.  The database can be hosted on a separate server from Submitty.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### Error Logging
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
Consult with your University's IT department regarding _unauthenticated_ email.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### CSV File Access
```php
define('CSV_AUTH',               'remote_keypair');
define('CSV_FILE',               '/path/to/datafile.csv');
define('CSV_REMOTE_SERVER',      'fileserver.myuniversity.edu');
define('CSV_AUTH_USER',          'remote_user');
define('CSV_AUTH_PASSWORD',      null);
define('CSV_AUTH_PUBKEY',        '/path/to/rsa_key.pub');
define('CSV_AUTH_PRIVKEY',       '/path/to/rsa_key.pfx');
define('CSV_PRIVKEY_PASSPHRASE', 'MySecretPassphrase');
```

These constants define how the CSV data can be accessed.
* `CSV_AUTH` determines what kind of authenticated access is needed.
   Options are `local`, `remote_password`, and `remote_keypair`.
   * `local` means that the CSV file resides on the same computer that is executing the auto script.
   * `remote_password` means that the CSV file resides on a different computer, and a password is required to access the CSV file (using SFTP).
   * `remote_keypair` means that the CSV file resides on a different computer, and a private/public keypair is required to access the CSV file (using SFTP).
     Note that there is a caveat (explained below) with using private/public keypair in Ubuntu.
* `CSV_FILE` is the path to the _full_ file (_not_ including hostname when the file is remotely accessed).
* `CSV_REMOTE_SERVER` is the hostname of the remote server hosting the CSV file.
  Ignored when `CSV_AUTH` is set to `local`.
* `CSV_AUTH_USER` is the user name used to access a remote CSV file when `CSV_AUTH` is set to `remote_password` or `remote_keypair`.
* `CSV_AUTH_PASSWORD` is the password used to access a remote CSV when `CSV_AUTH` is set to `remote_password`.
* `CSV_AUTH_PUBKEY` is the path to a copy of the remote server's public keyfile when `CSV_AUTH` is set to `remote_keypair`.
* `CSV_AUTH_PRIVKEY` is the path to the local machine's private keyfile when `CSV_AUTH` is set to `remote_keypair`.
  * Note that the local computer's _public_ key needs to be copied to the remote machine that stores the CSV.
  * **_NEVER_** divulge the local computer's private key.
* `CSV_PRIVKEY_PASSPHRASE` is the decryption passphrase used to read your local computer's private key.
  * The private key does not have to be encrypted, in which case this option should be set to `null` (without quotes).
  * **IMPORTANT** -- To use an encrypted private key with an Ubuntu SSH/SFTP host,
    The [`libssh2`](https://launchpad.net/ubuntu/xenial/+source/libssh2) library needs be manually recompiled with [`OpenSSH`](https://www.openssh.com/) (as opposed to [`libgcrypt20-dev`](https://launchpad.net/ubuntu/xenial/+package/libgcrypt20-dev))
    Otherwise, authentication will always fail.
    _This is not a bug of the student auto feed script_, but an unfortunate consequence of Canonical's compiling of the [`libssh2`](https://launchpad.net/ubuntu/xenial/+source/libssh2) library.

    Your options are as follows:
    * Recompile [`libssh2`](https://launchpad.net/ubuntu/xenial/+source/libssh2) yourself.
      _Recompiling [`libssh2`](https://launchpad.net/ubuntu/xenial/+source/libssh2) is out of the scope of Submitty, and therefore Submitty developers are unlikely to be able to provide assistance._
    * Don't encrypt the private key (this does carry additional data security risk).
    * Host/run the student auto feed script on a different Linux distribution or operating system.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### CSV Delimiter
```php
define('CSV_DELIM_CHAR', chr(9));
```

Every CSV file has a delimiter character that separates each data field, and this delimiter needs to be specified.
Usually, the delimiter is a comma, but it can be any character from the [standard ASCII table](http://www.asciitable.com/).
The delimiter character can be directly quoted (e.g. `','` for comma) or specified by its ASCII value (e.g. `chr(44)` for comma).
In the example above, `chr(9)` is the _tab_ key.

Here are some example delimiters:

* Comma
  ```php
  define('CSV_DELIM_CHAR', ',');
  ```
* Comma by ASCII value
  ```php
  define('CSV_DELIM_CHAR', chr(44));
  ```

* Tilde
  ```php
  define('CSV_DELIM_CHAR', '~');
  ```
* Semicolon
  ```php
  define('CSV_DELIM_CHAR', ';');
  ```

<small>[Back To Table of Contents](#table-of-contents)</small>
#### CSV Validation
```php
define('VALIDATE_MIN_FILESIZE', 65536);
define('VALIDATE_NUM_FIELDS',   10);
```

These options are used to (loosely) detect a bad CSV file.
* `VALIDATE_MIN_FILESIZE` sets the acceptable minimum file size as an _integer_ in bytes.
This is useful to detect an egregiously small CSV that could indicate data corruption (such as a file containing end-of-line characters, but no actual data).

  It is possible to snare a legitimate CSV as a false-positive, so setting this value relatively small, but greater than zero, is advised.
  Here are a couples tips to help you decide what should be a reasonable validation filesize.
  * A CSV with 5,120 end-of-line chars (empty rows) will be 5,120 bytes (5 kilobytes) in size.
    CP-1252 (MS-Windows) encoded CSVs have _two_ end-of-line chars per row, so 5,120 empty rows will make up a 10 kilobyte CSV.
  * As seen in the example above, 65,536 bytes = 64 kilobytes.

* `VALIDATE_NUM_FIELDS` is a check to make sure that an exact number of fields/columns is present in every row of the CSV.
Any row that does not have this exact value is expected to have unreliable data and is ignored by the auto feed script.
This value includes any extraneous fields/columns that your University's registrar/data warehouse provides.

  Even though the auto feed requires ten columns, the CSV being provided may have more.
  If so, use the number of columns _in the CSV_ to set this option.
  Otherwise, all columns may be ignored and no enrollment additions or updates will be recorded.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### CSV Fields Mapping
```php
define('COLUMN_COURSE_PREFIX', 8);
define('COLUMN_COURSE_NUMBER', 9);
define('COLUMN_REGISTRATION',  7);
define('COLUMN_SECTION',       10);
define('COLUMN_USER_ID',       5);
define('COLUMN_NUMERIC_ID',    6);
define('COLUMN_FIRSTNAME',     2);
define('COLUMN_LASTNAME',      1);
define('COLUMN_PREFERREDNAME', 3);
define('COLUMN_EMAIL',         4);
define('COLUMN_TERM_CODE',     0);
```

Each of these constants represents the data fields that must be read from the student data CSV.
Different universities will order the data differently, therefore the auto feed requires these `define` functions to determine which columns hold the needed data.

**_IMPORTANT_** -- The integer values actually represent array indices, and as is common convention in programming, array indices start counting at **_zero_**.
That is, the first column of the CSV is #0, the second column is #1, the third column is #2, and so on.

* `COLUMN_COURSE_PREFIX` represents the course __prefix__ (often the dept. code) as seen in the course catalog.
  The entire course code would be the __prefix__ and __number__ combined.

* `COLUMN_COURSE_NUMBER` represents the course __number__ as seen in the course catalog.
  The entire course code would be the __prefix__ and __number__ combined.

  __*IMPORTANT:*__ The student CSV must have separate columns for the prefix/dept code and the course number.
  This permits the auto feed script to process enrollment for courses in multiple departments.

  __*For Example*__ |
  _Prefix_ | "CSIS" (Computer Science and Information Systems dept.)
  _Number_ | "101" (introductory programming course)
  _Course Listed In Catalog_ | "CSIS 101" or "CSIS-101"

* `COLUMN_REGISTRATION` represents the column that has a code to verify that a student is enrolled or not.
  q.v. [Student Registration Codes](#student-registration-codes)

* `COLUMN_SECTION` is the column representing the lab/course section a student is enrolled in.

* `COLUMN_USER_ID` is a student's computing systems user ID, and is also used to login to Submitty.

* `COLUMN_NUMERIC_ID` is intended to represent the student's campus assigned ID number, but could be any alternate ID number provided by a data feed.
  Although this column is called "numeric", any alphanumeric code is permitted with delimiter characters, such as dashes.

* `COLUMN_FIRSTNAME` is a student's legal first name.

* `COLUMN_LASTNAME` is a student's legal last name.

* `COLUMN_PREFERREDNAME` is the name a student wishes to be known by.
  If your university's student data CSV doesn't have this column, set this to `null`.

* `COLUMN_EMAIL` contains a student's email address.

* `COLUMN_TERM_CODE` contains the code describing the current term.
  This is checked against the "expected" term code for validation.
  q.v. [Expected Term Code](#expected_term_code)

<small>[Back To Table of Contents](#table-of-contents)</small>
#### Student Registration Codes
```php
define('STUDENT_REGISTERED_CODES', serialize( array(
'RA',
'RW'
)));
```

This option is a little more complicated to look at, but is actually not any more difficult than the others.
This `define` is creating a list (a.k.a. "array") of all the registration codes that indicate a student is enrolled in a course.
Your student CSV may include students who were enrolled in a course, but that enrollment may change mid-term.

In the above example, the two codes `RA` and `RW` indicate a student is enrolled in a course.
In this case, `RA` may mean "Registered by Adviser" and `RW` may mean "Registered by Web".

* You will need to coordinate with your University's registrar or data warehouse to determine what all the enrollment codes are.
* You will need to replace/remove/add enrollment codes to this `define` that are found in your student CSV.
* This example has two codes, but you may have more codes or only one code.
* Even if there is only one registration code, you _must_ have the `serialize( array(` and `)));` program code.
  * <small>`define` is used with singular items, so `serialize` is used to "pack" an array (list) into a singular item.
    The auto feed will "unpack" the list during runtime, thus `serialize` remains necessary even with one item lists.</small>
* Don't forget the commas -- just like in an English list, every item (code) is separated by commas.
* Any student not associated with a registration code as listed in this option is assumed to have dropped the course or has otherwise been unregistered for some reason.
  In which case, an update will occur in Submitty's database to reflect the student is no longer enrolled in that course.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### Expected Term Code
```php
define('EXPECTED_TERM_CODE', '201705');
```

This check will ensure that a course's enrollment database does not accidentally get clobbered by a student enrollment list for a different term.

Every term (semester) should be associated with a unique code.
This code will have to be updated by a sysadmin, as needed.

Per example, above, `201705` might be a code for the Summer 2017 semester.
That is `201705` might be year 2017, starting month 5 (which is May).

The student auto feed will check every row for this code and compare it with this `define` statement.
Rows that do not match the `define` value will be ignored.
It is possible that when one row does not match, all rows will not match.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### Windows Encoding Conversion
```php
define('CONVERT_CP1252', true);
```

If your student CSV originates from a Windows computer, the auto feed may need to do a text encoding conversion from CP-1252 to UTF-8; especially when the CSV character data is expected to include [diacritics](https://en.wikipedia.org/wiki/Diacritic).
Set `CONVERT_CP1252` to `true` if the student CSV originates from a Windows computer.
Otherwise, set to `false`.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### End of Line Detection
```php
ini_set('auto_detect_line_endings', true);
```
In summary, this `define` shouldn't be changed.
It ensures that CSV files exported by Microsoft Excel for Macintosh are correctly processed.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### About "allow_url_fopen"
```php
ini_set("allow_url_fopen", true);
```
This entry is only relevant when the student CSV file must be remotely accessed<br> (q.v. [CSV File Access](#csv_file_access)).
Setting this value to `true` permits resolving the domain name of another server.
Otherwise, the server would have to be accessed via IP address.

This setting is irrelevant when the student CSV can be locally accessed.

<small>[Back To Table of Contents](#table-of-contents)</small>
#### Timezone
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

<small>[Back To Table of Contents](#table-of-contents)</small>

### 8. PAM Authentication and `accounts.php`
The script `accounts.php` will automate the creation of local accounts used with PAM authentication.

*This script is not needed when using database authentication.*

`accounts.php` must exist on the same server as Submitty, and it needs to be run as `root`.
This script is intended to read user entries from Submitty's "master" database to generate any missing local accounts needed for PAM authentication.

Run `accounts.php -h` to see extended help and argument list.

It is recommended that this script is run every hour as a cron job.
That way, should an instructor manually add a student to their course, the student's access to Submitty will be available "within an hour".

<small>[Back To Table of Contents](#table-of-contents)</small>
