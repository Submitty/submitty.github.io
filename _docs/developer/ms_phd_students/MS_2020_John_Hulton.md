---
title: John Hulton > MS > December 2020
category: Developer > MS/PhD Students
redirect_from:
  - /developer/MS_2020_John_Hulton
---

#### Abstract

My master’s project was based on the development and improvement of a peer grading system on Submitty. Peer grading is the process in which students of a course grade other students of that course in place of an instructor or other course staff. A course can benefit from functional peer grading in two key ways. First, it lessens the workload on course staff by shifting the task of grading assignments to the students. This is essential for Massive Open Online Courses, which can have up to 30,000 students, and the. and would provide a new way for students to learn. Therefore, when developing Submitty Peer Grading, we focused on making it easy to implement for an instructor while providing ways for students to learn and interact.

#### Peer Grading System

My first and largest contribution was building the Peer Grading system alongside Evan Maicus and Barbara Cutler. This current version would be used as follows:

*   The instructor designates a gradable as a Peer Gradable by adding one or more Peer Components in the grading rubric. Only the Peer Components can be graded by students. Otherwise, Peer Components are identical to normal Components (they can be graded by course staff like a normal component). The instructor can also decide if the peer grading should be double-blind (student do not know who they are grading or being graded by), single-blind (students know who they are grading but not know they are being graded by) or unblind (students know who they are grading and being grading by).
[![](/images/PeerImage1.PNG)]

*   The instructor creates a set of grader-student pairings via the interface under the Peer Matrix tab in the Create/Edit Gradeable Interface. The graders on the left side are students who are assigned to grade the other students on the right side. Instructors can use the interface to randomly create pairings given the number of student each student-grader should have to grade. Instructors can also manually create, edit and delete pairs and can upload a .csv file containing student-grader pairs.
[![](/images/PeerImage2.PNG)]
 
*   After the assignment has been closed, student graders are able to grade the students they were assigned to view the standard grading interface. Note that the student will not be able see the name or id of the student they are grading if double-blind grading is enabled. If the Gradable contains Peer and non-Peer Components, course staff must grade the non-Peer Components as normal
[![](/images/PeerImage3.PNG)]
. An instructor can see overall peer grading progress on the stats page and the grades assigned by each peer via the new peer panel in the grading interface.
[![](/images/PeerImage4.PNG)]
 
*   When grades are released, students see which marks were selected by each grader (student and non-student) for each Peer Component. For each peer Component, the average score is calculated and displayed and used as the Peer Component’s score when calculating the student’s total score. If either single-blind or double-blind is enabled for the assignment, the student will not be able to determine if a certain Component grade was given by course staff or student. The student will also see each overall comment left by each grader. The student view of the any course staffs’ grades is the same as with non peer-grading assignments.
[![](/images/PeerImage5.PNG)]

Coding of the peer grading system required changing Submitty’s SQL Databases and PHP Classes to introduce and differentiate between Peer Components/ Gradeables and non-Peer Components/Gradeables. It also required logical changes to Submitty’s PhP backend, which governs how assignments are graded and each user group has access to. Finally, various UI elements had to modified or added using Twig and Javascript.

#### Students Giving Feedback to Peer Graders
Which the current Peer Grading System was functional, it did not allow the level of student interaction we aimed for. We were also worried that some students were less likely to receive quality feedback, based on who was assigned to grade them. To address these problems, we created a system which allows students to give the student-graders who graded them feedback on how helpful their comments were. Student graders will be able to see this feedback, letting them know how their grading was useful. Peer feedback is used as follows

*   The student clicks the “Switch to Feedback Mode Button” on the view grades page for the assignment. This changes the display of grades to show the marks selected by each peer grader adds several feedback options.

*   The student selects a feedback option. Only one feedback option may be selected.
[![](/images/PeerFeedback1.PNG)]

*   The peer grader opens the grading interface for that student. The peer feedback is visible in the Grading Rubric panel.
[![](/images/PeerFeedback2.PNG)]

In the future, we plan to use this feedback and other measurements (like class performance) to develop a multi-dimensional metric, which can be used to sudo-randomly distribute peers in such a way that students are more likely to receive similar grades and comment quality. We are currently writing a paper about this metric and its possible use.  
