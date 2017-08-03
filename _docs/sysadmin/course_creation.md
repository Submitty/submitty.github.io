---
title: Course Creation
category: System Administrator
order: 5
---

### Users and Groups

1. Create local user accounts for the instructor and TAs for this course:
 
2. Create new groups for this course:

   ```
   addgroup course01
   addgroup course01_tas_www
   ```

   If you are keeping old assignments around for comparison purposes, you may also want to add a group of just 
   those that need access to the archives

   ```
   addgroup course01_archive
   ```

   Our policy is that all current / recent / future instructors for a course are in the archive group and permissions 
   for all folders and files from old semesters are changed to allow read only access by the archive group. If a head 
   TA will be running plagiarism detection or needs access to old files, the head TA will be added to the archive 
   group for that semester, but by default head TAs are not added to the archive group.


3. Add the instructors into the course groups:

   ```
   adduser instructor course01
   adduser instructor course01_tas_www
   adduser instructor course01_archive
   ```

5. Add the TAs into the course group:

   ```
   adduser ta course01_tas_www
   ```

6. Add special users `hwphp`, `hwcron`, and `hwcgi` to the `course01_tas_www` group:

   ```
   adduser hwphp course01_tas_www
   adduser hwcron course01_tas_www
   adduser hwcgi course01_tas_www
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


### Prepare the directory and initial files for each course and create the course database


1. If the top level `submitty` database does not exist, that must be
   created first.  For more information: [Database Overview](database_overview)


2. Run the [create_course.sh script][create_course.sh]
   to create each new course.  For example:

   ``` 
   sudo /usr/local/submitty/bin/create_course.sh f16 csci1200 smithj course_csci1200_tas_www 
   ```

   This creates a course for the Fall 2016 semester, with course ID
   `csci1200`, head instructor `smithj` and TA group
   `course_csci1200_tas_www`.  

   _Note: The TA group must contain the head instructor, any other
   instructors or head TAs who will help with configuration or builds
   of the homework, and the special users `hwphp`, `hwcron`, and `hwcgi`.  Also
   the instructor must be part of the `course_builders` group._
   
   _Note: You will sometimes need to restart PHP-FPM after adding a course._
   ``` 
   sudo service php7.0-fpm restart
   ```

3. You can confirm that a directory has been created and populated
   with initial files in the data directory.  For this example (if you
   chose the default data directory location) the directory files will
   be here:
 
   ``` 
   /var/local/submitty/courses/f16/csci1200/ 
   ```  

4. You can confirm that the database was created and populated by
   looking at the database `submitty_<SEMESTER>_<COURSE>`:

   ```
   sudo su postgres
   psql
   \c submitty_<SEMESTER>_<COURSE>
   \dt
   \q
   ```

   For more information: [Database Overview](database_overview)


5. Add the instructor(s) to both the top level and course database:

   ```
   sudo /usr/local/submitty/bin/adduser.py --course <SEMESTER> <COURSE> null <USERNAME>
   ```

   This script will ask a few questions interactively.


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


3. If you need to wipe out the old course data, make a backup of the
   database server in case of error and then drop the old database(s)
   with something like:

   ``` 
   drop database submitty_f16_csci1200;
   ```  


4. Create database using the standard prefix, ```submitty_```,
   followed by the semester and then the course id.
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

   [sql file with database schema](../blob/master/site/data/course_tables.sql) 

   Which is stored in
   `/usr/local/submitty/GIT_CHECKOUT_Submitty/site/data` by default.

   ``` 
   psql -h {DATABASE_HOST} submitty_f16_csci1200 -U hsdbu -f /usr/local/submitty/GIT_CHECKOUT_Submitty/site/data/course_tables.sql
   ```

4.  Connect to the Course database:
    ```
    psql -h {DATABASE_HOST} submitty_f16_csci1200 -U hsdbu
    ```
    
5.  Populate the sections table.  Add the appropriate number of
    sections, one per registration section.

    active example:  
    ```
    INSERT INTO sections_registration(sections_registration_id) VALUES (1);
    ```

6. Connect to the core Submitty database:
   ``` 
   psql -h {DATABASE_HOST} submitty -U hsdbu
   ```
 
7. Add the course to the DB
   ```
   INSERT INTO courses (semester, course) VALUES ('f16', 'csci1200');
   ```
   
8. Manually add the primary instructor to the database.  (Then that 
   instructor can add other instructor users, TAs, manually added 
   students from the webpage "Manage Users").

   You first need to insert the user into the users table, and then
   add them to the appropriate courses in the courses_users table.
   
   Fill in the user id, first & last names, email address, set the 
   `user_group = 1` (instructor).

   If you're using PAM authentication, you would use the following query:
   ```
   INSERT INTO users(user_id, user_firstname, user_lastname, user_email, user_group) VALUES ('instructor', 'Demo', 'Instructor', 'instructor@localhost', 1);
   ```
   
   Else if you're using Database authentication, you will need to first generate the password:
   ```
   php -r "print(password_hash('password', PASSWORD_DEFAULT).\"\n\");"
   ```
   and then copy that into the following query where it says `<hashed_password>`.
   ```
   INSERT INTO users(user_id, user_firstname, user_password, user_lastname, user_email) VALUES ('instructor', '<hashed_password>', 'Demo', 'Instructor', 'instructor@localhost');
   ```
   
9. Add the user to the course:
   ``` 
   INSERT INTO courses_users (semester, course, user_id, user_group) VALUES ('f16', 'csci1200', 'instructor', 1);
   ```
   
8. After adding the primary instructor, you may wish to upload a CSV for graders (go through
   the Manage Graders page) as well as use something like the 
   [Course Feed](https://github.com/Submitty/Submitty/tree/master/Docs/student_auto_feed) which
   allows you to easily keep your list of students synced.

[create_course.sh]: https://github.com/Submitty/Submitty/blob/master/bin/create_course.sh