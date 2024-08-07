---
title: Hidden Testcase Examples
category: Instructor > Autograding
redirect_from:
  - /instructor/assignment_configuration/hidden_testcase_examples
---

### Hide Testcase Details and Score, Never Release

In your `config.json`, add this line to the testcase:
```
"hidden": true
```

This is what it will look like for students:

#### Image goes here

#### Discussion of use

### Hide Testcase Details and Score, Release With Grades

In your `config.json`, add these lines to the testcase:
```
"hidden": true,
"release_hidden_details": true
```

This is what it will look like for students:

#### Image goes here

#### Discussion of use

### Hide Testcase Details, Show Score

In your `config.json`, **do not** change the `hidden` field.
Instead, add these lines to the testcase:
```
"show_actual": never,
"show_expected": never
```
Additionally, if working with image differences, add this line:
```
"show_difference_image": never
```

This is what it will look like for students:

#### Image goes here

#### Discussion of use