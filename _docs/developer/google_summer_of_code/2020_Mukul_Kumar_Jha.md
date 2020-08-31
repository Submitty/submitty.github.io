---
title: Mukul Kumar Jha
category: Developer - Google Summer of Code 2020
---

![GSoC image](/images/GSoC.png){: .center-image }

### Mobile-Friendly Website and Progressive Web App (PWA)


This project was foccused on making submitty mobile friendly and a progressive web-app with adding push notification feature but during the summer I worked equally on number of other features which involved adding and updating database, writing SQL queries and adding corresponding migrations file. I also added unit tests for different Models and used Selenium (with python) to write end-to-end tests.


To sum things up, this was a great full-stack project and I enjoyed working on all the major parts of Submitty! 

1. Designs, created designs for new TA grading interface and some other mobile-focussed components and iterated over it based on awesome feedback from the entire Submitty team :).
Tool Used: Figma  
2. Views (Frontend), improved existing User interface, made pages compatible with different screen sizes and added some new interfaces also. 
Tech Used: Figma, HTML, Twig, CSS, Bootstrap, JS, JQuery
3. Models and Controllers (Backend), worked on different models and played a lot with database while adding new pages, views and implementing new feature requests.
Tech Used: PHP, PostgreSQL, SQLAlchemy, Vagrant     
4. Testing, during the summer I added unit-tests for the Models which were not covered by tests and also added end-to-end tests.
Tech Used: Selenium, Python, PHPUnit, TravisCI


#### About Me

Hello, I'm [Mukul Kr Jha](https://www.linkedin.com/in/mukul-kr-jha/), final year computer science student from Ambedkar Institute of Advanced Communication & Training Research (GGSIPU) and this summer I worked under Submitty organization as a GSoC student.


#### Pull Requests

Following listed Pull Requests were created during the GSoC timeline under this project. I have listed brief points for some of the PR below and for more information and/or code implementation please follow the link I have attached with

