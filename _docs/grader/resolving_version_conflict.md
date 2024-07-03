---
category: Grader
title: Resolving a Version Conflict
---

## Overview of Issue

Typically, this issue occurs when the student changes the active version after the TA has finished grading. The use case Submitty aims to support is that students can submit multiple times before the due date. If we have any automated grading that runs on every submission, we store every submission and the teaching staff can review every submission version number and the autograding for each of those versions. Once the deadline passes, manual/TA grading opens and the TA/instructor will manually grade the current active version. By default, the students final/last version is the active version. We do allow students the option of picking a different version to be the active one. This is relevant if they made an additional submission after the deadline (a course might have a policy allowing a student the flexibility to submit by choice a subset of assignments "late"), but then decide that an earlier version is good enough and they will save their "late day" for another assignment.


## Resolving the Version Conflict Manually

To clear this, in the grading interface, open & close each component that is labeled as being in conflict to confirm/update TA grading for the new version. The interface requires you to click each component of the rubric and either edit and save or just save. The current active version is stored for each component, so each will need to be confirmed. Once all of the messages are cleared, the student will be able to see your comments for the whole gradeable again. Alternatively, from the TA grading interface you can switch back to the version of the assignment that was initially marked for grading. 

![](/images/ta_grading/versionconflict.png)