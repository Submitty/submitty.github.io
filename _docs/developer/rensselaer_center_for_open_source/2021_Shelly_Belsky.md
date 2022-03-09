---
title: Shelly Belsky
category: Developer - Rensselaer Center for Open Source (RCOS)
redirect_from:
  - /developer/rpi_summer_rcos/2021_Shelly_Belsky.md
---


### Lichen Plagiarism Detection
I worked together with [William Allen](https://github.com/williamjallen) on Lichen, Submitty's Plagiarism Detection Tool -- a partially-functional feature last touched 3 years ago. We worked on it all summer to fix the base infrastructure, implement new features that were on the wish list for Lichen, and pulled everything together into a fully working state.

- Overhauled the core hash comparison algorithm that finds matches
- Implemented new features:
  - Recognizing [common code](https://submitty.org/instructor/course_management/plagiarism#common-code-threshold) across student submissions
  - Uploading [instructor provided files](https://submitty.org/instructor/course_management/plagiarism#instructor-provided-code) and not marking matching code plagiarized
  - Ability to specify submitted [files to be compared](https://submitty.org/instructor/course_management/plagiarism#files-to-be-compared)
  - Ability to specify [ignored users](https://submitty.org/instructor/course_management/plagiarism#users-to-be-ignored) to not be included in the matching algorithm
  - Ability to process [active or all versions](https://submitty.org/instructor/course_management/plagiarism#version) of users who made submissions
  - Comparing for matches against [other gradeables](https://submitty.org/instructor/course_management/plagiarism#prior-term-gradeables) from prior terms
  - Added ability to create multiple plagiarism detection configuration per gradeable
- UI appearance and functionality improvements to all the plagiarism pages, especially the page displaying the plagiarism results
- Features for Lichen developers:
  - Made an additional development course for the VM setup containing gradeables with sample submissions to be used as different test cases of the plagiarism tool, each with their own documentation
  - Created individual ranking files containing the top matches for every user in the hash comparison algorithm
  - Overhauled the Lichen directory structure
  - Added unit and integration testing to the Lichen repository
  - Other optimizations and modifications to the programs involved in Lichen runs
  - Added thorough documentations of all the new features and a guide for new Lichen developers

### Submini Polls
Submini Polls is a lecture polling system for instructors that can be enabled to gather quick information or quiz students on lecture material. This summer I added new types of polls to supplement the basic existing functionality of the feature, increased coverage of testing, and fixed bugs. This newly improved feature will be used to replace iClickers in future classes.

- Added different types of polls: single response, multiple response, with different grading settings
- Finished implementing incomplete picture attachment feature
- UI appearance and functionality improvements to the polls summary page and the new poll page
- General bugfixes with poll creation and addition/deletion/order change of responses
- Added unit testing for the poll model
- Added a Cypress e2e test for polls

### Submitty Developers and Miscellaneous Contributions
Besides working on specific features, I made a number of other miscellaneous contributions across Submitty. I also contributed significantly to the developer resources by creating data for development courses, and creating an entirely new development course for testing Lichen. Small tweaks that perfect features over time are what ultimately pull the project together.

- Added sample data to the sample course to be added automatically during setup:
  - The office hours queue page
  - Submini Polls
  - A gradeable with VCS submissions
- Made small UI appearance changes on various pages on the site
- Reported several bugs encountered and submitted feature/testing requests
