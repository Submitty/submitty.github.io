---
title: Sahil Suman
category: Developer > Google Summer of Code 2024
---

# GSoC Final Submission Review: Streamlining the Notebook Builder UI for Automated Grading

Participating in the Submitty project during GSoC has been a transformative experience, offering a deep dive into software development, communication with mentors, and hands-on problem-solving. My project focused on enhancing the Notebook Builder, a user interface that allows instructors to create interactive notebooks. These notebooks can be used as tutorial teaching materials or web-based exams, supporting basic markdown text formatting and various types of student input, such as multiple choice, short answers, and syntax-highlighted code boxes.

## Pull Requests

Throughout this project, I raised several pull requests (PRs), each contributing to the functionality and usability of the Notebook Builder:

### [Bugfix: Submission] Added Note to Absence Extension  
**PR #10044**  
I addressed an issue where the text for excused absence extensions needed clearer communication in the student view within rainbow grades.

### [Bugfix: Instructor UI] Upload Validation Error  
**PR #10048**  
This PR introduced a validation error for instructors attempting to upload PDFs with incorrect page counts. Instead of adding a PHP dependency, I utilized a Python daemon worker, which already had the necessary dependencies installed, streamlining the solution.

### [Feature: Submission] Hide Accessibility Text for Disabled  
**PR #10649**  
This feature focused on hiding accessibility help text in CodeMirror when code boxes are disabled, as the text was causing confusion in these scenarios.

### [Feature: Instructor UI] Course Material Tracking  
**PR #10650**  
I added database migration to support course material tracking. Given Submitty's unique DB migration system, this required extensive testing and careful implementation to ensure reliability.

### [UI/UX: Submission] Notebook Button Styling  
**PR #10768**  
I addressed several styling issues, ensuring the notebook buttons adhered to the standard website color guide, improving the overall UI consistency.

### [Bugfix: Submission] Moved Text Outside the Label Tag  
**PR #10040**  
This PR fixed a bug where a warning message appeared incorrectly when the "hide from students" option was selected. I adjusted the label structure to resolve the issue.

### [Documentation: Developer] Update Advanced Setup Guideline  
**PR #606**  
While setting up Submitty locally, I identified areas for improvement in the setup guidelines and added screenshots and instructions to enhance the developer experience.

## Work in Progress PRs

### [UI/UX: TAGrading] Notebook Preview Button  
**PR #10788**  
This PR introduces a preview button in the Notebook Builder section, allowing users to see how the notebook will look on the student end.

### [Feature: Submission] Autosave on Notebook Gradeable  
**PR #10875**  
This PR introduces an autosave feature for Notebook. Now, whenever any option is changed in the Notebook Grading interface, the system will automatically save the changes to the server. This enhancement aims to prevent data loss and improve the overall user experience by ensuring that no changes are inadvertently lost.

### [Bugfix: TAGrading] Improve Date Validation  
**PR #10876**  
This pull request introduces an additional try-catch block to handle errors more effectively. Instead of displaying the frog error page, the error will now be caught and thrown appropriately.

## Acknowledgements

I am deeply grateful to Barbara Cutler and William Allen for their invaluable support throughout this project. Barbara provided crucial insights into the project's broader scope, while William's regular meetups were instrumental in guiding me through PHP debugging and best practices, especially as a newcomer to the language.

Thank you,  
**Sahil Suman**
