---
title: Create Student Accounts
category: Instructor
order: 1
---

The instructions below will grant access to students in your course to
the homework submission site.


### FOR RPI, STARTING FALL 2016

We are working with the registrar and campus IT to receive on a daily
feed of students per course section.  We will use this data and a
nightly cron job to automatically add students your course database
and create login accounts to the submission server.  This should
remove the need to run the steps below for all registered students.
We expect a delay of 1-2 days for students who add the course late.

Below are the instructions to manually add students who are not
traditionally registered, to immediately add a student who registered
late, or if the feed is not available for your course.


### For course NOT REQUIRING subversion repositories:

1. Edit `/var/local/submitty/instructors/authlist` to contain a list of
   new userids to add (one per line)

2. Execute: 

   ```
   sudo /var/local/submitty/bin/authonly.pl
   ```

   _NOTE: When you need to add a few late add students to your course,
   you only need to put the userids for the new accounts in this file.
   All previously added accounts are unchanged.  Similarly, if you
   include the userid of a student who already has an account, it will
   not change that account._

   _When finished creating accounts, delete all of the names from the
   file, so it is ready for the next instructor to add their
   students._


### For courses REQUIRING subversion repositories:

1. Edit `/var/local/submitty/instructors/svnlist` to contain a list of new
   userids to add (one per line).

2. Execute:

   ```
   sudo /var/local/submitty/bin/new.svnuser.pl
   ```

   If there are no errors, then execute:

   ```
   sudo apache2ctl graceful
   ```

   _See also note above._


### Add students to database (allows TA grading):

1. Get the .xlsx spreadsheet with student registration details for
   your course.

2. Make sure it only contains the header row, and a row for each
   student in your class (don't delete the header row, don't delete
   any columns).

    * __RPI Computer Science Instructors:__
    
        * Do _not_ edit the class list spreadsheet as given to you by
          a department administrative assistant.

        * PLEASE NOTE THAT THIS IS CURRENTLY BROKEN; ONLY USE THE CSV
          UPLOAD SOLUTION HERE FOR THE TIME BEING.  You may upload
          the XLSX spreadsheet as is.  A CSV conversion of the unedited
          spreadsheet is also acceptable, but not mandatory.

    * __Instructors at other Universities:__ 

      Your sysadmin should configure the Submitty grading system as to
      what columns of your class list represent the _students'
      enrolled section ID_, _students' first name_, _student's last
      name_, and _students' university e-mail account_ (currently how
      the computer systems login ID is determined).  Please contact
      your dept. sysadmin if you are having problems with uploading
      your spreadsheet.
     
3. Log into the hwgrading website.  (You must be an administrator for
   that course.)

4. Select "System Management", "Upload Classlist", and then Browse to
   select the file.
