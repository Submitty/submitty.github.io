---
title: Garvit Khandelwal
category: Developer > Google Summer of Code 2026
---

# [AI/ML to Enhance and Streamline Manual/TA Grading](https://summerofcode.withgoogle.com/programs/2026/projects/e3YU9deG)

## Overview

The primary objective of my GSoC 2026 project was to enhance the manual TA grading experience by integrating AI/ML clustering algorithms. By intelligently clustering students with similar submissions together, TAs can now evaluate entire groups simultaneously, drastically reducing the time spent on manual grading.

While this might initially sound like a purely AI/ML-focused project, the reality was much broader. Because this was a completely novel feature for Submitty with absolutely no pre-existing architecture, the majority of my time was spent designing and implementing the complete full-stack architecture from the ground up to support these capabilities.

A key focus—and one of the biggest hurdles—was ensuring that the system remained entirely transparent and fair. We had to strike a delicate balance: providing the efficiency of AI clustering while guaranteeing that TAs retain complete, final control over the grading process to ensure fairness for every student. Building this foundational architecture from scratch while maintaining these strict standards made for an incredibly challenging and rewarding summer.

## About Me
Hello! I am a computer science undergraduate student at the Indian Institute of Technology, Mandi. Before GSoC, I honestly did not have any prior open-source contributions, so this program was my true starting point. The main reason I chose to work with Submitty was because I really liked the project, and the community was highly active and rewarding. Coming into the project, I had prior knowledge in domains like machine learning and deep learning, which aligned perfectly with the goals of this feature.

## Primary Contributions & Features

