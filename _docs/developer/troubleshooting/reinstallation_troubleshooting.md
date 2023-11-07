---
title: Reinstallation Troubleshooting
category: Developer > Troubleshooting
---


---

## System Re-Configuration

If recent development changes include modifications to files affecting
the system installation process (e.g., changes to
`CONFIGURE_SUBMITTY.py`, `install_system.sh`, `Vagrantfile`), you will
need to either re-provision or re-build your VM from scratch to test
these changes.

* To re-run the initial configuration step of Submitty, use this command:

  ```
  sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/CONFIGURE_SUBMITTY.py
  ```

* To update existing databases:

  ```
  sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/update_database.py
  ```
  
---

## Re-Creating All Sample Course Data
* If you've changed the script to create a new course
  (`create_course.sh`), or the schema for the master database
  (`submitty_db.sql`), or the schema for the course databases
  (`course_tables.sql`), or you changed student/gradeable data
  we need to delete all courses and recreate
  the course databases, users, and sample submission uploads.

  _NOTE: Make sure you are not be connected to any DBs (e.g., through
  pgAdmin) or else running the below scripts could put things into a
  broken state._

  Run this command:

  ```
  sudo bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/bin/recreate_sample_courses.sh
  ```
  
  You can append the `--no_submissions` flag to the above command to
  skip creation of any sample submission data in the sample courses.
  This will accelerate the completion of this command, but you will be
  missing the hundreds of sample student submissions present in the
  full installation.


  NOTE: This command will also have to be run twice a year on July 1st and January 1st when the test semester will change from fall to spring or vice versa.


  See also: [Sample Course Data](/developer/development_instructions/sample_data)

---

## Complete System Re-Installation

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

  _NOTE: This process will take a bit of time (45 minutes or more),
  and requires an internet connection.  It will delete any assignments
  you've uploaded to your VM installation.  And it will erase any
  files you have created/edited within your VM that are not part of
  the shared directory of the Submitty working repository.  It will
  also destroy the databases, and any grading configuration or grading
  work that has been done._

---