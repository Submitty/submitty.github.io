---
title: Travis-CI
---

We utilize the [Travis CI](http://travis-ci.com) platform to enable *continuous integration*
on all commits and pull requests against the GitHub repository. As part of this CI, we validate
that the code passes the [linters / static analysis](/developer/testing/linting_static_analysis),
the [python](/developer/testing/python_unit_tests) and [PHP](/developer/testing/php_unit_tests)
unit tests, the [Autograding Integration Tests](/developer/testing/autograding_integration_tests),
and the [Site End-to-End Tests](/developer/testing/site_end_to_end_tests).

To help keep things organized, we utilize a concept of [build stages](https://docs.travis-ci.com/user/build-stages/),
which we use to logically group test suites, and structure the stages roughly from fastest to slowest.
This allows us to fail relatively quickly in Travis-CI if for example your code does not pass the linter / static analysis
without having to spend all the time setting up all of Submitty. The build stages that are
defined are:

1. Set-Up Cache - Makes sure all pip packages are installed, speeds up subsequent pip install usages
1. Run Linters / Static Analysis
1. Run Unit Tests (Python and PHP)
1. Run Site End-to-End Tests
1. Run Autograding Integration Tests

To see how Travis-CI is configured, see the [.travis.yml](https://github.com/Submitty/Submitty/blob/master/.travis.yml)
configuration file.

To help keep our configuration from growing too unwieldy, and not require a lot of duplication for the stages, we utilize
a concept of [YAML Anchors](https://confluence.atlassian.com/bitbucket/yaml-anchors-960154027.html).

Unfortunately, Travis-CI does have some flakiness in running the End-to-End tests. If you notice a test fails, especially for
a given reason of ` (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)`,
it is suggested that you restart that particular tests and any subsequent tests in later build stages. To do that, go to
[Travis-CI/Submitty](https://travis-ci.com/github/Submitty/Submitty), log-in, and then you should see a button in the upper
right corner of the job to restart the entire job, as well as a button at the end of each row to restart that particular row:

![Travis Restart](/images/travis_restart.png)

Finally, for really spurious failures, it may be useful to launch a [debug build](https://docs.travis-ci.com/user/running-build-in-debug-mode/),
which will allow you to SSH into the machine and directly interact with it to see what went wrong and why it's failing.

### FAQ

1. The End-to-End tests keep failing on Travis, but they work locally!

Something to remember is that each build of Travis starts from a completely blank slate, and runs through the regular installation
process to get up and running. Often times, these sorts of failures are a result of only testing the code / upgrade process for 
an existing Submitty installation, and not the path of a new Submitty installation.