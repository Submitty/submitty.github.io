---
title: Overview
category: Developer > Getting Started
redirect_from:
  - /developer
  - /developer/index
  - /developer/getting_started/
  - /developer/getting_started/index
---



## Suggestions for New Developers

* Join our Community Discussion on Zulip:
  [Contact Us](/contact)

* You'll need to set up the full system on your own computer.  The
  easiest method is to
  [run the system within a virtual machine (VM)](/developer/vm_install_using_vagrant).
  Alternately, you can install the system natively on a dedicated
  computer and allow outside access (which requires more steps to set
  up networking, SSL/https, etc.) by following the
  [complete system administrator instructions](/sysadmin/installation/index).

* Read through the
  [Student](/student/account/index),
  [Grader](/grader/index), and
  [Instructor](/instructor)
  instructions and try it out.

* Learn how to use git.

* Browse our open [GitHub Pull Requests](https://github.com/Submitty/Submitty/pulls).
  Pick an open PR and read the PR notes, linked issues, and other documentation.
  Install the updated code on your VM, test the changes, and comment on or
  [review the PR through GitHub](/developer/getting_started/review_a_pull_request)


* Look through our [GitHub Issues lists](https://github.com/Submitty/Submitty/issues) for some ideas
  of problems to explore.

  * _**IMPORTANT NOTE**: We can only "assign" GitHub issues to users
    who are already members of the Submitty GitHub organization.  But
    we are very happy to accept, review, and merge contributions from
    outside of the organization.  Students selected for Google Summer
    of Code and active developers who already have multiple
    contributions will be added to the Submitty GitHub organization._
  
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
  [Submitty Testing Instructions](/developer/testing/)

* Submit a [Pull Request (PR)](/developer/getting_started/make_a_pull_request)
  with your contributions.

* Help by [Reviewing the Pull Requests](/developer/getting_started/review_a_pull_request)
  of other developers.

* [Improve the online documentation for Submitty](/developer/getting_started/edit_submitty_documentation).

