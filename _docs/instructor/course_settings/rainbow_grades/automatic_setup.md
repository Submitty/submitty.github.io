---
category: Instructor > Course Settings > Rainbow Grades
title: Automatic Setup
redirect_from:
  - /instructor/course_settings/rainbow_grades/automatic_setup
---

_NOTE:  This is a work-in-progress._

### Enable viewing of Rainbow Grades

Before beginning, you must enable viewing of rainbow grades:

1. Navigate to the ```Course Settings``` page for your course.
2. Check the checkbox next to ```Display Rainbow Grades Summary```.

This will enable the ```Rainbow Grades``` tab on the navigation bar.  Currently, there are no grades to view, but that will be handled in the next step.

### Customize Rainbow Grades

1. Navigate to the ```Grades Configuration``` page for your course.
2. Using the form, customize Rainbow Grades how you see fit, or upload a manual JSON file.
   1. Some customization options will not appear unless a corresponding checkbox under ```Display``` is checked.
3. Press the ```Generate Grade Summaries``` button at the top of the form.
4. Press the ```Build``` button at the top of the form.

Every time you save changes using this form, rainbow grades will be automatically updated.

### Automatic Nightly Build

In your ```Course Settings``` page, you may see an Automatic Rainbow Grades generation checkbox.  This setting allows your 
Rainbow Grades to be automatically rebuilt every night at a time determined by your system administrator.  If you do not
see this option then the system administrator has not configured it.

### Troubleshooting

#### Limited functionality mode

This tool is designed to run with no extra configuration on the instructors part.  If you see a message about 
limited functionality mode, then please direct the system admin to the
[Rainbow Grades configuration page](/sysadmin/configuration/rainbow_grades).

You may continue using this tool in limited functionality mode, however extra steps are required.  Before each use
of the rainbow grades web interface, you must manually generate grade summaries by navigating to the ```Grade Reports``` 
tab and pressing the ```Generate Grade Summaries``` button.  Rainbow Grades uses this data to generate it's tables, 
therefore Rainbow Grades will only be as recent as grade summaries.

When Submitty is properly configured and you do not see this message, there is no need to manually generate grade 
summaries.