---
title: Linting / Static Analysis
category: Developer > Development Instructions > Continuous Integration Testing
---

To ensure the [Coding Standards](/developer/coding_style_guide) of Submitty, we use a mixture
of linting and static analysis for each specific programming language.
[Wikipedia](https://en.wikipedia.org/wiki/Lint_(software)) defines linting as
a "tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs."
Static analysis constructs an abstract syntax tree of the program and is able to validate
specific details such as the right number of types of parameters, functions return what they say they do, etc.

Be sure to start with the [Initial Set Up](/developer/testing/#initial-set-up) installation instructions.

## Python Linting

The Python code of Submitty is linted using [flake8](https://flake8.pycqa.org/en/latest/), 
[flake8-bugbear](https://github.com/PyCQA/flake8-bugbear), and [pylint](https://pylint.readthedocs.io/en/stable/). 
You can run the Python linter locally (on your host operating system) by running the following command from the root
level of Submitty source tree:

```bash
# from root level of Submitty repository using flake8
python3 -m flake8

# from root level of Submitty repository using pylint
python3 -m pylint --recursive=y .
```

Optionally, you can pass in a specific file or directory to only lint that file or directory, e.g.:

```bash
# from root level of Submitty repository...  to lint a specific file using flake:
python3 -m flake8 bin/generate_repos.py

# from root level of Submitty repository...  to lint a specific file using pylint:
python3 -m pylint bin/generate_repos.py
```

If you wish to automatically fix the basic linting problems, you can use [black formatter](https://github.com/psf/black):
```bash
# install black formatter
pip install git+https://github.com/psf/black

# formats all the files in that directory
black ./files/location/

# formats specified file
black ./location/file.py
```

See also: [Python Style Guide](/developer/coding_style_guide/python)

## PHP Linting

The PHP code of Submitty is linted using [phpcs](https://github.com/squizlabs/PHP_CodeSniffer).
The following instructions were tested for Windows:

1. First, you will need PHP installed on your host system first. See [Installing PHP](/developer/testing/install_php)*

2. Next, you will need [Composer](https://getcomposer.org/download/) installed on your host system as well.
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
php site/vendor/bin/phpstan analyze -c site/phpstan.neon

# or if in the site/ directory of the Submitty repository
php vendor/bin/phpstan analyze
```

Unlike flake8 and phpcs, a path or file _MUST_ be passed to phpstan.

phpstan maintains a list of known errors in the [phpstan-baseline.neon](https://github.com/Submitty/Submitty/blob/master/site/phpstan-baseline.neon) file.
If you fix one of these errors, you would need to regenerate this file which can be done by doing:

```
php vendor/bin/phpstan analyze app public/index.php socket/index.php --generate-baseline --memory-limit 2G
```
The argument `--memory_limit 2G` is necessary when phpstan will otherwise not have enough memory
to generate a new baseline. You can see how much memory phpstan has been using with the `-v` flag

# Submitty Test Script for PHP Linting

The `submitty_test` script is an alias for the `SUBMITTY_TEST.sh` script, similar to `submitty_install_site`. 
This script streamlines the process of PHP linting by performing the following steps:

1. Changes the directory to `GIT_CHECKOUT/Submitty/site`.
2. Installs Composer if not already installed (skips if Composer is already installed).
3. Executes the specified PHP linting command.
4. Returns to the original directory.

## Commands:

- `phpcs`: Runs PHP CodeSniffer.
- `phpstan`: Runs PHP static analysis.
- `php-lint`: Runs both PHP CodeSniffer and PHPStan.

## Additional Arguments:

The `submitty_test` script accepts additional arguments, such as `--memory_limit 2G`.

## Example Usage:

```
submitty_test php-lint --memory-limit 2G
```

## JavaScript Linting

The frontend JavaScript code Submitty uses is linted using [eslint](https://eslint.org/). As with the PHP linter, `submitty_test` can be used as an alias for the `SUBMITTY_TEST.sh` script.

```bash
submitty_test js-lint
```

Alternatively, you can run eslint on your host system or on vagrant by navigating into the `site/`
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

CSS is linted using [stylelint](https://stylelint.io/) in Submitty to enforce a consistent code style. As with the PHP linter, `submitty_test` can be used as an alias for the `SUBMITTY_TEST.sh` script.

```bash
submitty_test css-lint
```

Alternatively, you can run stylelint on your host system or on vagrant by navigating into the `site/`
directory and running:

```bash
npm run css-stylelint
```

Stylelint can fix many CSS problems automatically by running:

```bash
npm run css-stylelint:fix
```

See also: [CSS Style Guide](/developer/coding_style_guide/css)
