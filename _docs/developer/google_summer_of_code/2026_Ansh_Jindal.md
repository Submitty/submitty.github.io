---
title: Ansh Jindal
category: Developer > Google Summer of Code 2026
---

# [Interactive User Interfaces With Vue.js — Submitty](<https://summerofcode.withgoogle.com/myprojects/details/stDoMv66>)

## At a Glance

- [**30**](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+is%3Amerged+author%3Ajndlansh) PRs merged into production · [**19**](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+commenter%3Ajndlansh+-author%3Ajndlansh+is%3Aclosed)  reviewed for teammates · [**1**](https://github.com/Submitty/Submitty/pull/12659) taken over from other devs
- Stack:  Vue.js, TypeScript, JavaScript, Twig, Cypress,  PHP, Oracle Virtual Box, Vagrant
- Shipped: Designed and built an architecture upon which the entire codebase will be migrated to Vue.js from jQuery and Twig
- [Full commit history](<https://github.com/Submitty/Submitty/commits?author=jndlansh>) · [All merged PRs](<https://github.com/Submitty/Submitty/pulls?q=is%3Apr+is%3Amerged+author%3Ajndlansh>)

## Overview

Migrated Submitty's frontend from jQuery + Twig to Vue.js, restructuring logic scattered across dozens of files into self-contained single-file components. Rather than a risky full frontend rewrite, I designed a component-by-component migration path that let the legacy and Vue systems coexist safely in production throughout the transition. To guarantee each migrated component behaved correctly before merge, I introduced Cypress component testing as part of the migration workflow — giving the team a repeatable safety net for every future component, not just mine.

## About Me

Hello! My name is Ansh Jindal, pursuing B.Tech in Information Technology at College of Technology, Pantnagar. The Submitty community was hyperactive and rewarding - that is what kept me contributing well past my initial PRs

## Primary Contributions
### Vue component re-render (Migrate ReceivedMarkForm to Vue)

**[PR #12910](https://github.com/Submitty/Submitty/pull/12910)** — This PR introduced the re-render of a Vue component without unmount and remount. Saves stale copies of a Vue app and prevents memory leaks.


**Stack:** Vue.js, twig, TypeScript, Cypress · **Status:** Merged

### Migrate PanelSelectorModal to Vue in TAGrading

**[PR #12901](https://github.com/Submitty/Submitty/pull/12901)** — In this PR, I refactored the PanelPositionSelector to work in sync with the Parent Vue component and remove all the junk files that previously made the component work.

**Stack:** Vue.js, twig, TypeScript, Cypress · **Status:** Merged

## Infrastructure & Tooling
### Cypress component testing for Vue
**[PR #12836](https://github.com/Submitty/Submitty/pull/12836)** — This PR introduces cypress component testing in the Submitty Codebase

**Stack:** YML, TypeScript, Cypress, HTML, JSON · **Status:** Merged

### Code coverage for Component tests
**[PR #12959](https://github.com/Submitty/Submitty/pull/12959)** — This PR adds code coverage for Cypress Component Tests · Enables coverage in CI · Uploads the reports to Codecov · Adds a dedicated cypress-component Codecov flag · Surfaces the coverage directly in the PR comment

**Stack:** YML, JavaScript, TypeScript, JSON · **Status:** Merged

### Events mapping infrastructure for Vue migration
**[PR #12959](https://github.com/Submitty/Submitty/pull/12959)** — I designed a component-by-component migration setup for Vue components

**Stack:** YML, JavaScript, TypeScript, JSON · **Status:** Merged

## Other PRs

- [TA Grading Refactors](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+author%3Ajndlansh+is%3Aclosed+in%3Atitle+%22%5BRefactor%3ATAGrading%5D%22) 
- [Discussion Forum Refactors](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+author%3Ajndlansh+is%3Aclosed+in%3Atitle+%22%5BRefactor%3AForum%5D%22+)

[Full list of merged PRs →](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+author%3Ajndlansh+is%3Amerged)

## Code Reviews & Community Impact

Reviewed **[18 Pull Requests](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+commenter%3Ajndlansh+-author%3Ajndlansh+is%3Aclosed)** from other contributors, Reviewing others' code was an invaluable experience as it accelerated my understanding of Submitty's massive architecture and allowed me to help shape the quality of the project.

## Documentation

- I documented the Infrastructure and architecture I designed in Google Slides Presentation - "_How To Develop in Vue_". This acts as a guide for all the new developers to understand how to refactor component to Vue.js from twig+jQuery.

## Reflection

The hardest part of the summer wasn't writing Vue components — it was designing a migration architecture that other developers, including ones who'd never touch my code, could reuse without understanding my full mental model. Every decision had to be reproducible: could the next contributor apply this pattern to their component without asking me first? With guidance from my mentors, I landed on an approach that's now migrated 30 components and is structured to scale to the rest of Submitty's codebase. That shift — from "does my code work" to "will this pattern hold up when someone else uses it" — was the biggest jump in how I think about engineering this summer.

## Thanks

- **[Justin Manion](https://github.com/JManion32):** Helped me scope the project correctly when it started pulling in more directions than one summer could cover, and kept pushing for production-quality code over quick fixes..
- **[William J Allen](https://github.com/williamjallen):** Reviewed and pressure-tested the migration architecture design with me. The reusable pattern only works because he caught the edge cases I'd missed early on.
- **[Barbara Cutler](https://github.com/bmcutler):** Unblocked me on Submitty's broader architectural decisions and gave context on why certain legacy patterns existed, which shaped how I approached the migration.

## What's Next

- **Mentor new developers** – Having felt the challenge of learning Submitty's large codebase as a newcomer myself, I want to help new contributors ramp up faster than I did.
- **Complete the TA Grading Module migration to Vue.js** – it's Submitty's most heavily used interface, so migrating it fully would deliver the biggest reliability and maintainability payoff of any remaining module.
- **Explore WebSockets** – the discussion forum needs real-time updates, and the current setup can't do that yet.

## Contact

- **Email:** <jndl.ansh@gmail.com>
- **LinkedIn:** [Ansh Jindal](https://www.linkedin.com/in/ansh-jindal-b9201a28b/)
- **GitHub:** [jndlansh](https://github.com/jndlansh)