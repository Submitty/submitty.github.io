---
title: End-to-End Tests
category: Developer
order: 9
---

The _End-to-End Testing_ (e2e) suite is written in Python and tests
the pages by loading a webpage within the browser and confirming the
expected HTML is displayed.  This does not test the PHP (or C++) code
directly, but rather focuses on user navigation through the website.

The dependencies for this are
[nose2](https://pypi.python.org/pypi/nose2),
[unittest2](https://pypi.python.org/pypi/unittest2), and
[selenium](https://pypi.python.org/pypi/selenium). These can be
installed by doing:

```
pip install nose2
pip install unittest2
pip install selenium
```

This test suite runs within a Chrome browser so does require an
up-to-date local installation of Chrome.  (This can be modified to use
a different browser stack by modifying the `setUpClass` method in
`tests/e2e/base_testcase.py`)

You'll need to install the
[ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/getting-started).
Using HomeBrew on a Mac:

```
brew cask install chromedriver
```

---

To run the test suite:

```
nose2 --start-dir tests/e2e
```
  
To run an individual file:

```
nose2 --start-dir tests e2e.*
```

where `*` is the name of the test file to run. For example:

```
nose2 --start-dir tests e2e.test_access
```
