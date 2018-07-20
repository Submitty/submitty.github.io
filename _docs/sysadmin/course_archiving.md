---
title: Course Archiving
category: System Administrator
---

After the term is completed you can archive the course.  This is done
on per course, so if it is easy to keep one or more courses 'open' to
allow a student to finish an incomplete, etc.  Note: This procedure is
still a work in progress. 

### Edit the Master Submitty Database Status

1. Switch to the `postgres` user:

    ```
    sudo su postgres
    ```

    Launch postgres:
 
    ```
    psql
    ```

    And connect to the master Submitty database:

    ```
    \c submitty
    ```


2. View your the courses and their current status:

   ```
   select * from courses;
   ```

   status=1 means the course is active.  All student users assigned to
   a non-NULL registration section, and all limited access graders,
   full access graders, and instructors can view the course.

   status=2 means the course is archived.  Only instructor users for
   that course can view the course.  _TODO: We intend for this access
   to be read only, but that is currently not implemented.>

   Other status codes may be defined in the future.  


3. Change the status values as desired, for example:

   ```
   update courses set status=2 where semester='s18' and course='csci1100';
   ```

   or archive all courses for the semester:

   ```
   update courses set status=2 where semester='s18';
   ```


4. Exit postgres

   ```
   \q
   ```


### Convert your Course Files & Directories to _Read Only_

We recommend that you remove the `w`, write bit from folders and files
for your course.  And consider switching the group for your course to
limit access to the files of past semesters to the current instructors
only.

```
/var/local/submitty/courses/<SEMESTER>/<COURSE>
```


### Backup your Data

Now's a good time to backup the data for the course.  Make a dump of
the current contents of the database.  And copy the tree from

```
/var/local/submitty/courses/<SEMESTER>/<COURSE>
```

You may also want to backup the relevant version control system (VCS)
repositories from:

```
/var/local/submitty/vcs/
```

