---
title: Harsh Joshi
category: Developer - Google Summer of Code 2020
---
# Peer Grading 
Peer grading feature at Submitty establishes the concept of students grading other students which was aimed to increase the quantity and diversity of detailed feedback on student assignments and presentations along with facilitating students to see other ways of approaching a problem, and asking important questions about the effectiveness of those alternate methods. 
The idea of peer grading has been introduced in some e-learning platforms but is still governed by rubrics for evaluation. Submitty brings a fresher perspective to this idea. The concept in itself is revolutionising and brings in the opportunity for peer grader to engage with and analyze work which adds to a part of the learning. Peer grading also eliminates the need for evaluation at scale.

# About 
My Name is [Harsh Joshi](https://linkedin.com/in/josharsh). I am a computer science undergradute from the University of Petroleum and Energy Studies.
The project was under the mentorship of [Barbara Cutler](https://www.cs.rpi.edu/~cutler/), [Evan Maicus](https://github.com/emaicus) and [John Hulton](https://github.com/jchulton).
### [Submitty](http://submitty.org)
**Homework Submission, Automated Grading, and TA grading system**

GitHub : [https://github.com/Submitty/Submitty](https://github.com/Submitty/Submitty)

# Contributions

## Randomized Peer Assignments 
Randomized assignments of peer graders in a class was an upgrade from manual csv upload of the peer grading matrix. This feature enables using GUI interface to prepare a random assignment where each student grades *n* random students (and also receives feedback from *n* random students).

## Bug fix on grading index stats
Upgraded grading index to take peer grading statistics for calculation of Manual Grading total. Fixed bugs involving maximum total for manual grading score and final score.

## Stoplights Upgrade
The white, green, yellow, blue, and purple stoplights indicate grading progress per submission. My work included restricting peer graders from accessing non peer stoplights and upgrading stoplights for gradeables with both peer and non peer components.

## Grading Statistics 
The grading stats on the status page show relevant grading figures including number of students who submitted, number of assignments which have been graded, grading stats by registration, and data on average scores etc. My work included to upgrade grading figures for peer gradeables with access to peer grading stats on student and non student views, and fix bugs on incorrect grading data for gradeables with mix of peer and non peer components.

## Options for peer matrix
Peer matrix options allow to configure the peer grading assignments. My work on options for peer matrix included restricting the assignments to each registration section, downloading peer matrix as csv, clearing the peer matrix, and writing feature to enable every student grading every other student.

* **All Grade All** option sets the peer matrix such that each student grades every other student in a class.

* **Restrict to Registration** restricts the peer grading assignments to each registration section which means only students in a registration section will be grading each other.

* **Submit before grading** enables the instructor to allow grading to only those students who have submitted their own assignments. Note that this option should only be used when sufficient submissions have been made, usually after the submissions are closed. 

* **Download Peer CSV**  exports the current peer matrix to csv which can be reuploaded for future/other peer assigments.

* **Clear Peer Matrix**  resets the current peer matrix. Note that this option should be used carefully when randomized peer assignments are used as it can't be undone.

## Introducing peer gradeables on sample course.
Sample course contains sample data which is used for various development purposes including testing. As a part of my work I wrote code to introduce peer gradeables to the sample course. 

## Refactoring peer grading assignment function.
Optimized and modularized peer grading assignment function to better suit the unit testing needs.

## Optimized Queries for peer matrix.
Wrote database queries and server side logic to optimize time take to set the peer matrix via upload csv method. The updated logic uses optimized sql queries along with bulk upload function to reduce the number of server interactions with the databse and pushed data at one go. 

## Randomized peer assignmend in sample course
Implemented the randomized peer assigments logic for the sample peer gradeables in the sample course.

## Documentation
Wrote documentation at submitty.org for
* Upgrade to pip3 
* Handling caching in Twig Files
* Using options for peer matrix

## Review
Reviewed pull request of fellow developers which included PRs on
* Late submission sheck
* Adding new grader to the peer matrix
* Editing peer matrix
* Upgrading download zip feature for peer gradeables
* Peer annonymization in sample course

# Future Scope
Peer grading has a lot of scope for future work. Some of the ideas for future work include -
* **Notifications**: 
    * **Peer Grading**: Currently students are not notified if they need to peer grade (after grading has been opened) or Grading has been opened and there are peer components to grade. 
    * **Due Date Approaching** : When the due  date of an assignment is very near (say 2 days) it might be good to give a friendly reminder to students. This can also be applied to reminders to peer grader right before grades are to be released. 
* **Separate Logic from templates on grading stats page**: 
Twig files have a lot of javascript written in them in grading which makes it verbose. This also applies to the recently updated peer grading assignments page. Such pages could be cleaned up a bit more so that fresh eyes looking into the code understand it at the first go.


# My Experience of GSOC with Submitty
Submitty is a live project and being able to work on a project that is being actively used by hundreds of students and teachers has been fascinating. To work with developers across regions, careers and skillset was equally motivating. Working with developers and mentors at Submitty brought in new perspectives and gave me insights on being a better developer. While I worked at Submitty, I got to experience open source culture from close quarters, work around developing real solutions, introspect my own work and skills, contribute to open source and be a better at work. I enjoyed every bit of it. To put my work right to meet the expectations of the community was challenging and rewarding. Thorough code reviews with more than one pair of eyes looking gave me valuable insights and feedback.
Whenever I had slow progress the mentors were extremely helpful and empathetic. From 1v1 meetings to discussions on slack, emails and PR threads, I am grateful for the additional help and support.
