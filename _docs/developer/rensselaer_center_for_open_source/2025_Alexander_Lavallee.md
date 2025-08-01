---
title: Alexander Lavallee 
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2025
---

While there were many things I did during the summer, there are two main projects I worked on.

## Bulk Upload Redactions

Previously, when an exam was uploaded to a gradeable with anonymous grading enabled, graders would frequently still be able to see the student names on the uploaded files. During this summer I worked on a feature that automatically redacts instructor-specified regions of the uploaded files, hiding all sensitive information from the graders. This involved adding a configuration item for instructors to specify the regions to redact, and edits to our job queue system to handle the redaction and re-redaction processes.

![Configuration](/images/start_redactions.png)

![Bulk Upload Redactions](/images/redacted.png){: style="width:45%;vertical-align:top"}
![Unredacted](/images/unredacted.png){: style="width:45%;vertical-align:top"}

## Integrating Vue.js

In addition to the redaction feature, I also created a new Twig component that allows for the rendering of Vue.js components within the Submitty framework. This allowed us to start moving components to a more modern JavaScript framework, improving the overall user experience and maintainability of the codebase. Some examples of components that were migrated include the homepage, sidebar, and parts of the TAGrading interface. This has made it easier to develop and maintain the frontend code, which is especially important for a student-developed project like Submitty.
