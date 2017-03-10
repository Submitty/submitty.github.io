---
title: PHP Unit Tests
category: Developer
order: 8
---

These are general details and instructions for testing the PHP code
(both Unit and End-to-End). OS specific instructions are below.

The primary method of testing for the PHP code is _Unit Testing_ (we
also do End-to-End testing, but that is covered in a different
section). These tests require that you have
[PHPUnit](https://phpunit.de/) on your system.

You can either get the .phar files for it or much more easily use
[Composer](https://getcomposer.org/) to handle this for you. From the
root of the repository, simply run:

```
composer install
```

This will download PHPUnit and PHPUnit-Selenium to the local machine
and make it available via the vendor directory.

Note: If you're using PHP 5.5, you'll first need to run the command

```
cp composer_55.json composer.json
```

From there, to run the unit test suite, you can run from the root:

```
vendor/bin/phpunit --configuration tests/phpunit.xml
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