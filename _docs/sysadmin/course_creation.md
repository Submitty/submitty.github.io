---
title: Course Creation
category: System Administrator
order: 5
---

### UNIX Users and Groups

1. Create local user accounts for the instructor and TAs for this course:
 
2. Create new groups for this course (the exact names are not specified):

   ```
   addgroup <COURSE>
   addgroup <COURSE>_tas_www
   ```

   If you are keeping old assignments around for comparison purposes, you may also want to add a group of just 
   those that need access to the archives

   ```
   addgroup <COURSE>_archive
   ```

   Our policy is that all current / recent / future instructors for a course are in the archive group and permissions 
   for all folders and files from old semesters are changed to allow read only access by the archive group. If a head 
   TA will be running plagiarism detection or needs access to old files, the head TA will be added to the archive 
   group for that semester, but by default head TAs are not added to the archive group.


3. Add the instructors into the course groups:

   ```
   adduser instructor <COURSE>
   adduser instructor <COURSE>_tas_www
   adduser instructor <COURSE>_archive
   ```

5. Add the TAs into the course group:

   ```
   adduser ta <COURSE>_tas_www
   ```

6. Add special users `hwphp`, `hwcron`, and `hwcgi` to the `<COURSE>_tas_www` group:

   ```
   adduser hwphp <COURSE>_tas_www
   adduser hwcron <COURSE>_tas_www
   adduser hwcgi <COURSE>_tas_www
   ```

7. Give permissions to create new users and update apache configurations

   A. Add the instructor (and head TA) to the course_builders group:

      ```
      adduser instructor course_builders
      ```

   B. Give limited sudo to instructors and head TAs.  Update the sudoers file using
      `visudo` and add an entry at the end:

      ```
      %course_builders	ALL=(ALL:ALL) /var/local/submitty/bin/new.svnuser.pl,/var/local/submitty/bin/rcsonly.pl,/usr/sbin/apache2ctl,/var/local/submitty/bin/validate.svn.pl,/var/local/submitty/bin/validate.rcs.pl
      ```

   (No longer needed at RPI)


8. OPTIONAL: It has been helpful to create a dummy student account for
   each instructor for testing purposes (e.g. `doej-stu`).

   ```
   adduser instructor-stu
   ```


### Prepare the course directory and course database


1. If the top level `submitty` database does not exist, that must be
   created first.  For more information: [Database Overview](database_overview)


2. Run the [create_course.sh script](https://github.com/Submitty/Submitty/blob/master/bin/create_course.sh)
   to create each new course.  For example:

   ``` 
   sudo /usr/local/submitty/bin/create_course.sh <SEMESTER> <COURSE> smithj <COURSE>_tas_www 
   ```

   This creates a course for the Fall 2016 semester, with course ID
   `<COURSE>`, head instructor `smithj` and TA group
   `<COURSE>_tas_www`.  

   _Note: The TA group must contain the head instructor, any other
   instructors or head TAs who will help with configuration or builds
   of the homework, and the special users `hwphp`, `hwcron`, and `hwcgi`.  Also
   the instructor must be part of the `course_builders` group._
   
   _Note: You will sometimes need to restart PHP-FPM after adding a course._
   ``` 
   sudo service php7.0-fpm restart
   ```

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

   For more information: [Database Overview](database_overview)


3. Add the instructor(s) to both the top level and course database:

   ```
   sudo /usr/local/submitty/bin/adduser.py --course <SEMESTER> <COURSE> null <USERNAME>
   ```

   This script will ask for more information about the user interactively.



4. Create registration section(s):

   ```
   sudo su postgres
   psql -d submitty_<SEMESTER>_<COURSE> -c "insert into sections_registration(sections_registration_id) values(<SECTION>);"
   ```

   (replacing `<SEMESTER>`, `<COURSE>`, and `<SECTION>`)

   _NOTE: We intend to make a web UI to allow the instructor to create
   the registrations sections which will eliminate this as a sysadmin
   step in the future._


5. The instructor can add all other users (students, graders, other
   instructors) to the course by uploading a csv through the website.


   Alternatively, students can be automatically added by connecting to
   data from the university registrar:

   [using registration data feed](https://github.com/Submitty/Submitty/tree/master/Docs/student_auto_feed)



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
