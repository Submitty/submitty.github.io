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

Currently the only option for self registration allows any users to automatically join the course upon registering. In the future, we will add a
self-registration mode where the user requests to join the course. The instructor(s) will be able to allow or deny users from joining the course. 

Once the user registers for the course, the instructor(s) will receive an email with the user's user_id and the course they registered for. 

#### Enable Self Registration
**Before you enable Self Registration, you must have at least one registration section.**
1. Navigate to the `Course Settings` page.
2. Scroll all the way down to the `Danger Zone`
3. Check the checkbox for `Enable Self Registration`.
4. (Optional) Select the default section you want users to be added to. This defaults to the first section. This can also be edited in the `Manage Sections` page.

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

2.  Prepare a comma separated values file with 5-7 columns and no header row:

    ```
    username, first name, last name, email, registration section, preferred first name (optional), preferred last name (optional)
    ```

    * Registration section can be custom, for example NULL or STAFF.

    You can also supply just the user_id and rest of the fields will be auto-fill with the existing user data.

    <span style="color:grey">_TODO: IF USING DATABASE AUTHENTICATION, HOW DO WE SPECIFY THE PASSWORD?_</span>

3.  Click on the "Upload Classlist" button in the upper right.  Select
    your prepared .csv file and press "Submit"


4.  If your Submitty installation uses PAM authentication...

    <span style="color:grey">_TODO: FILL IN INFORMATION ON HOW TO CREATE THE ACCOUNT_</span>


### Add graders by bulk file (.csv) upload

1.  Instructors can add graders in bulk to their course from the
    "Manage Graders" tab from the navigation bar of their course page.

2.  Prepare a comma separated values file with 5-8 columns and no header row:

    ```
    username, first name, last name, email, grader group, preferred first name (optional), preferred last name (optional), registration section (optional)
    ```

    * Registration section can be custom, for example NULL or STAFF.
    * Grader group can be a number 1-4. For more information: see [User Group or Role](/sysadmin/troubleshooting/user_access_level#user-access-level) documentation

    You can also supply just the username column, and rest of the fields will be auto-filled with the existing user data and a default value for grader-group as 'Limited Access Grader' (3) will be used.

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