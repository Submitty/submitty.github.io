---
title: C++
category: Developer > Software and System Design > Coding Style Guide
redirect_from:
  - /developer/coding_style_guide/c++
---

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
