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
from the above site or use your OS' package manager. For convinence, we list
some options for installation on Mac, Linux, and Windows below. For any step
that lists `<CHROMEDRIVER_VERSION>`, you will have to determine the appropriate
version using the [Version Selection](https://sites.google.com/a/chromium.org/chromedriver/downloads/version-selection)
page from the above link.

For Mac, using homebrew:
```
brew cask install chromedriver
```

For Linux, use:
```
wget https://chromedriver.storage.googleapis.com/<CHROMEDRIVER_VERSION>/chromedriver_linux64.zip && \
unzip chromedriver_linux64.zip && \
sudo mv chromedriver /usr/local/bin/chromedriver && \
sudo chown root:root /usr/local/bin/chromedriver && \
sudo chmod +x /usr/local/bin/chromedriver
```

For Windows, download the appropriate version and place it on your
[PATH](https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/).

_NOTE_: You will need to make sure to keep chromedriver up-to-date as Chrome auto-updates itself.

---

Because some tests utilize autograding, you must ensure the autograding shippers and workers are running before testing.
To start the autograding systems run:

```
sudo systemctl start submitty_autograding_shipper
sudo systemctl start submitty_autograding_worker
bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/install_submitty.sh
```

See also: [Automated Grading](automated_grading)

---

To run the test suite, navigate to `../Submitty/tests` and run:

```
python3 -m unittest
```

**Note:** If you are using a non-standard installation of Submitty, you must
edit `tests/e2e/base_testcase.py` and change the constant `TEST_URL`
to reflect your installation's IP address.

To run an individual file or testcase, run:
```
python3 -m unittest e2e.<module_name>.<ClassName>
python3 -m unittest e2e.<module_name>.<ClassName>.<function_name>
```

An example of running the login tests:
```
python3 -m unittest e2e.test_login.TestLogin
python3 -m unittest e2e.test_login.TestLogin.test_login
```

To disable headless mode and view the browser while running a test,
edit `tests/e2e/base_testcase.py` and comment out the line:
```
self.options.add_argument('--headless')
```

To slow down the tests for debugging, you can pause execution until
you press Enter in the terminal. To do this, add the following line into your test:
```
self.wait_user_input()
```

Furthermore, Selenium's `wait.until` is another way to slow down tests.
It waits until an element loads or times out after a maximum time. This is
useful for both debugging and writing tests. For example, the following snippet
waits until an `h1` element containing "My Heading" appears and fails after
10 secs if nothing shows up.

```
 wait = WebDriverWait(self.browser, 10)
        wait.until(
            EC.presence_of_element_located(
                (By.XPATH, "//h1[contains(text(),'My Heading')]")))
```
