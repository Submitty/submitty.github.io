---
title: Nick Ciuica
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2026
---

**21** pull requests reviewed
**10** [pull requests created](https://github.com/Submitty/Submitty/commits?author=NicholasCiuica) (+ **3** [documentation pull requests](https://github.com/Submitty/submitty.github.io/commits?author=NicholasCiuica))
**3** pull requests taken over and merged

My primary goals this summer were to improve the TA Grading interface and the Gradeable details pages. As a previous course mentor who used Submitty to grade assignments, I used my experience to implement bugfixes and new features that I would see myself using. See a list of my contributions below:

### TA Grading Interface
Consistent navbar layout
#### Recentering the Grading Panel Navbar ([PR#12914](https://github.com/Submitty/Submitty/pull/12914))
#### Fixing Student Name Display and Resizing ([PR#12946](https://github.com/Submitty/Submitty/pull/12946))
Auto-open submission browser feature:
#### Auto-Open Submissions with Single File ([PR#12625](https://github.com/Submitty/Submitty/pull/12625))
I picked up this unfinished PR.
#### Persistent Auto-Open Across Students ([PR#12931](https://github.com/Submitty/Submitty/pull/12931))
I made this PR after starting work on ([PR#12625](https://github.com/Submitty/Submitty/pull/12625)) because I noticed some issues with the original auto-open feature while testing the new single-file auto-open functionality. In this PR I update how opened files are stored so they can be consistently reopened when moving from student to student in the grader interface.
#### Adding Image Annotation ([PR#11921](https://github.com/Submitty/Submitty/pull/11921))
I picked up this unfinished PR. I improved the styling of the buttons used for image annotation to be more contrasting and accessible in both light and dark modes. I also disabled grading interface keyboard shortcuts while annotating, as this caused issues when trying to type annotations. I thoroughly tested this PR and made a list of next issues regarding image annotation that need to be tackled.

PRs related to Gradeable Details Page:
Improvements to student data CSV upload:
PR#12972 ([Bugfix:TAGrading] CSV Upload Numeric)
PR#13007 ([Feature:InstructorUI] Numeric CSV Suggestions), adds to PR#12995
Removal of unused feature for maintainability:
PR#13051 ([Feature:InstructorUI] Remove Checkpoint Lab Print)
Student table improvements:
PR#13037 ([Bugfix:InstructorUI] Course Staff Table Highlight)
PR#12996 ([Refactor:InstructorUI] Consolidate Table Sorting)

My Other PRs:
Improvements to form validation:
PR#12949 ([Bugfix:InstructorUI] Create Course Validation)
Picked up PR#12455 ([Feature:System] Configurable password requirements)
Cypress CI:
PR#12898 ([Bugfix:System] Create Account Test Randomization Fix)
Documentation:
PR#770 ([Documentation:TAGrading] Remove PDF Annotation), goes with PR#13042
PR#771 ([Documentation:InstructorUI] Remove Print Lab), goes with PR#13051
