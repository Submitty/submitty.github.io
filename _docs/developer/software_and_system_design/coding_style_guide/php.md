---
title: PHP
category: Developer > Software and System Design > Coding Style Guide
redirect_from:
  - /developer/coding_style_guide/php
---

__Minimum Version__: 7.4

For PHP, we use a foundation of [PSR-1](https://www.php-fig.org/psr/psr-1/) and
[PSR-12](https://www.php-fig.org/psr/psr-12/), with some slight modifications on
code structure and naming conventions. These customizations are shown below.

### Linting Code

We use a custom standard for the [phpcs](https://github.com/squizlabs/PHP_CodeSniffer) tool,
available at [Submitty/submitty-php-codesniffer](https://github.com/Submitty/submitty-php-codesniffer).
To set up the tool to use it, all you need to do is run `composer install` from within the `site/` directory,
which handles installing the dependencies and setting up the
[phpcs install paths](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Configuration-Options#setting-the-installed-standard-paths).
To run `phpcs`, you can use the following command:

```bash
php vendor/bin/phpcs [path/to/file/or/directory]
```

where if you leave off the path, it will analyze all files and directories for Submitty.
Additionally, you can apply the automatic fixer to your code by running:

```bash
php vendor/bin/phpcbf [path/to/file/or/directory]
```

### Classes, Methods

* The opening brace for the class MUST go on the same line as the class name; the closing brace
  for the class MUST go on the next line after the body.
* The opening brace for a method MUST have one space between it and the closing parenthesis.
* The closing brace for a method MUST go on the next line following the body.

```php
class Test {
    public function foo() {
        // code
    }

    public function method(
        $long_arg_name_1,
        $another_long_name,
        $third_long_name
    ) {
        // code
    }
}
```

### Control Structures

* There MUST be one space after the control structure keyword
* There MUST NOT be a space after the opening parenthesis
* There MUST NOT be a space before the closing parenthesis
* There MUST be one space between the closing parenthesis and the opening brace
* The structure body MUST be indented once
* The closing brace MUST be on the next line after the body
* There MUST be one newline between closing brace and the next control structure keyword except for do-while

```php
if ($foo) {
    // code
}
elseif ($bar) {
    // code
}
else {
    // code
}
```

```php
do {
    // code
} while ($foo);
```

### Naming Conventions

* Classes should use `StudlyCaps`
* Functions should use `camelCase`
* Constants should be `UPPERCASE`
* Variables and properties should use `snake_case`

### Type Declarations

Wherever possible, you should use [type declarations](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration)
in your code. This helps our static analysis tool function more accurately, as well as potentially allow PHP to catch when functions are called
with the wrong types of parameters. This hepls us alleviate potentially trickier to catch runtime errors on invalid types for arguments.
Whenever possible, you should declare the type inline with the code:

```php
function foo(string $bar, ?int $baz): string;
```

In some cases, such as for arrays of a type or mixed values, this is not possible. In these cases,
you should write the type out in the docstring using [phpDocumentator](https://docs.phpdoc.org/latest/guides/types.html)
conventions. However, if possible, still attempt to put a type (such as `array`) inline in the code. However, this should only be done as absolutely
necessary, with a preference to inline type hinting so that it can take advantage of PHP's builtin type checking as well during runtime (especially
in files using strict typing (see below). An example using array of one type of object and union types:

```php
/**
 * @param string[] $bar
 * @param A|B $baz
 */
function foo(array $bar, $baz): void;
```

For new classes, or classes that are well tested, they should also have a
[strict typing](https://www.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration.strict) declaration at the top. This prevents
PHP from attempting to silently coerce parameters of the wrong type to the right type (e.g. coercing an integer to a string for example), but instead throw
an error instead. To do this, place at the top of the file:

```php
<?php

declare(script_types=1);
```
