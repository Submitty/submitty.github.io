---
category: Grader
title: Resolving a Version Conflict
---

Submitty supports multiple submissions before the due date.  Every
submission by the student is stored permanently and tagged with a
version number and timestamp.  Automated grading runs on each
submission, and we store all submissions. Teaching staff can review
details of every submission and its autograding results.  
*See also:*  [Student Interface for Managing Submission Version](/student/submission/managing_versions)

After the deadline, manual/TA grading
opens, and the TA/instructor grades the currently selected submission version.
When the grader marks / scores a rubric component, the currently selected submission version is stored in the database. 
If the student makes a new submission or changes their active version
during manual grading or after manual grading has completed,
this mismatch will cause confusion and conflicts.  
*See also:* [Student Interface for Submission Version Conflict](/student/submission/submission_version_conflict)


## Reverting a Student's Submission Version

From the "Student Info" panel of the grading interface, the grader can
review the different submission versions and change which version is
selected for grading.

*TODO: Insert image of the Student Info panel showing the submission version dropdown menu*

***NOTE**: The grader should exercise caution when using this option,
either to correct a student's obvious submission version error or
apply course administration policies.*


## Using the "Clear Version Conflicts" Button

Alternately, if the student was allowed by the course instructor to
make a new submission or modify which submission version is used for
grading, then the grader should review the submitted materials and
either verify that the manual grading score and comments are still
appropriate for the modified submission version OR the grader should
*regrade* the entire assignment and update the score and comments as
appropriate.

In the grading interface, there is a "Clear Version Conflicts" button
that will update the submission version stored in the database for
each component of the rubric and resolve this issue. It can be found
through navigating to a student gradeable that has a version conflict,
opening rubric, and the button appears along the top right of the
grading rubric page. If there are comments from previous versions, red
text can be seen at the header of each component within the
gradeable. Once clicked, on that gradeable there is a blue button to
choose to save and resolve version conflicts, or a white button to
discard. The message can also be updated, then saved. When the
comments are all saved or discarded: click the "Clear Version
Conflicts" button. A message will appear asking for confirmation,
click “ok”, and the version conflict is cleared.

![](/images/ta_grading/version_conflict.png)
