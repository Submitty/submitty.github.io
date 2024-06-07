---
title: Course Creation
category: System Administrator > Configuration & Administration
redirect_from:
  - /sysadmin/course_creation
---

**Note**: If you are using Ansible for managing Submitty, 
you can follow these [instructions](/_docs/sysadmin/configuration/ansible_course_creation) to create a course using Ansible.


### UNIX Users and Groups

1. Create local user accounts for the instructor and TAs for this course.

2. Create new groups for this course (the exact names are not prescribed):

   ```
   addgroup <COURSE>
   addgroup <COURSE>_tas_www
   ```

   If you plan to retain read-only archives of previous semesters for
   plagiarism comparison purposes, you may also want to add a group of
   just those that need access to the archives

   ```
   addgroup <COURSE>_archive
   ```

   Our policy is that all current / recent / future instructors for a course are in the archive group and permissions
   for all folders and files from old semesters are changed to allow read only access by the archive group. If a head
   TA will be running plagiarism detection or needs access to old files, the head TA will be added to the archive
   group for that semester, but by default head TAs are not added to the archive group.


3. Add the instructors into the course groups:

   ```
   adduser <INSTRUCTOR> <COURSE>
   adduser <INSTRUCTOR> <COURSE>_tas_www
   adduser <INSTRUCTOR> <COURSE>_archive
   ```

5. Add the TAs into the course group:

   ```
   adduser <TA> <COURSE>_tas_www
   ```

6. Add special users `submitty_php`, `submitty_daemon`, and `submitty_cgi` to the `<COURSE>_tas_www` group:

   ```
   adduser submitty_php <COURSE>_tas_www
   adduser submitty_daemon <COURSE>_tas_www
   adduser submitty_cgi <COURSE>_tas_www
   ```

   _Note: After adding the `submitty_php` user to a new course group, you'll
   need to restart fpm to ensure that the webpage sees the change:_

   ```
   sudo service php8.1-fpm restart
   ```

   _Note: Depending on your version of Ubuntu, your version of php fpm will be different._
   


7. Give permissions to create new users and update apache configurations

   Add the instructor (and head TA) to the submitty_course_builders group:

      ```
      adduser <INSTRUCTOR> submitty_course_builders
      ```


8. OPTIONAL: Create a private directory/repository for the course to
   store custom gradeable autograding configurations.  For example:

   ```
   sudo mkdir /var/local/submitty/private_course_repositories/<COURSE_NAME>
   sudo chown -R <INSTRUCTOR>:<COURSE> /var/local/submitty/private_course_repositories/<COURSE_NAME>
   sudo chmod -R 770 /var/local/submitty/private_course_repositories/<COURSE_NAME>
   sudo chmod -R g+s /var/local/submitty/private_course_repositories/<COURSE_NAME>
   ```


9. OPTIONAL: It has been helpful to create a dummy student account for
   each instructor for testing purposes (e.g. `doej-stu`).

   ```
   adduser <INSTRUCTOR>-stu
   ```




### Prepare the course directory and course database


1. If the top level `submitty` database does not exist, that must be
   created first.  For more information: [Database Overview](/sysadmin/troubleshooting/database_overview)


2. Run the [create_course.sh script](https://github.com/Submitty/Submitty/blob/master/sbin/create_course.sh)
   to create each new course.  For example:

   ```
   sudo /usr/local/submitty/sbin/create_course.sh <SEMESTER> <COURSE> smithj <COURSE>_tas_www
   ```

   This creates a course for the Fall 2016 semester, with course ID
   `<COURSE>`, head instructor `smithj` and TA group
   `<COURSE>_tas_www`.

   _Note: The TA group must contain the head instructor, any other
   instructors or head TAs who will help with configuration or builds
   of the homework, and the special users `submitty_php`, `submitty_daemon`, and `submitty_cgi`.  Also
   the instructor must be part of the `submitty_course_builders` group._

   _Note: You will sometimes need to restart PHP-FPM after adding a course._
   ```
   sudo service php8.1-fpm restart
   ```


   _Note: Depending on your version of Ubuntu, your version of php fpm will be different._


   You can confirm that a directory has been created and populated
   with initial files in the data directory.  For this example (if you
   chose the default data directory location) the directory files will
   be here:

   ```
   /var/local/submitty/courses/<SEMESTER>/<COURSE>/
   ```

   The create course script also creates and populates the course
   database.  You can confirm that the database was created and
   populated by looking at the database
   `submitty_<SEMESTER>_<COURSE>`:

   ```
   sudo su postgres
   psql
   \c submitty_<SEMESTER>_<COURSE>
   \dt
   \q
   ```

   For more information: [Database Overview](/sysadmin/troubleshooting/database_overview)


3. Add existing instructor(s) to the course database:

   ```
   sudo /usr/local/submitty/sbin/adduser_course.py <USERNAME> <SEMESTER> <COURSE> null
   ```


4. Create registration section(s):

   ```
   sudo su postgres
   psql -d submitty -c "insert into courses_registration_sections values('<SEMESTER>', '<COURSE>', '<SECTION>');"
   ```

   (replacing `<SEMESTER>`, `<COURSE>`, and `<SECTION>`)

   _NOTE: Instructors can now add registration sections (and delete
   registration sections that have no registered students) through the
   Submitty website._


5. The instructor can add all other users (students, graders, other
   instructors) to the course by uploading a csv through the website.


   Alternatively, students can be automatically added by connecting to
   data from the university registrar:

   [using registration data feed](https://github.com/Submitty/SysadminTools/tree/master/student_auto_feed)



### Clean up Existing Course


1.  If desired, delete course directory:

    ```
    rm /var/local/submitty/courses/<SEMESTER>/<COURSE>
    ```

    _Note: Course directory can remain, which is useful for archive or
    plagiarism detection between semesters._


2.  If desired, dump contents of course database as a backup:

    _FIXME: FILL IN THESE INSTRUCTIONS_


3.  Remove course database:

    ```
    sudo su postgres
    psql -d postgres -c "DROP DATABASE submitty_<SEMESTER>_<COURSE>;"
    ```

    It may be necessary to first cleanup connections:

    ```
    sudo su postgres
    psql -d postgres -c "SELECT *, pg_terminate_backend(pid) FROM pg_stat_activity WHERE pid <> pg_backend_pid() AND datname = 'submitty_<SEMESTER>_<COURSE>';"
    ```


4.  Remove the course and the association from all users to the course from the master database:

    ```
    sudo su postgres
    psql -d submitty -c "DELETE FROM courses_users WHERE semester='<SEMESTER>' AND course='<COURSE>'; DELETE FROM courses WHERE semester='<SEMESTER>' AND course='<COURSE>';"
    ```
