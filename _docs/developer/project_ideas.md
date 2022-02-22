---
title: Project Ideas
category: Developer
---

Submitty was selected for participation with 
[Google Summer of Code (GSoC)](https://summerofcode.withgoogle.com/) in Summer 2018, 2019, and 2020.
See [GSoC Project Reports](google_summer_of_code).
We have applied and hope to be selected for Google Summer of Code (GSoC) 2022!


The project ideas listed below target a variety of different topics
and require different levels of prior experience.  The scope of these
projects varies, and may require different overall time commitments
(varying from 1 month to 3 months).  Submit questions or comments on
specific issues through our
[Submitty GitHub Issue Tracker](https://github.com/Submitty/Submitty/issues)
or [Contact Us](/contact).



1. **Streamline instructor configuration of automated grading**

   Currently, instructors must write a configuration as a config.json
   (and any necessary additional files) and upload or store these
   files on the local file system.  We would like to provide an
   alternate web GUI interface for creating basic on moderately
   complex autograding configurations.  The goal would be to
   streamline the assignment configuration process for non-technical
   instructors, relevant for use in
   non-computer-science/non-programming courses.
   
   [Assignment Configuration Instructions](/instructor/assignment_configuration)

   We have preliminary support for automated creation of expected
   output files (from and instructor solution -- currently limited to
   Python) and randomized test case input.  This project will include
   documentation, examples, and extending output generation to
   instructor solutions in compiled languages.

   [Open Issues related to Autograding](https://github.com/Submitty/Submitty/labels/Autograding)

   _Experience Required: Some programming experience, willingness to
   learn web and database development.  Having served as a teaching
   assistant or instructor with experience in programming assignment
   design will be beneficial._



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

   We provide container images appropriate for the most common
   programming languages (Python, C/C++, Java) used in introductory
   programming courses.

   [https://hub.docker.com/u/submitty](https://hub.docker.com/u/submitty)

   The next step is to facilitate the creation of instructor-customized
   container images (with specific languages,
   packages, databases, etc.).  Care must be taken to ensure small
   container size and efficient performance.

   Advanced project idea: We would like to use Submitty to
   automatically test and grade homework assignments that require
   modifications to the operating system kernel.  Before doing so on a
   production machine, we must need to do testing to ensure the right
   controls are in place.

   [Open Issues related to Container Autograding](https://github.com/Submitty/Submitty/labels/Docker%2FDockerImages)

   _Experience Required: Upper level coursework experience in operating
   systems and/or networking programming.  Experience with virtual
   machines and Docker containerization is beneficial._


 
3. **Static Program Analysis**

   We currently using simple lexical (token-based) static analysis
   in our intro programming courses to verify students are using (or
   not using) specific language features.  In order to expand these
   checks we are working on producing and analyzing an abstract syntax
   tree of the submitted code.

   [Open Issues related to Static Program Analysis](https://github.com/Submitty/Submitty/issues?q=is%3Aissue+is%3Aopen+static+analysis+label%3A%22static+program+analysis%22)

   [Open Issues related to Lichen Plagiarism Detection](https://github.com/Submitty/Submitty/issues?q=is%3Aopen+is%3Aissue+label%3A%22Lichen+Plagiarism+Detection%22)

   _Experience Required: Upper level coursework in programming
   languages, compilers, and/or program analysis._


4. **Progressive Web App (PWA)**

   Submitty's initial platform target was web browsers on standard
   laptop and desktop computers, where students will do their
   software development and instructors/TAs will view or download and grade
   complex assignments.

   As Submitty expanded to include elements from learning
   management platforms such as a discussion forum, office hours queue,
   lecture polling, semester grades data, simple grading spreadsheets for attendance, and presentation of
   student photos and information, our users requested additional
   mobile-friendly access and features.
   Most of these Submitty pages successfully target a variety of display
   resolutions.

   We would also like to explore the implementation and maintenance of
   a progressive web app, which would leverage this website
   re-targeting and allow push notifications.

   [Open Issues related to API](https://github.com/Submitty/Submitty/labels/API)

   _Experience Required: Critical eye for visual design, some
   programming experience with html, css, javascript, reactive designs
   (e.g., bootstrap), and willingness to learn additional web, database, and
   mobile computing development technologies.  Personal access to
   variety of different operating systems, and phone/tablet hardware
   will be beneficial._



5. **Continuous Integration Testing**

    Each commit and pull request to github launches continuous
    integration testing of a portion of the Submitty code base.  We
    would like to expand the code coverage of our unit and integration
    tests.  Furthermore, some of our more complex end-to-end test case
    are not currently run automatically with each GitHub pull request,
    because the system setup is too time consuming and lengthy or
    unpredictable running times affect test stability.  We would like to
    optimize our use of GitHub Actions and caching so we can run
    all of these test cases.

   [Open Issues related to Continuous Integration](https://github.com/Submitty/Submitty/issues?q=is%3Aopen+is%3Aissue+label%3A%22Testing+%2F+Continuous+Integration+%28CI%29%22)

    _Experience Required: Advanced programming experience, experience
    with the relevant programming languages, tuning system performance, etc._

6. **Website Security and Penetration Testing**

   Submitty is responsible for securing confidential information.  It
   is important that we regularly assess the security of this data.
   Once a potential vulnerability is found, the system must be
   promptly patched and documented to prevent future problems.

   _Experience Required: Computer security coursework and/or practical
   experience searching for system vulnerabilities._


7. **Instructional Materials and Documentation**

   We would like to reduce the learning curve for new instructors and
   provide more starter material for instructors teaching introductory
   programming courses in middle and high schools, including AP
   Computer Science.

   _Experience Required: Some programming experience, willingness to
   learn web and database development.  Having served as a teaching
   assistant or instructor with experience in programming assignment
   design will be beneficial._





See also:

* [Submitty GitHub Issue Tracker](https://github.com/Submitty/Submitty/issues)

* [Developer](/developer) pages

* [How to Contribute](/developer/how_to_contribute) page


