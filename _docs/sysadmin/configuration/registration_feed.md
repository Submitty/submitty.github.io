---
title: Registration Feed
category: System Administrator > Configuration & Management
redirect_from:
  - /sysadmin/student_auto_feed
---

Submitty Student Auto Feed is an optional command-line PHP ssystem that can automatically fill or update Submitty classlists on a cron schedule.

Programming adjustments may be needed for compatibility with your organization's network.

**SUBMITTY STUDENT AUTO FEED AND ALL RELATED MATERIALS ARE PROVIDED "AS IS".  USE AT YOUR OWN RISK.**


### 1. Requirements
* Submitty Student Auto Feed is intended to be managed by a systems administrator or similar IT professional.
* PHP 7.3 or higher with the pgsql extension.
  * Code is tested on Ubuntu 20.04, but may work on other OSes that can run PHP.
  * Although not a necessity, the auto feed script can operate on the same server that Submitty is running on.
  * Code has not been audited for PHP 8.  It may or may not work.
* A regularly updated CSV data feed of student enrollment.
  * Contact your university's registrar and/or data warehouse for assistance.


### 2. Files
Latest version of the auto feed and supplmental files will be checked into the "main" branch in [`SysadminTools/student_auto_feed/`](https://github.com/Submitty/SysadminTools/tree/main/student_auto_feed)

File | |
`submitty_student_auto_feed.php` | **REQUIRED** | Executable PHP script to read student registration CSV and update Submitty classlist enrollment.
`config.php` | **REQUIRED** | config file.
`ssaf_cli.php`, `ssaf_db.php`, `ssaf_sql.php`, `ssaf_validate.php` | **REQUIRED** | additional code modules.
`add_drop_report.php` | **OPTIONAL** | Executable script to generate reports of how many students have added and/or dropped from their courses.
`crn_copymap.php` | **OPTIONAL** | Script to setup course/section mapping to duplicate enrollments.  Intended for unofficial "practice" courses.
`csv_local.php` | **OPTIONAL** | Script to retrieve a registration CSV datasheet.
`imap_remote.php` | **OPTIONAL** *Obsolete* | Script to retrieve a registration CSV datasheet from an IMAP email account.  Requires imap extension.
`json_remote.hph` | **OPTIONAL** *Obsolete* | Script to retrieve JSON encoded data of student registration from another server, via SSH.  Requires ssh2 extension.
`ssaf.sh` | **OPTIONAL** | Bash shell script for using a datasheet retrieval script, add/drop report script, and the autofeed script.  Intended to be used with cron.


### 3. Before Installing Auto Feed Script
It is important that you can receive a regularly updated data feed of student enrollment.
The data should be tabulated (like a spreadsheet), but must be written as a CSV file.
You will likely need the cooperation from your university's data warehouse and/or registrar.
The CSV file will need to be delivered or provided somewhere that the auto feed script can access.

_Please note where the CSV location is as you will need it later._

**IMPORTANT** -- CSV files are traditionally human readable raw text files and the CSVs required by the auto feed script will contain
student enrollment data protected by FERPA ([U.S. federal statute 20 U.S.C. § 1232g](https://en.wikipedia.org/wiki/Family_Educational_Rights_and_Privacy_Act)).
Please take appropriate information protection measures.
**_SUBMITTY IS NOT RESPONSIBLE FOR YOUR COURSE'S, DEPARTMENT'S, OR UNIVERSITY'S INFORMATION CONTROL POLICIES OR ACTIVITIES._**

(q.v. [Data Sourcing](#7-data-sourcing))

### 3.1 Student CSV Layout

There are eleven _required_ columns/fields, and one optional column/field processed by the Submitty auto feed script.
The student CSV data file may have additional fields, which will be ignored, _but there may not be less than the eleven columns/fields required_.
The columns/fields may be in any order.
`config.php` will map the requisite (and optional) columns/fields to their respective data points.
(q.v. [CSV Fields Mapping](#csv-fields-mapping) for additional explanation)

##### The student CSV file _must_ have fields/columns for these data points:
1. Student's legal first name
2. Student's legal last name
3. Student's campus computer systems user account ID
   * The student CSV file should **_NEVER_** contain account passwords.
4. An alternate numeric ID.
   * This is intended to be the student's campus assigned ID number, but could be any alternate alphanumeric ID code assigned to the student by the data feed.
   * This ID code can contain delimiter characters, such as dashes.
5. Student's email address
6. Course the student is enrolled in.  This is actually **_two_** fields/columns.
   * One field is the course "prefix" (often the dept. code).
   * The other field is the course "number".
   * Combined, they make up the course code as listed in the course catalog.
     e.g. Prefix could be "CSIS" and number could be "101" as in "CSIS 101" in the course catalog.
7. Student's registration status
   * A student can drop enrollment during an academic term, and this may be reflected by a code in the student CSV file.
     Alternatively, the student's enrollment entry, in the CSV file, can be entirely omitted when a course is dropped.
     The student auto feed script is intended to work with either case.
8. Which lab/course section a student is enrolled in.
9. The "term code" for the current academic term must exist in every data row.
10. The course and section registration number that the student is enrolled with.

##### This data point is _optional_ in the student CSV file:
1. Student's "preferred" first name
  * This is any name a student prefers to be known by.
  * Submitty permits students to manually set their own "preferred" name, even if the student CSV file contains no record of it.

##### Other Requirements:
* Every column/field must be delimited by the same character.
* While commas are a common delimiter, `tab` characters are recommended.
* Columns/field data should *not* be enclosed by quotes.
  Quotation marks may be picked up as part of the data and fail certain validation checks.


### 4. Install On Ubuntu Server
As these are PHP scripts, they _should_ run on any computer that has PHP 7.3 or 7.4 and the appropriate extensions installed.
However, these instructions will focus on Ubuntu server 20.04 which provides PHP 7.4 by default.

1. If they haven't already been installed, install PHP and the required extensions.
```bash
$ sudo apt-get install php php-pgsql
```
2. Ensure the extensions are active.
```bash
$ sudo phpenmod php-pgsql
```
3. Create a directory on the server to run the scripts and copy all files from `SysadminTools/student_auto_feed/`.
  * `root` is technically _not_ required to run the auto feed, but the account owning the script files will be responsible to run the auto feed via cron.
4. File permissions:
  * `submitty_student_auto_feed.php`, `ssaf.sh`, `csv_local.php`, `imap_remote.php`, `json_remote.php` are intended to be executable.  The other files are not.
  * The following sets owner only permissions of "Read/Write/Execute" to `submitty_student_auto_feed.php` and "Read/Write" (non executable) to `config.php` and other code files.
```bash
$ sudo chmod 0700 student_submitty_auto_feed.php
$ sudo chmod 0600 ssaf_*.php config.php
```


### 5. Command Line Arguments

--- | ---
`-h` `--help`      | Extended help including usage and argument list.
`-t [term code]`   | Manually set the term code.
`-a [auth string]` | Override for DB connection string.
`-l`               | Send test message to log and quit.  Useful to test if logs are successfully being emailed.


### 6. Configuration
Configuration options exist in `config.php` as "constants".
The goal, here, is to define each constant to a value reflective of your use of Submitty.
The provided defaults, while illustrative, typically will not work.

**IMPORTANT** -- these lines are PHP program code.
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
This defines the constant `CSV_FILE` and sets its value to `/path/to/datafile.csv`.

_Do not change the constant_.
Only change the constant's value.

We would need to change the value to reflect where the student data CSV is located (did you [note this](/sysadmin/configuration/registration_feed#4-before-installing-auto-feed-script) back in chapter 3?).
For example, if your data warehouse delivers the feed CSV to `/users/datawarehouse/enrollment.csv` -- then change the line to read:
```php
define('CSV_FILE', '/users/datawarehouse/enrollment.csv');
```

There are a couple other options to set besides `define`:  `date_default_timezone_set` and `ini_set`.

Following is a list of each constant and what they represent.
Summaries are also provided as "code comments" within `config.php`.
Consistent with C and Java styles, PHP code comments either begin with double slashes `//` or are multiple lines between `/*` and `*/`.
Using a text editor with syntax highlighting will be highly beneficial as code comments will be given a unique text color (text coloring will vary from editor to editor).


### 6.1 Configurations
These options are set in `config.php`.
`config.php` must exist in the same directory and be accessible by the same user account as `submitty_student_auto_feed.php`.


#### Database Connection
```php
define('DB_HOST',     'submitty.cs.myuniversity.edu');
define('DB_LOGIN',    'submitty_dbuser');
define('DB_PASSWORD', 'DB.p4ssw0rd');
```

These options specify the login to the Submitty database for the hostname of the database, the user login (typically `submitty_dbuser`), and the password (same as used in Submitty setup).

**IMPORTANT** -- Without this configuration, the auto feed cannot add or update course enrollments.

Note that the database is often on the same server as Submitty, but this is not required.  The database can be hosted on a separate server from Submitty.


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

This command will help you determine if error logs are being successfully emailed or not.
```bash
$ ./submitty_student_auto_feed.php -l
```

#### CSV File Access
```php
define('CSV_FILE', '/path/to/datafile.csv');
```

This defines where the CSV data can be accessed.


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
define('COLUMN_REG_ID',        12);
```

Each of these constants represents the data fields that must be read from the student data CSV.
Different universities will order the data differently, therefore the auto feed requires these `define` functions to determine which columns hold the needed data.

**_IMPORTANT_** -- The integer values actually represent array indices, and as is common convention in programming, array indices start counting at **_zero_**.
That is, the first column of the CSV is #0, the second column is #1, the third column is #2, and so on.

* `COLUMN_COURSE_PREFIX` represents the course __prefix__ (often the dept. code) as seen in the course catalog.
* `COLUMN_COURSE_NUMBER` represents the course __number__ as seen in the course catalog.

   The entire course code would be the __prefix__ and __number__ combined.

   __*IMPORTANT:*__ The CSV data file must have separate columns for the prefix/dept code and the course number.

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
  q.v. [Expected Term Code](/sysadmin/configuration/registration_feed#expected-term-code)

* `COLUMN_REG_ID` is the course catalog registration number for an individual course *and* section.
  This is the code students (or their advisors) use to enroll in an available course *and* section.


#### Student Registration Codes
```php
define('STUDENT_REGISTERED_CODES', array('RA', 'RW'));
define('STUDENT_AUDIT_CODES', array('AU'));
define('STUDENT_LATEDROP_CODES', array('W'));
```
These constants are creating lists (a.k.a. "arrays") of all the registration codes that indicate a student's enrollment in a course.
In the above example, the two codes `'RA'` and `'RW'` may represent codes for "Registered by Adviser" and "Registered by Web".

* `STUDENT_REGISTERED_CODES` indicate matriculating students who have enrolled.
* `STUDENT_AUDIT_CODES` indicate students who have enrolled but will not earn credit.
* `STUDENT_LATEDROP_CODES` indicate students that have withdrawn their enrollment after the drop deadline.
* You will need to coordinate with your University's registrar or data warehouse to determine what all the enrollment codes are.
* While the first example has two codes, you may have more codes or only one code.
* Even if there is only one registration code, you _must_ still enclose it within `array(` and `));`.
* Don't forget the commas -- just like in an English list, every code is separated by commas.
* Any enrolled student no longer associated with a registration code is assumed to have dropped the course or otherwise been disenrolled.
  The student will automatically be moved to the course's "null section", as an indication of their disenrollment,


#### Expected Term Code
```php
define('EXPECTED_TERM_CODE', '202309');
```

This check will ensure that a course's enrollment database does not accidentally get clobbered by a student enrollment list for a different term.
This is useful for data protection, should enrollment CSV datasheets automatically represent a new term without notice.

Every term (semester) should be associated with a unique code.  If that information is not in the CSV datasheet, set this to `null`.

The student auto feed will check every row for this code.
Rows that do not match this constant's  value will be ignored and a warning added to the error log.
It is possible that when one row does not match, all rows will not match.


#### End of Line Detection
```php
ini_set('auto_detect_line_endings', true);
```
This shouldn't be changed.
It ensures that CSV files exported by Microsoft Excel for Macintosh are correctly processed.


#### Timezone
```php
date_default_timezone_set('America/New_York');
```
This must be set to your timezone.  The example, above, is set to Eastern timezone.

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


### 7. Data Sourcing
These optional scripts can assist in retrieving CSV data, as opposed to the data being directly delivered to a local file system.  Any existing CSV data file referenced by `'CSV_FILE'` will be replaced.


#### `csv_local.php`
Should CSV data files be made available in the local or a mounted filesystem, this script will help you validate and retrieve the CSV data file for the auto feed.  Validation includes file's existence and that the timestamp is current, so to not reprocess an old CSV file.

**`config.php`**
*Define* |
`'LOCAL_SOURCE_CSV'` | Path/file to retrieve and placed in the location of [`'CSV_FILE'`](#csv-file-access) so that it may be processed.


#### `imap_remote.php`
This script will retrieve CSV Data files attached to an email in an IMAP email account and deliver it to the location specified by `'CSV_FILE'`.

***IMPORTANT:*** This script is highly specialized, and is currently obsolete and unsupported.  This script is provided "as is" as a sample for another developer to adapt for their University's needs.  Use at your own risk.

**config.php**
*define* |
`'IMAP_HOSTNAME'` | FQDN of the IMAP email service.
`'IMAP_PORT'` | Network port to access IMAP email.
`'IMAP_USERNAME'` | IMAP email account's name/owner.
`'IMAP_PASSWORD'` | Password to access IMAP account.
`'IMAP_FOLDER'` | What folder to look for the email containing the CSV data file.
`'IMAP_OPTIONS'` | This needs to be an `array()` of strings.
                   Please review "Optional flags for names", under "Mailbox" at [php.net](https://www.php.net/manual/en/function.imap-open.php).
                   Do not include the backslash `\`.
`'IMAP_FROM'` | The expected sender of the email.  This is to help identify the correct email.
`'IMAP_SUBJECT'` | The expected email's subject.  This is to help identify the correct email.
`'IMAP_ATTACHMENT'` | The expected attachment's filename.  This is to help identify the correct file attachment.

*Note 1:* This script requires the imap extension for PHP.

*Note 2:* This script does not work with any form of multi factor authentication, e.g. OATH2.

*Note 3:* This script will check for the number of unopened emails.
If there is not exactly one unopened email, this script aborts without retrieving a CSV data file.


#### `json_remote.php`
This script attempts to open an SSH connection to another server, locate and read a JSON data file of enrolled students, and write the data as a CSV to the location specified by `'CSV_FILE'`.

***IMPORTANT:*** This script is highly specialized, and is currently obsolete and unsupported.  This script is provided "as is" as a sample for another developer to adapt for their University's needs.  Use at your own risk.

**config.php**
*define* |
`'JSON_REMOTE_HOSTNAME'` | FQDN of the host server to access for the JSON file.
`'JSON_REMOTE_PORT'` | Network port for SSH access.  Usually 22.
`'JSON_REMOTE_FINGERPRINT`' | This must match the SSH fingerprint (SHA1 hash in hexadecimal) of the host server.
`'JSON_REMOTE_USERNAME'` | Remote SSH account name.
`'JSON_REMOTE_PASSWORD'` | Password for SSH account name.
`'JSON_REMOTE_PATH'` | path on host server to read the JSON data file.

The following JSON elements, per student, are required so they match the CSV data columns as defined in `config.php`.

JSON | `config.php`
`'first_name'` | `'COLUMN_FIRSTNAME'`
`'last_name'` | `'COLUMN_LASTNAME'`
`'email'` | `'COLUMN_EMAIL'`
`'rcs'` | `'COLUMN_USER_ID'`
`'rin'` | `'COLUMN_NUMERIC_ID'`
`'course_prefix'` | `'COLUMN_COURSE_PREFIX'`
`'course_number'` | `'COLUMN_COURSE_NUMBER'`
`'course_section'` | `'COLUMN_SECTION'`

*Note 1:* This script requires the ssh2 extension for PHP.

*Note 2:* This script does not support using cryptographic keypairs for authentication.


### 8. SSAF Startup Script

`ssaf.sh` is provided as a convenience to run the auto feed with data sourcing.
This is intended to be run as a cron job.

#### Usage

```bash
$ ./ssaf.sh (data_source) (term) [DB_auth]
```

***Command Line Argument*** |
data_source | `csv_local` \| `imap_remote` \| `json_remote`
              Which data sourcing script to run first: csv_local.php, imap_remote.php, or json_remote.php (required)
term | Term code to pass to submitty_student_auto_feed.php (required)
DB_auth | Database authentication string that overrides config.php [optional]


### 9. CRN Copymap

`crn_copymap.php` script is used to create a mapping for duplicating and maintaining enrollment of both course and section to another course and section.
The intent is to duplicate enrollment where the second course/sections are a related "practice" or "bootstrap" course of the first course/sections.

This tool will create a CSV file by the autofeed for duplicating enrollment records.
Copymap CSVs are tied to a specific term, so a new copymap CSV must be created every term.

*For example:* a data structures course is taught in C++, but there are no previous courses in the cirriculum taught with C++ as most of the cirriculum is taught with Python, Java, or C#, etc.
Therefore, an unofficial practice C++ course is provided for students as a purely optional, extra learning resource.
CRN Copymap is used to duplicate and maintain enrollment from data structures to the unofficial C++ practice course.

*Note:* Course enrollment duplication not only involves enrolled students, but also unenrolled students.
That is, following the above example, students who join data structures will also join C++ Practice, and students who *leave* data structures will also leave C++ Practice.


#### Config.php

The following constant is defined in `config.php`:
```php
define('CRN_COPYMAP_FILE', "path/to/csv");
```
Change `path/to/csv` to the location that the copymap CSV will be written.
Although not mandatory, this can be the same location as [`CSV_FILE`](#csv-file-access)

Alternatively, set this to `null` to disable CRN Copymap, in which the registration feed script will ignore any existing copymap CSV files.


#### Usage
```bash
$ crn_copymap.php [-h | --help | help] (term) (course-a) (sections) (course-b) (sections)
```
Create a mapping of course and sections that are to be duplicated.
This is useful if a professor wishes to have course enrollment, by section, duplicated to another course.
Particularly when the duplicated course has no enrollment data provided by either the registrar or IT.

***Command Line Arguments*** |
`-h`, `--help`, `help` | Show help message.
term | Current term code.  Required.
course-a | Original course.  Required.
sections | Section list or "all" of course-a.  Required.
course-b | Course being copied to.  Required.
sections | Section list of course-b.  This can be ommited when course-a sections is "all".  Otherwise, required.

#### Examples

```bash
$ ./crn_copymap.php f23 csci1000 all csci2000
```
All sections of CSCI-1000 of Fall 2023 are duplicated as the same sections in CSCI-2000.


```bash
$ ./crn_copymap.php f23 csci1000 1-5 csci2000 1-5
```
Sections 1—5 of CSCI-1000 of Fall 2023 are duplicated to CSCI-2000 sections 1—5, respectively.


```bash
$ ./crn_copymap.php f23 csci1000 1,3,5-9 csci2000 2,4,6-10
```
This duplicates CSCI-1000 of Fall 2023 sections 1, 3, and 5—9 to CSCI-2000 sections 2, 4, and 6—10 respectively.

To be certain:
* CSCI-1000 section 1 is duplicated to CSCI-2000 section 2
* CSCI-1000 section 3 is duplicated to CSCI-2000 section 4
* CSCI-1000 section 5 is duplicated to CSCI-2000 section 6
* CSCI-1000 section 6 is duplicated to CSCI-2000 section 7
* CSCI-1000 section 7 is duplicated to CSCI-2000 section 8
* CSCI-1000 section 8 is duplicated to CSCI-2000 section 9
* CSCI-1000 section 9 is duplicated to CSCI-2000 section 10


### 10. Add/Drop Reports
`add_drop_report.php` is an optional script for providing a report on any growth or reduction of student enrollment in all Submitty courses.
The report is written to local disk and can optionally be emailed.

#### Usage
```bash
$ ./add_drop_report.php (run) (term_code)
```

***Command Line Arguments*** |
run | `1`, before the Auto Feed script is used so to cache current enrollment totals.
      `2`, after the Auto Feed script is used, so comparisons can be calculated with cached totals.
term_code | Current term's code.  e.g. `s24` might be Spring 2024.

#### Example
```bash
$ ./add_drop_report.php 1 s24
```
This is run *before* the auto feed script.  A temporary cache file of student enrollments for term Spring 2024 is created.

```bash
$ ./add_drop_report.php 2 s24
```
This is run *after* the auto feed script.  The temporary cache file is compared with new enrollment totals and a report is created.

#### Config.php

The following constants are defined in `config.php`:
Define | Use
`'ADD_DROP_TO_EMAIL'` | Email address that reports are sent to.  Set this to `null` to disable emailing of reports.
`'ADD_DROP_FROM_EMAIL'` | Email address marked as the sender of the report.
`'ADD_DROP_FILES_PATH'` | Base folder that contains all written reports and temporary enrollment cache data.  Reports are further sorted into sub folders by semester code.


### 11. PAM Authentication and `accounts.php`
The script `accounts.php` (found in `SysadminTools/sample_bin`) will automate the creation of local accounts used with PAM authentication.

*This script is not needed when using database authentication.*

`accounts.php` must exist on the same server as Submitty, and it needs to be run as `root`.
This script is intended to read user entries from Submitty's "master" database to generate any missing local accounts needed for PAM authentication.

Run `accounts.php -h` to see extended help and argument list.

It is recommended that this script is run every hour as a cron job.
That way, should an instructor manually add a student to their course, the student's access to Submitty will be available "within an hour".
