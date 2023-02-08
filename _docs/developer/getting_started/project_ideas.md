---
title: Project Ideas
category: Developer > Getting Started
redirect_from:
  - /developer/project_ideas
---

Submitty has applied to [Google Summer of Code (GSoC) 2023](https://summerofcode.withgoogle.com/).
See [Submitty GSoC Application & Reports](/developer/google_summer_of_code/index) for more information about
the application process and to read reports from Submitty GSoC contributors
from Summers 2018, 2019, 2020, and 2022.


The project ideas listed below target a variety of different topics
and require different levels of prior experience.  The scope of these
projects varies, and may require different overall time commitments
(varying full-time-work-equivalent from 1 month to 3 months).  We are
also interested in project proposals based on other topics from our
list of open bugs and feature requests.  Submit questions or comments
on specific issues through our [Submitty GitHub Issue
Tracker](https://github.com/Submitty/Submitty/issues).


1. **Refactor and Performance Improvements for the Manual/TA Grading Interface**

   [Overview of Rubric Grading Interface](/grader/rubric_grading/index)

   Our TA grading interface is elaborate, highly-featured, and
   customizable.  However, the interface is visually overwhelming to
   new graders.  Some of our TA grading features are not adequately
   tested by automated unit and end-to-end regression testing.
   Finally, the performance of these webpages is problematic for large
   courses due to inefficient database queries.  


   [Open Issues related to TA Grading](https://github.com/Submitty/Submitty/issues?q=is%3Aopen+is%3Aissue+label%3A%22TA+Grading+%2F+TA+UI%22)

   _Expected Outcomes_: The goal would be to
   expand the automated testing of the TA Grading pages,
   patch bugs uncovered by this improved testing,
   refactor the existing code and SQL queries to improve performance, and
   possibly propose and execute small user interface revisions.
   
   _Skills & Experience Required_: Some programming experience, willingness to
   learn web and database development.  Having served as a teaching
   assistant or instructor with grading experience
   design will be beneficial.

   _Possible Mentors_: Barb Cutler, Jensen Li

   _GSoC Project Size_: 350 hours

   _Difficulty Level_: medium or hard

2. **Streamline instructor configuration of automated grading**

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
   


3. **Containers for Automated Grading**

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

   _Possible Mentors_: Barb Cutler, William Allen, Matthew Peveler

   _GSoC Project Size_: 175 or 350 hours

   _Difficulty Level_: medium or hard


4. **Continuous Integration Testing**

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

   _Possible Mentors_: Shail Patel, William Allen, Matthew Peveler

   _GSoC Project Size_: 175 or 350 hours

   _Difficulty Level_: medium or hard


5. **Website Security and Penetration Testing**

   Submitty is responsible for securing confidential information.  It
   is important that we regularly assess the security of this data.
   Once a potential vulnerability is found, the system must be
   promptly patched and documented to prevent future problems.

   _Expected Outcomes_: Security risk assessment, identification and repair
   of specific security vulnerabilities, expansion and creation of continuous
   integration tools to prevent introduction of new vulnerabilities.

   _Skills & Experience Required_: Computer security coursework and/or practical
   experience searching for system vulnerabilities.

   _Possible Mentors_: Chris Reed, Matthew Peveler

   _GSoC Project Size_: 175 or 350 hours

   _Difficulty Level_: medium or hard
   

6. **Instructional Materials and Documentation**

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

* [Review a Pull Request](/developer/getting_started/review_a_pull_request)

* [Make a Pull Request](/developer/getting_started/make_a_pull_request)

* [Edit Submitty Documentation](/developer/getting_started/edit_submitty_documentation)


