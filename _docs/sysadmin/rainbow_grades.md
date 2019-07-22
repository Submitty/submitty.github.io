---
title: Rainbow Grades
category: System Administrator
---


Submitty includes the ability for instructors to automatically generate rainbow grades by following the 
[automatic setup instructions](../instructor/rainbow_grades/automatic_setup).
  
There are a few prerequisites for this feature to work correctly:

1. The Submitty server must have the [RainbowGrades](https://github.com/Submitty/RainbowGrades) repository checked out.

1. The ```<submitty install dir>/config/submitty_admin.json``` file must contain credentials for a course admin user.  
Usually this file will be configured automatically as part of inputs for the ```CONFIGURE_SUBMITTY.py``` script.