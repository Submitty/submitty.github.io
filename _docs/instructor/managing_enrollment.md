---
title: Managing Enrollment
category: Instructor
---


### Automated Course Enrollment Management

For large courses, we recommend working with your university IT and/or
registrar to receive regular updates of the student enrollment,
automatically update student information when they switch sections or
drop the course altogether.  We recommend never erasing student
information if they are no longer in the course (in case the registrar
information has an error).  Instead, we move dropped students to a
special _null_ section.

For example, the RPI Computer Science department system admin now
receives on a daily feed of students per course section.  We run a
nightly cron job to automatically add students to the relevant
Submitty course databases and create login accounts to the submission
server.  This greatly simplifies instructor maintenance of current
course enrollement.

Below are the instructions to manually add students who are not
traditionally registered, to immediately add a student who registered
late, or if the feed is not available for your course.

See also [System Administrator / Student Auto Feed](../sysadmin/student_auto_feed)


### Add students one-at-a-time

1.  Instructors can add students to their course from the "Students"
    tab at the top black bar of their course page.

2.  Click on the "New Student" button in the upper right.  Fill out
    the information requested.  The User ID cannot be edited after the
    student is created.  The other fields can be edited later be
    clicking on the pencil icon for that student.

3.  If your Submitty installation uses database authentication, you will specify the
    student's initial password on this page and they can change it
    later.

    Students can change their preferred first name and their password
    from the main submitty page (from any course page, click on
    "Submitty" in the breadcrumb bar, in the top left of the screen.

    Click on the pencil icon next to your first name to change your
    preferred first name.

    _TODO: FILL IN INFORMATION ON HOW TO CHANGE YOUR PASSWORD IF
    DATABASE AUTHENTICATION..._

    Note: If your Submitty installation is using PAM authentication
    the option to change your password through Submitty is not
    available.  Your sysadmin will let you know if and how changing
    your password is facilitated.


4.  If your Submitty installation uses PAM authentication...

    _TODO: FILL IN INFORMATION ON HOW TO CREATE THE ACCOUNT_

    _TODO: FILL IN INFORMATION ON HOW TO SPECIFY INITIAL STUDENT PASSWORD_

    _TODO: FILL IN INFORMATION ON HOW STUDENTS CAN OR CANNOT CHANGE THEIR PASSWORD_


### Add students by bulk file (.csv) upload

1.  Instructors can add students in bulk to their course from the
    "Students" tab at the top black bar of their course page.

2.  Prepare a comma separated values file with 6 columns:

    '''
    username, first name, last name, email, registration section, preferred first name
    '''

    Preferred first name is optional.
    Registration section can be null.
    Do not use a header row.

    _TODO: IF USING DATABASE AUTHENTICATION, HOW DO WE SPECIFY THE PASSWORD?_

3.  Click on the "Upload Classlist" button in the upper right.  Select
    your prepared .csv file and press "Submit"


4.  If your Submitty installation uses PAM authentication...

    _TODO: FILL IN INFORMATION ON HOW TO CREATE THE ACCOUNT_



