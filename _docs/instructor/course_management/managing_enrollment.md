---
category: Instructor > Course Management
title: Managing Enrollment
redirect_from:
  - /instructor/course_management
  - /instructor/managing_enrollment
---

### Manage Users

Use the "Students" and "Users" options to view the lists of people
with access to your course.  Use the "Manage Users" option to add/edit
access for your TAs and mentors.  

Use the "Setup Rotating Sections" option to distribute your student
list into equal sections for grading assignments other than
registration section.  See also:
[Registration Section vs. Rotating Section](/instructor/assignment_preparation/index#grader-assignment-method)

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
course enrollement.  See also [System Administrator / Student Auto
Feed](/sysadmin/configuration/registration_feed).

Below are the instructions to manually add students who are not
traditionally registered, to immediately add a student who registered
late, or if the feed is not available for your course.


### Self Registration
Submitty allows users to register for courses where specified by the Course Settings. ***This allows any user who has access to Submitty to register.*** 

Currently the only option for self registration allows any users to automatically join the course upon registering. In the future, we will add a self-registration mode where the user requests to join the course. The instructor(s) will be able to allow or deny users from joining the course. 

Once the user registers for the course, the instructor(s) will receive an email with the user's user_id and the course they registered for. 

##### Enable Self Registration
**Before you enable Self Registration, you must have at least one registration section.**
1. Navigate to the `Course Settings` page.
2. Scroll all the way down to the `Danger Zone`
3. Check the checkbox for `Enable Self Registration`.
4. (Optional) Select the default section you want users to be added to. This defaults to the first section. This can also be edited in the `Manage Sections` page.

A related feature allows new users to make an account on your server.  
See also [System Administrator instructions to enable Self Account Creation](/sysadmin/configuration/self_account_creation)


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

    You will need to ssh into submitty and navigate to /usr/local/submitty/config/database.json,
    Then edit this file by replacing the value "PamAuthentication" with "DatabaseAuthentication".
    Finally be sure to save the file, if this file is read only be sure to enable write access.


### Add students by bulk file (.csv) upload

1.  Instructors can add students in bulk to their course from the
    "Manage Students" tab from the navigation bar of their course page.

2.  Prepare a comma separated values file as many columns as needed, and a single header row. The value in the header row determines how the data will be processed, and must be one of the following:

    * "User ID": The userid of the student, e.g. `tomsonj7`. MUST BE INCLUDED! Consists of lowercase letters 'a'-'z', digits '0'-'9', underscore '_', or hyphen '-'.

    * "Given Name", "Family Name", "Preferred Given Name", and "Preferred Family Name": The students preferred or legal first and last name. Consists of a mix of lowercase letters, uppercase letters, accented letters, and some special characters (''', '`', '-', '.', '(', ')', or ' '). Only processed for new users, ignored for existing users.

    * "Email", "Secondary Email": The students email address, e.g. `joe.student@gmail.com`. Consists of any valid email address. Only processed for new users, ignored for existing users.

    * "UTC Offset", "Time Zone", and "Rotation Section": These labels are included for compatability with the 'Download Classlist' button. They are ignored when being processed. To adjust rotation sections, go to the 'Manage Sections' page on Submitty.

    * "Registration Section": The registration section for the user, e.g. `2B`. Consists of up to 20 uppercase/lowercase letters 'A'-'Z'/'a'-'z', digits '0'-'9', underscores '_', or hyphens '-'.

    * "Registration Sub-Section": The registration sub-section for the user, e.g. `team 7`. Consists of up to 20 uppercase/lowercase letters 'A'-'Z'/'a'-'z', digits '0'-'9', underscores '_', hyphens '-', or spaces ' '.

    * "Password": On versions of Submitty with password-based authentication, this can set the password for new users. Cannot be empty. Ignored for existing users, and versions of Submitty that don't use password authentication, including `submitty.cs.rpi.edu`.

    * "Group": The [permissions group](/sysadmin/troubleshooting/user_access_level#user-group-or-role) of the student. Must be:
      * "1" or "Instructor"
      * "2" or "Full Access Grader (Grad TA)"
      * "3" or "Limited Access Grader (Mentor)"
      * "4" or "Student"
      * WARNING: Changed permissions are processed IMMEDIATLY! If you change you own permissions below "1" or "Instructor" you will lose access to this page and not be able to change back.

    * "Registration Type": The type of registration within the course. Must be:
      * "graded": most students
      * "audit"
      * "withdrawn"
      * "staff": TAs and instructor

    * "Autofill Data": If set, then any missing field for a user new to this course, but who already exists in Submitty's database, will be automatically pulled from the database. Must be "TRUE" or "FALSE". If the user is not found in Submitty's database, an error message will trigger.


3.  Click on the "Upload Classlist" button in the upper right.  Select
    your prepared .csv file and press "Submit"



### Add graders by bulk file (.csv) upload

1.  Instructors can add graders in bulk to their course from the
    "Manage Graders" tab from the navigation bar of their course page.

2.  Prepare a comma separated values file with as many columns as needed, labeled with a single header row. The format is the same as for [uploading students](/instructor/course_management/managing_enrollment#add-students-by-bulk-file-csv-upload), with the following changes:

    * "Registration Section": Registration Section is a comma-separated list of sections the grader will grade, e.g. `"1,2,4"`. The sections should be split by commas only, and enclosed in quotation marks.
    * "Registration Type": All users uploaded will be set to "staff", and the "Group" column will be ignored.

3.  Click on the "Upload Graderlist" button in the upper right. Select your prepared .csv file and press "Submit"


### Student Activity Dashboard

The Student Activity Dashboard provides instructors with a powerful tool for monitoring and tracking their students' activities on the system. By using this dashboard, instructors can ensure that students are keeping up with their coursework and reach out to them if they are falling behind.

To access the dashboard, click on the "Student Activity Dashboard" tab. You will be presented with a table of student data.

![](/images/student_activity_dashboard.png)


### Viewing Student Information

The dashboard displays student information for various categories, including:

- Gradeable Submission Date
- Forum View Date
- Forum Post Date
- Gradeable Access Date
- Number of Poll Responses
- Office Hours Queue Date

### Sorting and Filtering Data

* Instructors can click on the column headings to sort the student data in ascending or descending order.

* Instructors can also filter the data by recent activity in specific categories by entering date(s) or values and clicking on "Apply". This allows instructors to quickly identify students who have not been active recently.

* Note: Students highlighted in red do not have the specified recent or minimum levels of activity in one or more categories. This allows instructors to easily identify students who may need additional support or outreach.
