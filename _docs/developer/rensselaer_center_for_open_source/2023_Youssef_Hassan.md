---
title: Youssef Hassan
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2023
---

During the summer of 2023, I had my first experience contributing to open-source. I dedicated myself to completing pending features, introducing new functionalities, and resolving bugs in Submitty. While doing so, I also actively reviewed the work of my fellow team members, which helped us all work together effectively to enhance the user experience. Additionally, I actively participated in the development process by submitting bug reports on Github and proposing ideas for implementation. I am looking forward to addressing these suggestions in the upcoming months, further contributing to the improvement of Submitty.

### Completing pending features

* One of the initial tasks I undertook was the implementation of counters within the office hours queue. This addition helps instructors, mentors, and teacher assistants understand how frequently students use the queue, allowing them to provide assistance more efficiently, especially to those who received less help.

* On the grading index page, an adjustment was implemented for graders. Instead of the previous blue 'Grade' button used for both on-time and too late submissions, a red button labeled "Too Many Late Days" has been introduced. This modification ensures that TAs are informed about the status prior to accessing the student's submission, helping them grade with better information.

* Another contribution was the implementation of a new modal on the grading statistics page, which offers users the option to apply filters that include or omit specific submissions. These filters cover overridden submissions, bad submissions (excessive late day use), and submissions within the NULL registration section (which include dropouts and designated graders). The filters impact statistics for student submissions, progress in TA grading, manually and autograded submissions. 
Using these filters carefully resolves statistical irregularities caused by late submissions and changes in the NULL registration section, ensuring accurate representation.

* The last task I undertook was the integration of Cypress End-to-End tests for Submitty. These tests carefully assess changes in gradeable information, late days and extentions usage, and late submissions.  This analysis also ensures that the changes are accurately reflected both from the perspective of student submissions and within the late day cache, a table within the database. This involved replacing the previous late days forensic page and refactoring it into the Bulk Late Day Usage page, which only instructors can access. This new interface represents the late day cache, giving instructors the choice to populate entries or clear the table as needed.

### Introducing Improvements

* To complement the filters added in the grading statistics page, I introduced additional Cypress End-to-End tests that use the filters to ensure that the displayed statistics align with the expected values.

* I modified the display names used by instructors and graders when addressing grade inquiries.

* Further, I introduced two new settings into the profile page, allowing for customizable sidebar display options. These settings offer users the choice to show only icons on narrow screens or to keep the sidebar expanded at all times, addressing both desktop and mobile interfaces. This adjustment addresses the previous issue where the sidebar would inconveniently collapse on narrower screens.

* With valuable assistance from Barb Cutler, I introduced the initial version of documentation that guides new developers and contributors in translating pages within Submitty.

* Furthermore, utilizing code previously implemented by fellow contributor Satvik Karanam, I contributed to the translation of Submitty's profile page into French. This marked the first translation beyond English in Submitty's supported languages.

* I enhanced the documentation to assist future contributors in addressing challenges I encountered, including troubleshooting the installation of a virtual machine using Vagrant and resolving issues related to generating and viewing Submitty webpages.


### Implementing Bugfixes

* I refactored the code responsible for displaying warning messages before late submissions because I discovered some inconsistencies. Previously, incorrect messages or no messages would appear due to the logic used to display the messages or the code inaccurately assessing the time against the deadline, which potentially misled students. The new code carefully addresses edge cases and eliminates the need to reload the submission portal after the due date has passed. This enables timely display of warning messages directly after the deadline, facilitated by a Javascript timer synchronizing with the server periodically.

* I identified and resolved an issue with a Submitty page that was causing excessive queries by adding it to the ignore list. Moving forward, the plan is to refactor the queries that are executed iteratively and combine them into a single larger query.

* I located and removed a duplicated faulty page that was appearing.

* I resolved an issue that prevented instructors from downloading student submissions.

### Acknowledgments

* I would like to express my gratitude to Barb Cutler and my fellow contributors during the summer for their assistance and guidance when I encountered challenges. I greatly appreciate the opportunity to work on Submitty during the summer.
