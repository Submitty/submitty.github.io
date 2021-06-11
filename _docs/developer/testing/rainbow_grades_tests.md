---
title: Rainbow Grades Tests
category: Developer
---

Before pushing your changes to GitHub, make sure your code passes the
local test suite.  You must fix or document (in your pull request
message) any test suite failures.


### Limitations

Before running the test suite, you will need to ensure that autograding
for csci1100 has been completed, and that you have generated grade
reports for the course. This is the first step on the 
[Rainbow Grades](/instructor/rainbow_grades) page.

Right now Travis does not run the csci1100 test since the autograding of
the sample assignments must complete prior to the test being run. If you
change code related to either Rainbow Grades or Grade Summaries, you should
run the tests described on this page before making a pull request.

### Verifying Grade Summaries

To test that generated grade summaries match the expected summaries and
that Rainbow Grades works correctly with the current course data, pass the
optional "clean" and "test_rainbow" arguments to the `INSTALL_SUBMITTY.sh` 
script:

``` 
sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean test_rainbow 
```

### Specific Rainbow Grades Tests

FIXME: Other test documentation should go here, along with instructions
for just running specific tests.
