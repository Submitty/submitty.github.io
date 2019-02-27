---
title: Developer
permalink: /developer
---

As a developer, you'll need to set up the full system on your own
computer.  The easiest method is to 
[run the system within a virtual machine (VM)](developer/vm_install_using_vagrant).
Alternately, you can install the system natively on a dedicated
computer and allow outside access (which requires more steps to set up
networking, SSL/https, etc.) by following the
[complete system administrator instructions](/sysadmin).


Please contribute by adding bugs or feature requests to our 
[Submitty GitHub Issue Tracker](https://github.com/Submitty/Submitty/issues).


A list of Submitty projects (some new, some in progress):  
[Project Ideas](project_ideas)



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

  _Hint: Use "git grep" to search for variables/filenames/specific
  strings within the source files/directories.  This can help you
  locate relevant files._

* Add & delete things to the code, re-install that portion of the
  system and see what happens.  See also [Development Instructions](developer/development_instructions).

* Use inspector or browser debugger.

* As you read the code, make a diagram for yourself of how the system
  fits together.

* Use jsfiddle (for testing or demoing new things).

* Keep a work diary / log: what did you plan to do today, keep track
  of how long it took you to do things, difficulties, how did you
  solve it, helpful reference links, and what’s your plan for
  tomorrow.

* Get familiar with vagrant.

* Run the relevant portions of test suite locally:  
  [Autograding Test Suite](autograding_tests)  
  [PHP Unit Tests](/developer/php_unit_tests)  
  [End-to-End Tests](/developer/end_to_end_tests)  

* Submit a [Pull Request (PR)](/developer/how_to_contribute#how-to-make-a-pull-request-to-our-submitty-github) with your contributions.

* Help by [Reviewing the Pull Requests](/developer/how_to_contribute#how-to-review-a-pull-request-pr) of other developers.

* [Improve the online documentation for Submitty](/developer/how_to_contribute#how-to-edit-submittyorg).



### Online Community Discussion and Contact Submitty Administration Team

We have a public [Slack server for Submitty Developers](https://join.slack.com/t/submitty/shared_invite/enQtMzE1NzgyMzUzNzI5LWNkNjUzYmZjOWJkNzdlM2QzNTM3MGYwNmQwMzQ3NjAwODUwYjI4MTRlZDNjZTFlMTk4ZjUzN2MxNzRjNDIwZTU).

Please use the Slack server `#general` and `#summerofcode2019` channels
for Submitty installation problems, general development questions, and
feature design discussion.  We have a small administration team and
very much appreciate the Submitty community working together to help new
developers.

_Special Request: Please do not contact administrator individuals by Slack
direct private message or personal email to ask technical questions.
It is likely that other developers have the same or similar questions
or are experiencing the same bug.  So we'd like to answer those questions
on the public forum.  And you'll probably get a faster reply when you
ask the larger community.  Thank you!_


System administrators for production Submitty installations with
questions are welcome to contact the core Submitty development team:  
[submitty-admin@googlegroups.com](mailto:submitty-admin@googlegroups.com)

