---
title: Nick Ciuica
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2026
---

**21** pull requests reviewed  
**10** [pull requests created](https://github.com/Submitty/Submitty/commits?author=NicholasCiuica) (+ **3** [documentation pull requests](https://github.com/Submitty/submitty.github.io/commits?author=NicholasCiuica))  
**3** pull requests taken over and merged  

My primary goals this summer were to improve the TA Grading interface and the Gradeable details pages. As a previous course mentor who used Submitty to grade assignments, I used my experience to implement bugfixes and new features that I would see myself using. See a list of my contributions below:

### TA Grading Interface:

#### Auto-Open Submissions with Single File ([PR#12625](https://github.com/Submitty/Submitty/pull/12625))
I picked up this unfinished PR.
#### Persistent Auto-Open Across Students ([PR#12931](https://github.com/Submitty/Submitty/pull/12931))
I made this PR after starting work on ([PR#12625](https://github.com/Submitty/Submitty/pull/12625)) because I noticed some issues with the original auto-open feature while testing the new single-file auto-open functionality. In this PR I update how opened files are stored so they can be consistently reopened when moving from student to student in the grader interface.
#### Adding Image Annotation ([PR#11921](https://github.com/Submitty/Submitty/pull/11921))
I picked up this unfinished PR. I improved the styling of the buttons used for image annotation to be more contrasting and accessible in both light and dark modes. I also disabled grading interface keyboard shortcuts while annotating, as this caused issues when trying to type annotations. I thoroughly tested this PR and made a list of next issues regarding image annotation that need to be tackled.
#### Recentering the Grading Panel Navbar ([PR#12914](https://github.com/Submitty/Submitty/pull/12914))
#### Fixing Student Name Display and Resizing ([PR#12946](https://github.com/Submitty/Submitty/pull/12946))

### Gradeable Details Page:

#### Consolidate Table Sorting Logic ([PR#12996](https://github.com/Submitty/Submitty/pull/12996))
Before this PR, when adding sortable table columns, you had to write new sorting functions to manipulate the DOM and update the sort direction icons within the table header. This lead to multiple sorting functions with lots of repeating code but diverging implementations. This PR consolidated all sortable column logic into a Vue component, the SortableTableHeader, making it much easier to add new sortable columns. The old implementation of table sorting used cookies, but my refactor uses session storage since all of the table sorting is done on the frontend. I made an addition Vue component called the TableSortManager that currently enables persistent table sorting across page reloads, but in the future it can be extended to facilitate sorting by multiple columns.
#### Fixing Table Row Highlight for Course Staff ([PR#13037](https://github.com/Submitty/Submitty/pull/13037))
The Gradeable Details table used to dynamically assign its striped rows using JS on page load to account for toggleable withdrawn student rows, but this would override the CSS styling to highlight rows representing course staff. I removed the JS style assignment and replaced it with smarter CSS that skips over hidden withdrawn students when striping the table.
#### Uploading CSVs with Zeroes to Numeric Gradeable ([PR#12972](https://github.com/Submitty/Submitty/pull/12972))
#### Changes to CSV Upload/Download for Numeric Gradeable([PR#13007](https://github.com/Submitty/Submitty/pull/13007))
#### Removing Print Section Feature from Checkpoint Labs ([PR#13051](https://github.com/Submitty/Submitty/pull/13051))

### Other Contributions:
#### Configurable Password Requirements ([PR#12455](https://github.com/Submitty/Submitty/pull/12455))
I picked up this unfinished PR.
#### Server-Side Validation for Course Code ([PR#12949](https://github.com/Submitty/Submitty/pull/12949))
Cypress CI:
PR#12898 ([Bugfix:System] Create Account Test Randomization Fix)
Documentation:
PR#770 ([Documentation:TAGrading] Remove PDF Annotation), goes with PR#13042
PR#771 ([Documentation:InstructorUI] Remove Print Lab), goes with PR#13051
