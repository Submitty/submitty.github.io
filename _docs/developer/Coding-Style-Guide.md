---
title: Coding Style Guide
category: Developer
order: 5
---

To maintain a concise and consistent code base, we'll be trying to adopt a coding style that is loose to allow easy contribution, but also tidy. To do this, we use a combination of style guides per language. Generally, you should be following the style guide for that language closely, though you can potentially deviate within reason. 

The main languages that undergo style critiques on code contributions are C++, Java, PHP, and Python. At some point in the future, for all languages, an appropriate linter (-Xlint for Java, Pylint for Python, etc.) may be added to ensure proper style on contributions.

### General Notes
Code should mainly be "self-commenting" in that keeping code paths simple (breaking complex interactions into functions) and then commenting the functions as necessary. At a minimum, all functions should have comments that give a short description of function usage, parameter details and return details (giving expected types if it's a dynamic language).

### PHP
For PHP, please follow the PSR's as laid out by the language developers, except for the cases listed below. Primarily of interest is [PSR-1](http://www.php-fig.org/psr/psr-1/) and [PSR-2](http://www.php-fig.org/psr/psr-2/), though [PSR-4](http://www.php-fig.org/psr/psr-4/) does lay down some useful info about Namespaces in conjunction with autoloading (which is necessary for any new classes added to the system to ensure proper autoloading). Additionally, PHP code should be written such that the [minimum version of PHP that is still supported](http://php.net/supported-versions.php) would work. 

#### if-elseif-else blocks
Each control function should begin on their own line and have one space between the conditional and the opening bracket
```php
<?php
if ($a) {
    // stuff
}
elseif ($b) {
    // stuff
}
else {
    // stuff
}
```

#### Variable Names
Variable names should be all lowercase and contain underscores to distinguish between words in the variable.  
```$this_is_variable ```

### Javascript
We will follow the jQuery style guide for styling our code. All the Javascript code will be minified when in production so readability is the main goal so things like liberal use of spacing and the like are preferred.

### Python
For Python, please follow the guidelines laid out in [PEP-8](https://www.python.org/dev/peps/pep-0008/). Your code should pass through [Pylint](http://www.pylint.org/) without issue. Additionally, all code written should be runnable by both Python 2 and Python 3. You can use this [cheatsheet](http://python-future.org/compatible_idioms.html) to aid in this endeavor.

### Java
For Java, please follow the guidelines laid out in the [Oracle Style Guide](http://www.oracle.com/technetwork/java/javase/documentation/codeconvtoc-136057.html).

### C++
To do this we've modified certain important aspects of the [Google Style Guide](https://google.github.io/styleguide/cppguide.html). This is a living document and will likely change as new issues arise.

When contributing to the homework server keep the following guidelines in mind.

### General Rules

* Code should never be more than 80 characters per line

### Header Files

* Header files should have #define guards
* Only fully define a function in the class prototype if the code for the function is one line.
* C++ code can be written below the class prototype in the header file

### Commenting

* Declaration comments describe use of the function; comments at the definition of a function describe its operation.
* Non-function/non-class comments that describe some functionality of a block of code should be less than 60 characters

### Naming

#### Class Names

Type or class names should begin with a capital letter and have every word after begin with a capital letter (camel casing).

```class MyClassName {...}```

#### Function Names

All functions should be camel cased with the first letter being lowercase.

```void getJesseSushi();```

#### Variable Names

All variables should be lower case with underscores

```int cats_in_house = 0;```