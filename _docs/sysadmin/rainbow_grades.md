---
title: Rainbow Grades
category: System Administrator
---

### Configuration
Submitty includes the ability for instructors to automatically generate rainbow grades by following the 
[automatic setup instructions](../instructor/rainbow_grades/automatic_setup).
  
For this feature to work correctly:

1. The ```<submitty install dir>/config/submitty_admin.json``` file must contain credentials for a submitty admin user. 
Usually this file will be configured automatically as part of the inputs for the ```CONFIGURE_SUBMITTY.py``` script.

1. The submitty admin user must exist as an instructor of the course for which the rainbow grades are going to be automatically
generated.

### Nightly cron job
Also included is the ability to have all rainbow grades automatically rebuilt nightly as part of a cron job.  For this 
feature to work please ensure the previous configuration steps have been followed.

By default ```auto_rainbow_scheduler.py``` is included in the ```submitty_crontab```.  This file is added to the linux 
cron tab during each installation of submitty.

Please note this script will only rebuild rainbow grades for courses which have the "Automatic Rainbow Grades" checkbox
enabled in their course settings.