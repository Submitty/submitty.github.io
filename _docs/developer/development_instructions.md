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

*  If you've changed any of the setup instructions
   (`CONFIGURE_SUBMITTY.sh`, `INSTALL_SUBMITTY.sh`, `install_system.sh`,
   etc.), you will have to re-setup your VM. You should be able to
   just reprovision your machine by exiting the VM and running the
   following command from the Submitty git repository:

   ```
   vagrant reload --provision
   ```

   If the vagrant box is not running, you would run the command:
   
   ```
   vagrant up --provision
   ```

   If something appears to be broken on the VM, it might be best to completely
   start over by running the following commands:
  
   ```
   vagrant destroy
   vagrant up
   ```
   
   _NOTE: This will delete any assignments you've uploaded to your VM
   installation.  And it will erase any files you have created/edited
   within your VM that are not part of the shared directory of the
   Submitty working repository.  It will also destroy the database,
   and any grading configuration or grading work that has been done._
 
---

*  If you've changed the script to create a new course, or the course
   database:

   _NOTE: To avoid accidental use on the live server, these
   instructions should not be saved to a repository script!  Instead, you can
   copy paste them into your development VM terminal._

   ```
   # Delete the all course data:
   sudo rm -rf /var/local/submitty/courses

   # Delete all course databases:
   export PGPASSWORD="hsdbu" 
   psql -h localhost -U hsdbu --list | grep submitty_* | awk '{print $1}' | xargs -I "@@" dropdb -h localhost -U hsdbu "@@"
   unset PGPASSWORD
   
   # Re-install Submitty
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean
    
   # Recreate the default courses:
   sudo /usr/local/submitty/GIT_CHECKOUT_Submitty/.setup/bin/setup_sample_courses.py
   ```

---

* If you've changed the C++ code for the testing and autograding
  library, you must re-install the grading code (which rebuilds the
  grading library).  

  Similarly, if you've added or changed any of the sample provided
  assignments within the Submitty repository, they need to be copied
  from the repository to the installation location.

  In either case, run:

  ```
  sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean
  ```

  And also re-run the `BUILD_coursename.sh` script for any courses that
  you're using for testing:

  ```
  /var/local/submitty/courses/f16/csci1200/BUILD_csci1200.sh
  ```

  Or re-run the BUILD script for all courses:

  ```
  for s in /var/local/submitty/courses/*/*; do c=`basename $s`; ${s}/BUILD_${c}.sh; done
  ```

  And see also [Batch Regrade Homeworks][Batch Regrade Homeworks]

  For convenience, here are the commands to copy-paste to install, 
  build all courses, and regrade everything.

  ```
  sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean && \
  for s in /var/local/submitty/courses/*/*; do c=`basename $s`; ${s}/BUILD_${c}.sh; done && \
  echo 'y' | /usr/local/submitty/bin/regrade.sh /var/local/submitty/courses/ && \
  /usr/local/submitty/bin/grading_done.sh 
  ```


---

* If you've changed any php/website files, re-install:

   ```
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
   ```
   
   _FIXME: This is doing more work (taking more time) than necessary
   right now.  The copying & rebuilding of the C++ grading library is
   repeated even though the files didn't change.  This needs an rsync
   and/or CMake tweaks.  Without "clean" the `INSTALL_SUBMITTY.sh` script
   should only change what's new._

---

* If you've changed a homework configuration that is not from the
  Submitty respository sample assignments, just rebuild the course
  that uses that homework:

   ```
   /var/local/submitty/courses/f16/csci1200/BUILD_csci1200.sh
   ```
   
  See also [Batch Regrade Homeworks][Batch Regrade Homeworks]

---

See also [Local Test Suite](Local-Test-Suite)

[Batch Regrade Homeworks]: /1_instructor/Batch-Regrade-Homework