- **[Backend for submission clustering](https://github.com/Submitty/Submitty/pull/12886)**
  - **Status:** Merged
  - **Description:** The foundation of the project involved setting up the essential database architecture. This PR establishes a normalized database schema and introduces the necessary backend API endpoints to support clustering. The implementation was fully fortified with unit tests to ensure reliability.
  - **Technical Highlights:** PHP, Doctrine ORM, PostgreSQL

- **[Add submission clustering daemon](https://github.com/Submitty/Submitty/pull/13004)**
  - **Status:** Merged
  - **Description:** Running complex Python machine learning algorithms synchronously would block the UI and severely degrade the user experience. To solve this, this PR sets up a robust background daemon infrastructure. The clustering logic was refactored to offload processing to Python and raw SQL scripts, which are picked up by the daemon and executed asynchronously. Comprehensive Python unit tests were added to ensure stability.
  - **Technical Highlights:** Python, Daemon Infrastructure

- **[UI for clustering & table grouping](https://github.com/Submitty/Submitty/pull/12966)**
  - **Status:** Merged
  - **Description:** With the backend infrastructure in place, the next step was visualizing the clustered students. This PR introduces a "Create Cluster" modal where users can select their desired clustering algorithm (backed by the daemon). It also implements a "Group by Clusters" filter, seamlessly displaying students in a tabular format native to Submitty's design. Notably, as Submitty is migrating to Vue.js, this was the very first feature built entirely using Vue. Thorough testing was ensured via Cypress E2E, Cypress Component and PHPUnit tests. 
  - **Technical Highlights:** Vue.js, PHP, Twig, Cypress

- **[Cluster Grading](https://github.com/Submitty/Submitty/pull/13103)**
  - **Status:** Merged
  - **Description:** This PR bridges the gap between clustering students and actually helping TAs grade faster. It integrates the core functionality into the TA Grading (Rubric) page. I added intuitive UI toggle icons allowing TAs to seamlessly switch in and out of "Clustering Mode". When active, grading one student automatically applies that grade to the entire cluster. A major UI/UX challenge here was designing clear visual cues so TAs remain fully aware of the sweeping impact of their actions. This Vue-based feature is fully backed by Cypress tests.
  - **Technical Highlights:** Vue.js, PHP, Twig, Cypress

- **[Adding container for running custom algorithm](https://github.com/Submitty/DockerImages/pull/76)**
  - **Status:** Merged
  - **Description:** To support advanced customization, this PR introduces a dedicated Docker container pre-installed with popular machine learning libraries, isolating the execution environment for custom TA scripts.
  - **Technical Highlights:** Docker

- **[Custom Algorithm](https://github.com/Submitty/Submitty/pull/13176)**
  - **Status:** Open
  - **Description:** While predefined clustering algorithms are useful, every gradeable is unique, making it impossible to predict every grading scenario. This feature empowers instructors/TAs to upload custom Python scripts to define their own clustering logic. Because executing user-uploaded Python directly on the main server poses severe security risks, this PR leverages the newly built Docker container to safely run these custom algorithms in an isolated environment.
  - **Technical Highlights:** Vue.js, PHP, Docker

## Other PRs

Throughout the summer, I contributed to various other areas of the codebase, handling critical infrastructure issues, bug fixes, and performance optimizations. While a few major ones are highlighted below, a [complete list of my Pull Requests can be found here](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+author%3AGarvitKhandelwal31+is%3Aclosed).

- [[Refactor:System] Fix Failing CI/DB Check on Main](https://github.com/Submitty/Submitty/pull/13104): A significant system install refactoring PR inadvertently broke the CI/DB checks across the `main` branch. This PR investigated and successfully resolved the failing checks, restoring the CI pipeline.
- [[Bugfix:TAGrading] Fix PDF Header Overlap](https://github.com/Submitty/Submitty/pull/12793): Fixed a UI issue where the grading page header obscured the title of student-uploaded PDF files, significantly improving TA visibility and usability during grading.
- [[Bugfix:TAGrading] Fix Grade Override Logic](https://github.com/Submitty/Submitty/pull/12651): Resolved underlying logic bugs within the manual grade override system.
- [[Feature:RainbowGrades] Manual Upload Warning Banner](https://github.com/Submitty/Submitty/pull/12645): Added a warning banner that displays when users manually upload rainbow grades to prevent accidental data overrides.
- [[UI/UX:Forum] Forum UI Enhancements](https://github.com/Submitty/Submitty/pull/12622): Implemented several major UI improvements to enhance the user experience on the Submitty discussion forums page.
- [[Refactor:Autograding] Optimize PDF Redaction](https://github.com/Submitty/Submitty/pull/12471): Refactored the time required for PDF redactions by up to 2x.

## Code Reviews & Community Impact

Beyond authoring code, I actively dedicated a significant portion of my time to reviewing Pull Requests from across the entire codebase. Reviewing others' code was an invaluable experience; it rapidly accelerated my understanding of Submitty's massive architecture and allowed me to help shape the quality of the project. 

Thanks to Submitty's highly collaborative culture, I successfully reviewed a total of **[53 Pull Requests](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+commenter%3AGarvitKhandelwal31+-author%3AGarvitKhandelwal31+is%3Aclosed)** throughout my GSoC journey, actively participating in architectural discussions and ensuring high coding standards.

## Documentation

The complete user guide for this feature can be found in the official Submitty documentation here: 
- [Cluster Grading Documentation](https://submitty.org/grader/rubric_grading/cluster_grading)

## Work In Progress / Future Scope

There are still exciting enhancements left to build on top of this foundation. I have listed several tracking issues for the remaining features:

- [Feature: Delete Clusters](https://github.com/Submitty/Submitty/issues/13148)
- [Feature: Rename Clusters](https://github.com/Submitty/Submitty/issues/13147)
- [Feature: Visualize Clustering Data](https://github.com/Submitty/Submitty/issues/13116)

## Reflection

Working on such a massive, widely-used codebase and implementing a feature of this scale from scratch was an extraordinary experience. Throughout this journey, I upskilled significantly, mastering new technologies and learning how to architect complex, full-stack systems. As I mark the end of my GSoC project, I would like to express my deepest gratitude to my mentors:

- **[William J Allen](https://github.com/williamjallen):** Beyond all the technical help, I am incredibly grateful for the numerous technologies I learned from him along the way. His brilliant code reviews, extraordinary ideas, and structural guidance on how to build a feature of this scale were truly invaluable.
- **[Professor Barbara Cutler](https://github.com/bmcutler):** Barb held daily meetings, which made iterating on ideas incredibly fast. Her suggestions and perspectives fundamentally improved this feature. The most essential lesson I learned from her was how to truly think from the perspective of the end user.

I would also like to thank the fellow RPI contributors. Their suggestions, feedback, and thorough reviews on my PRs were instrumental in polishing this project. A big thanks to my fellow GSoC mates as well for the shared camaraderie.

Finally, I am deeply grateful for this incredible opportunity. Thank you!

## Contact Me

If you have any questions or want to discuss this project further, feel free to reach out to me!
- **Email:** [garvitkk2006@gmail.com](mailto:garvitkk2006@gmail.com)
- **LinkedIn:** [Garvit Khandelwal](https://www.linkedin.com/in/garvit-khandelwal-894a81350/)