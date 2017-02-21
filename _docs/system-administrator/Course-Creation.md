---
title: Course Creation
category: System Administrator
order: 5
---

### Users and Groups

1. Make sure that `/var/local/instructors/valid` has a current list of valid userids (no longer needed at RPI)

2. Create local user accounts for the instructor and TAs for this course:
 
3. Create new groups for this course:

   ```
   addgroup course01
   addgroup course01_tas_www
   ```

   If you are keeping old assignments around for comparison purposes, you may also want to add a group of just those that need access to the archives

   ```
   addgroup course01_archive
   ```

   Our policy is that all current / recent / future instructors for a course are in the archive group.  And permissions for all folders and files from old semesters are changed to allow read only access by the archive group.  If a head TA will be running plagiarism detection or needs access to old files, the head TA will be added to the archive group for that semester.  But by default head TAs are not added to the archive group.


4. Add the instructors into the course groups:

   ```
   adduser instructor course01
   adduser instructor course01_tas_www
   adduser instructor course01_archive
   ```
5. Add the TAs into the course group:

   ```
   adduser instructor course01_tas_www
   ```

6. Add special users `hwphp` and `hwcron` to the `course01_tas_www` group:

   ```
   adduser hwphp course01_tas_www
   adduser hwcron course01_tas_www
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

### Prepare the directory and initial files for each course


1. Run the [create_course.sh script][create_course.sh]
   to create each new course.  For example:

   ``` 
   sudo /usr/local/submitty/bin/create_course.sh f16 csci1200 smithj course_csci1200_tas_www 
   ```

   This creates a course for the Fall 2016 semester, with course ID
   `csci1200`, head instructor `smithj` and TA group
   `course_csci1200_tas_www`.  

   _Note: The TA group must contain the head instructor, any other
   instructors or head TAs who will help with configuration or builds
   of the homework, and the special users `hwphp` and `hwcron`.  Also
   the instructor must be part of the `course_builders` group._


2. You can confirm that a directory has been created and populated
   with initial files in the data directory.  For this example (if you
   chose the default data directory location) the directory files will
   be here:
 
   ``` 
   /var/local/submitty/courses/f16/csci1200/ 
   ```  



### Setup the database server for Submitty use and create new databases

For these steps you need to to be the postgres user or other database
server superuser.

In the instructions below, replace `{DATABASE_HOST}` with database's
hostname (e.g. `localhost` for the VM).

The database for your course will be named `submitty_f16_csci1200`
(replace `f16` and `csci1200` with the term and your course id).


1. Become a DB superuser: 

   ``` 
   sudo su postgres 
   ```  

2. Enter PostgreSQL: 

   ``` 
   psql 
   ```  


3. If this is a new install and hsdbu does not exist yet, 

   ``` 
   create user hsdbu; 
   ```  


4. If you need to wipe out the old course data, make a backup of the
   database server in case of error and then drop the old database(s)
   with something like:

   ``` 
   drop database submitty_f16_csci1200;
   ```  


5. Create database using the standard prefix, ```submitty_```,
   followed by the course id and term.  E.g.,
   (e.g. ```submitty_f16_csci1200```).

   ``` 
   create database submitty_f16_csci1200 with owner hsdbu; 
   ```


6. By default the public scheme is owned by postgres.  We need to
   switch it to be owned by hsdbu so the commands in the next section
   work.

   ```
   psql -h {DATABASE_HOST} submitty_f16_csci1200 -U postgres
   ```

   ```
   alter schema public owner to hsdbu;
   ```


### Prepare or reset the database for each course

Once the database has been created above (by someone with the postgres
database user password), we can initialize or reset and re-initialize
the tables.  These commands only require the hsdbu database user
password.


1. To reset the database to the initial (empty) state.

   Connect to the database:

   ```
   psql -h {DATABASE_HOST} -d submitty_f16_csci1200 -U hsdbu
   ```

   Confirm that the hsdbu use owns the public schema:

   ```
   \dn
   ```

   Then delete all of the tables:
   ```
   DROP SCHEMA public CASCADE;
   CREATE SCHEMA public;
   GRANT ALL ON SCHEMA public TO postgres;
   GRANT ALL ON SCHEMA public TO public;
   ```

   To quit the postgres prompt:
   
   ```
   \q   
   ```


2. Starting from an empty database, run the sql file for that course:

   [sql file with database schema](../blob/master/site/data/tables.sql) 

   Which is stored in
   `/usr/local/submitty/GIT_CHECKOUT_Submitty/site/data` by default.

   ``` 
   psql -h {DATABASE_HOST} submitty_f16_csci1200 -U hsdbu -f /usr/local/submitty/GIT_CHECKOUT_Submitty/site/data/tables.sql
   ```

  
5.  Populate the sections table.  Add the appropriate number of
    sections, one per registration section.

    THIS IS HANDLED BY THE DAILY FEED?


    active example:  
    ```
    INSERT INTO sections_registration(sections_registration_id)
    VALUES (1);
    ```

6. Manually add the primary instructor to the database.  (Then that 
   instructor can add other instructor users, TAs, manually added 
   students from the webpage "Manage Users").

   Fill in the user id, first & last names, email address, set the 
   `user_group = 1` (instructor).

   ```
   INSERT INTO users(user_id, user_firstname, user_lastname, user_email, user_group) VALUES ('instructor', 'Demo', 'Instructor', 'instructor@localhost', 1);
   ```

[create_course.sh]: https://github.com/Submitty/Submitty/blob/master/bin/create_course.sh