---
title: Jaeseok Kang
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2023
---

During the summer, I dedicated my efforts to a range of tasks for Submitty, including the development of new features, bug fixes, and code refactoring.

### RainbowGrades

Border-outline
 - One of the most noticeable change made in RainbowGrades this summer
 - Designed to indicate the status of individual gradeables
 - Implemented primary for instructors to discern status within large table

Git version
 - Displays RainbowGrades version based on user's local repository
 - Offers insight into potential discrepancies between the main and local version
 - Facilitates developers to trace issues when users patch their local RainbowGrades

Course Section ID (Course Registration Number)
 - Retrieves relevant data for each student from the database and renders it into individual report JSON files

iClicker Removal
 - iClicker was tool to assist students to participate in class replaced by Submini poll
 - Meticulously removed obsolete iClicker code from codebase

Future Works
 - Add version conflict status for border-outline
 - Redirect compilation output to a log file
 - Introduce Continuous Integration (CI) for RainbowGrades
 - Apply CSS enhancements to minimize repetitive HTML code
 - Refactoring the table to enable dynamical sorting, row hiding, and related improvements



### Web-based customization

Plagiarism Entries
 - Instructors are now able to input plagiarism data through the web GUI
 - Eliminates the need for manual editing of the customization.json file
 - Web has invalid entry check, for instance, duplicate entries which has advantage over editing json file directly
 - The web interface includes validation checks, such as preventing duplicates, offering an advantage over direct JSON file editing.

Display Options
 - Instructors can now choose the information to display using the web GUI
 - Eliminates the need for manual editing of the customization.json file 
 - Description of each display option elegantly collapses with CSS updates.

Future Works
 - Switch to seamless and simultaneous saving change from manually pressing Save Change button.
 - Enhance error handling, such as catching compilation errors and permission issues



### Submitty_test script

Submitty test
 - A newly introduced command, similar to "submitty_install_site," runs PHP static analysis/code sniffer into a single command
 - Simplify the local PHP linting process by eliminating the need to remember lengthy command lines or copy them from the website.
 - This script originally started as a personal tool for myself but evolved into a valuable resource for many developers
 - The decision to run it within Vagrant, despite the slower execution compared to host machines, was driven by the need for maintainability and cross-platform compatibility, prioritizing these aspects over runtime efficiency.

Future Works
- Expand by adding JavaScript, CSS, Python linting, and Unit tests
- Ultimately, the goal is to empower developers to run most CI processes locally, reducing GitHub CI load



### Query edits

Grading Stats
 - The grading stats page now features the count of unresolved inquiries assigned to each grader
 - Offer instructors to efficiently monitor and prompt the respective grader to complete their grading tasks

Future Works
 - Enhance the visual analysis and interpretation of the statistics
 - Provide user-friendly tools to manipulate the statistics