- [[Feature: InstructorUI] New TA grading Interface](https://github.com/Submitty/Submitty/pull/5543)

    * Added new interface for TA grading page with the fixed layout structure
    * Added single panel mode view for normal grading.
    * Added two-panel-mode with drag-bar to adjust the width and resize the panels for power users of this interface.
    * Added full-left-column-mode where left column of the two-panel mode takes full height of the window.
    * Added another power user mode full-screen-mode or focus-mode in which the grading interface goes full screen and there is no side-nav-bar or top nav bar, 
    * Retained all the Ta-Layout detail even when instructor switched to new student and/or refreshes the page.

- [[Feature:TAGrading] Layout selector modal](https://github.com/Submitty/Submitty/pull/5831)

    * Replaced switching between different panel from the toggler button to providing all the available panels at once
    * To improve the UI/UX of TAGrading page I added a mini-view of all the panel-modes using HTML Canvas


- [[Feature:TAGrading] 3 panel mode](https://github.com/Submitty/Submitty/pull/5759)

    * Introduced the third panel in the TA grading interface.
    * Added the resizing for the horizontal panels with the help of provided drag-bar.

- [[Feature:TAGrading] Add Solution/Ta Notes Panel](https://github.com/Submitty/Submitty/pull/5801)

    * Added a new panel "Solution/Ta-Notes" to let instructors share solutions and specific notes with other instructors.
    * For each component rubric their is a corresponding solution component.
    * Shows when a particular component was last edited and who was the author.

- [[Feature:InstructorUI] Notebook itempool solution/ta-notes rubric](https://github.com/Submitty/Submitty/pull/5840) 

    * This feature is only for those notebook gradeables which has itempool randomization enabled (having one or more notebook item with multivalued `from_pool` )
    * Added an option to enable or disable linking a particular component rubric with this itempool items which support randomization.
    * Integrated itempool support for `Solution/TA notes` panel. which made grading different student with different items very easy.

- [[Feature:Notebook] item_pool map student to problem](https://github.com/Submitty/Submitty/pull/5719)

    * Added support for the `user_item_map` (optional field), 
    * Users in this mapping only will be shown item corresponding to the mentioned index next to their username and no hash based randomization will be done them
    * Helped instructors proofread and test all the items.

- [Plagiarism refactor and mobile page](https://github.com/Submitty/Submitty/pull/5516)
- [[UI/UX:InstructorUI] Plagiarism full screen & resizable panels](https://github.com/Submitty/Submitty/pull/5611)
    * Refactored plagarism module code, improved the MVC design flow and synced it with the existing codebase.
    * Made plagiarism pages compatible across different sized screens.
    * Added full screen display and drag-bar to adjust width of the codebox panels.

- [[Feature:Instructor-UI] Add an open date for grade inquiry](https://github.com/Submitty/Submitty/pull/4885)

    * Added `grade inquiry open date` to let students start posting their grade inquiry.
    * Updated database to start supporting `grade inquiry open date`
    * Update all the sample courses `YAML` files to have this newly added date.

- [[Feature:UI/UX] user profile settings page](https://github.com/Submitty/Submitty/pull/5671)
- [[Testing: UI/UX] E2E test for profile page](https://github.com/Submitty/Submitty/pull/5815)

    * Introduced user profile page, where they view and update their various information (basic info, profile photo, time-zone and theme to use)
    * Added a single time-zone drop down list with UTC offset value attached to it and sorted in increasing order wrt UTC offset values to let users find the best-suited time-zone quickly.
    * Added end-to-end test in Selenium to make sure everything works cool.

- [[Testing:PHP] Add testcases for some PHP classes](https://github.com/Submitty/Submitty/pull/5574)
- [[Testing:Notification] Add testcases for Notification model](https://github.com/Submitty/Submitty/pull/5547)
    * Wrote Unit tests in PHPUnit for the Post Model, SimpleGradeOverriddenUser, SimplelateUser model and Notification Model.

- [[UI:Submission] Mobile view for submission page](https://github.com/Submitty/Submitty/pull/5432)

- [[UI:InstructorUI] Add small screen view for the TA index page](https://github.com/Submitty/Submitty/pull/5418)

- [[UI: InstructorUI] Mobile view for grade-override](https://github.com/Submitty/Submitty/pull/5417)


- [[MobileUI: TaGrading] Adds Mobile UI for the TA Grading page](https://github.com/Submitty/Submitty/pull/5611)

- [[UI:Mobile] Add mobile screen view for the grade-report page](https://github.com/Submitty/Submitty/pull/5409)

- [[Feature:MobileUI] Add Collapsible gradeables](https://github.com/Submitty/Submitty/pull/5396)

- [[Feature: Instructor UI] XLSX/CSV Grader and Student Upload Need Better Error Messages](https://github.com/Submitty/Submitty/pull/5133)

#### WIPs / Blocked
- [[Feature: Forum] Full page forum to browse threads](https://github.com/Submitty/Submitty/pull/5726)
    * Add a landing page for the forum threads to let users select from all the available threads
    * Added filters on this page refine the search and find the targeted thread easily. 

- [[Feature: Submitty] Progressive web-app and push notification](https://github.com/Submitty/Submitty/pull/5856)
    * Make Submitty installable on all the major platform as an app (PWA)
    * Enable Push notification (in addition to all the onsite-notification which have currently) to keep students and instructors informed with latest development across all the courses.

- [[Refactor] Remove the old TA graidng interface and set the new interface as default](https://github.com/Submitty/Submitty/pull/5857)
    * Remove the legacy interface from Submitty and update route to use the new Interface as default one.
    * Refactor and code cleanups in response to the above change.


##### Small Bugfixes 

- [[Bugfix:TAGrading] Next/prev when grading done](https://github.com/Submitty/Submitty/pull/5664)

- [[Bugfix: Notebook] Notebook header collapsing on Safari](https://github.com/Submitty/Submitty/pull/5814)

- [[Bugfix: InstructorUI] Enable discussion component](https://github.com/Submitty/Submitty/pull/5773)

- [[Bugfix: Autograding] Side by side display autograding diff results](https://github.com/Submitty/Submitty/pull/5658)

- [[Bugfix:TAGrading] new interface - view submitted files](https://github.com/Submitty/Submitty/pull/5764)

- [[Bugfix:InstructorUI] Excused absence extensions won't submit ](https://github.com/Submitty/Submitty/pull/5470)


#### Documentation 

Here are some of [my PRs](https://github.com/Submitty/submitty.github.io/pulls/mukul-kmr-jha) adding /updating Submitty's documentation


#### Future Scope

- There is lot of room for improvements in Forum code
- Increasing test coverage for the entire Submitty codebase
- Making Submitty UI even more better, engaging and pixel-perfect.

#### Overall Experience

I got introduced to Submitty last year and from the beginning I loved the Submitty's objective and friendly environment, thanks to [Matthew Peveler](https://github.com/MasterOdin) for helping me with the onboarding and valueable feedbacks through your reviews.
I am very thankful to [Barbara Cutler](https://github.com/bmcutler), Submitty, RPI, and the GSoC team for giving me this chance and for bringing in this amazing experience full of learning and fun.
Complete project involved a lot of learning and challenges. I loved collaborating with RPI faculty and students and enjoyed working on the project used by not only RPI but a number of other universities across the globe.
During the whole summer, all of my project mentors were super awesome and super supportive and I learned a lot from them. Special thanks to [Barbara Cutler](https://github.com/bmcutler), [Eli Schiff](https://github.com/elihschiff), [Shail Patel](https://github.com/shailpatels), [Evan Maicus](https://github.com/emaicus), [Matthew Peveler](https://github.com/MasterOdin). They helped me with designing the new interface and gave me interesting developer tips during the whole project, I also enjoyed reviewing other developers code. 
It was a really great experience working and interacting with all the passionate RPI developers and fellow GSoC developers during the meeting we have had.
