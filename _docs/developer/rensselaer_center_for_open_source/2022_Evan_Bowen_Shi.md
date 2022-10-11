---
title: Evan Bowen Shi
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2022
---

In the summer of 2022, I spent the first month learning the design and structure of submitty as well as the basics of languages such as PHP and JavaScript to get myself started. Then, for the rest of the summer, as I became more familiar with Submitty and I worked mainly on improving various aspects of PDF functionalities in the grading interface, especially in PDF annotation. I also spent a significant amount of time working on the expected string feature, which allows the usage of "expected_string" on assignment configurations.

### PDF annotation
PDF annotation is a feature that allows graders to make custom marks over submitted PDF files during grading. Some of the work I did regarding PDF annotation consisted of:
- Updated the pdf-annotate.js package and fixed the issues related to creating custom marks.
- Improved the view/download functionality in the grading interface for annotated PFD files for security purposes.
- Created sample gradables that use PDF annotation functionalities inside the development environment for testing purposes.
- Removed numerous server-side errors.
- Resolved minor user-interface misalignment in the grading results interface.

### Expected String
When creating a new gradeable, instructor users need to specify the full path to the auto-grading configuration config.json file, where they can only set answers by giving a file and using the "expected_file" option. Therefore, I provided an alternative usage of "expected_string" so that instructor users can enter the solutions in a string format. In addition to the feature, I added samples and automatic testing cases. The implementation is based on Eddie Krystowski's previous work.

### Smaller Tasks
Here are some smaller front-end oriented tasks I worked on this summer:
- Fixed the elements overlapping issue in mermaid sequence diagrams for network gradeables.
- Enhanced the simple-grading interface by removing ambiguities.
- Polished the bulk-submission interface.

### Future Work
In my work to add the expected string functionality, I noticed that the code responsible for creating the diff-view for the expected and actual solution locates mainly inside a custom class called DiffViewer. Since the code was written long ago and the implementation is rather lengthy, I believe it is best to refactor the functionality using CodeMirror entirely. Even though I am unlikely to finish the work this summer, I plan to continue working on the diff-view refactoring as I transition into the coming fall semester. In particular, future works are needed in the following general areas:
- Using CodeMirror's merge addon for displaying the diffs.
- Preserving the "Visualize whitespace characters" functionality through CodeMirror.
- Designing the desired diff-view interface.
	- Side by side versus stacked view.
	- Handling of extra wide output.
