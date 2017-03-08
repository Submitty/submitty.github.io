---
title: Travis CI
category: Developer
order: 10
---

We utilize the [Travis CI](http://travis-ci.org) platform to enable Continuous Integration on all commits and pull requests against the GitHub repository. We use this to ensure that that changes to tested code does not break anything when attempting to fix any bugs incase a developer forgets to run one of the local test suites themselves.

Additionally, we can test against several different versions of libraries to ensure compatibility. This is primarily seen at the moment with the PHP versions as we build against PHP 5.5, 5.6, and 7.0 to ensure that there is no code that is invalid on any platform so that users can deploy the application confidently.

Currently, Travis is setup using:
```
travis.yml
.setup/travis.sh
.setup/travis/*
```
scripts which contain the code necessary for installing the packages needed for execution, setting up apache, downloading and starting selenium, and then actually running the test suite.