---
title: Testing
---

To verify expected behavior of Submitty, we use
various test suites, broken up per component. Currently, much of the testing is quite
sparse, and we encourage all developers to add relevant tests with their PRs. Much as Submitty
is made up of many composite pieces, each piece has a different test suite. However,
these tests can be roughly broken down into the following high-level types:

* [Static Analysis / Linting](linting_static_analysis)
* [Python Unit Tests](python_unit_tests)
* [PHP Unit Tests](php_unit_tests)
*  Site End-to-End (E2E) tests
	- [Cypress test suite](cypress)
* [Autograding Integration Tests](autograding_integration_tests)
* [Rainbow Grades Functional Tests](rainbow_grades_tests)

To illustrate the difference between unit testing, integration testing, and end-to-end tests
(also often called functional tests) and what they are for, we recommend the following articles:

* <https://codeahoy.com/2016/07/05/unit-integration-and-end-to-end-tests-finding-the-right-balance/>
* <https://www.softwaretestinghelp.com/the-difference-between-unit-integration-and-functional-testing/>
* <https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/>

These tests are run as part of a _Continuous Integration_ process on
[GitHub actions](https://github.com/Submitty/Submitty/actions). Each of
the tests can also be run on your local computer -- developers are
encouraged to run and debug the relevant tests on their own computer.
Please see the [page](/developer/testing/github_actions) on it for more
discussion on how it functions.

## Initial Set Up

We encourage people to run most of the tests using their local
machine, not within the Vagrant VM. This is especially true of the E2E
tests which require a web browser, and for debugging purposes, is
useful to not run it *headless*. To set it up, you'll need to install a
handful of dependencies:

* Python3
* Pip
* PHP (and some extensions)
* Composer
* NodeJS

Installing these should be straight forward on macOS (using
[Homebrew](https://brew.sh)) and Linux distros using its package
manager.  We provide the instructions for Ubuntu, and we expect users
of other distros should be able to adapt it to their needs.

Windows users are encouraged to install [Windows Subsystem for Linux
(WSL)](https://ubuntu.com/wsl) and then follow the Ubuntu
instructions. However, for E2E tests it is better to run them directly
on Windows. Make sure that you have [Python installed](https://www.python.org/downloads/)
to be able to install dependencies using pip.

For macOS:

```bash
brew install python php composer
pecl install xdebug
```

For Ubuntu:

```bash
sudo apt-get install php-cli php-mbstring php-xml php-xdebug php-curl php-zip php-sqlite3 composer
sudo apt-get install python3 python3-pip
```

Now, to install dependencies for Python on either OS:

```bash
pip3 install PyYAML
pip3 install python-dateutil
pip3 install tzlocal
pip3 install "sqlalchemy<1.4.0"
pip3 install jsonschema
pip3 install jsonref
pip3 install docker
pip3 install paramiko
pip3 install psycopg2-binary
pip3 install coverage
pip3 install flake8
pip3 install websocket
pip3 install websocket-client
```

To install the PHP and JS developer dependencies:

```bash
cd site
composer install
npm install
```

__Note:__ Normally one can run Composer installed packages by direct execution,
e.g. `vendor/bin/phpunit`.  However, due to the integration of
Submitty installer and Vagrant, packages in the vendor directory will
lose their execution bit, so you will need to specify `php` before the
thing you are attempting to execute (e.g. `php vendor/bin/phpunit`).

Please use the sidebar menu for additional documentation for each type of test.
