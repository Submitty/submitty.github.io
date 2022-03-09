---
title: Project Ideas
category: Developer > Getting Started
redirect_from:
  - /developer/project_ideas
---

Submitty has been selected for participation in
[Google Summer of Code (GSoC) 2022](https://summerofcode.withgoogle.com/).  
See [GSoC Application & Reports](google_summer_of_code) for more information about
the application process and to read reports from Submitty GSoC contributers
from Summers 2018, 2019, and 2020.



The project ideas listed below target a variety of different topics
and require different levels of prior experience.  The scope of these
projects varies, and may require different overall time commitments
(varying full-time-work-equivalent from 1 month to 3 months).  We are
also interested in project proposals based on other topics from our
list of open bugs and feature requests.  Submit questions or comments
on specific issues through our [Submitty GitHub Issue
Tracker](https://github.com/Submitty/Submitty/issues).




1. **Streamline instructor configuration of automated grading**

   Currently, instructors must write a configuration as a `config.json`
   (and any necessary additional files) and upload or store these
   files on the local file system.  We would like to provide an
   alternate web GUI interface for creating basic or moderately
   complex autograding configurations.

   [Assignment Configuration Instructions](/instructor/autograding/specification)

   We have preliminary support for automated creation of expected
   output files (from and instructor solution -- currently limited to
   Python) and randomized test case input.  This project will involve multiple modules of
   Submitty including
   web UI development, integration, documentation, additional tutorial examples, and
   extending output generation to
   instructor solutions in compiled languages.

   [Open Issues related to Autograding](https://github.com/Submitty/Submitty/labels/Autograding)

   _Expected Outcomes_: The goal would be to
   streamline the assignment configuration process for non-technical
   instructors, relevant for use in
   non-computer-science/non-programming courses.
   
   _Skills & Experience Required_: Some programming experience, willingness to
   learn web and database development.  Having served as a teaching
   assistant or instructor with experience in programming assignment
   design will be beneficial.

   _Possible Mentors_: Barb Cutler, Jasmine Plum

   _GSoC Project Size_: 350 hours

   _Difficulty Level_: medium or hard
   
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
   production machine, we need to do testing to ensure the right
   controls are in place.

   [Open Issues related to Container Autograding](https://github.com/Submitty/Submitty/labels/Docker%2FDockerImages)

   _Expected Outcomes_: Increased usage of containerized autograding in all levels
   of courses.  Reduced size and improved performance of containerized autograding
   for our autograding tutorial examples and selected real-world use cases of autograding.

   _Skills & Experience Required_: Upper level coursework experience in operating
   systems and/or networking programming.  Experience with virtual
   machines and Docker containerization is beneficial.

   _Possible Mentors_: Barb Cutler, Jasmine Plum, Matthew Peveler

   _GSoC Project Size_: 175 or 350 hours

   _Difficulty Level_: medium or hard
   
 
3. **Static Program Analysis for Autograding**

   We currently using simple lexical (token-based) static analysis
   in our intro programming courses to verify students are using (or
   not using) specific language features.  In order to expand these
   checks we are working on producing and analyzing an abstract syntax
   tree of the submitted code.  This project may by synergistic
   and integrate with the use of
   programming language tokenization and parsing used for our Lichen
   Plagiarism Detection module.

   [Open Issues related to Static Program Analysis](https://github.com/Submitty/Submitty/issues?q=is%3Aissue+is%3Aopen+static+analysis+label%3A%22static+program+analysis%22)


   [Submitty Autograding Tutorial Examples](https://github.com/Submitty/Tutorial)

   [Additional Autograding Examples](https://github.com/Submitty/Submitty/tree/master/more_autograding_examples)

   [Open Issues related to Lichen Plagiarism Detection](https://github.com/Submitty/Submitty/issues?q=is%3Aopen+is%3Aissue+label%3A%22Lichen+Plagiarism+Detection%22)


   _Expected Outcomes_: Implementation and integration of new static analysis tools
   into the Submitty autograding pipeline.  Creation of additional autograding
   tutorial examples and corresponding continuous integration regression testing.

   _Skills & Experience Required_: Upper level coursework in programming
   languages, compilers, and/or program analysis.

   _Possible Mentors_: Barb Cutler, Matthew Peveler, and other active developers

   _GSoC Project Size_: 175 hours

   _Difficulty Level_: medium


4. **Submitty Progressive Web App (PWA)**

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

   _Expected Outcomes_: Investigation, selection, and integration of an appropriate
   PWA platform.  Creation of necessary system administrator documentation
   for installation.  Updating and improving the display of existing Submitty pages
   to better target typical phone screen resolutions, as necessary.
   
   _Skills & Experience Required_: Critical eye for visual design, some
   programming experience with html, css, javascript, reactive designs
   (e.g., bootstrap), and willingness to learn additional web, database, and
   mobile computing development technologies.  Personal access to
   variety of different operating systems, and phone/tablet hardware
   will be beneficial.

   _Possible Mentors_: Shail Patel, Matthew Peveler, and other active developers

   _GSoC Project Size_: 175 hours

   _Difficulty Level_: easy or medium

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

    _Expected Outcomes_: Increased code coverage and stability of the Submitty CI test suite,
    increased automation of CI testing, increased performance (decreased running time)
    for CI testing through GitHub Actions.

    _Skills & Experience Required_: Advanced programming experience, experience
    with the relevant programming languages, tuning system performance, etc.

   _Possible Mentors_: Matthew Peveler, Shail Patel, and other active developers

   _GSoC Project Size_: 175 or 350 hours

   _Difficulty Level_: medium or hard


6. **Website Security and Penetration Testing**

   Submitty is responsible for securing confidential information.  It
   is important that we regularly assess the security of this data.
   Once a potential vulnerability is found, the system must be
   promptly patched and documented to prevent future problems.

   _Expected Outcomes_: Security risk assessment, indentification and repair
   of specific security vulnerabilities, expansion and creation of continuous
   integration tools to prevent introduction of new vulnerabilities.

   _Skills & Experience Required_: Computer security coursework and/or practical
   experience searching for system vulnerabilities.

   _Possible Mentors_: Jasmine Plum, Matthew Peveler, and other active developers

   _GSoC Project Size_: 175 or 350 hours

   _Difficulty Level_: medium or hard
   

7. **Instructional Materials and Documentation**

   We would like to reduce the learning curve for new instructors and
   provide more starter material for instructors teaching introductory
   programming courses in middle and high schools, including AP
   Computer Science.

   [Submitty Autograding Tutorial Examples](https://github.com/Submitty/Tutorial)

   [Additional Autograding Examples](https://github.com/Submitty/Submitty/tree/master/more_autograding_examples)

   [Sample Java Assignments](/instructor/autograding/sample_assignments)

   _Expected Outcomes_: Organization of existing sample and tutorial assignments and autograding
   and current documentation.  Review and curation of any publicly-available sample assignments
   and creation of new sample assignments and autograding.
  
   _Skills & Experience Required_: Some programming experience, willingness to
   learn web and database development.  Having served as a teaching
   assistant or instructor with experience in programming assignment
   design will be beneficial.

   _Possible Mentors_: Barb Cutler, Jasmine Plum

   _GSoC Project Size_: 175 hours

   _Difficulty Level_: easy or medium

See also:

* [Submitty GitHub Issue Tracker](https://github.com/Submitty/Submitty/issues)

* [Developer](/developer) pages

* [How to Contribute](/developer/how_to_contribute) page


