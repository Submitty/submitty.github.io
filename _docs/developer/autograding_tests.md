---
title: Autograding Tests
category: Developer
order: 7
---

Before pushing your changes to GitHub, make sure your code passes the
local test suite.  You must fix or document (in your pull request
message) any test suite failures.


### Clean Installation and Run Full Test Suite

To start with a fresh grading library install and build, and to run
the full test suite, pass the optional "clean" and "test" arguments to
the `INSTALL_SUBMITTY.sh` script:

``` 
sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean test 
```



### Run Only Select Test Suite Modules

As you are debugging and fixing grading library code and or editing or
writing new test suite modules, you can run one or more select test
modules from the test suite, pass those as additional arguments.

``` 
sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh test test_1 test_5 
```

### Run Only Select Test Cases

If you are currently only focusing on one test case, you can specify it by 
putting the module name, a period, and then the test name as an argument
to test suite. Capitalization doesn't matter for matching on the test name.

```
sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh test test_1.test_name 
```


### Test Suite Directory Structure


The testing framework for the C++ codebase is located within the
`tests/integrationTests` directory.  Each test module is stored within
its own directory inside `tests/integrationTests/tests`.  Test modules
can be organized into a nested hierarchy of directories.

The general structure of such a test directory is a file `__init__.py`
detailing test function in the directory root, along with several
directories: `assignment_config`, `build`, `data`, and `validation`.

The `assignment_config` directory should contain a C++ header file
`config.json` (see [Assignment
Configuration](../instructor/assignment_configuration))
specifying the details of the assignment upon which testing will be
performed.

The `data` directory contains any student input necessary for the
desired grading code to run. For example, if testing compilation, the
`data` directory should contain source code. If testing validation of
README files, the `data` directory should contain `README.txt`.

The `validation` directory contains test module author-provided files
to be checked against the results of running grading code.



### Test Suite Installation Process


The modules of the autograding test suite are located in the repository:

``` 
REPOSITORY/tests/integrationTests/tests/TEST_MODULE_NAME 
```


The test suite installation process copies this directory tree to:

``` 
/usr/local/submitty/test_suite/integrationTests/tests/TEST_MODULE_NAME 
```

(WARNING: Do not edit the files in the installation directory since
they will be overwritten.)


The `run.py` script will return exit status 0 if all tests passed, and
exit status 1 if any tests failed.