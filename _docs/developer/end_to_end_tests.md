---
title: End-to-End Tests
category: Developer
order: 9
---

The _End-to-End Testing_ (e2e) suite is written in Python and tests
the pages by loading a webpage within the browser and confirming the
expected HTML is displayed. This does not test the PHP (or C++) code
directly, but rather focuses on user navigation through the website.
It utilizes [selenium](https://www.seleniumhq.org/) and Chrome to
complete these tests.

The python depedencies can be installed by doing:
```
pip3 install selenium
```

This test suite runs within a Chrome browser so does require an
up-to-date local installation of Chrome. (This can be modified to use
a different browser stack by modifying the `setUpClass` method in
`tests/e2e/base_testcase.py`)

You'll need to install the
[ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/getting-started)
to allow selenium access to utilize Chrome. You can either download the binary
from the above site or use your OS' package manager, e.g. for Mac, use
homebrew:
```
brew cask install chromedriver
```

---

To run the test suite (while in the root folder):

```
python3 -m unittest discover -v --start-directory tests
```
(if in `tests/` directory, you can leave off the `--start-discovery tests` flag)
  
To run an individual file or testcase, navigate into the `tests/` directory
and then run:
```
python3 -m unittest e2e.<module_name>.<ClassName>
python3 -m unittest e2e.<module_name>.<ClassName>.<function_name>
```

An example of running the login tests:
```
python3 -m unittest e2e.test_login.TestLogin
python3 -m unittest e2e.test_login.TestLogin.test_login
```
