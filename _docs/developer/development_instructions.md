---
title: Development Instructions
category: Developer
order: 3
---

We recommend that you do all file edits within your checkout of the
Submitty GIT repository on your local / host machine.  This is a
shared directory between the host machine and the virtual machine, so
you can use your favorite code/text editor on your local machine.

The different stages of the installation and build process copy files
from the repository to the installation directories, substitute
variables, compile libraries, and change permissions.  Depending on
the type of software change, you will need to do different levels of
re-installation to test those changes.  The instructions below apply
to changes you have made within your local Submitty checkout
(including pulling new code from GitHub or switching to another
branch).

Please also see [Installation Version Notes](/sysadmin/version_notes)


---


## System or Installation Script Updates

* If recent development changes include modifications to files
   affecting the system installation process (e.g., changes to
   `CONFIGURE_SUBMITTY.py`, `install_system.sh`, `Vagrantfile`), you
   will need to either re-provision or re-build your VM from scratch
   to test these changes.

* To re-provision your VM, exit the VM, and from a terminal your host
   machine within the Submitty GIT repository type:

   ```
   vagrant reload --provision
   ```

   Or if the VM is not already running:

   ```
   vagrant up --provision
   ```

   This is will be faster than doing a full `destroy`/`up`, however
   depending on the changes you've done to the VM, could leave it
   potentially unstable.

* Alternatively, re-build your VM from scratch:

  ```
  vagrant destroy
  vagrant up
  ```

  _NOTE: This process will take a bit of time (30 minutes or more),
  and requires an internet connection.  It will delete any assignments
  you've uploaded to your VM installation.  And it will erase any
  files you have created/edited within your VM that are not part of
  the shared directory of the Submitty working repository.  It will
  also destroy the databases, and any grading configuration or grading
  work that has been done._

---

## Update all Submitty Software

* Most commonly, when you want to update your system with all recent
  changes from other developers (e.g., when you pull in the latest
  `master` branch), you should update all of the bash and python
  scripts, all of the C++ autograding code, and all of the
  php/css/javascript website files.

* To do this, run:

   ```
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
   ```

   _NOTE: This command uses rsync and should run reasonably fast (1-2
   minutes) since it's only copying and rebuilding what has changed._


* If recent changes have moved/renamed/deleted files, it's good to do
   a fresh install of the Submitty code:

   ```
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean
   ```

---

## Incremental Development Updates

* When working on code in the `site`, `bin`, or `sbin` directories,
  you can enable the *code watcher* to automatically detect and update
  those files on your installation.

  To enable the code watcher, run this command from the vagrant terminal:
  
  ```
  sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/bin/code_watcher.py
  ```
  
  Alternatively, run this command from your host computer:

  ```
  vagrant ssh -c "python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/bin/code_watcher.py"
  ```

  _NOTE: This command is convenient for testing changes to the website
  appearance (e.g., edits to CSS or twig/html/php).  Seconds after
  saving the code files, you should be able to reload the website and
  see the update._

---

## Other Updates and Troubleshooting

* In some cases, it may be necessary to re-configure options about the
  submitty installation:

  ```
  sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/CONFIGURE_SUBMITTY.py
  ```

* And/or update existing databases:

  ```
  sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/update_database.py
  ```

* If you've changed the script to create a new course
  (`create_course.sh`), or the schema for the course database
  (`tables.sql`), we need to delete all courses, and recreate the
  course databases, users, and sample submission uploads.

  _NOTE: Make sure you are not be connected to any DBs (e.g., through
  pgAdmin) or else running the below scripts could put things into a
  broken state._

  Run this command:

  ```
  sudo bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/bin/recreate_sample_courses.sh
  ```

* If there are changes to the auxiliary Tutorial or AnalysisTools
  repos, you may also need to explicitly pull those changes:

  ```
  sudo /usr/local/submitty/.setup/bin/update_repos.py
  ```

* If you modify an autograding configuration, you'll need to:

    * [Rebuild Gradeables](/instructor/create_edit_gradeable#builddebug-all-grading-configurations) using those configurations, and also

    * [Batch Regrade Homeworks](/instructor/batch_regrade_submissions) already submitted to those gradeables.


* If the VM has a clock skew (incorrect time)

  ```
  sudo service ntp stop
  sudo ntpd -gq
  sudo service ntp start
  ```

* If you need to test time and/or date dependent elements, you can
    change it in the vagrant machine so you don't have to wait.  To
    remove the syncing and set your own time:

    ```
    sudo systemctl disable ntp
    timedatectl set-ntp 0
    sudo date -s "<year>-<month>-<day> <hour>:<minute>:<seconds>
    ```

    To check the date, helpful to make sure the date and time you set has stuck:

    ```
    date
    ``` 

    To sync back with the current time:

    ```
    sudo systemctl enable ntp
    timedatectl set-ntp 1
    ```


* If the JavaScript files have changed and there are errors or you do not see the
   changes then you may need to clear your browser's cache.

   **For Chrome:** Choose the menu button, then "More tools", then "Clear browsing data"

   **For Firefox:** Choose the menu button, then "Options", then "Advanced" in the
   "Network" tab under "Cached Web Content" click "Clear Now"

   **For Microsoft Edge:** Choose the Hub icon then the History icon, then "Clear all history"
