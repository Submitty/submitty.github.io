---
title: GitHub Actions
category: Developer > Development Instructions > Continuous Integration Testing
---

We utilize [GitHub actions](https://docs.github.com/en/actions) to enable *continuous integration*
on all commits and pull requests against the GitHub repository. As part of this CI, we validate
that the code passes the [linters / static analysis](/developer/testing/linting_static_analysis),
the [python](/developer/testing/python_unit_tests) and [PHP](/developer/testing/php_unit_tests)
unit tests, the [Autograding Integration Tests](/developer/testing/autograding_integration_tests),
and the [Site End-to-End Tests](/developer/testing/cypress).

Submitty's CI is separated into different workflows, each workflow contain a number of jobs that run the tests mentioned above. Some jobs can run in parallel and others may depend on other jobs. The workflows are written as yaml files and are located within the repository [here](https://github.com/Submitty/Submitty/tree/master/.github/workflows) under `Submitty/.github/workflows/`.

Workflows can also be viewed under the [actions tab](https://github.com/Submitty/Submitty/actions) on the GitHub UI for Submitty's repository. Each workflow run and its status will also be listed here for commits pushed to branches and pull requests.

### Testing Vagrant Up using CI

There is a [workflow](https://github.com/Submitty/Submitty/actions/workflows/vagrant_up.yaml) dedicated to running a Vagrant up within a GitHub runner, in order to ensure the developer virtual environment continues to works correctly. This workflow is run automatically on a schedule against the codebase and can also be triggered manually against a specific branch. 

Clicking the "Run workflow" dropdown button on the "Vagrant Up" workflow will show a list of branches to run the workflow against. Any changes that might effect the setup of Submitty can utilize this feature to ensure there are no breaking changes without having to run a fresh vagrant up manually. 

![GitHub UI to manually trigger a Vagrant Up workflow](/images/vagrant_up_ci.png)