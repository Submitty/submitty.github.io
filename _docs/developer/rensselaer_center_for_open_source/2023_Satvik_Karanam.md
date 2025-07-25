---
title: Sátvik Karanam
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2023
---

During the summer of 2023, I concentrated on several major development initiatives, which are detailed below. Alongside these projects, I played a key role in developing new features, resolving bugs, reviewing over 20 pull requests, and submitting more than 25 of my own. I actively participated in daily meetings to discuss design decisions and monitor progress, working closely with a team of full-time student developers and remote contributors.

### Porting End-to-End Tests from Selenium WebDriver to Cypress

At the start of the summer, we had two sets of end-to-end tests, one suite written in Selenium and one in Cypress, with a sizeable overlap in their coverage. Both were configured to run as GitHub Workflows, which slowed down development. Many of the Selenium tests were heavily outdated and disabled from running at all in the cloud, and it seemed that Cypress was more convenient for development and generally more up-to-date. Hence, I started the long-term goal of porting all existing Selenium tests over to Cypress, writing up issue [Submitty#9335](https://github.com/Submitty/Submitty/issues/9335) to organize and facilitate this. I proceeded with porting the W3 accessibility test, which involved rewriting a Python script into JavaScript code while keeping the Java dependency intact.

### Multi-worker HashiCorp Vagrant Setup

In a production environment, Submitty uses separate worker machines to which it delegates autograding jobs. For testing and developing this functionality, it is necessary for developers to be able to run virtual machines on their development machine to act as workers. With the existing setup, it was possible to run one worker machine alongside the main VM, but in order to develop new features such as parallelizing worker updates, it became necessary to be able to launch multiple worker VMs in a development environment. So in [Submitty#9537](https://github.com/Submitty/Submitty/pull/9537), I refactored the existing system for configuring worker machines and added functionality to create multiple worker VMs simultaneously alongside the main development VM. This involved updating shell scripts, configuration files, and writing Python scripts to facilitate the new setup

### Refactoring PostgreSQL Trigger Functions into Version-Controlled Files to Enhance Maintainability

In the existing migration system for Submitty, any migration that modified a PostgreSQL database trigger function needed to copy the entire body of the function into the migration code and then make alterations to it. This made it difficult to recognize the code changes to the function body in reviews, and to track the history of these changes as well. After discussing possible solutions, it was decided that it would be best to store the trigger functions in separate files and write Python scripts to load them in separately on migrations, which I implemented as part of [Submitty#9452](https://github.com/Submitty/Submitty/pull/9452).

### Automating Repository Release Updates with GitHub Actions

The main Submitty repository depends on several other repositories maintained separately, including Lichen, RainbowGrades, AnalysisTools, and Localization. Previously, making a new release in one of these repositories meant that the pinned version in the Submitty repository needed to be updated manually, which was difficult to manage as all other dependencies were handled automatically through Dependabot. As part of [Submitty#9495](https://github.com/Submitty/Submitty/pull/9495), I created a system to automate the sending of release updates to the main Submitty repository using Python scripts and GitHub Actions.

### Refactoring JavaScript Cookies

After years of development by generations of students, Submitty’s frontend was comprised of a ton of JavaScript code, both in script files and embedded into Twig documents. There were numerous coding styles and design patterns used across different areas of the client side code, one example being methods for retrieving and storing data in cookies. While some files used a long regular expression that was duplicated on each line for retrieving a cookie, others defined their own functions for getting and setting cookies. Through [Submitty#9314](https://github.com/Submitty/Submitty/pull/9314), I refactored the frontend to consolidate the usage of cookies across all JavaScript code on Submitty using a third-party library that was imported into each file. This ensured that whenever code needed to read or write cookies, its behavior would be predictable and consistent with the rest of the site.

Furthermore, many areas of the site used cookies in a disorganized and error-prone way, the most problematic instance being present on the Course Materials page, where cookies were used to track the state of the file tree (i.e. which directories are expanded and collapsed). For this, separate cookies were created with URL encoded paths of each directory, which significantly polluted the namespace. With [Submitty#9404](https://github.com/Submitty/Submitty/pull/9404), I refactored this logic such that all file tree data was stored in a single cookie, which cleaned up a lot of the clutter in Submitty’s cookie storage.


### Localization of Submitty

Wrapping up this summer, I took on the task of finishing up a longer-term goal I had started in the spring, which was the creation of a system to localize Submitty’s frontend. This would allow different users to view and interact with the website in various languages other than English.

The largest component of this system was developed in [Submitty#9079](https://github.com/Submitty/Submitty/pull/9079). This included methods for displaying text in Twig templates as language keys rather than simple plaintext. With this, the sysadmin could now choose a different language for their Submitty instance to use, with all untranslated strings falling back to the “English (US)” locale. The idea was that this would lay the groundwork for schools in foreign countries with non English-speaking students and staff to use Submitty as well, once enough users submitted translations for their language. Most of the challenges on this PR were related to designing the system while keeping in mind several issues such as performance, ease of translation, ease of future development, etc. The design went through several iterations since May before finally settling on the current system which was merged in August.

Another component which was being developed in parallel was the ability for users to set a language different from the site’s default in their accounts. This would allow for students who are more comfortable in a different language from the one chosen by their school to access Submitty in the most convenient way for them. This functionality was developed in [Submitty#9415](https://github.com/Submitty/Submitty/pull/9415) and merged shortly after the previous localization PR.

