---
title: Linting / Static Analysis
---

To ensure the [Coding Standards](/developer/coding_style_guide) of Submitty, we use a mixture
of linting and static analysis for each specific programming language.
A linter is per [Wikipedia](https://en.wikipedia.org/wiki/Lint_(software))
is a "tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs."
Static analysis constructs an abstract syntax tree of the program and is able to validate
specific details such as the right number of types of parameters, functions return what they say they do, etc.

## Python Linting

The Python code of Submitty is linted using [flake8](https://flake8.pycqa.org/en/latest/) and 
[flake8-bugbear](https://github.com/PyCQA/flake8-bugbear). You can run the Python linter locally by running the following command from the root level of
Submitty source tree:

```bash
python3 -m flake8
```

Optionally, you can pass in a specific file or directory to only lint that file or directory.
Currently, we [exclude a number of legacy source code files](https://github.com/Submitty/Submitty/blob/master/.flake8).
from Python linting, 
though there is effort to bring more and more of them under flake8.

See also: [Python Style Guide](/developer/coding_style_guide/python)


## PHP Linting

The PHP code of Submitty is  linted using [phpcs](https://github.com/squizlabs/PHP_CodeSniffer). You can run the PHP Linter locally:

```bash
# at root level of repository
php site/vendor/bin/phpcs --standard=site/tests/ruleset.xml

# or if in the /site/ directory
php vendor/bin/phpcs --standard=tests/ruleset.xml
```

Similarly, you can pass a specific file or directory to `phpcs`.

See also: [PHP Style Guide](/developer/coding_style_guide/php)


## PHP Static Analysis

The PHP code of Submitty is statically analyzed by [phpstan](https://phpstan.org/user-guide/getting-started).
To run it locally, you can do the following:

```bash
# at root level of repository
php site/vendor/bin/phpstan analyze -c site/phpstan.neon site/app

# or if in the /site/ directory
php vendor/bin/phpstan analyze app
```

Unlike flake8 and phpcs, a path or file _MUST_ be passed to phpstan.
