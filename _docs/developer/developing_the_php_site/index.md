---
title: Developing the PHP Site
category: Developer
---

The website component of Submitty, where submission, TA grading,
etc. happens is written in PHP following the Model-View-Controller
design pattern.  This paradigm allows for organized modular
development, unit testing, and integration of the parts.


* [Models](model) hold data, which is often loaded from the
database. For example, a hypothetical `UserModel` would hold
information about a user, like their name or favorite color.

* [Views](view) render visual information. In this sample example, the
`UserView` would house functions which involve displaying information
about a user.

* Finally, [Controllers](controller) perform logic. For example, if
you want to load the corresponding `See User Details` page, you might
call the function `userDetailsPage` in the `UserController`.
