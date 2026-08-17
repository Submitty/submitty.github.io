---
title: Ansh Jindal
category: Developer > Google Summer of Code 2026
---

# [Interactive User Interfaces With Vue.js — Submitty](<https://summerofcode.withgoogle.com/myprojects/details/stDoMv66>)

## At a Glance

- [**26**](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+is%3Amerged+author%3Ajndlansh) PRs merged into production · [**18**](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+commenter%3Ajndlansh+-author%3Ajndlansh+is%3Aclosed)  reviewed for teammates · [**1**](https://github.com/Submitty/Submitty/pull/12659) taken over from other devs
- Stack:  Vue.js, PHP, Cypress, Twig, TypeScript, JavaScript, Oracle Virtual Box, Vagrant
- Shipped: Designed and built an architecture upon which the entire codebase will be migrated to Vue.js from jQuery and Twig
- [Full commit history](<https://github.com/Submitty/Submitty/commits?author=jndlansh>) · [All merged PRs](<https://github.com/Submitty/Submitty/pulls?q=is%3Apr+is%3Amerged+author%3Ajndlansh>)

## Overview

Migrated Submitty's frontend from jQuery + Twig to Vue.js, restructuring logic scattered across dozens of files into self-contained single-file components. Rather than a risky full frontend rewrite, I designed a component-by-component migration path that let the legacy and Vue systems coexist safely in production throughout the transition. To guarantee each migrated component behaved correctly before merge, I introduced Cypress component testing as part of the migration workflow — giving the team a repeatable safety net for every future component, not just mine.

## About Me

Hello! My name is Ansh Jindal, pursuing B.Tech in Information Technology at College of Technology, Pantnagar. The Submitty community was hyperactive and rewarding - that is what kept me contributing well past my initial PRs

---

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

--- 