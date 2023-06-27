---
title: Jerry Jiarui Lu
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2022
---

As a first-time developer, the initial few weeks were spent on
familiarizing myself with the codebase and setting up virtual machines.
Once I felt more comfortable and confident, I worked on smaller system-
related features such as Docker UI and worker status reports.

As the summer progressed, I was able to contribute to the auto-grading
system as well as new continuous integration checks.  In addition, I
also spent a significant amount of time implementing and porting the
development and test environments to HTTP/2 with TLS.


### Auto-grading Features/Bug fixes

- Logging errors from the auto-grading code runner;

- A string parser for submission size in gradeable configs;

- Fixed a possible racing condition in bulk regrading with workers;

- Gradeable-level build log.


### Worker Features

- Worker auto-exit when the disk space is critical;

- Refined Docker UI with more system information (services, OS, etc.);

- Worker update excluding list.


### System Features

- Scripts for dispatching daemon jobs;

- HTTP/2 for development, production and test environments;

- Scripts for generating, trust certificates system-wide.


### Misc

- Fixed missing images in Submini Polls;

- An auto-grading example with point deduction;

- CI checks for database dumps;

- Removed hard-coded arguments in scripts for creating sample courses;

- Fixed a permission error when displaying course materials.


### Future Work

- Fine-grained Docker permission control;

- HTTP early hints.
