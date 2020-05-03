---
title: Linting / Static Analysis
---

To help ensure the [Coding Standards](/developer/coding_style_guide) of Submitty, we use a mixture
of linting and static analysis. A linter is per [wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
is "tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs."
Through the linter, we ensure a consistent coding style as you go from one file to the next within a given language,
regardless of portion of the code. Static Analysis, similar to a linter, analyzes the source code, but in this
case constructs abstract syntax trees to validate behavior of the code such as using the right number of types
of parameters, functions return what they say they do, etc.

## Python Linting

The Python code of Submitty is linted using [flake8](https://flake8.pycqa.org/en/latest/) and 
[flake8-bugbear](https://github.com/PyCQA/flake8-bugbear). You can run it at the root level of
Submitty to test all Python files by just doing:

```bash
flake8
```

Optionally, you can pass in a specific file or directory if you want to check just that file or
directory instead of checking all files. Currently, there is a number of files that are not
currently linted due to legacy age, though there is effort to bring more and more of them under
flake8. You can see the full list of ignored files [here](https://github.com/Submitty/Submitty/blob/master/.flake8).

You can view more details about the Python Style Guide [here](/developer/coding_style_guide/python).

## PHP Linting

The PHP code of Submitty is  linted using [phpcs](https://github.com/squizlabs/PHP_CodeSniffer). This
can be run by doing:

```bash
# at root level of repository
php site/vendor/bin/phpcs --standard=site/tests/ruleset.xml

# or if in the /site/ directory
php vendor/bin/phpcs --standard=tests/ruleset.xml
```

Similar to flake8, you can pass a specific file or directory to the command to run phpcs over just that
file or directory.

You can view more details about the PHP Style Guide [here](/developer/coding_style_guide/php).

## PHP Static Analysis

The PHP code of Submitty is statically analyzed by [phpstan](https://phpstan.org/user-guide/getting-started).
To run it, you can do the following:

```bash
# at root level of repository
php site/vendor/bin/phpstan analyze -c site/phpstan.neon site/app

# or if in the /site/ directory
php vendor/bin/phpstan analyze app
```

Unlike flake8 and phpcs, a path or file _MUST_ be passed to phpstan.