---
title: Linting / Static Analysis
---

To ensure the [Coding Standards](/developer/coding_style_guide) of Submitty, we use a mixture
of linting and static analysis for each specific programming language.
[Wikipedia](https://en.wikipedia.org/wiki/Lint_(software)) defines linting as
a "tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs."
Static analysis constructs an abstract syntax tree of the program and is able to validate
specific details such as the right number of types of parameters, functions return what they say they do, etc.

Be sure to start with the [Initial Set Up](/developer/testing/#initial-set-up) installation instructions.

## Python Linting

The Python code of Submitty is linted using [flake8](https://flake8.pycqa.org/en/latest/) and
[flake8-bugbear](https://github.com/PyCQA/flake8-bugbear). You can run the Python linter
locally (on your host operating system) by running the following command from the root
level of Submitty source tree:

```bash
# from root level of Submitty repository
python3 -m flake8
```

_NOTE: Our Travis CI testing currently [excludes a number of legacy source code files](https://github.com/Submitty/Submitty/blob/master/.flake8).
from Python linting, though there is effort to bring more and more of them under flake8._

Optionally, you can pass in a specific file or directory to only lint that file or directory, e.g.:

```bash
# from root level of Submitty repository...  to lint a specific file:
python3 -m flake8 bin/generate_repos.py
```

See also: [Python Style Guide](/developer/coding_style_guide/python)

## PHP Linting

The PHP code of Submitty is linted using [phpcs](https://github.com/squizlabs/PHP_CodeSniffer).
The following instructions were tested for Windows:

1. First, you will need PHP installed on your host system first. See [Installing PHP](/developer/testing/install_php)*

2. Next, you will need [Composer](https://getcomposer.org/doc/00-intro.md) installed on your host system as well.
	During this install, you will need to change settings in a php.ini file. Change the settings the prompt recommends.

3. Run ``composer global require slevomat/coding-standard`` and ``composer global require "squizlabs/php_codesniffer=*"`` inside your terminal.

4. ``cd`` to your ``site`` directory in your Submitty repository and run ``composer update``.

5. Now run ``php vendor/bin/phpcs --extensions=php ./app`` inside your ``site`` directory. You can change ``./app``
if you want to lint only a specific file.

See also: [PHP Style Guide](/developer/coding_style_guide/php)

## PHP Static Analysis

The PHP code of Submitty is statically analyzed by [phpstan](https://phpstan.org/user-guide/getting-started).
We recommend running it inside the VM as it is already installed on it. Simply ``vagrant ssh`` inside your Submitty
folder and navigate to
```
/usr/local/submitty/GIT_CHECKOUT/Submitty/site/
```
Then run:

```bash
# from root level of Submitty repository
php site/vendor/bin/phpstan analyze -c site/phpstan.neon site/app site/public/index.php site/socket/index.php

# or if in the site/ directory of the Submitty repository
php vendor/bin/phpstan analyze app public/index.php socket/index.php
```

Unlike flake8 and phpcs, a path or file _MUST_ be passed to phpstan.

phpstan maintains a list of known errors in the [phpstan-baseline.neon](https://github.com/Submitty/Submitty/blob/master/site/phpstan-baseline.neon) file.
If you fix one of these errors, you would need to regenerate this file which can be done by doing:

```
php vendor/bin/phpstan analyze app public/index.php socket/index.php --generate-baseline --memory-limit 2G
```
The argument `--memory_limit 2G` is necessary when phpstan will otherwise not have enough memory
to generate a new baseline. You can see how much memory phpstan has been using with the `-v` flag

## submitty_test script for PHP

There is a script for php static analysis and code sniffer
Just like submitty_install_site, you can use "submitty_test php-lint" inside your VM.

## JavaScript Linting

The frontend JavaScript code Submitty uses is linted using [eslint](https://eslint.org/).

You can run eslint on your host system or on vagrant by navigating into the `site/`
directory and running:

```bash
npm run eslint
```

To have eslint attempt to automatically fix any detected problems:

```bash
npm run eslint:fix
```

If you wish to lint or fix a specific file, you will need to run the eslint executable directly,
by doing:

```bash
node_modules/.bin/eslint [--fix] <file>
```

See also: [JavaScript Style Guide](/developer/coding_style_guide/javascript)

## CSS Linting

CSS is linted using [stylelint](https://stylelint.io/) in Submitty to enforce a consistent code style.

You can run stylelint on your host system or on vagrant by navigating into the `site/`
directory and running:

```bash
npm run css-stylelint
```

Stylelint can fix many CSS problems automatically by running:

```bash
npm run css-stylelint:fix
```

See also: [CSS Style Guide](/developer/coding_style_guide/css)
