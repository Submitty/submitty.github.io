---
title: Cypress Cloud
---

# Cypress Cloud

Submitty has an open source Cypress license to record and run tests via Cypress Cloud. Cypress records tests to [Cypress Cloud](https://cloud.cypress.io/projects/es51qa), where you can view a video of the tests running, and if they failed, a screenshot of the website at the point of failure. This also allows Cypress to automatically parallelize the cypress tests into four separate machines. 

### Parallelization
Cypress automatically parallelizes the tests by starting four separate VMs to run the tests. The first machine to finish the 'setup' stage takes the test that Cypress estimates will take the longest (Usually accessibility.spec.js). The second machine to finish takes the second longest test... etc. After each machine finishes its current test, it will take the next longest test, until all tests have finished. 

### Videos/Screenshots
To view the videos or screenshots of the cypress tests;

1. Navigate to your PR in Github
2. Select 'Checks', and then on the left, select 'Submitty CI'
3. Scroll down, and under one of the Cypress-Feature summaries, select 'View run in Cypress Cloud'
4. In the top menu bar, select 'Specs'
5. On the right, there are three small icons for each spec file, 'Output', 'Screenshots', and 'Video'. If the test failed, you can view the screenshot of the 
webpage and the cypress test at the point of the failure. You can also view the video of the test whether or not it failed.
