---
title: Thomas Kozlowski
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2022
---

As a first time Submitty developer, I began with familiarizing myself with the
parts of Submitty and standard procedures of development. I started out with
working on some smaller issues and feature additions, as well as reviewing
others' pull requests, which helped me get familiar with the project overall.

Further into the summer, I worked on some late days issues for a while and then
shifted focus to learning about Docker and its use with autograding, as well as
investigating performance issues that result in incorrect grades being assigned
when grading too many assignments in parallel.

The Docker performance is complicated and needs more work to get to a proper
solution. I mainly worked on trying to identify what causes the performance
issues and searched for ways that might help solve the problem. Ideally, it
would be great to always get the correct autograding result, but the next best
would be to provide warnings or errors to suggest fewer autograding jobs should
be run in parallel.

### Smaller fixes and features

- Button to demote a user from grader to student
- Fixed a bug that caused Submitty to show an error page when viewing grading
- Fixed a bug that caused the late day cache to sometimes be incorrect
- Added student registration type to grade summaries
- Added course section numbers to the Submitty homepage
- Fixed a bug that caused the late day message to be displayed incorrectly
- Fixed a bug that caused worker machine installation to fail
- Improved the container log for autograding

### In progress work

- Parallelizing worker machine updates
- Fixing a bug that causes the queue occupancy table to disappear
- Investigating performance issues with Docker use for grading distributed
  systems assignments using multiple containers

### Other work

- Created a dependency graph of the Submitty installation scripts

### Future work

- Adding an execution logfile for autograding with additional statistics
- Further work on the performance of docker autograding
