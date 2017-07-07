---
title: Database
category: System Administrator
order: 5
---

Submitty is setup such that it uses one "master" Database and then each course 
that is added would have its own DB. The master DB (named `submitty`) contains
all of the courses, users, the courses the users are in, as well as the users'
login sessions. Within each course DB (named `submitty_${SEMESTER}_${COURSE}`), 
there are the gradeables, users, grades, etc. that are specific only to that course. 

The schema for these databases are contained within the Submitty repo under site/data:  

* [master DB](https://github.com/Submitty/Submitty/blob/master/site/data/submitty_db.sql)  
* [course DB](https://github.com/Submitty/Submitty/blob/master/site/data/course_tables.sql)  

As we use the master DB to contain all users in the system, we use this as the central
place to run most inserts/updates of User data, using triggers to sync that data to all
of the affected course DBs. These triggers are:

1. UPDATE trigger on users. When you update a user, it selects all courses that user is
   part of from the courses_users table and updates the user row in each of those course DBs.
   
2. INSERT trigger on courses_users. When you insert a new row, a new user row is created in
   the users table for the course DB.
   
3. UPDATE trigger on courses_users. When you update a row, the associated user row for that
   course is updated in its course DB.

While this places some amount of complexity on running and managing the system, it additionally
allows for a nice granularity of being able to give instructors (or TAs if necessary) access
to the Submitty DB for only their course without worrying about them seeing too much
information or violating FERPA concerns.

Within submitty itself, when you create or edit a user (whether from the Manage Students
or Manage Graders pages), it always inserts/updates to the master DB, which then subsequently
updates our user in each of the course DBs.

Creation of the `submitty` DB is handled when you run `install_system.sh`, but if you need
to start over, you would need to do:
```
sudo su postgres
psql
psql -c "CREATE DATABASE submitty;"
psql -f /usr/local/submitty/GIT_CHECKOUT_Submitty/site/data/submitty_db.sql
psql -c "alter schema public owner to hsdbu;"
```