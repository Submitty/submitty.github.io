---
title: Submitty Student Auto Feed
category: System Administrator
order: 7
---

_Submitty Student Auto Feed is an optional command-line PHP script that can automatically
fill or update classlists on a cron schedule._

### Requirements
* PHP 5.4 or higher with ```pgsql``` and ```iconv``` extensions.
  * Although not a necessity, the auto feed script can operate on the same server that Submitty is running on.  In which case, you may need to install the ```iconv``` extension.
  * The ```ssh2``` extension is also required if the data feed CSV resides on a different server than the script is running from (this also includes running the script on the Submitty server).
* A regularly updated CSV data feed of student enrollment.
  * Contact your university's registrar and/or data warehouse for assistance.
* Submitty Student Auto Feed is intended to be managed by a systems administrator or similar IT professional.

### Files
Latest version of the auto feed script and supplmental files will be checked into the ```master``` branch in [```Submitty/Docs/student_auto_feed/```](https://github.com/Submitty/Submitty/tree/master/Docs/student_auto_feed)
* ```submitty_student_auto_feed.php``` -- Executable PHP script to read student registration CSV and update Submitty classlist enrollment.
* ```config.php``` -- **REQUIRED** config file for ```submitty_student_auto_feed.php```
* ```accounts.php``` -- **IMPORTANT** for Submitty servers utilizing PAM authentication.

### Deprecated Files
These files remain in the repository but have not been updated.  They are incompatible with the latest auto feed script and database schema and it is **highly _inadvisable_** to use them.
* ```driver.php```
* ```restore_backup.php```
* ```submitty_users_data_backup.php```

### Course Database Backups
Please use ```db_backup.py``` (located in [```Submitty/Docs/nightly_db_backup/```](https://github.com/Submitty/Submitty/tree/master/Docs/nightly_db_backup)) on a cron schedule to create nightly backups of course databases.

### Before Installing Auto Feed Script
It is important that you can receive a regularly updated data feed of student enrollment.
The data should be tabulated (like a spreadsheet), but must be written as a CSV file.
You will likely need the cooperation from your university's data warehouse and/or registrar.
The CSV file will need to be delivered or provided somewhere that the auto feed script can access.

**IMPORTANT** -- CSV files are traditionally human readable raw text files and the CSVs required by the auto feed script will contain
student enrollment data protected by FERPA ([U.S. federal statute 20 U.S.C. § 1232g](https://www.law.cornell.edu/uscode/text/20/1232g)).
Please take appropriate information protection measures.
**_SUBMITTY IS NOT RESPONSIBLE FOR YOUR COURSE'S, DEPARTMENT'S, OR UNIVERSITY'S INFORMATION CONTROL POLICIES OR ACTIVITIES._**

### Install On Ubuntu 16.04
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
3. Create a folder on the server to run the scripts and copy ```submitty_student_auto_feed.php``` and ```config.php``` from the repository to your new folder.
4. ```submitty_student_auto_feed.php``` is intended to be executable.  Set owner permission ```+x```.
   * ```config.php``` is _not_ intended to be executable.
5. It is highly advisable for sysadmins to set very restrictive permissions to the auto feed script files.  However, ```root``` is technically _not_ required to run the auto feed.
