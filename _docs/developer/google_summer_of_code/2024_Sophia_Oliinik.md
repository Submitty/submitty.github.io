---
title: Sophia Oliinik
category: Developer > Google Summer of Code 2024
---

## Overview of project:
My summer GSoC 2024 project was Enhancing User Interface for Viewing Grades. While originally, this was intended to focus on the Rainbow Grades presentation, I also wanted to implement and update more visual representation for statistics about homework. It was decided for me to pivot a little more in the direction of gradeable specific statistics page, and bringing more updates to that. Because of this, I was able to add some updated user interface design to Rainbow Grades and the Statistics page for gradeables. 



## Outside of programming
Submitty implemented a great system for continuous integration and check-ins for the summer contributors. This was successful through the daily "Stand up" meetings that we had. This brought a great opportunity for showing your work, getting second opionions, asking questions, keeping things accountable, and seeing where other contributors were at with their work. Another element of our meetings included demonstrating our work, and recieving feedback from the team. I was able to do so with a few of my projects, and it was a great way to learn what worked and what changes were needed to add, along with my presentation skills I communicated with my mentor, Jaeseok Kang, through video calls and messaging, where we discussed barriers I came across, and status updates. These were very helpful to me in my process of working on Submitty through the summer, and I was able to learn a lot as a programmer through this. Along with these, my initial weeks were spent with time taken to understand the extensive code base that Submitty has, along with the structure of the system.



## Pull Request work:
### PR's
Below are the pull requests that I worked on and were merged this summer. The main area of issues that I worked on included Rainbow Grades UI and instructor grading data statistics. These links include documentation PR's, a PR to the Submitty repo, and PRs to the RaibowGrades repo. 

- [#77](https://github.com/Submitty/RainbowGrades/pull/77) [Feature:RainbowGrades] Adding hover text to rainbow grades bad status cells
    * This was one of the first additions I brought to Submitty. It added a feature to the rainbow grades gradebook page that implemented a hover text box for students that had a "bad status" on a homework. This brings more attention that the student can look into why they have a bad status on the assignment, and it brings convenience for instructors in their larger gradebooks to see who has a bad status and on what assignment with just hovering their mouse over the cell. 

- [#81](https://github.com/Submitty/RainbowGrades/pull/81) [Feature:RainbowGrades] Adding link to gradeable title
    * Another implementation in the rainbow grades repository where I added a feature to the rainbow grades gradebook page that added a link in the gradeable titles. This was added to only student gradebooks, and was a feature that will bring convenience to students when they are viewing their rainbow grades grade report. Now, when the student sees their grade and wants to see the details of they they recieved that grade, they can click on the title on the grade report, and they are taken to that page. 

- [#10687](https://github.com/Submitty/Submitty/pull/10687) [Feature:TAGrading] Manual Grading Histogram
    * The statistics page had tabs and data about total scores, autograding scores, and component scores, but not of manual grading scores. In this PR I added a page with a histogram of just manual grades with its data along the bottom of the histogram screen. This was a good way to learn about how data is stored.

- [#617](https://github.com/Submitty/submitty.github.io/pull/617) [Documentation:TAGrading] Version conflict documentation
    * This documentation PR was to update information about version conflicts. TA's and instructors would encounter version conflicts when students switched their active version to one that has not been graded. I added documentation about how resolve them.

- [#623](https://github.com/Submitty/submitty.github.io/pull/623) [Documentation:TAGrading] Updated version conflict documentation
    * An addition was added that updated the process of resolving version conflicts. I added the needed instructions on how to use this new interface accordingly.


### Bugfix PR's
Both of these bugfix PR's were done before my summer with Submitty began. It was a good way to get introduced to the process of how the Submitty organization does pull requests from branches, and the format of titling and describing the PR. Here I updated a broken URL, and updated some spelling errors that a linter caught. 
- [#10426](https://github.com/Submitty/Submitty/pull/10426) update rainbowgrades url
- [#10427](https://github.com/Submitty/Submitty/pull/10427) fix some spelling errors


### PR's reviewed
Having this review processes this summer really taught me a lot as a new contributor to Submitty. In the beginning of the summer, I was able to review a few PR's where I learned what the process looked like for contributors, the system and syntax Submitty used, and the new additions that other contributors were adding. Below is a list of the PR's that I reviewed and tested through the summer:
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



## Acknowledgments:
I am very greatful for this summer opportunity to work on Submitty. Through these weeks, I was able to grow a lot as a programmer, team member, and mentee. The daily meetings were an immense help in learning how to communicate where you are at with your work, and a great place to learn to ask for help. Through these meetings I was able to grow a lot as a professional. Working on the code base itself was also a large part of how I grew this summer. I was able to take time to understand previous code that was written, and consider how to bring the changes needed in a consistent way. Halfway through the summer, I had a pivot in the focus of my project, it helped teach me to be adaptable and to learn new parts of Submitty that I was not previously accustomed to. Going through the review process of getting a pull request approved was a good process to learn what areas were working, and what areas I can improve my code. Along with this, being able to review other contributors PR's was a great reference to be able to learn how others were improving the system, and the process they went through to bring their implementations. I want to thank Barb Cutler, Jaeseok Kang, Cameron Peterson, and Preston Carman for their mentorship through my summer with Submitty. 