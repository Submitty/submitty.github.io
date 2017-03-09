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
