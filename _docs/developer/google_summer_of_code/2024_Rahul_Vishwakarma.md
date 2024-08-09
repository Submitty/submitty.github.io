---
title: Rahul Vishwakarma
category: Developer > Google Summer of Code 2024
---

## About Submitty
Submitty is an open source course management, assignment submission, exam and grading system from the Rensselaer Center for Open Source Software (RCOS), Department of Computer Science at Rensselaer Polytechnic Institute.

## About My GSoC project
The primary goals for this project include the expansion of our automated testing of the TA Grading pages and to patch bugs uncovered by this improved testing. The project may be expanded in scope to additionally propose and execute small or modest user interface revisions that enhance the TA experience, especially for graders who are new to the interface and grading process.

## About My Work 
My first PR in Submitty is regarding the grade inquiry test which got closed after I raised pr for it because someone was already working on it, later I took the pr because the guy didn’t complete the work. So, I aim to expand cypress testing for the TA Grading Section. And try to fix the bugs and issues that I get during the testing and some other issues too. So I have done a lot of testing in Submitty as a GSoC contributor with the javascript and cypress tool till now.

## Visual Regression Testing 
For the visual testing with Cypress, we used the [cypress-image-diff](https://github.com/haim-io/cypress-image-diff) plugins it uses pixelmatch for the comparison of images based on what we provide the image in the baseline folder, [pixelmatch](https://github.com/mapbox/pixelmatch) is the simplest and fastest JavaScript pixel-level image comparison library and it relies on the cypress for taking the screenshots. 
I used the visual regression testing tool for testing the <b>Markdowns </b> and <b> Mermaid </b> flowcharts.

### Main PR's
* [Add tests for grade override](https://github.com/Submitty/Submitty/pull/10697)
* [Download Zip File](https://github.com/Submitty/Submitty/pull/10694)
* [Added Test for Grading Details UI](https://github.com/Submitty/Submitty/pull/10686)
* [TA Rubric Attachments Access](https://github.com/Submitty/Submitty/pull/10371)
* [Added Test for Peer Grading](https://github.com/Submitty/Submitty/pull/10560)
* [Selenium to Cypress office_hours_queue](https://github.com/Submitty/Submitty/pull/10357)
* [Added Test for Discussion Post Panel](https://github.com/Submitty/Submitty/pull/10536)
* [Forum Image attachment](https://github.com/Submitty/Submitty/pull/10348)
* [Added remaining test button in pdf](https://github.com/Submitty/Submitty/pull/10532)
*  [Cycling Grader View](https://github.com/Submitty/Submitty/pull/10333)
* [Testing TA Grading hotkeys](https://github.com/Submitty/Submitty/pull/10504)
* [Notebook Builder And Panel](https://github.com/Submitty/Submitty/pull/10766)
* [Rubric Grading Interface](https://github.com/Submitty/Submitty/pull/10755)


### Smaller / Bugfixes PR's
* [Fixed title and Shortcut for Notebook](https://github.com/Submitty/Submitty/pull/10511)
* [Uncaught Reference Error - self_grading undefined](https://github.com/Submitty/Submitty/pull/10557)
* [Issue Student and Grader should be Different](https://github.com/Submitty/Submitty/pull/10684)
* [TypeError NUM_MARKDOWN variable](https://github.com/Submitty/Submitty/pull/10725)
* [Uncaught SyntaxError Notebook](https://github.com/Submitty/Submitty/pull/10787)

### Other PR's
* [Cypress grade inquiries test](https://github.com/Submitty/Submitty/pull/10235)
* [Add cypress test for Rainbow Grading](https://github.com/Submitty/Submitty/pull/10255)
* [Implement Image Diff For Markdown](https://github.com/Submitty/Submitty/pull/10260)


## Overview
So, this has been the best experience of my life. Whenever I will think about open source Submitty will come first. I learned a lot of things from this organization technical and non-technical. I would like to thank <b>Cameron, Barb, William</b>, and other fellow GSoC and RPI contributors for supporting me. Every day(Monday to Friday) Barb leads an hour-long meeting to discuss the progress of GSoC and RPI contributors. Every Thursday, One-on-One interaction with Cameron through Zoom Call to discuss progress, new ideas, and issues regarding opened pr. At the last, it was great experience for me to working in a such a big team i never had work with such a big team.

For any inquiries, please feel free to contact me at [rahulvs2809@gmail.com](mailto:rahulvs2809@gmail.com)

Thank You Submitty,

[Rahul Vishwakarma](https://www.linkedin.com/in/rahul-vishwakarma-553874256/)