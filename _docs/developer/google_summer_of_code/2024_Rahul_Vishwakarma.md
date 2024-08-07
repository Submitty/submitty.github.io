---
title: Rahul Vishwakarma
category: Developer > Google Summer of Code 2024
---

## About Submitty
Submitty is an open source course management, assignment submission, exam and grading system from the Rensselaer Center for Open Source Software (RCOS), Department of Computer Science at Rensselaer Polytechnic Institute.

## About My GSoC project
The primary goals for this project include the expansion of our automated testing of the TA Grading pages and to patch bugs uncovered by this improved testing. The project may be expanded in scope to additionally propose and execute small or modest user interface revisions that enhance the TA experience, especially for graders who are new to the interface and grading process.

## About My Work 
My first PR in submitty is regarding grade inquiry test which got closed after some time when i raised pr for it because someone is already working on it, later i take the pr reason being that guy didn't complepted the work. So, basically my aim is to expansion of cypress testing for the TA Grading Section. And try to fix the bug and issue what i get during the testing and some other issue too. So i have done alot of testing in Submitty as GSoC contributor with the javascript and cypress tool till now.

## Visual Regression Testing 
For the visual testing with the cypress, we used the [cypress-image-diff](https://github.com/haim-io/cypress-image-diff) plugins so basically it uses [pixelmatch](https://github.com/mapbox/pixelmatch) for the comparsion of images based on what we provide the image in baseline folder, pixelmatch is simplest and fastest JavaScript pixel-level image comparison library and it relies on the cypress for taking the screenshots.
<br>
We used the visual regression testing tool for testing the <b>Markdowns</b> and <b>Mermaid</b> flowcharts.


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
