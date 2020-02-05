---
title: PHP Unit Tests
category: Developer
order: 8
---

These are general details and instructions for testing the PHP code
with PHPUnit. OS specific instructions are below.

The primary method of testing for the PHP code is _Unit Testing_, along
with [End to End Tests](end_to_end_tests)

These tests require that you have
[PHPUnit](https://phpunit.de/) on your system. PHP 7.2 or PHP 7.3 is 
required for the version of PHPUnit Submitty uses.

You can either get the .phar files for it or much more easily use
[Composer](https://getcomposer.org/) to handle this for you. From 
`Submitty/site` run:

```
composer install
```

This will download PHPUnit to the local machine
and make it available via the vendor directory.

If composer fails, you may be missing some required PHP modules.
php-cli, php-mbstring, and php-xml should be installed already. 
On Ubuntu/Debian these can be installed by:
```
sudo apt-get install php7.X-cli
sudo apt-get install php7.X-mbstring
sudo apt-get install php7.X-xml
```
Replace `php-7.X` with the version of PHP installed locally. For example
if you have PHP 7.2 then your command would like: `sudo apt-get install php7.2-cli`

You will also need to have [Xdebug](https://xdebug.org/) locally installed.
On Ubuntu/Debian you can install by:
```
sudo apt-get install php7.X-xdebug
``` 

From there, to run the unit test suite, you can run from `Submitty/site`:

```
vendor/bin/phpunit --configuration tests/phpunit.xml
```
If you see any errors running PHPUnit for the first time, you may be 
missing some packages. 

`curl_init()` errors can be solved by checking if `php-curl` is installed
`ZipArchive` errors can be solved by checking if `php-zip` is installed
`DataBase driver missing` can be solved by checking if `php-sqlite` is installed.
You can install all 3 on Ubuntu/Debian with for PHP 7.2, for other versions
change the `7.2` to the version of PHP you have locally installed:
```
sudo apt-get -y install -q php7.2-cli php-curl php-zip php7.2-mbstring php7.2-xml php7.2-xdebug php7.2-sqlite3
```
## Mac Installation

If using a Mac computer, the following commands can be run to set
everything up for you for testing (assuming you've installed
[Homebrew](https://brew.sh/):

```
brew tap homebrew/dupes
brew tap homebrew/versions
brew tap homebrew/homebrew-php
brew install php56
brew install composer
composer install
vendor/bin/phpunit --configuration tests/phpunit.xml
```
