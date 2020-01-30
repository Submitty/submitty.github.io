---
title: Models
category: Developer
---

The model handles containing the data for the application, performing data validation, and
the rules / logic of the application. It receives the raw data from the controller, and
then maps that into a class. A model is then made up of a number of properties, with
getters and setters, and other various functions.

Each model in Submitty is derived off the `AbstractModel` class which provides
scaffolding for creating getters and setters for class properties. To take advantage
of this, a property must use one of the following annotation tags:

1. `@prop` (will create both a setter and getter)
1. `@prop-read` (will only create a getter)
1. `@prop-write` (will only create a setter)

As part of the setter, automatic type-casting will happen based on the type
information passed on the `@var` annotation tag for basic types (string, int, etc.).
