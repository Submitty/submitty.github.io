---
category: Grader
title: Resolving a Version Conflict
---

## Overview of Issue

Typically, this issue occurs when the student changes the active version after the TA has started grading. Submitty supports multiple submissions before the due date. Any automated grading runs on each submission, and we store all submissions. Teaching staff can review each submission's version number and autograding results. After the deadline, manual/TA grading opens, and the TA/instructor grades the current active version. By default, the student's final version is active, but they can select a different version, even after the manual grading begins. This is where the version conflict results.


## Using the "Clear Version Conflicts" Button

In the grading interface, there is a "Clear Version Conflicts" button that has been provided to resolve this issue. It can be found through navigating to a student gradeable that has a version conflict, opening rubric, and the button appears along the top right of the grading rubric page. Once clicked, a message appears asking for confirmation, click “ok”, and the version conflict is cleared. 

![](/images/ta_grading/version_conflict_button.png)


## Resolving the Version Conflict Manually

To clear this issue in the grading interface, you'll need to navigate through each rubric component labeled with a conflict. Confirm and update TA grading for the new version by interacting with each component by clicking on a rubric component (e.g., -1, -2), deselect if currently selected, save the component, and then reselect and save it again. For custom comments, ensure edits are made directly to the comment for changes to save correctly. Once all conflicts are resolved, the student can view your comments for the entire gradeable again. Alternatively, you can revert to the initially marked version of the assignment from the TA grading interface. 

![](/images/ta_grading/manual_version_conflict.png)