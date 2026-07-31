---
title: Nick Ciuica
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2026
---

TODO: update numbers

**21** pull requests reviewed  
**10** [pull requests created](https://github.com/Submitty/Submitty/commits?author=NicholasCiuica) (+ **2** [documentation pull requests](https://github.com/Submitty/submitty.github.io/commits?author=NicholasCiuica))  
**3** pull requests taken over and merged  

I'm very glad to have spent my Summer 2026 working full-time as a Submitty developer! Getting to work on this open-source project in a small team has taught me so much about the development process. My primary goals this summer were to improve the TA Grading interface and the Gradeable details pages. As a previous course mentor who used Submitty to grade assignments, I used my experience to implement bugfixes and new features that I would see myself using. See a list of my contributions below:

### TA Grading Interface:

#### Persistent File Auto-Open Across Student Submissions ([PR#12931](https://github.com/Submitty/Submitty/pull/12931))
I updated how opened files in the submission browser are stored so they can be consistently reopened when moving from student to student in the grader interface. This feature now uses localStorage instead of cookies, since this is a frontend-only feature.
#### Auto-Open Submissions with Single File ([PR#12625](https://github.com/Submitty/Submitty/pull/12625))
I picked up this PR and reworked the way student submission files are counted to ignore metafiles, so that students with single files could be properly identified. I also added Cypress tests for this new feature.

#### Adding Image Annotation ([PR#11921](https://github.com/Submitty/Submitty/pull/11921))
I picked up this old PR and made finishing touches to it so it could be merged. Among other changes, I reduced code duplication in the logic to open and close the annotation window, and I improved the annotation toolbar styling to have higher visual contrast in light and dark modes. I thoroughly tested this PR and identified areas of improvement to be tackled in future PRs, see below.
#### Remove Leftover PDF Annotation Code ([PR#13042](https://github.com/Submitty/Submitty/pull/13042)) & Remove jspdf Dependency ([PR#13098](https://github.com/Submitty/Submitty/pull/13098))
Since the PDF annotation functionality has been removed from Submitty for a while now, I wanted to clean up the code base to make it easier to extend and debug the annotation feature in the future. I removed leftover PDF annotation code and split/renamed/moved files to separate image annotation and pdf viewing logic. I also removed a dependency we were using solely for PDF annotation.

#### Recentering the Grading Panel Navbar ([PR#12914](https://github.com/Submitty/Submitty/pull/12914)) & Fixing Student Name Display and Resizing ([PR#12946](https://github.com/Submitty/Submitty/pull/12946))
I reintroduced important styling behavior that the grading interface page had lost with recent changes to its CSS and layout.

### Gradeable Details Page:

#### Consolidate Table Sorting Logic ([PR#12996](https://github.com/Submitty/Submitty/pull/12996))
Before this PR, when adding sortable table columns, a developer would have to write their own sorting function to manipulate the DOM. This led to multiple sorting functions with lots of repeating code but diverging implementations. This PR consolidated all sortable column logic into a Vue component, the SortableTableHeader, making it much easier to add new sortable columns. I made an addition TableSortManager Vue component that currently enables persistent table sorting across page reloads, but in the future it can be extended to facilitate sorting by multiple columns.
#### Fixing Table Row Highlight for Course Staff ([PR#13037](https://github.com/Submitty/Submitty/pull/13037))
The Gradeable Details table used to dynamically assign its striped rows using JS on page load to account for toggleable withdrawn student rows, but this would override the CSS styling to highlight rows representing course staff. I removed the JS style assignment and replaced it with smarter CSS that skips over hidden withdrawn students when striping the table.
#### UI Design of Multisortable Columns (Under [Issue#12960](https://github.com/Submitty/Submitty/issues/12960))
The ultimate goal of my table sorting PRs was to eventually make it easier to implement multisortable columns. While
I was working on these PRs, I also iterated on potential UI designs for multisortable columns. I used Canva to make mockups, presented them during our daily group meetings, and implemented feedback as I went.

#### Uploading CSVs with Zeroes to Numeric Gradeable ([PR#12972](https://github.com/Submitty/Submitty/pull/12972))
#### Changes to CSV Upload/Download for Numeric Gradeable([PR#13007](https://github.com/Submitty/Submitty/pull/13007))
I addressed bugs with the CSV upload and download features that were caused by recent changes to the Numeric Gradeable. I also recommended some wording changes to make the code and user-facing text more understandable.
#### Removing Print Section Feature from Checkpoint Labs ([PR#13051](https://github.com/Submitty/Submitty/pull/13051))
Since the Print Section feature is an old an unused feature, we decided to remove it to make Submitty easier to maintain.

### Other Contributions:

#### Configurable Password Requirements ([PR#12455](https://github.com/Submitty/Submitty/pull/12455))
I picked up this unfinished PR.
#### Server-Side Validation for Course Code ([PR#12949](https://github.com/Submitty/Submitty/pull/12949))
Cypress CI:
#### Create Account Test Randomization Fix ([PR#12898](https://github.com/Submitty/Submitty/pull/12898))
Documentation:
#### Remove PDF Annotation ([PR#770](https://github.com/Submitty/submitty.github.io/pull/770))
goes with ([PR#13042](https://github.com/Submitty/Submitty/pull/13042))
#### Remove Print Lab ([PR#771](https://github.com/Submitty/submitty.github.io/pull/771))
goes with ([PR#13051](https://github.com/Submitty/Submitty/pull/13051))

### Reflection
I have learned so much during my time working on Submitty.
Our heavy emphasis on teamwork and reviewing allowed me to pick up new technologies quickly and begin making contributions across multiple of Submitty's systems.
For example, I've gained experience writing CI tests, using virtual environments in python, work with View-Controller-Model architecture in PHP and Twig, and much more.

In Submity's fast-paced, open-source environment, I've gained confidence in my skills as a software developer, tester, and engineer.

Working on Submitty this summer has been an invaluable experience. My contributions to Submitty started as picked-up PRs and frontend tweaks, but I quickly began working across multiple systems of Submitty, including making new CI tests and assisting in our move to using a virtual environment for our python scripts.
Contributing to PRs daily and assisting in reviewing and testing has made me much more confident 
Our fast-paced changes and our emphasis on teamwork and reviewing make me confident that this opportunity has been as valueable as a traditional internship.
Made changes daily, fast-paced changes, reviewing/testing consistently
Gained experience with Cypress, Vue, PHP, TS, jQuery, Twig, Python, Bash

### Next Steps

Here are some things I'd like to work on at Submitty past the summer:
- *Assisting in Vue Refactor*
- *Multisortable Columns*
