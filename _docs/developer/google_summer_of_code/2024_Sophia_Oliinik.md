---
title: Sophia Oliinik
category: Developer > Google Summer of Code 2024
---

## Overview of project:
Through this summer, I worked on my 2024 Google Summer of Code (GSoC) project titled "Enhancing User Interface for Viewing Grades." Initially, the project aimed to improve the presentation of Rainbow Grades. However, I also wanted to incorporate and update visual representations of statistics related to homework. It was decided that I should pivot slightly towards developing a gradeable-specific statistics page and bring more updates to it. As a result, I was able to enhance the user interface design for both Rainbow Grades and the statistics page for gradeables throughout the summer.


## Outside of programming
In the initial weeks, I focused on understanding the Submitty codebase and the system's structure. Submitty has implemented an effective system for continuous integration and check-ins for summer contributors, facilitated by our daily meetings. These meetings provided an excellent opportunity to showcase work, receive second opinions, ask questions, and maintain accountability. Additionally, the meetings included demonstrations of our work and feedback from the team, which I utilized for a couple of my projects. This process was invaluable for identifying what worked and what needed improvement. Throughout the summer, I also received feedback from my mentor via video calls and messaging. These discussions addressed barriers I encountered and provided status updates, which were instrumental in my progress and learning while working on Submitty.
Another aspect of this summer included writing issues on where Submitty can be improved. Below are the issues I wrote this summer: 
- [#10864](https://github.com/Submitty/Submitty/issues/10864) Manual Grading Histogram: fix standard deviation
- [#10877](https://github.com/Submitty/Submitty/issues/10877) Refactor for grading statistics/histogram pages


## Pull Request work:
Below are the pull requests I worked on this summer. The primary focus areas included the user interface for Rainbow Grades and the presentation of instructor grading data. These links encompass documentation pull requests, a pull request to the Submitty repository, and pull requests to the Rainbow Grades repository.

- [#77](https://github.com/Submitty/RainbowGrades/pull/77) [Feature:RainbowGrades] Adding hover text to Rainbow Grades bad status cells
    * This was one of the first additions I brought to Submitty. It added a feature to the Rainbow Grades gradebook page that implemented a hover text box for students that had a "bad status" on a homework. This brings more attention that the student can look into why they have a bad status on the assignment, and it brings convenience for instructors in their larger gradebooks to see who has a bad status and on what assignment with just hovering their mouse over the cell. 

- [#81](https://github.com/Submitty/RainbowGrades/pull/81) [Feature:RainbowGrades] Adding link to gradeable title
    * This pull request is a work in progress. Another implementation in the Rainbow Grades repository where I added a feature to the Rainbow Grades gradebook page that added a link in the gradeable titles. This is a feature that will bring convenience to students when they are viewing their Rainbow Grades grade report. Now, when the student sees their grade and wants to see the details of they they recieved that grade, they can click on the title on the grade report, and they are taken to that page. 

- [#10687](https://github.com/Submitty/Submitty/pull/10687) [Feature:TAGrading] Manual Grading Histogram
    * The statistics page had tabs and data about total scores, autograding scores, and component scores, but not of manual grading scores. In this pull request I added a page with a histogram of just manual grades with its data along the bottom of the histogram screen. This was a good way to learn about how data is stored.

- [#617](https://github.com/Submitty/submitty.github.io/pull/617) [Documentation:TAGrading] Version conflict documentation
    * This documentation pull request was to update information about version conflicts. TA's and instructors would encounter version conflicts when students switched their active version to one that has not been graded. I added documentation about how resolve them.

- [#623](https://github.com/Submitty/submitty.github.io/pull/623) [Documentation:TAGrading] Updated version conflict documentation
    * An addition was added that updated the process of resolving version conflicts. I added the needed instructions on how to use this new interface accordingly.

### Bugfix Pull Requests
Both of these bugfix pull requests were done before my summer with Submitty began. It was a good way to get introduced to the process of how the Submitty organization does pull requests from branches, and the format of titling and describing the pull request. Here I updated a broken URL, and updated some spelling errors that a linter caught. 
- [#10426](https://github.com/Submitty/Submitty/pull/10426) update rainbowgrades url
- [#10427](https://github.com/Submitty/Submitty/pull/10427) fix some spelling errors

### Pull Requests Reviewed
Having this review process this summer taught me a lot as a new contributor to Submitty. In the beginning of the summer, I was able to review a few pull requests where I learned what the process looked like for contributors, the system and syntax Submitty used, and the new additions that other contributors were adding. Below is a list of the pull requests that I reviewed and tested through the summer:
- [#10519](https://github.com/Submitty/Submitty/pull/10518) final grade gui configuration
- [#10615](https://github.com/Submitty/Submitty/pull/10615) markdown buttons exceeding width
- [#10635](https://github.com/Submitty/Submitty/pull/10635) add a clear conflict button
- [#10653](https://github.com/Submitty/Submitty/pull/10653) add manual grade to display
- [#10665](https://github.com/Submitty/Submitty/pull/10665) separate manual and gui customization
- [#10679](https://github.com/Submitty/Submitty/pull/10679) clear version conflicts with save
- [#10750](https://github.com/Submitty/Submitty/pull/10750) base_url for rainbowgrades
- [#10741](https://github.com/Submitty/Submitty/pull/10741) display memory/runtime in stats page
- [#10763](https://github.com/Submitty/Submitty/pull/10763) add gradeable percents to GUI
- [#10765](https://github.com/Submitty/Submitty/pull/10765) add ClampGradeablesInBucket
- [#10840](https://github.com/Submitty/Submitty/pull/10840) add term and course
- [#56](https://github.com/Submitty/RainbowGrades/pull/56) display rainbowgrades version
- [#10763](https://github.com/Submitty/Submitty/pull/10763) add gradeable percents to GUI
- [#10859](https://github.com/Submitty/Submitty/pull/10859) add performance warnings to display




## Acknowledgments:
I am very grateful for the opportunity to work with Submitty this summer. Throughout these weeks, I experienced significant growth as a programmer, team member, and mentee. The daily meetings were immensely helpful in learning how to communicate my progress and provided a supportive environment for asking questions. These interactions greatly contributed to my professional development.
Working directly with the codebase was also a crucial aspect of my growth this summer. I dedicated time to understanding the existing code and considered how to implement necessary changes consistently. Halfway through the summer, I pivoted the focus of my project, which taught me to be adaptable and explore new areas of Submitty that I was not previously familiar with.
The pull request review process was another valuable learning experience, allowing me to identify strengths and areas for improvement in my code. Additionally, reviewing other contributors' pull requests provided insights into their approaches and the processes they followed to enhance the system. I want to extend my gratitude to Barb Cutler, Jaeseok Kang, Cameron Peterson, and Preston Carman for their mentorship throughout my summer with Submitty. 