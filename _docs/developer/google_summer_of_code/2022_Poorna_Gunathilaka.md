---
title: Poorna Gunathilaka
category: Developer > Google Summer of Code 2022
---

My Google Summer of Code project with Submitty is to revamp the `count` static analysis tool.
`count` tool is used in Submitty to verify that the student submissions contains specific language features. The existing `count` tool did not support some new python features and was not working correctly for C/C++ programs.

The new `count` tool implementation is based on [tree-sitter](https://tree-sitter.github.io/tree-sitter/) and uses an Abstract Syntax Tree generated from `tree-sitter`.
Implementation of this new tool is carried out in the [AnalysisToolsTS](https://github.com/Submitty/AnalysisToolsTS) repository.

Initially there was an implementation of `count` tool with basic functionality using `tree-sitter` Javascript bindings. I first tried to integrate this implementation to the Submitty autograding commands. Unfortunately this was not working due to system call filtering which was preventing a nodeJS program from running in autograding.

Next I tried to implement `count` tool using the `tree-sitter` C-API. I first verified that it was possible to use the C-API implementation with Submitty autograding without running into runtime limits or system call filtering. I initially added support for counting C, C++ and Python. Later I added support for Java.

While working on this project I got to work with C, C++, bash and python. I wrote few github actions which does C++ static analysis of the source code, Shell checks and run tests.

Documentation for the new command is added to the website.

I also got the chance to work with docker container. Submitty autograding can be run in a docker container. The dockerfiles relevant to these docker containers had to be updated to the include the new `count` command. To keep the size of the docker images minimal it was decided only to include the binaries in docker images. Therefore I created a new github action in the AnalysisToolsTS repo which builds binaries from the source code when a new release is made. These binaries were then used in the docker images.

#### Main Pull requests in AnalysisToolsTS:
- [[Feature:Autograding] tree-sitter c-api](https://github.com/Submitty/AnalysisToolsTS/pull/2)
- [[Feature:Autograding] Add Java counting](https://github.com/Submitty/AnalysisToolsTS/pull/9)
- [[Feature:Developer] Build binaries on release](https://github.com/Submitty/AnalysisToolsTS/pull/6)


## Other contributions

While working on the `count` command, I also worked on autograding features and bugfixes in Submitty main repository.


#### BugFixes
- [[Bugfix:Autograding] Success, information messages not shown](https://github.com/Submitty/Submitty/pull/8264)
- [[Bugfix:Autograding] Random input-output build](https://github.com/Submitty/Submitty/pull/8185)
- [[Bugfix:InstructorUI] Peer graders grading themselves](https://github.com/Submitty/Submitty/pull/7983)
- [[Bugfix:TAGrading] Nav buttons not entirely clickable](https://github.com/Submitty/Submitty/pull/7963)
- [[Bugfix:TAGrading] Fix broken Home link in TA grading](https://github.com/Submitty/Submitty/pull/7800)
- [[Bugfix:TAGrading] Fix turning off random order](https://github.com/Submitty/Submitty/pull/7799)
- [[Bugfix:Submission] Fix bad breadcrumb link for peer grading](https://github.com/Submitty/Submitty/pull/7783)
- [[Bugfix:CourseMaterials] Restrict course material for no section](https://github.com/Submitty/Submitty/pull/7770)

#### Features
- [[Feature:Autograding] Tolerance check in diff validator](https://github.com/Submitty/Submitty/pull/8251)
- [[Feature:Autograding] Environment variables in config.json](https://github.com/Submitty/Submitty/pull/8086)
- [[Feature:Autograding] Autograding command json file](https://github.com/Submitty/Submitty/pull/8046)
- [[Feature:Autograding] Add comment counting](https://github.com/Submitty/Submitty/pull/8035)

I also got the chance to review Pull requests. This was my first experience with reviewing pull requests

## Acknowledgement:

I am grateful for the guidance and advices received from my mentors Barbara Cutler and William Allen. I always got quick responses on my queries and I got the resources and advices I needed to work with. I am also grateful for the RPI students and fellow GSOC-contributors who worked on Submitty during the summer. I had a wonderful time working on this project and gained valuable experience.
