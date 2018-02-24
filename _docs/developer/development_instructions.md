---
title: Development Instructions
category: Developer
order: 3
---

We recommend that you do all file edits within your checkout of the
Submitty GIT repository.  This is a shared directory between the host
machine and the virtual machine, so you can use your favorite
code/text editor on your local machine.

The different stages of the installation and build process copy files
from the repository to the installation directories, substitute
variables, compile libraries, and change permissions.  Depending on
the type of change, you will need to do different levels of
re-installation to test those changes.  The instructions below apply
to changes you have made within your local Submitty checkout
(including pulling new code from GitHub or switching to another
branch).

---

* If you've made changes to files affecting the system installation
  process (changes to `CONFIGURE_SUBMITTY.sh`, `install_system.sh`,
  `Vagrantfile`), you should re-create your VM from scratch to ensure
  the changes are correct.  Exit the VM, and from a terminal your
  host machine within the Submitty GIT repository type:

  ```
  vagrant destroy
  vagrant up
  ```
  
  _NOTE: This process will take a bit of time (~30 minutes), and
  requires an internet connection.  It will delete any assignments
  you've uploaded to your VM installation.  And it will erase any
  files you have created/edited within your VM that are not part of
  the shared directory of the Submitty working repository.  It will
  also destroy the databases, and any grading configuration or grading
  work that has been done._


* Depending on the configuration/setup changes that you're developing,
  you may be able to more quickly test those changes by
  re-provisioning the existing VM.  Exit the VM, and from a terminal
  on your host machine within the Submitty GIT repository type:

  ```
  vagrant reload --provision
  ```

  If the vagrant box is not running, you would run the command:
   
  ```
  vagrant up --provision
  ```

---


* If you've changed the script to create a new course
  (`create_course.sh`), or the schema for the course database
  (`tables.sql`), we need to delete all courses, and recreate the
  course databases, users, and sample submission uploads.  

  _NOTE: To avoid accidental use on the live server, the partial
  reset script first checks for the existence of a .vagrant folder._

  _NOTE: You will need to not be connected to any DBs (such as through
  pgAdmin) or else running the below scripts could put things into a
  broken state._

  Run these commands:

  ```
  cd /usr/local/submitty/GIT_CHECKOUT_Submitty/
  sudo /usr/local/submitty/GIT_CHECKOUT_Submitty/.setup/bin/partial_reset.py
  sudo /usr/local/submitty/GIT_CHECKOUT_Submitty/.setup/bin/setup_sample_courses.py
  sudo service php7.0-fpm restart
  echo 'partial reset complete'
  ```   


  If there are changes to the auxiliary Tutorial or AnalysisTools
  repos, you may also need to pull those changes:

  ```
  sudo /usr/local/submitty/.setup/bin/update_repos.py
  ```

---

* If you've changed `INSTALL_SUBMITTY_HELPER.sh`, or if you've changed
  any php/website files, re-install:

  ```
  sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
  ```

  _NOTE: This command uses rsync and should run reasonably fast since
  it's only copying and rebuilding what has changed._

  If you've moved/deleted files, it's good to do a fresh install of
  the Submitty code:  

  ```
  sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean
  ```

---

* If you've changed the C++ code for the testing and autograding
  library, you must re-install the grading code (which rebuilds the
  grading library).

  Or, if you've added or changed any of the sample provided
  assignments within the Submitty repository, they need to be copied
  from the repository to the installation location.

  In either case, run:

  ```
  sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean
  ```
  
  _NOTE: The `clean` argument is usually not necessary, and
  installation runs faster without it._

  You will also need to re-run the `BUILD_coursename.sh` script for
  any courses that you're using for testing, e.g.:

  ```
  /var/local/submitty/courses/s17/course_01/BUILD_course_01.sh
  ```

  Or re-run the BUILD script for all courses:

  ```
  for s in /var/local/submitty/courses/*/*; do c=`basename $s`; ${s}/BUILD_${c}.sh; done
  ```

  And see also [Batch Regrade Homeworks](../instructor/batch_regrade_submissions)

  For convenience, here are the commands to copy-paste to install, 
  build all courses, and regrade everything.

  ```
  sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean && \
  for s in /var/local/submitty/courses/*/*; do c=`basename $s`; ${s}/BUILD_${c}.sh; done && \
  echo 'y' | /usr/local/submitty/bin/regrade.py /var/local/submitty/courses/ && \
  /usr/local/submitty/bin/grading_done.py
  ```

---

* If you've changed a homework configuration that is not from the
  Submitty respository sample assignments, just rebuild the course
  that uses that homework:

  ```
  /var/local/submitty/courses/s17/course_01/BUILD_course_01.sh
  ```
   
  And see also [Batch Regrade Homeworks](../instructor/batch_regrade_submissions)

---

* If the VM has a clock skew (incorrect time)

  ```
  sudo service ntp stop
  sudo ntpd -gq
  sudo service ntp start
  ```

---

* If the JavaScript files have changed and there are errors or you do not see the changes then you may need to clear your browser's cache


   For Chrome: Choose the menu button, then "More tools", then "Clear browsing data"  

   For Firefox: Choose the menu button, then "Options", then "Advanced" in the "Network" tab under "Cached Web Content" click "Clear Now"  

   For Edge: Choose the Hub icon then the History icon, then "Clear all history"  
