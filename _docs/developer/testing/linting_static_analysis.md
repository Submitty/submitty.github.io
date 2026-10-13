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

The Python code of Submitty is linted using [ruff](https://docs.astral.sh/ruff/) with the command `ruff check`.
Assuming you have it installed, you can run Ruff locally (on your host machine) by running the following commands from the root of your Submitty repository:

```bash
ruff check
```

Optionally, you can pass in a specific file or directory to only lint that file or directory, e.g.:

```bash
ruff check /path/to/specific_file.py
```

If you wish to automatically fix the basic linting problems, you can use `ruff format`:
```bash
ruff format
ruff format --check
ruff format /path/to/specific_file.py
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
to generate a new baseline. You can see how much memory phpstan has been using with the `-v` flag.

---

# Submitty Test Script

The `submitty_test` script is an alias for the `SUBMITTY_TEST.sh` script, similar to `submitty_install_site`. 
This script streamlines the process of linting and testing by performing the following steps:

1. Builds a Docker image containing all the necessary linting/testing tools.
2. Runs the specified command inside a container, with the root of the Submitty repository mounted.

***NOTE:** The first time you run the script, the Docker container will take anywhere from 5 to 10 minutes to build.
Subsequent runs of the script (and therefore builds), using Docker's cached build layers, should only take seconds.*

## Running Locally (Outside the VM)

The script can also be run directly on your host machine instead of inside the Vagrant VM, provided you have Docker installed.
This is useful if you're frequently running `vagrant destroy` and `vagrant up`, since the Docker image and its cached build state
will then live on your host rather than inside the VM, and you won't need to wait for a long Docker build as often.

Run the script locally from the root of your cloned Submitty repository:
```bash
./.setup/SUBMITTY_TEST.sh <command> [options]
```

On Windows, you may need to install Bash, then run the script like this:
```bash
bash .setup/SUBMITTY_TEST.sh <command> [options]
```
***NOTE:** The instructions for installing Docker on your host machine can be found here: [Docker Docs/Get Started/Get Docker](https://docs.docker.com/get-started/get-docker/)*

## Commands:
- `phpcs`: Runs PHP CodeSniffer. [option: `--fix`]
- `phpstan`: Runs PHP static analysis. [option: `--memory-limit <#>G`, `--generate-baseline`]
- `php-lint`: Runs both PHP CodeSniffer and PHPStan (default options only).
- `twig-lint`: Lints all Twig templates. [option: `--format FORMAT`, `--show-deprecations`, `/path/to/file`]
- `php-unit`: Runs PHP unit tests. [option: `--filter testFunctionName`, `--debug`]
- `js-lint`: Runs eslint. [option: `--fix`]
- `js-unit`: Runs the jest test suite. [option: `--api`]
- `css-lint`: Runs stylelint. [option: `--fix`]
- `shell-lint`: Runs ShellCheck.
- `yaml-lint`: Runs yamllint.
- `py-lint`: Runs ruff check. [option: `--fix`, `/path/to/specific_file.py`]
- `py-format`: Runs ruff format. [option: `--fix`, `/path/to/specific_file.py`]
- `py-unit`: Runs all Python unit tests except `migration`.
- `py-unit-utils` / `py-unit-migration` / `py-unit-autograder` / `py-unit-daemon`: Runs the respective Python unit test suite. [option: module, class, function ...]

## Additional Arguments:

The `submitty_test` script accepts additional arguments, such as `--memory-limit 2G` or `--fix`. Seen above are the additional arguments usable for each command.

## PHP Linting:

```bash
submitty_test php-lint --memory-limit 2G
submitty_test phpcs --fix
submitty_test phpstan
```

## Twig Linting:
```bash
submitty_test twig-lint
submitty_test twig-lint --show-deprecations
submitty_test twig-lint app/templates/File.twig   # or any valid path to a (real) Twig file
```

## PHP Unit Testing:

```bash
submitty_test php-unit
submitty_test php-unit --filter testFunctionName
submitty_test php-unit --debug
```

See also: [PHP Unit Tests](/developer/testing/php_unit_tests)

## JavaScript Linting

The frontend JavaScript code Submitty uses is linted using [eslint](https://eslint.org/). As with other languages, `submitty_test` can be used as an alias for the `SUBMITTY_TEST.sh` script.

```bash
submitty_test js-lint
submitty_test js-lint --fix
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

## JavaScript Unit Testing

The frontend JavaScript code for Submitty has unit tests utilizing a [jest](https://jestjs.io/) test suite.

```bash
submitty_test js-unit
submitty_test js-unit --api
```

***NOTE:** For the -\-api option, Windows developers running commands on their host machine with CMD or Powershell may find that there are connection issues between the Docker container and the VM. In this case, instead running `submitty_test js-unit --api` in WSL or inside the VM should both still work.*

## CSS Linting

CSS is linted using [stylelint](https://stylelint.io/) in Submitty to enforce a consistent code style. As with other languages, `submitty_test` can be used as an alias for the `SUBMITTY_TEST.sh` script.

```bash
submitty_test css-lint
submitty_test css-lint --fix
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

## Shell Linting

Code in Submitty's `filename.sh` files is linted using [ShellCheck](https://github.com/koalaman/shellcheck/wiki). As with other languages, `submitty_test` can be used as an alias for the `SUBMITTY_TEST.sh` script.

```bash
submitty_test shell-lint
```

Alternatively, you can run ShellCheck on your host system or on vagrant by running:

```bash
python3 run_shellcheck.py
```

***NOTE:** To run the `run_shellcheck.py` wrapper script for shellcheck, you must be in the project root on your host system or in `/usr/local/submitty/GIT_CHECKOUT/Submitty` on the VM.*

## YAML Linting

YAML and YML are linted using [yamllint](https://yamllint.readthedocs.io/en/stable/). As with other languages, `submitty_test` can be used as an alias for the `SUBMITTY_TEST.sh` script.

```bash
submitty_test yaml-lint
```

Alternatively, you can run yamllint on your host system (yamllint is not installed on the VM) by running:

```bash
yamllint .
```

***NOTE:** For yamllint to see the .yamllint baseline file, you must be in the project root on your host system.*

## Python Linting

Python is linted using [ruff](https://docs.astral.sh/ruff/) with `ruff check`. As with other languages, `submitty_test` can be used as an alias for the `SUBMITTY_TEST.sh` script.

```bash
submitty_test py-lint
submitty_test py-lint --fix
submitty_test py-lint /path/to/specific_file.py
```

## Python Formatting

Python is formatted using [ruff](https://docs.astral.sh/ruff/) with `ruff format`. By default, this will be check only, eg `ruff format --check`. As with other languages, `submitty_test` can be used as an alias for the `SUBMITTY_TEST.sh` script.

```bash
submitty_test py-format
submitty_test py-format --fix
submitty_test py-format /path/to/specific_file.py
```

See also: [Python Style Guide](/developer/coding_style_guide/python)

## Python Unit Testing

```bash
submitty_test py-unit # runs all unit tests except migration
submitty_test py-unit-utils # option: module, class, function ...
submitty_test py-unit-migration # option: module, class, function ...
submitty_test py-unit-autograder # option: module, class, function ...
submitty_test py-unit-daemon # option: module, class, function ...
```
See also: [Python Unit Tests](/developer/testing/python_unit_tests)
