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


To contribute your software changes back to this open source project,
follow these steps:

  1. Run the [C++ Test Suite](autograding_tests) locally.

  2. Push your work to an appropriately named new branch on GitHub.

  3. When your code has passed all of the [Travis CI Tests](travis_ci), then
     you can make a pull request to master.



### Suggestions for new developers

* Download & install Submitty, and try it out.  Read the instructor
  documentation to learn the system.

* Look through the [issues
  list](https://github.com/Submitty/Submitty/issues) for some ideas of
  problems to explore.

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

* Run the test suite locally. 

---


We have a public [Slack server for Submitty Developers](https://join.slack.com/t/submitty/shared_invite/enQtMzE1NzgyMzUzNzI5LWNkNjUzYmZjOWJkNzdlM2QzNTM3MGYwNmQwMzQ3NjAwODUwYjI4MTRlZDNjZTFlMTk4ZjUzN2MxNzRjNDIwZTU)


Or you can contact the core Submitty development team:  
[submitty-admin@googlegroups.com](mailto:submitty-admin@googlegroups.com)
