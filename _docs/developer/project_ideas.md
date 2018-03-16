---
title: Project Ideas
category: Developer
---


The projects listed below are roughly ordered by prior experience
required.  Work has already begun on many of these projects, but we
are looking for new team members to join these projects.  Submit
questions or comments on specific issues through our
[Submitty GitHub Issue Tracker](https://github.com/Submitty/Submitty/issues)
or [Contact Us](http://submitty.org/index) to join the
development team.


1. **Peer Grading**   

   Currently we facilitate detailed rubric manual grading of student
   assignments by the instructor or TA.  We have extended this design
   to include peer assessment, which can aid timeliness, quantity, and
   quality of feedback for students in large courses, especially those
   with limited instructional resources.  Furthermore, research has
   shown that peer grading and feedback also provides important
   benefits to the peer graders!

   When peer grading is enabled students will be assigned to review
   and critique a small number of their classmates' work.  The
   core implementation of peer grading is in progress, but incomplete.

   [Open Issues related to Peer Grading](https://github.com/Submitty/Submitty/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+peer)

   Advanced features related to peer grading:

   * Evaluating the quality of peer grading ("grading the grader") by
     comparing peer grades.

   * Security (ensuring students only see the submission material of
     peers they have been assigned to grade).

   * Privacy/Anonymity (providing an option to redact student names
     from material seen by peers).

   Experience Required: Some programming experience, willingness to
   learn web and database development.


2. **Discussion Forum**

   A new feature for Spring 2018 is a Discussion Forum where
   instructors can post announcements, students can ask questions,
   instructors/TAs/other students can answer questions, and students can
   share ideas and images.  

   [Open Issues related to the Discussion Forum](https://github.com/Submitty/Submitty/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+forum)

   Advanced features related to the Discussion Forum:

   * Team chat

   * Notifications

   * Performance with larger datasets and automated refresh for new posts.

   Experience Required: Some programming experience, willingness to
   learn web and database development. 


3. **Instructor interface for Plagiarism Detection**

   The initial implementation of the core plagiarism detection
   algorithm is complete.  And we have an initial visualization of
   similarities between the top matching pairs of assignment
   submissions.  Outstanding work includes testing and debugging,
   detection of common code (e.g., instructor-provided code),
   extension to languages other than Python, C/C++, and Java, more
   intuitive visualization (to allow the instructor to make final
   decision on plagiarism vs. coincidental matching.

   [Open Issues related to Plagiarism Detection](https://github.com/Submitty/Submitty/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+plagiarism)

   Experience Required: Some programming experience, willingness to
   learn web and database development.  Experience with a wide variety
   of programming languages is beneficial.


4. **Web GUI for creating automated grading configurations**

   Currently instructors must write a configuration as a config.json
   (and any necessary additional files) and upload or store these
   files on the local file system.  We would like to provide an
   alternate web GUI interface for creating basic on moderately
   complex autograding configurations.  The goal would be to
   streamline the assignment configuration process for non-technical
   instructors, relevant for use in
   non-computer-science/non-programming courses.
   
   [Assignment Configuration Instructions](http://submitty.org/instructor/assignment_configuration)

   Experience Required: Some programming experience, willingness to
   learn web and database development.  Having served as a teaching
   assistant or instructor with experience in programming assignment
   design will be beneficial.
   

5. **Static Program Analysis**

   We are currently using simple lexical (token-based) static analysis
   in our intro programming courses to verify students are using (or
   not using) specific language features.  In order to expand these
   checks we are working on producing and analyzing an abstract syntax
   tree of the submitted code.

   [Publications](http://submitty.org/publications/)

   [Open Issues related to Static Program Analysis](https://github.com/Submitty/Submitty/issues?q=is%3Aissue+is%3Aopen+static+analysis+label%3A%22static+program+analysis%22)

   Experience Required: Upper level coursework in programming
   languages, compilers, and/or program analysis.
   

6. **Website Security and Penetration Testing**

   Submitty is responsible for securing confidential information.  It
   is important that we regularly assess the security of this data.
   Once a potential vulnerability is found, the system must be
   promptly patched and documented to prevent future problems.

   Experience Required: Computer security coursework and/or practical
   experience searching for system vulnerabilities.


7. **Continuous Integration Testing**

   Each commit and pull request to github launches continuous
   integration testing of a portion of the Submitty code base.  We
   would like to expand the coverage of the code

   Experience Required: Advanced programming experience, experience
   with the relevant programming languages, tuning system performance, 




See also:

* [Submitty GitHub Issue Tracker](https://github.com/Submitty/Submitty/issues)

* [Developer](index) index page

* [How to Contribute](how_to_contribute) page


