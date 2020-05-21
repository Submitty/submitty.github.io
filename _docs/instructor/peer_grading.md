---
title: Peer Grading
category: Instructor
---

Peer assessment or peer grading is beneficial to students in two ways.
First, it increases the quantity and diversity of detailed feedback on
their assignments and presentations.  Second, it facilitates learning
and problem solving by letting students see other ways of approaching
a problem, and asking important questions about the effectiveness of
those alternate methods.

### Preparation of the Peer Grading Rubric

Any [rubric grading](/grader/rubric_grading) assignment can be
augmented with peer grading.

To get started, the instructor should first add one or more "Peer
Grading" Components to the rubric.  From the "Edit Gradeable" page,
under the "Rubric" tab, click the purple "Add New Peer Component
Button". Configure the component points, and add all necessary marks
with appropriate points and message text. Once at least one "Peer
Grading" Component is added to the rubric, a "Peer Matrix" tab will
appear in the navigation bar.

*IMPORTANT NOTE: Student peer graders cannot edit the rubric or add
new marks!*

![](/images/peer_grading/peer_grading_rubric.png)

### Preparation of the Peer Grading Assignment Matrix

Next the instructor must prepare the assignments of peers for grading.
Currently this is done by creating the explicit mapping/matrix between
peer graders and students, and uploading the data as a .csv (comma
separated values) file.  *NOTE: In the future we plan to provide
easy-to-use web user interface to generate standard peer grading
assignment matrices.*

In the example below, each of the five students is assigned to grade
three other students.  And each student will receive feedback from
three of their peers.

![](/images/peer_grading/peer_grading_matrix_csv.png){:width="200px"}

This file is uploaded from the "Peer Matrix" tab. After uploading the
file, you will see the peer grading assignments for each student:

![](/images/peer_grading/peer_grading_matrix_uploaded.png)


### Peer Grading from the Student 

Students who are assigned peer grading will then have access to the
[Rubric Grading](/grader/rubric_grading) interface for their assigned
students.  For example, here is the display of the Student Index page:

![](/images/peer_grading/peer_grading_peer_view.png)

*TODO: By default all peer grading will be double-blind.  This
 implementation is currently incomplete.*

*FIXME: The peer graders should not see any grading information for the
 regular, non-peer rubric components.  Similarly, the peer graders
 should not see any of the scores awarded by other students.
 Currently this information is incorrectly displayed and incorrectly
 totaled.*
 
When a peer grader selects a student to grader, they will have access
to the file browser to view all materials from the student submission,
and they will have the TA grading rubric, which contains only the peer
components and marks.

Peer graders are encouraged to leave a written overall comment with
additional, detailed feedback.

![](/images/peer_grading/peer_grading_peer_panes.png)

### Instructor View of the Finished Peer Grading

The instructor and TAs can check check on the status of peer grading,
and inspect the detailed scoring from the TA grading panel interface.
The purple bordered panel summarizes the marks selected for each
component by each of the peer graders assigned to this specific
student.  The instructor and TAs can also view the overall comments
written by all non-peer and peer graders by clicking on the tabs.


![](/images/peer_grading/peer_grading_instructor_view.png)

Once the non-peer grading is complete and all or most of the peer
grading is also complete, the instructor should then release all of
the grades to the students.


### Student Feedback

Once grades are released the students can view the scores and comments
from both the TA / Instructor grading, and also the peer grading.

![](/images/peer_grading/peer_grading_student_view.png)

Note that the peer grading is anonymized.