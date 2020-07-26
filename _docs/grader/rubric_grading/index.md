---
category: Grader
title: Rubric Grading
redirect_from:
  - grader/rubric_grading.md
---

An important *complement to automated grading* is detailed rubric
grading by the TA or instructor.  After selecting an assignment, the
TA is presented with an overview of their assigned grading for this
gradeable.  The initial landing page presents an overview of the
grading statistics for this gradeable.  More examples on the
[Rubric Grading Statistics](/grader/rubric_grading/statistics) page.
To start grading, press the blue "Grading Index" button.

![](/images/ta_grading/rubric_grading_overview.png)


## Rubric Grading Student Index

The next screen shows an index of every student (or team) organized
into Registration or Rotating sections:

![](/images/ta_grading/TA_index.png)

The *white, green, yellow, blue, and purple stoplights* indicate
grading progress per submission.  Submissions with incomplete grading
will have a blue "Grade" button.  Completed grading will show the
cummulative score for that submission.

Clicking on a "Grade" or cummulative score buttons brings up the
multi panel TA grading interface.


## Draggable Grading Panels

![](/images/ta_grading/TA_grading_panes.png)

The Rubric Grading Interface has a customizable layout with four core
panes:

* File and Directory Browser (blue border) - displays the tree
  hierachy of files and directories.  The grader can view each of the
  submission files (the *submissions* directory) and various output and
  logging files produced during autograding (the *results* directory).
  If this gradeable is submitted via GIT or other VCS, the submission
  files will be in the *checkout* subdirectory.  

* Automated Test Case Results (red border) - displays the results for
  each automated grading test cases (which students can see),
  including the *hidden tests* (which students cannot see).

* Grading Rubric (green border) - divided into one or more components specified

* Student Information (black border) - includes date/time information
  for the one or more submission files and the students late day
  history.  If necessary, the grader can change which version is
  considered "active".

Depending on the specific gradeable, the required manual grading
tasks, and grader preference, these panels can be moved, resized,
and/or hidden for efficient grading.


