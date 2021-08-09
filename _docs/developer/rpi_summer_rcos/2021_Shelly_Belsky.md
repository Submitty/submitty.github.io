---
title: Shelly Belsky
category: Developer - RPI Summer RCOS 2021
---


### Lichen Plagiarism Detection
Worked together with [William Allen](https://github.com/williamjallen) on Submitty's Lichen Plagiarism Detection Tool, a partially-functional feature last touched 3 years ago. We worked to fix the base infrastructure, implement new features that were on the wish list for Lichen, and pulled everything together into a fully working state.
- Overhauled the core hash comparison algorithm
- Implemented new features:
  - Recognizing [common code](https://submitty.org/instructor/course_management/plagiarism#common-code-threshold) across student submissions
  - Uploading [instructor provided files](https://submitty.org/instructor/course_management/plagiarism#instructor-provided-code) and not marking matching code plagiarized
  - Ability to specify submitted [files to be compared](https://submitty.org/instructor/course_management/plagiarism#files-to-be-compared)
  - Ability to specify [ignored users](https://submitty.org/instructor/course_management/plagiarism#users-to-be-ignored) to not be included in the matching algorithm
  - Ability to set using only [active or all versions](https://submitty.org/instructor/course_management/plagiarism#version) of users who made submissions
  - Comparing for matches against [other gradeables](https://submitty.org/instructor/course_management/plagiarism#prior-term-gradeables) from prior terms
  - Added ability to create multiple plagiarism detection configuration per gradeable
- UI appearance and functionality improvements to all the plagiarism pages, especially the page displaying the plagiarism results
- Features for Lichen developers:
  - Made an additional course for the developer VM setup containing gradeables with sample submissions to be used as different test cases of the plagiarism tool, each with their own documentation
  - Created individual ranking files for every user in the hash comparison algorithm
  - Overhauled the directory structure
  - Added unit and integration testing to the Lichen repository
  - other optimizations and modifications to the programs involved in Lichen runs
  - Added thorough documentations of all the new features and a guide for new Lichen developers

### Submini Polls
- Added different types of polls: single response, multiple response, with different grading settings
- Finished implementing incomplete picture attachment feature
- UI appearance and functionality improvements to the polls summary page and the new poll page
- General bugfixes with poll creation and addition/deletion/order change of responses
- Added unit testing for the poll model
- Added a cypress e2e test for polls

### Submitty Developers and Miscellaneous Contributions
- Added sample data to the sample course to be added automatically during setup:
  - The office hours queue page
  - Submini Polls
  - A gradeable with VCS submissions
- Made small UI appearance changes on various pages on the site
- Reported several bugs encountered and submitted feature/testing requests
