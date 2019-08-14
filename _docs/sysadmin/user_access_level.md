---
title: User Access Level
category: System Administrator
---

### User Access Level

At the system level, Submitty has 3 levels of user access.  This
information is stored in the master `Submitty` database, `users`
table, `user_access_level` column.

* **Superuser = 1**  
    This special category of user should be rarely
    used, limited to system administrators.  Most capabilities of
    superusers are still in the planning stages; for example, being
    able to edit the user access level of other users on the system,
    add new terms, etc.  Currently most of this functionality is only
    available from the GNU/Linux command line.

* **Faculty = 2**  
    This category of user should be limited to faculty
    at your institution.  Faculty users can make new courses,
    restricted toqterms that have already been defined, and
    limited to sharing a Linux group of one of their pre-existing
    courses.

* **User = 3**  
    All other users -- students, teaching assistants,
    graders, etc.

When a superuser or faculty level user logs in and visits the main
home screen for Submitty, their access level is listed in the "About
You" box.

![](/images/access_level.png)

From this home screen superuser and faculty users can create new
courses.  We plan to add other features for these users in future
releases.


### User Group or Role

Within a specific course, a user will be a member of one of the
following groups.

* **Instructor = 1**  
    Instructors can add students and graders to the
    course, change the group or role of users in the course, mange 
    registration and rotating sections, create and edit gradeables,
    upload course materials, etc.

* **Full Access Grader = 2**  
    Full Access Graders can view and enter or change the grades of any
    student in the course for gradeables that are open to grading by
    full access or limited access graders, even if they are not
    specifically assigned to that student.  This group or role is
    useful in very large courses with large teaching staff.  For
    example, graduate student teaching assistants who assume more
    responsibility and occasionally substitute for each other would
    need access to enter or modify the grades of sections assigned to
    other graduate student teaching assistants.

* **Limited Access Grader = 3**  
    Limited Access Graders can view and enter or change the grades
    only for students in section that they are explicitly assigned to
    grade.  This group or role is often used for more junior members
    of the teaching staff, for example undergraduate teaching
    assistants with more limited responsibilities.  These students may
    be more likely to have conflicts of interest with classmates who are friends
    because they are closer in age or cohort to the students in the
    class. 

* **Student = 4**  
    Finally we have the student group, who has no access to grading.
    Note that users who are in the Student Group who are assigned to the NULL
    registration section (indicating they have dropped the course)
    will not be able to access the course.


_NOTE:_ User Access Level for the system is a separate from User Group
for each course.  Typically users with **Faculty** User Access Level
will be in the **Instructor** Group for each of their courses, but
this is not required.  In fact, it can be helpful to for faculty users
to explore the Submitty interface for a specific course as a member of
the **Student** User Group.  And sometimes it is useful to put the
head graduate teaching assistant in the **Instructor** group for a
large course so they can assist with course management.

See also [Create or Edit Gradeable](../instructor/create_edit_gradeable#grading-user-groups).
