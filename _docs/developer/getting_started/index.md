---
title: Overview
category: Developer > Getting Started
redirect_from:
  - /developer
  - /developer/index
  - /developer/getting_started/
  - /developer/getting_started/index
---


Join our Community Discussion on Zulip:
[Contact Us](/contact)

## Setting Up

* Submitty primarily uses the following languages/frameworks: 
[PHP](developer/software_and_system_design/coding_style_guide/php), 
[Twig](/developer/developing_the_php_site/view#rendering-the-user-page-with-twig), 
[JavaScript](developer/software_and_system_design/coding_style_guide/javascript),
[TypeScript](/developer/developing_the_php_site/javascript#typescript), 
[Vue](/developer/developing_the_php_site/view#another-option-rendering-with-vue), 
[PostgreSQL](/developer/software_and_system_design/database_design), 
[Python](/developer/software_and_system_design/coding_style_guide/python), 
[C++](/developer/software_and_system_design/coding_style_guide/c++).

* To support development, Submitty uses Git/GitHub, Vagrant, [Cypress E2E Testing](/developer/testing/cypress), 
PHP/Python unit tests, and a variety of linters and formatters.

* You'll need to set up the full system on your own computer.  The
  easiest method is to
  [run the system within a virtual machine (VM)](/developer/vm_install_using_vagrant).
  Alternately, you can install the system natively on a dedicated
  computer and allow outside access (which requires more steps to set
  up networking, SSL/https, etc.) by following the
  [complete system administrator instructions](/sysadmin/installation/index).

* Once the system has been successfully installed, read through the
  [Student](/student/account/index),
  [Grader](/grader/index), and
  [Instructor](/instructor)
  instructions to test it out.

## Making Contributions

* Browse our open [GitHub Pull Requests](https://github.com/Submitty/Submitty/pulls).
  Pick an open PR and read the PR notes, linked issues, and other documentation.
  Install the updated code on your VM, test the changes, and comment on or
  [review the PR through GitHub](/developer/getting_started/review_a_pull_request)


* Look through our [GitHub Issues lists](https://github.com/Submitty/Submitty/issues) for some ideas
  of problems to explore.
  * _**IMPORTANT NOTE**: We can only "assign" GitHub issues to users
    who are already members of the Submitty GitHub organization, however,
    we are very happy to accept, review, and merge contributions from
    outside of the organization. Students selected for Google Summer
    of Code and active developers who already have multiple
    contributions will be added to the Submitty GitHub organization._

* Learn what sections of the code are relevant for those issues (so
  you’re not overwhelmed).
   * Use "git grep" to search for variables/filenames/specific
     strings within the source files/directories.  This can help you
     locate relevant files.
   * For Developers using VS Code: Use `Ctrl+Shift+F` to search for words inside 
     of files. Use `Ctrl+P` to search for filenames.

* Add & delete things to the code, re-install that portion of the
  system and see what happens.  See also [Development Instructions](/developer/development_instructions).

* Browser DevTools allow you to inspect, debug, and experiment with web pages.
   * The `Elements/Inspector` tab provides a view of the DOM, and the CSS classes being applied to elements.
   * The `Console` tab shows browser messages and allows you to run JS on the page.
      * Use `console.log` in JavaScript to output to the console.
      * HINT: Set your javascript console errors to
        be persistent. This will make any outputs persist on reload.
   * The `Network` tab is helpful for seeing what requests are being made.
   * The `Application/Storage` tab allows you to view cookies and items in localStorage.

## Helpful Links

These links may be useful throughout your development experience. _REMEMBER:_ If 
you ever have any questions about the Submitty's workflow, the codebase, or a 
specific feature, search `submitty.org` first.

* Run the relevant portions of test suite locally:  
  [Submitty Testing Instructions](/developer/testing/)

* Submit a [Pull Request (PR)](/developer/getting_started/make_a_pull_request)
  with your contributions.

* Help by [Reviewing the Pull Requests](/developer/getting_started/review_a_pull_request)
  of other developers.

* [Improve the online documentation for Submitty](/developer/getting_started/edit_submitty_documentation).

