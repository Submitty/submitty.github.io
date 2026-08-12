---
title: Nick Ciuica
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2026
---

**44** [pull requests reviewed](https://github.com/Submitty/Submitty/pulls?q=is:pr+reviewed-by:NicholasCiuica)  
**15** [pull requests created and merged](https://github.com/Submitty/Submitty/pulls?q=is:pr+author:NicholasCiuica+is:merged+merged:%3C%3D2026-08-07+) (+ **4** documentation pull requests)  
**3** pull requests taken over and merged  

I'm very glad to have spent my Summer 2026 working full-time as a Submitty developer! Getting to work on this open-source project in a small team has taught me so much about the development process.

My primary goals this summer were to improve the TA Grading interface and the Gradeable details pages. As a previous course mentor who used Submitty to grade assignments, I used my experience to implement bugfixes and new features that I would see myself using. See a list of my contributions below:

### Image Annotation:

#### Adding Image Annotation ([PR#11921](https://github.com/Submitty/Submitty/pull/11921))
I picked up this old PR and made finishing touches to it so it could be merged. Among other changes, I reduced code duplication in the logic to open and close the annotation window, and I improved the annotation toolbar styling to have higher visual contrast in light and dark modes. I thoroughly tested this PR and identified areas of improvement to be tackled in later PRs like the ones below.
#### Remove Leftover PDF Annotation Code ([PR#13042](https://github.com/Submitty/Submitty/pull/13042)) 
#### & Remove jspdf Dependency ([PR#13098](https://github.com/Submitty/Submitty/pull/13098))
Since the PDF annotation functionality has been removed from Submitty for a while now, I wanted to clean up the code base to make it easier to extend and debug the annotation feature in the future. I removed leftover PDF annotation code and split/renamed/moved files to separate image annotation and PDF viewing logic. I also removed a dependency we were using solely for PDF annotation.
#### Limit Image Annotation([PR#13121](https://github.com/Submitty/Submitty/pull/13121))
While image annotation currently only works with auto-generated submission images (e.g. JPGs generated from splitting a PDF), graders could annotate any submitted image, but the annotations wouldn't always display properly to students. This PR limits annotation to only the images where the feature currently works, until a later PR extends the functionality of image annotation.
#### Show Annotations as an Unviewed Grade ([PR#13106](https://github.com/Submitty/Submitty/pull/13106))
With this PR, whenever a grader changes the annotation on a student's submission (adding, editing, or removing the annotation), that grade will be marked as an unviewed grade on the grader's and student's view.

![](/images/image_annotation_dark_mode.png)

### Frontend Tables:

#### Consolidate Table Sorting Logic ([PR#12996](https://github.com/Submitty/Submitty/pull/12996))
Before this PR, when adding sortable table columns, a developer would have to write their own sorting function to manipulate the table's row order. This led to multiple sorting functions with lots of repeating code but diverging implementations. This PR consolidated all sortable column logic into a Vue component, the SortableTableHeader, making it much easier to add new sortable columns. I also added a TableSortManager Vue component that currently enables persistent table sorting across page reloads, but in the future can be extended to facilitate sorting by multiple columns.
#### Fixing Table Row Highlight for Course Staff ([PR#13037](https://github.com/Submitty/Submitty/pull/13037))
The Gradeable Details table used to dynamically add striped row styling using JS to account for hidden rows, but this would override the CSS styling to highlight rows representing course staff. I removed the JS style assignment and replaced it with smarter CSS that skips over hidden withdrawn students when striping the table.
#### UI Design of Multisortable Columns (Under [Issue#12960](https://github.com/Submitty/Submitty/issues/12960))
The ultimate goal of my table sorting PRs was to eventually make it easier to implement multisortable columns. While I was working on these PRs, I also iterated on potential UI designs for multisortable columns. I used Canva to make mockups, presented them during our daily group meetings, and implemented feedback as I went.

![](/images/multisortable_columns_mockup_nick_ciuica.png)

### Submission Browser:

#### Persistent File Auto-Open Across Student Submissions ([PR#12931](https://github.com/Submitty/Submitty/pull/12931))
I updated how opened files in the submission browser are stored so they can be consistently reopened when moving from student to student in the grader interface.
#### Auto-Open Submissions with Single File ([PR#12625](https://github.com/Submitty/Submitty/pull/12625))
I picked up this PR and reworked the way student submission files are counted to ignore metafiles, so that students with single files could be properly identified. I also added Cypress tests for this new feature.

### CI Testing Improvements:

#### Configurable Password Requirements ([PR#12455](https://github.com/Submitty/Submitty/pull/12455))
I picked up this unfinished PR, debugged it, and added to its Cypress CI tests so they would properly test password complexity requirements.
#### Create Account Test Randomization Fix ([PR#12898](https://github.com/Submitty/Submitty/pull/12898))
This PR makes the account creation CI test rerunnable so it's easier to use locally. This PR was originally part of the above PR but was split off and merged first because it became a blocker for other PRs at the time.
#### Course Creation Tests ([PR#13111](https://github.com/Submitty/Submitty/pull/13111))
I made a new Cypress spec to test course creation and course code requirements.

### Other Contributions:

#### Recentering the Grading Panel Navbar ([PR#12914](https://github.com/Submitty/Submitty/pull/12914)) 
#### & Fixing Student Name Display and Resizing ([PR#12946](https://github.com/Submitty/Submitty/pull/12946))
I reintroduced important styling behavior that the grading interface page had lost with recent changes to its CSS and layout.

#### Uploading CSVs with Zeroes to Numeric Gradeables ([PR#12972](https://github.com/Submitty/Submitty/pull/12972)) 
#### & Changes to CSV Upload/Download ([PR#13007](https://github.com/Submitty/Submitty/pull/13007))
I addressed bugs with the CSV upload and download features that were caused by recent changes to the Numeric Gradeable. I also recommended some wording changes to make the code and user-facing text more understandable.

#### Server-Side Validation for Course Code ([PR#12949](https://github.com/Submitty/Submitty/pull/12949))
Previously, if an instructor tried to make a new course using an invalid course code, the process would silently fail while giving a success message. In this PR I added server-side validation that returns an informative error instead.
#### Removing Print Section Feature from Checkpoint Labs ([PR#13051](https://github.com/Submitty/Submitty/pull/13051))
Since the Print Section feature is old and unused, we decided to remove it to make Submitty easier to maintain.

### Reflection

I have learned so much during my time working on Submitty. Our heavy emphasis on teamwork and reviewing each others' PRs allowed me to pick up new technologies quickly and begin making contributions across multiple of Submitty's systems. For example, I've gained experience making Vue components with TypeScript, working with View-Controller-Model architecture in PHP, writing Cypress CI tests, using Python virtual environments, and much more. 

In Submitty's fast-paced, open-source environment, I've gained confidence in my skills as a software developer and tester. I feel my time here has prepared me well for a career in software development, just as well as any internship would have.

### Next Steps

Here are some ways I'd like to contribute to Submitty past the summer:
- **Mentoring New Developers in the Fall:** Over the school year I would like to mentor those joining the Submitty team through RCOS. I hope to make the experience of learning Submitty's large codebase less daunting for new developers.
- **Assisting in Vue Refactor:** The ongoing Vue refactor still requires a lot of work, and I would like to take what I learned about Vue this summer and assist, whether that means reviewing related PRs, teaching new developers about Vue best practices, or making my own refactoring PRs.
- **Further Improve Image Annotation:** There are a number of image annotation issues I've documented that I'd like to work on. I think annotations are a great supplement to grading, and I want to make this feature easier to use and more stable.
- **Multisortable Columns:** I never got to implementing this feature over the summer, but I laid the groundwork in my PR to consolidate table sorting logic. I hope to continue working on this and other table sorting/styling features, and I would also like to mentor new developers interested in assisting with this.
