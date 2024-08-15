---
title: Nithish Reddy Banda
category: Developer > Google Summer of Code 2024
---

My project for Google Summer of Code 2024 focused on extending and generalizing Submitty's autograding features to support multi-language compatibility and ensure seamless execution within Docker environment. This enhancement is vital for maintaining system stability under load on the primary machine. In addition to this core development, I also significantly improved the visual design of the diff viewer for autograding results, enhancing the user experience. Furthermore, I strengthened security measures in the peer grading process and implemented features aimed at reducing potential complexity for peer graders.

I am [Nithish Reddy Banda](https://github.com/GO-viper7), Computer Science graduate from [Indian Institute of Information Technology, Sri City](https://www.iiits.ac.in/).

This project was mentored by [Barbara Cutler](https://github.com/bmcutler).

## Autograding and Peer Grading in Submitty

Submitty uses configuration files to build gradeables, so I first had to familiarize myself with how these files are utilized. Some autograding features use these config files to validate submitted outputs against those provided by instructors. I spent a considerable amount of time understanding this workflow and eventually expanded the usage of instructor solutions to C++ by introducing new specifications in the config files, generalizing the process for other programming languages as well.

Submitty also employs worker threads to ship files to secure environments for autograding, such as Jailed sandboxes and Docker container networks. I became familiar with these distributed workflows and utilized these threads to parallelly build the gradeables.

Peer grading is another area where I made significant contributions. I implemented functionality that enables instructors to manage the visibility of panels for peer graders, thereby minimizing ambiguity. Additionally, I fixed a major security flaw that allowed peer graders to grade their own team members.

Beyond these tasks, I contributed to numerous bug fixes, including issues within the calendar, gradeable dates, team name constraints and etc. The contributions I made this summer greatly enhanced my understanding of Object-Oriented concepts, database migrations, ORMs, Docker containers, non-repeatable and modular code, security and concurrency concepts, and most importantly, team collaboration. 

### Pull Requests in Autograding

- [Instructor Solution written in C++](https://github.com/Submitty/Submitty/pull/10608)
- [Distinguish Insertion/Deletion results](https://github.com/Submitty/Submitty/pull/10752)
- [Add Missing examples to Development](https://github.com/Submitty/Submitty/pull/10535)

### Pull Requests in Peer Grading

- [Grading panel visibility to Peer Graders](https://github.com/Submitty/Submitty/pull/10193)
- [Unassign graders to grade team members](https://github.com/Submitty/Submitty/pull/10178)

### Bugfixes and Refactors

- [Change of constraints in team name](https://github.com/Submitty/Submitty/pull/10111)
- [Accessing future gradeables in calendar](https://github.com/Submitty/Submitty/pull/10240)
- [Due date validation for isStudentSubmit](https://github.com/Submitty/Submitty/pull/10264)
- [Rendering Team IDs for Graders](https://github.com/Submitty/Submitty/pull/10266)
- [Redirect out of submission if no team](https://github.com/Submitty/Submitty/pull/10356)
- [Use of data- selector instead of class's](https://github.com/Submitty/Submitty/pull/10236)

### Pull Request in Localization

- [Complete French translation for Profile](https://github.com/Submitty/Localization/pull/16)

### Acknowledgements:

I am incredibly grateful for the invaluable support and insights offered by my mentor, Barbara Cutler and fellow contributors from RCOS. Their swift responses to my questions and their consistent supply of vital resources have significantly contributed to my progress. I really enjoyed our meetings, especially the demos where everyone contributes their thoughts on designing features. I also want to acknowledge the hard work of the dedicated RPI students and fellow GSoC contributors who worked alongside me to improve Submitty over the summer. This project has been a deeply rewarding experience, providing me with valuable skills and knowledge. I look forward to continuing my contributions to Submitty in the future. 

For any questions, feedback, or further information, don't hesitate to reach out to me at **[nithishbanda2021@gmail.com](mailto:nithishbanda2021@gmail.com)**.

Thank you,
**[Nithish Reddy Banda](https://www.linkedin.com/in/nithish-reddy-goviper/)**.