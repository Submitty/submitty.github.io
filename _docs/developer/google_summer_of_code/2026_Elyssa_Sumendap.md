---
title: Elyssa Sumendap
category: Developer > Google Summer of Code 2026
---

## Overview
For Google Summer of Code 2026, I worked on my project Refining and Updating Submitty’s Scripts and API for Submitty. My goal with this project was to refactor a selection of Submitty’s bash scripts to python so that they call the API instead of touching the database directly. This endeavor led to me creating new API routes and furthermore gaining interest in reorganizing existing API code into a dedicated, mirrored structure for controllers and tests.

## Primary Contributions

### Added API route to addNewTerm

**[PR #12961](https://github.com/Submitty/Submitty/pull/12961)** — Term creation previously had no API route. This PR exposes term creation as an API endpoint, updates error/success responses to return JSON so API callers get structured responses instead of HTML, and adds Cypress coverage for the new endpoint.

### Restructuring of Term API code

**[PR #13060](https://github.com/Submitty/Submitty/pull/13060)** — API code was spread across many files with no dedicated home. This PR introduces a dedicated `api/` folder for API controllers (starting with `TermController.php`), with mirrored, dedicated folders for the Cypress e2e API tests and PHP unit tests, establishing the pattern the rest of the API restructuring follows.

### Token API restructuring

**[PR #13162](https://github.com/Submitty/Submitty/pull/13162)** — Continues the API restructuring by moving the token endpoints into their own dedicated `TokenController.php` in the new API folder.


### Adding term date visibility

**[PR #13056](https://github.com/Submitty/Submitty/pull/13056)** — Course creation gave no visibility into term start/end dates, making it easy to create terms with overlapping dates. This PR makes visible term date ranges during course creation and adds a table of all existing terms (with status: future / active / ended) to the term creation modal.

### Python conversion of create_course.sh

**[PR #12916](https://github.com/Submitty/Submitty/pull/12916)** — Began converting `create_course.sh`, which creates courses via direct database calls, into a Python script.


## Other PRs

- [Pylint enablement across sbin scripts](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+author%3Aelsume+is%3Amerged+in%3Atitle+%22Enable%22+in%3Atitle+%22Pylint%22) — enabled pylint on `json_syntax_checker.py`, `workers.py`, and `generate_workers.py`
- [PR #12699](https://github.com/Submitty/Submitty/pull/12699) — Fixed released date when uploading
- [Documentation PR](https://github.com/Submitty/submitty.github.io/pull/776) - Fixed a PHPUnit command typo

## Code Reviews & Community Impact

Reviewed various pull requests from other contributors, spanning TA Grading's Vue migration, Rainbow Grades, and Instructor UI fixes:

- [PR #13108](https://github.com/Submitty/Submitty/pull/13108) — [Feature:TAGrading] Peer Grading File Restriction
- [PR #13045](https://github.com/Submitty/Submitty/pull/13045) — [Refactor:RainbowGrades] More verbose log messages
- [PR #13028](https://github.com/Submitty/Submitty/pull/13028) — [Bugfix:RainbowGrades] Revert accidential changes
- [PR #13020](https://github.com/Submitty/Submitty/pull/13020) — [Refactor:TAGrading] Migrate Rubric Header Score to Vue
- [PR #13019](https://github.com/Submitty/Submitty/pull/13019) — [Refactor:TAGrading] Migrate MarkSelector to Vue
- [PR #12953](https://github.com/Submitty/Submitty/pull/12953) — [Bugfix:InstructorUI] Fix Manage Students Toggle Columns
- [PR #12914](https://github.com/Submitty/Submitty/pull/12914) — [Bugfix:InstructorUI] Recentering Grading Panel Navbar
- [PR #12713](https://github.com/Submitty/Submitty/pull/12713) — [Bugfix:TAGrading] comment box formating in ta grading
- [PR #12702](https://github.com/Submitty/Submitty/pull/12702) — [Refactor:Developer] Split install_site script


## Reflection

Working on Submitty throughout this summer has been a very rich experience in practicing my skills in a real-world project and pushing myself to learn something new every day. The collaborative team culture let me have a glimpse into how a professional developer would be expected to perform and how a proper team would function. Having daily meetings for the weekdays was very helpful and I greatly appreciate the structure that it gave me. My mentors were always ready to help and guide me, and there was always much to learn from the other members of our development team as they discussed their own PRs or worked to solve an issue together.

Receiving feedback from the team through PR reviews and comments was also very insightful to me, and I was able to learn a lot from them regarding better code standards and where I could improve. Being able to review others' PRs was also a good opportunity for me to practice clear communication and better critical thinking to properly evaluate code and catch potential issues. Having to learn the codebase was also a challenge I was happy to take on. It was a great opportunity to practice my skills in code reading and comprehension. 

As this was my first time working with back-end development, I can say that my time in Submitty working on my project has greatly improved my development as a programmer. I am very much grateful to the mentors who were there to assist in fostering my growth throughout this summer -- Cameron Peterson, Barbara Cutler, and William Allen. My time here will be an experience I can say taught me a lot and gave me much experience that no doubt will serve me well in whatever comes next.

Thank you,  
[Elyssa Sumendap](https://github.com/elsume)