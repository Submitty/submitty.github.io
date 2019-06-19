---
title: PHP
category: Developer
order: 6
---

__Minimum Version__: 7.2

For PHP, we use a foundation of [PSR-1](https://www.php-fig.org/psr/psr-1/)
and [PSR-2](https://www.php-fig.org/psr/psr-2/) and then customize from
there. These customizations are highlighted below:

### Linting Code

We use a custom standard for the [phpcs](https://github.com/squizlabs/PHP_CodeSniffer) tool,
available at [Submitty/submitty-php-codesniffer](https://github.com/Submitty/submitty-php-codesniffer).
You can run this against your code by running it (assuming in the `site/` directory):
```
vendor/bin/phpcs --standard=Submitty path/to/dir/or/file.php
```

### Classes, Methods

* The opening brace for the class MUST go on the same line as the class name; the closing brace
  for the class MUST go on the next line after the body.
* The opening brace for a method MUST have one space between it and the closing parenthesis.
* The closing brace for a method MUST go on the next line following the body.

```
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

```
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

```
do {
    // code
} while ($foo);
```


### Naming Conventions

* Classes should use `StudlyCaps`
* Functions should use `camelCase`
* Constants should be `UPPERCASE`
* Variables and properties should use `snake_case`
