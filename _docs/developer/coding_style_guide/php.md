---
title: PHP
category: Developer
order: 6
---

__Minimum Version__: 7.2

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