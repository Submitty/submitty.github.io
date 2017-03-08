---
title: Local Test Suite (e2e Tests)
category: Developer
order: 9
---

General Instructions
====================

The _End-to-End Testing_ (e2e) suite is written in Python and tests the pages via loading a webpage within the browser and testing the HTML that is shown. This does not touch the PHP (or C++) code directly, but rather pretends like it's an actual user going through the system.

The dependencies for this are [nose2](https://pypi.python.org/pypi/nose2), [unittest2](https://pypi.python.org/pypi/unittest2), and [selenium](https://pypi.python.org/pypi/selenium). These can be installed by doing:
```
pip install nose2
pip install unittest2
pip install selenium
```

Additionally, it does run as a Chrome browser so does require an up-to-date Chrome to be installed locally. (This can be modified to use a different browser stack by modifying the `setUpClass` method in `tests/e2e/base_testcase.py`)

Running the test suite would be: `nose2 --start-dir tests/e2e`  
Running an individual test file would be: `nose2 --start-dir tests e2e.*`  
where * is the name of the test file to run. An example would be `nose2 --start-dir tests e2e.test_access`.