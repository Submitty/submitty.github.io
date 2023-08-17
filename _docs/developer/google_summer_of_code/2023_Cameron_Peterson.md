---
title: Cameron Peterson
category: Developer > Google Summer of Code 2023
---



## Google Summer of Code 2023
My project for Google Summer of Code 2023 was to improve Submitty's Continuous Integration pipeline by both adding tests to increase code coverage, and improving the test time for faster feedback to developers. My first few PR's weren't directly related to testing, but they gave me an in-depth knowledge of the codebase, which allowed me to optimize and refactor existing tests. 

[Submitty](https://github.com/Submitty/Submitty)
## Gradeable Creation
My first few PR's related to GSOC 2023 were focusing on adding other ways to submit assignments to Submitty. The first PR was to add support for externally created Verson Control System (VCS) repositories. In doing so, I was able to get in-depth knowledge on how Submitty handled obtaining, and grading homework assignments, which was helpful for later testing improvements. The second PR was adding support for subdirectories within a repository. This gave me more knowledge on how gradeables were created, and how they were handled behind the scenes. The next two PR's were quality of life changes for the two previous PR's, one giving the ability to change the subdirectory settings after the gradeable was created, and one changing the error messages that the students receive on the event of a bad submission. The last main PR that I worked on for gradeables was adding VCS gradeables to the sample course. I also updated the Submitty documentation about creating gradeables, and added documentation for the features that I added. 

### Main PR's for Gradeable Creation
* [Private VCS Repos](https://github.com/Submitty/Submitty/pull/9382)
* [VCS Subdirectory Support](https://github.com/Submitty/Submitty/pull/9317)
* [Add/Remove Subdirectory After Created](https://github.com/Submitty/Submitty/pull/9423)
* [VCS Submission Error Messages](https://github.com/Submitty/Submitty/pull/9399)
* [VCS Gradeables in Sample Course](https://github.com/Submitty/Submitty/pull/6922)
* [Documentation: Update Gradeable Creation](https://github.com/Submitty/submitty.github.io/pull/519)
* [Documentation: Private VCS Repos](https://github.com/Submitty/submitty.github.io/pull/430)

### Bugfixes for PR's
* [Fix error message on Do Not Grade](https://github.com/Submitty/Submitty/pull/9448)
* [Fix Sample Course Variables](https://github.com/Submitty/Submitty/pull/9480)
* [Fix get_vcs_info Return Value](https://github.com/Submitty/Submitty/pull/9461)

## Continuous Integration
After finishing the PR's related to gradeables, I started working on improving the continuous integration (CI) pipeline. The first PR that got merged was an old PR that I took over, adding tests for PHP functions in the plagiarism section of Submitty. I also took over a PR to add Yamllint to the Github Actions pipeline. At this point, Submitty was using Selenium to do some end-to-end (e2e) tests, and they were becoming flaky, and increasingly difficult to test locally. We decided to switch from some Selenium tests, and some Cypress tests to entirely Cypress tests. I re-wrote or helped re-write multiple of the Selenium tests in Cypress, and helped write multiple tess from scratch. After all of the Selenium tests that were running in CI were changed to Cypress, I removed Selenium from the CI, and changed a couple of the tests to pass. At this point, all of the tests passed on a consistant basis, and none of them were flaky. I also did some small changes to increase the reliability of tests.

### Main PR's for CI tests
* [Replace Forum tests](https://github.com/Submitty/Submitty/pull/9393)
* [Replace Profile tests](https://github.com/Submitty/Submitty/pull/9505)
* [Replace Sidebar tests](https://github.com/Submitty/Submitty/pull/9503)
* [Replace PDF tests](https://github.com/Submitty/Submitty/pull/9518)
* [Replace Simple Grader tests](https://github.com/Submitty/Submitty/pull/9518)
* [Replace Submission tests](https://github.com/Submitty/Submitty/pull/9461) ***
* [Add Gradeable edit tests](https://github.com/Submitty/Submitty/pull/9461) ***
* [Remove Selenium from CI](https://github.com/Submitty/Submitty/pull/9530)
* [Add Yamllint to CI](https://github.com/Submitty/Submitty/pull/8864)
* [Documentation: Remove Selenium References](https://github.com/Submitty/submitty.github.io/pull/9517)


### Smaller PR's/bugfixes
* [Comment out Selenium Submission test](https://github.com/Submitty/Submitty/pull/9460)
* [Comment out Download in test](https://github.com/Submitty/Submitty/pull/9446)
* [Comment out Autograding Status Test](https://github.com/Submitty/Submitty/pull/9462)
* [Re-add part of Autograding Status Test](https://github.com/Submitty/Submitty/pull/9499)
* [Change login from UI to POST request](https://github.com/Submitty/Submitty/pull/9522)
* [Update DockerUI selectors](https://github.com/Submitty/Submitty/pull/9617)
* [Check for Server Error in Sidebar tests](https://github.com/Submitty/Submitty/pull/9620)
* [Remove Chromedriver setup](https://github.com/Submitty/Submitty/pull/9588)
* [Make Forum Selenium tests not run in CI](https://github.com/Submitty/Submitty/pull/9466)

## Cypress Cloud
After the midterm evaluation, I started working on decreasing the time that the CI took to run. The first part of this was done by another contributor by splitting up Cypress, Selenium, and Integration tests to run separately but parallel. I started looking into ways to decrease the testing time, while not reducing the test coverage. In doing so I came across Cypress Cloud, and their open source license. Submitty was granted an open source license, which allowed me to change the way our CI works. Now, we record the tests to Cypress Cloud, instead of saving artifacts in Github Actions. This allows for Cypress Cloud to automatically parallelize the tests between four machines, reducing the test time from around one hour, to averaging less than thirty-five minutes. 

### Cypress Cloud PR
* [Integrate Cypress Cloud](https://github.com/Submitty/Submitty/pull/9517)
