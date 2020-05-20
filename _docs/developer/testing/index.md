---
title: Testing
---

To verify expected behavior of Submitty, we use
various test suites, broken up per component. Currently, much of the testing is quite
sparse, and we encourage people to add tests if possible with their PRs. Much as Submitty
is made up of many composite pieces, each piece has a different test suite. However,
these tests can be roughly broken down into the following high-level types:

* Static Analysis / Linting,
* Python Unit Tests
* PHP Unit Tests
* Site End-to-End tests
* Autograding Integration Tests
* Rainbow Grades Functional Tests

To illustrate the difference between unit testing, integration testing, and end-to-end tests
(also often called functional tests) and what they are for, we recommend the following articles:

* <https://codeahoy.com/2016/07/05/unit-integration-and-end-to-end-tests-finding-the-right-balance/>
* <https://www.softwaretestinghelp.com/the-difference-between-unit-integration-and-functional-testing/>
* <https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/>

Developers are encouraged to run these tests locally.  These tests are run as part of
a _Continuous Integration_ process on [Travis-CI](https://travis-ci.com/github/Submitty/Submitty). Each of the
tests run there are exactly the same as running them on your local computer, and so failures there should be reflected
locally, and vice versa. Please see the [page](/developer/testing/travis_ci) on it for more discussion on how it functions.

## Getting Set Up

We encourage people to try and run things as much as possible on their local machine, not
within the Vagrant VM. This is especially true of the E2E tests which require a web browser,
and for debugging purposes, is useful to run it not headless. To set it up, it requires
installing a handful of dependencies:

* Python3
* Pip
* PHP (and some extensions)
* Composer

Installing these should be straight forward for people on macOS (using [homebrew](https://brew.sh))
and Linux distros using its package manager. We will give the instructions for Ubuntu, and we expect
users of other distros should be able to adapt it to their needs.

For macOS:
```
brew install python php composer
pecl install xdebug
```

For Ubuntu:
```
sudo apt-get install php-cli php-mbstring php-xml php-xdebug php-curl php-zip php-sqlite
sudo apt-get install python3 python3-pip
```

Now, to install dependencies for Python on either OS:
```
pip3 install PyYAML
pip3 install python-dateutil
pip3 install tzlocal
pip3 install sqlalchemy
pip3 install jsonschema
pip3 install jsonref
pip3 install docker
pip3 install paramiko
pip3 install psycopg2-binary
pip3 install coverage
pip3 install --pre selenium
```

To install the PHP dependencies:
```
cd site
composer install
```

__Note:__, while it is usually able to run stuff under composer by just executing
` vendor/bin/foo` directly (e.g. `vendor/bin/phpunit`), because of how the Submitty
installer and Vagrant work, things under the vendor directory will lose their execution
bit, and so you will need to specify `php` before the thing you are attempting to execute
(e.g. `php vendor/bin/phpunit`).