---
title: Project Ideas
category: Developer > Getting Started
redirect_from:
  - /developer/project_ideas
---

Submitty has been a participating organization of [Google Summer of
Code](https://summerofcode.withgoogle.com/) for five successful
seasons.
See [Submitty GSoC Application & Reports](/developer/google_summer_of_code/index) for more information
about the application process and to read reports from Submitty GSoC
contributors from Summers 2018, 2019, 2020, 2022, and 2023.
We have applied for selection for Summer 2024 and our Project Ideas
list below has been updated.  The organizations selected for Summer
2024 Google Summer of Code will be announced in late February.  

[comment]: <> _NOTE: The organizations selected for Summer 2023 Google Summer of
[comment]: <>   Code will be announced in late February.  The instructions below
[comment]: <>    are from 2022 and will be updated if Submitty is accepted!_

[comment]: <> We are thrilled to announce that Submitty has been accepted
[comment]: <> to [Google Summer of Code (GSoC) 2023](https://summerofcode.withgoogle.com/).




The project ideas listed below target a variety of different topics
and require different levels of prior experience.  The scope of these
projects varies, and may require different overall time commitments
(varying full-time-work-equivalent from 1 month to 3 months).  We are
also interested in project proposals based on other topics from our
list of open bugs and feature requests.  Submit questions or comments
on specific issues through our [Submitty GitHub Issue
Tracker](https://github.com/Submitty/Submitty/issues) and
join
our [Zulip server](/contact) to meet the Submitty mentors and other new
developers.


1. **Expand Testing of the Manual/TA Rubric Grading Interface**

   [Overview of Rubric Grading Interface](/grader/rubric_grading/index)

   Our TA grading interface is elaborate, highly-featured, and
   customizable.  However, the interface is visually overwhelming to
   new graders and some of our TA grading features are not adequately
   tested by automated unit and end-to-end (Cypress) regression testing.

   [Open Issues related to TA Grading](https://github.com/Submitty/Submitty/issues?q=is%3Aopen+is%3Aissue+label%3A%22TA+Grading+%2F+TA+UI%22)

   _Expected Outcomes_: The goals of a project on TA grading would
   include expantion of our automated testing of the TA Grading pages,
   and to patch bugs uncovered by this improved testing.  The project may be
   expanded in scope to additionally propose and execute small or modest user
   interface revisions that enhance the TA experience.
   
   _Skills & Experience Required_: Some programming experience,
   willingness to learn web and database development and
   the Cypress end-to-end automated testing framework.  Having served
   as a teaching assistant or instructor with grading experience
   design will be beneficial.

   _Possible Mentors_: Barb Cutler, Nia Heermance

   _GSoC Project Size_: 90 or 175 hours

   _Difficulty Level_: medium


2. **Refactor and Performance Improvements for the Manual/TA Rubric Grading Interface**

   [Overview of Rubric Grading Interface](/grader/rubric_grading/index)

   Note: This project may be combined with the previous project idea.
   The Manual/TA rubric grading interface is elaborate, highly-featured, and
   customizable; however, the performance of these webpages is
   problematic for large courses due to inefficient database queries and
   delays to load data from the server that could/should be asynchronous.
   The manual/TA rubric pages could benefit from a significant
   technology refactor to use Vue/Vite, for example.

   [Open Issues related to TA Grading](https://github.com/Submitty/Submitty/issues?q=is%3Aopen+is%3Aissue+label%3A%22TA+Grading+%2F+TA+UI%22)

   _Expected Outcomes_:  A detailed software design for an organized, multi-stage
   refactor of the manual/TA rubric pages and the execution/implementation of
   a significant portion of the new design.  The project will likely require the
   extension and/or updating of our automated end-to-end (Cypress) testing and patching
   bugs uncovered by this testing.  The general interface for TA/Manual grading
   should remain similar, but the project may include small user
   interface revisions.

   _Skills & Experience Required_:  Web and database development experience.
   Experience with end-to-end automated testing (Cypress) and and having served
   as a teaching assistant or instructor with grading experience
   design is beneficial but not required.

   _Possible Mentors_: Barb Cutler, Nia Heermance

   _GSoC Project Size_: 175 or 350 hours

   _Difficulty Level_: medium or hard



3. **Streamline instructor configuration of automated grading**

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

   _Possible Mentors_: Barb Cutler, William Allen

   _GSoC Project Size_: 175 or 350 hours

   _Difficulty Level_: medium or hard
   

4. **Instructional Materials and Documentation**

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

   _Possible Mentors_: Barb Cutler, William Allen

   _GSoC Project Size_: 175 hours

   _Difficulty Level_: easy or medium


See also:

* [Submitty GitHub Issue Tracker](https://github.com/Submitty/Submitty/issues)

* [Developer](/developer) pages

* [Review a Pull Request](/developer/getting_started/review_a_pull_request)

* [Make a Pull Request](/developer/getting_started/make_a_pull_request)

* [Edit Submitty Documentation](/developer/getting_started/edit_submitty_documentation)


