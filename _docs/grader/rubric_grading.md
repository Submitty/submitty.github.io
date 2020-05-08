---
category: Grader
title: Rubric Grading
---

An important *complement to automated grading* is detailed rubric
grading by the TA or instructor.  After selecting an assignment, the
TA is presented with an overview of their assigned grading for this
gradeable.  The initial landing page presents an overview of the
grading statistics for this gradeable.  More examples on the
[Rubric Grading Statistics](rubric_grading_statistics) page.
To start grading, press the blue "Grading Index" button.

![](/images/ta_grading/rubric_grading_overview.png)


### Rubric Grading Student Index

The next screen shows an index of every student (or team) organized
into Registration or Rotating sections:

![](/images/ta_grading/TA_index.png)

The *white, green, yellow, blue, and purple stoplights* indicate
grading progress per submission.  Submissions with incomplete grading
will have a blue "Grade" button.  Completed grading will show the
cummulative score for that submission.

Clicking on a "Grade" or cummulative score buttons brings up the
multi panel TA grading interface.


### Draggable Grading Panels

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


### Rubric Components and Common Marks

![](/images/ta_grading/rubric_grading_panels_1.png)

The overall rubric is prepared by the instructor (or head TA).  The
rubric is divided into one or more *components*, each with a defined
maximum score.  In the example above the **Read Me** component is
worth 2 points, and the **Coding Style** component is worth 5 points.

When the grader clicks on a component it will expand, allowing
selection of one or more *common marks* to grade the student.  If the
component has be defined to "Grade by Counting Up" points, the
student's initial score will be zero, and all or most available marks
will be positive.  If the component has been defined to "Grade by
"Counting Down" points (as shown above), the student's initial score
will be zero, and all or most available marks will be negative.


### Rubric Common Mark Editing 

All graders may *edit* the *common marks* available for a specific
component during grading *or even after grading has finished*!  They
may add a new mark by specifying the points and message text.  Or they
may change the points and/or message text of an existing mark.  *Note:
All edits to points or text will be applied to all students who were
previously given this mark!*


![](/images/ta_grading/rubric_grading_edit_rubric.png)


This interface also allows the specification of which common marks
will be shown to all students, even if that mark was not selected in
the grading their assignment.  These marks are highlighted with a blue
background.  In particular, when a component is "Grade by Counting
Up", it is valuable to show all positive marks to the student, so they
can use the feedback to learn what was missing from their work, and
what they should improve upon for next time.


### Who got this Common Mark?

During grading, it can be helpful to revisit the grades of other
students who were given a specific mark.  Click on the small icon with
3 people on the right of the mark message text to view the popup
below, which includes quick links to the rubric grading interface for
each of those students (or teams).

![](/images/ta_grading/rubric_grading_who_got_mark.png)


### Overall Comment and PDF Annotations

In addition to the someone generic system of common marks and points,
graders can leave more personalized type-written notes in the *Overall
Comment* box at the bottom of the grading rubric panel.

Additionally, the grader can add annotations to PDF documents that the
student has submitted.  These can be handwritten using a touchscreen
or digital tablet or typewritten textboxes placed on the document.

![](/images/ta_grading/rubric_grading_panels_2.png)




See also
[Rubric Grading - Sorting & Navigation](sorting_and_navigation) and
[Resolving a Grade Inquiry](grade_inquiry_grader).