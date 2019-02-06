---
title: Project Ideas
category: Developer
---


The projects listed below target a variety of different topics and
require different levels of prior experience.  Work has already begun
on many of these projects, but we are looking for new team members to
join these projects.  Submit questions or comments on specific issues
through our [Submitty GitHub Issue
Tracker](https://github.com/Submitty/Submitty/issues) or [Contact
Us](http://submitty.org/index) to join the development team.


1. **Peer Grading**   

   Currently we facilitate detailed rubric manual grading of student
   assignments by the instructor or TA.  We have extended this design
   to include peer assessment, which can aid timeliness, quantity, and
   quality of feedback for students in large courses, especially those
   with limited instructional resources.  Furthermore, research has
   shown that peer grading and feedback also provides important
   benefits to the peer graders!

   When peer grading is enabled students will be assigned to review
   and critique a small number of their classmates' work.  The design
   and core implementation of peer grading is in progress, but
   incomplete.

   [Open Issues related to Peer Grading](https://github.com/Submitty/Submitty/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+peer)

   Advanced features related to peer grading:

   * Evaluating the quality of peer grading ("grading the grader") by
     comparing peer grades.

   * Security (ensuring students only see the submission material of
     peers they have been assigned to grade).

   * Privacy/Anonymity (providing an option to redact student names
     from material seen by peers).

   _Experience Required: Some programming experience, willingness to
   learn web and database development._

   _GSOC Proposal Tag:_ `peer grading`



2. **Containers for Automated Grading**

   Automated testing of student submitted software carries system and
   security risks from malicious code but also simply buggy or inefficient
   code.  Upper level coursework on advanced topics in computer
   science including networking, operating systems, and kernel
   development are especially complex challenges.

   Submitty supports a variety of tools to securely test including
   both sandboxing and containerization (Docker).  These tools must
   manage and limit system resources (time, CPU, processes, memory,
   files, system calls, sockets, etc.)

   [Publications](http://submitty.org/publications/)

   We would like to use Submitty to automatically test and grade
   homework assignments that require modifications to the operating
   system kernel.  Before doing so on a production machine, we must
   need to do testing to ensure the right controls are in place.

   _Experience Required: Upper level coursework experience in operating
   systems and/or networking programming.  Experience with virtual
   machines and Docker containerization is beneficial._

   _GSOC Proposal Tag:_ `docker autograding`





3. **Streamline instructor configuration of automated grading**

   Currently, instructors must write a configuration as a config.json
   (and any necessary additional files) and upload or store these
   files on the local file system.  We would like to provide an
   alternate web GUI interface for creating basic on moderately
   complex autograding configurations.  The goal would be to
   streamline the assignment configuration process for non-technical
   instructors, relevant for use in
   non-computer-science/non-programming courses.
   
   [Assignment Configuration Instructions](http://submitty.org/instructor/assignment_configuration)


   **Automated Creation of Expected Output Files**

   At present, instructors must upload expected output files for each
   autograding test case. This means that, should a test case change,
   its expected results must be manually regenerated and updated by
   the instructor. Rather than uploading expected output files, we
   would like to provide instructors with the option to provide a
   solution executable and a set of inputs. Under this model, expected
   output files can then be generated at assignment build time.

   **Randomly Generate Testcase Input**

   Once the automated generation of expected output files is complete,
   it becomes possible to generate expected output for randomly
   generated input files. Under this model, instructors will provide a
   set of rules for test input generation. At grading time, these
   rules will be used to generate an input for a testcase. This input
   will then be fed to an instructor provided solution to generate
   expected output.

   _Experience Required: Some programming experience, willingness to
   learn web and database development.  Having served as a teaching
   assistant or instructor with experience in programming assignment
   design will be beneficial._

   _GSOC Proposal Tag:_ `instructor UI`

 

4. **Mobile-Friendly Website and/or Phone/Tablet Application**

   Submitty's primary platform target are web browsers on standard
   laptop and desktop computers, where students will do their
   software development and instructors/TAs will view or download and grade
   complex assignments.

   However, as Submitty has expanded to include elements from learning
   management platforms such as a discussion forum, instructor
   announcements and notifications, student photos and information,
   small grading tasks such as taking attendance, and presentation of
   semester grades, our users have requested additional
   mobile-friendly access and features.

   _Experience Required: Critical eye for visual design, some
   programming experience with html, css, javascript, reactive designs
   (e.g., bootstrap), and willingness to learn additional web, database, and
   mobile computing development technologies.  Personal access to
   variety of different operating systems, and phone/tablet hardware
   will be beneficial._

   _GSOC Proposal Tag:_ `mobile-friendly website`


5. **Website Security and Penetration Testing**

   Submitty is responsible for securing confidential information.  It
   is important that we regularly assess the security of this data.
   Once a potential vulnerability is found, the system must be
   promptly patched and documented to prevent future problems.

   _Experience Required: Computer security coursework and/or practical
   experience searching for system vulnerabilities._

   _GSOC Proposal Tag:_ `security/testing`  


6. **Instructional Materials and Documentation**

   We would like to reduce the learning curve for new instructors and
   provide more starter material for instructors teaching introductory
   programming courses in middle and high schools, including AP
   Computer Science.

   _Experience Required: Some programming experience, willingness to
   learn web and database development.  Having served as a teaching
   assistant or instructor with experience in programming assignment
   design will be beneficial._

   _GSOC Proposal Tags:_ `instructor UI` and/or `instructional materials/documentation`



6. **Discussion Forum**

   The discussion forum is now a mature component of Submitty.
   Instructors can post announcements, students can ask questions,
   instructors/TAs/other students can answer questions, and students can
   share ideas, code, images, and links.

   Current and future development work on the forum includes:

   * Performance and design analysis and code refactor to facilitate large
     datasets and automated refresh for new posts.

   * Team chat and direct messages.

   * Assignment regrade requests via private student-grader discussion thread.

   * Integration of grading tasks with forum posts and participation.

   [Open Issues related to the Discussion Forum](https://github.com/Submitty/Submitty/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+forum)

   [Gagan Kumar's GSOC Summer 2018 Project](/developer/GSOC2018_GaganKumar)
   
   _Experience Required: Prior experience with web development (html,
   twig, css, javascript, and ajax) and manipulating and optimizing
   complex database queries._

   _GSOC Proposal Tag:_ `discussion forum`




7. **Instructor interface for Plagiarism Detection**

   The design for our initial visualization of similarities between
   the top matching pairs of assignment submissions is compete.
   Outstanding work includes large-scale performance testing, quality
   of results debugging, development of a regression test suite, and
   extension to languages other than Python, C/C++, and Java.

   [Open Issues related to Plagiarism Detection](https://github.com/Submitty/Submitty/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+plagiarism)

   [Tushar Gurjar's GSOC Summer 2018 Project](/developer/GSOC2018_TusharGurjar)

   _Experience Required: Some programming experience, willingness to
   learn web and database development.  Experience with a wide variety
   of programming languages is beneficial._

   _GSOC Proposal Tag:_ `plagiarism detection`

   

8. **Static Program Analysis**

   We currently using simple lexical (token-based) static analysis
   in our intro programming courses to verify students are using (or
   not using) specific language features.  In order to expand these
   checks we are working on producing and analyzing an abstract syntax
   tree of the submitted code.

   [Publications](http://submitty.org/publications/)

   [Open Issues related to Static Program Analysis](https://github.com/Submitty/Submitty/issues?q=is%3Aissue+is%3Aopen+static+analysis+label%3A%22static+program+analysis%22)

   _Experience Required: Upper level coursework in programming
   languages, compilers, and/or program analysis._

   _GSOC Proposal Tag:_ `static program analysis`


9. **Continuous Integration Testing**

   Each commit and pull request to github launches continuous
   integration testing of a portion of the Submitty code base.  We
   would like to expand the code coverage of our unit and integration
   tests.

   _Experience Required: Advanced programming experience, experience
   with the relevant programming languages, tuning system performance, etc._

   _GSOC Proposal Tag:_ `security/testing`  



See also:

* [Submitty GitHub Issue Tracker](https://github.com/Submitty/Submitty/issues)

* [Developer](index) index page

* [How to Contribute](how_to_contribute) page


