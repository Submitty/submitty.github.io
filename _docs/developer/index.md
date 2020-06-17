---
title: Developer
permalink: /developer
---

As a developer, you'll need to set up the full system on your own
computer.  The easiest method is to 
[run the system within a virtual machine (VM)](/developer/vm_install_using_vagrant).
Alternately, you can install the system natively on a dedicated
computer and allow outside access (which requires more steps to set up
networking, SSL/https, etc.) by following the
[complete system administrator instructions](/sysadmin).


Please contribute by adding bugs or feature requests to our 
[Submitty GitHub Issue Tracker](https://github.com/Submitty/Submitty/issues).


A list of Submitty projects (some new, some in progress):  
[Project Ideas](/developer/project_ideas)


Join our Community Discussion:  
[Contact Us](/contact)


### Suggestions for New Developers

* Download & install Submitty, and try it out.  Read the instructor
  documentation to learn the system.

* Look through our [GitHub Issues lists](https://github.com/Submitty/Submitty/issues) for some ideas
  of problems to explore.

  _Technical Note: We can only "assign" GitHub issues to users who are
  already members of the Submitty GitHub organization.  But we are
  very happy to accept, review, and merge contributions from outside
  of the organization.  Students selected for Google Summer of Code
  and active developers who already have multiple contributions will
  be added to the Submitty GitHub organization.  Organization members
  are granted write access to directly push without review to some of repositories --
  e.g., documentation, etc._

* Learn how to use git.

* Learn what sections of the code are relevant for those issues (so
  you’re not overwhelmed).

   * Hint: Use "git grep" to search for variables/filenames/specific
     strings within the source files/directories.  This can help you
     locate relevant files.

* Add & delete things to the code, re-install that portion of the
  system and see what happens.  See also [Development Instructions](/developer/development_instructions).

* Use inspector, browser debugger, javascript console, etc.

   * Hint: It is helpful to set your javascript console errors to
     be persistent (so they don't disappear when the page reloads).
     E.g., in Chrome, you need to set "Console:Preserve log on
     navigation", or in Firefox, "Enable persistent logs".

* As you read the code, make a diagram for yourself of how the system
  fits together.

* Use jsfiddle (for testing or demoing new things).

* Keep a work diary / log: what did you plan to do today, keep track
  of how long it took you to do things, difficulties, how did you
  solve it, helpful reference links, and what’s your plan for
  tomorrow.

* Get familiar with vagrant.

* Run the relevant portions of test suite locally:  
  [Autograding Test Suite](/developer/autograding_tests)  
  [PHP Unit Tests](/developer/php_unit_tests)  
  [End-to-End Tests](/developer/end_to_end_tests)  

* Submit a [Pull Request (PR)](/developer/how_to_contribute#how-to-make-a-pull-request-to-our-submitty-github) with your contributions.

* Help by [Reviewing the Pull Requests](/developer/how_to_contribute#how-to-review-a-pull-request-pr) of other developers.

* [Improve the online documentation for Submitty](/developer/how_to_contribute#how-to-edit-submittyorg-documentation)

