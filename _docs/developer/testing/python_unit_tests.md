---
title: Python Unit Tests
---

The following Python modules of Submitty are unit tested:

* Migrator (under `migrations/` folder)
* Autograding (under `autograding/` folder)
* python_submitty_utils (under `python_submitty_utils/` folder)

### Running Python Unit Tests

To locally run the Python unit tets, you need to `cd` into their directory and then use the
[unittest](https://docs.python.org/3/library/unittest.html) module to
run them.  To run all the tests for a particular module:

```bash
python3 -m unittest discover
```

To gather code coverage of the unit tests, run:

```bash
coverage -m unittest discover
```

For example, to test the Migrator module:

```bash
cd migrator
python3 -m unittest discover 
# or
coverage -m unittest discover
```

To test a portion of a module, pass in the module name (filename), class name, and then
function name depending on how specific you wish to go. For example, for the migrator:

```bash
# run whole test module
python3 -m unittest tests.test_cli
# run one test function
python3 -m unittest tests.test_cli.TestCli.test_no_args 
```

### Writing Python Unit Tests

The [unittest](https://docs.python.org/3/library/unittest.html) documentation 
includes good examples and general information for writing tests.

Getting started, the structure of the unit tests is such that the python module lives under a source directory,
and the tests are under the `tests/` directory. There should be a one-to-one correspondence between test file
and source file. For example, for migrator, there's `migrator/cli.py` and `tests/test_cli.py`. For particularly
complex modules, it may be beneficial to break up the tests for that module into separate files focusing on one
aspect. However, this is an exception to the norm, and for most things, the one-to-one design works well.

For actually writing a test, we start with a [basic example](https://docs.python.org/3/library/unittest.html#basic-example):

```python
import unittest

class TestStringMethods(unittest.TestCase):
    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

    def test_isupper(self):
        self.assertTrue('FOO'.isupper())
        self.assertFalse('Foo'.isupper())

    def test_split(self):
        s = 'hello world'
        self.assertEqual(s.split(), ['hello', 'world'])
        # check that s.split fails when the separator is not a string
        with self.assertRaises(TypeError):
            s.split(2)
```

Here, we see that to create a `unittest` module, we import it, create a class that extends `unittest.TestCase` and then every
method under that class is prefixed with `test_`. With each function, there is a series of 
[assert methods](https://docs.python.org/3/library/unittest.html#assert-methods) that can be used to verify behavior.

### Python Unit Test Fixtures

While most unit tests can be largely stateless, there may be times you wish to have common initialization for a particular
test module. This is called a "test fixture", which involve some preparation for running a test, and then the cleanup afterwards.
An example of where this might be useful is if each test generates a file, you could have a test fixture to create a new random
directory for that file to go into, and then a test fixture to delete that folder after the test runs. `unittest` uses the
functions `setUp` and `tearDown` to represent that:

```python
import os
import shutil
import unittest

class TestModule(unittest.TestCase):
    def setUp(self):
        self.directory = os.makedirs('test')
    
    def tearDown(self):
        shutil.rmtree('test')
```

For more details, see the section on [Organizing Tests](https://docs.python.org/3/library/unittest.html#organizing-tests) from
the `unittest` documentation.

### Other Useful Python Unit Test Topics:

* [Sub-tests](https://docs.python.org/3/library/unittest.html#distinguishing-test-iterations-using-subtests)
* [Skipping tests](https://docs.python.org/3/library/unittest.html#skipping-tests-and-expected-failures)
* [Creating mocks](https://docs.python.org/3/library/unittest.mock.html)