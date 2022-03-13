---
title: Eddie Krystowski
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2021
redirect_from:
  - /developer/rpi_summer_rcos/2021_Eddie_Krystowski.md
---

In the summer of 2021, I worked mainly on improving and standardizing various aspects of the user interface, especially in dark mode. I also worked extensively with markdown support, the PDF editor tool, and allowing developers to create a mock worker machine using Vagrant alongside the main Submitty virtual machine.

### Dark Mode
Dark Mode is a feature that allows the user to change the overall look of Submitty to one with a darker palette. Some of the work I did regarding dark mode consisted of:
- Improving the consistency of dark mode throughout the site
- Refactoring stylesheets to properly use dark-mode colors
- Fixing low contrast areas, especially in less frequently visited pages, by using WAVE (Web Accessability Evaluation Tool) to ensure a 7:1 minimum contrast ratio across most pages.
    - I fixed the contrast of code boxes in dark mode which were very difficult for students to use due to the syntax highlighting not considering the site theme.


### Markdown
Markdown is a simple markup language that allows users to easily format text with italics, bullet points, links, etc. all while writing with plaintext. It is used in many spots on the site, such as the discussion forum, Submini polls, gradeable configurations, and pretty much anywhere else that formatted text would be useful. 

- Implemented a new Markdown engine, (league/commonmark)
    - This new engine allows for greater control of markdown behavior, as well as customizable parsing and rendering of specific components.
    - This engine allowed me to greatly improve the behavior of markdown code boxes to be able to show line numbers based on code box size and have proper syntax highlighting based on language and site theme.
- Standardized Markdown across all of Submitty
    - All markdown related styling was moved to its own stylesheet and only contains what is necessary, no page specific styling is included.
    - Twig templates have been added so that any page that wants to use Markdown display/input simply includes the template and it just works.
- Improved markdown input interface
    - Created input interface as a standalone component that can be added to any page.
    - Input interface is fully accessible through keyboard alone.
    - Write Mode
        - Users can enter plaintext
        - There are predefined shortcut buttons that will insert templates for formatting common types such as bold, italics, links, etc. These were already implemented, but had some bugs and were not used consistently.
    - Preview Mode
        - Users can see what their markdown will look like once rendered.

### PDF Editor
The PDF Editor tool is a tool for TAs and instructors that allows them to annotate student-submitted PDFs. A lot of my work on this page consisted of trying to create a quicker and easier user experience for whoever was using the page.

- Greatly improved zooming speed
- Improved mobile tablet experience
- Remembered settings per gradeable
    - Ex: If a user zooms in 150%, and then goes to the next submission, they will still be zoomed in that same amount.
- Fixed issues that would cause PDF annotations to become corrupted.
    - Also implemented a system to detect corrupted annotations and attempt to fix them.
    - Corrupted annotations can only be permanently fixed by those who made them, but they will be temporarily fixed so that others can make their own annotations.
- Added toolbar buttons
    - Rotate Left
    - Clear
    - Show/Hide Other User's Annotations
    - Custom pen colors from a color picker

### Vagrant Worker
In the real Submitty environment, there are worker machines which share the load of autograding from the main machine, and could potentially have different capabilities as well. I implemented a configuration option that allows developers to create and run their own worker virtual machine alongside the main Submitty virtual machine to allow for easier debugging and testing of related features.

- Changed setup scripts to allow for simultaneous provisioning of both the main Submitty VM as well as the worker VM
    - Automates steps 1-7 of [the worker installation instructions](/sysadmin/worker_installation).
- Added command to start worker VM alongside Submitty VM

See the [Virtual Box Worker](http://localhost:4000/developer/worker_vm) instructions for more information.