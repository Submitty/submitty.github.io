---
title: Travis CI
category: Developer
order: 10
---

We utilize the [Travis CI](http://travis-ci.org) platform to enable
*continuous integration* on all commits and pull requests against the
GitHub repository.  The Travis CI test suite contains many of the same
tests that you can run locally.  Travis CI ensures that the most
recent changes to the code do not cause test cases to fail that were
previously passing.


Travis CI is also used test against several different versions of
libraries to ensure compatibility.  For example, in preparation for
upgrading to a new version of PHP, we currently build against PHP 7.0,
7.1, and 7.2 to ensure that there is no code that is invalid on any
platform.

Currently, Travis is setup with these commands:

```
travis.yml
.setup/travis.sh
.setup/travis/*
```

The above scripts which contain the code necessary for installing the
packages needed for execution, setting up apache, downloading and
starting selenium, and then actually running the test suite.
