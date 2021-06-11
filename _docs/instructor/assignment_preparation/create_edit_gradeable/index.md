---
title: Create or Edit a Gradeable
category: Instructor -- Assignment Preparation
redirect_from:
  - /instructor/create_edit_gradeable
---

![](/images/new_gradeable_form.png)

### Create a New Gradeable

To create a new gradeable, instructor users should click the "New
Gradeable" button in the top right corner, under the Submitty logo.
Fill out this form (details in the following sections) and press "Add
Gradeable".

Most of the fields on the Create/Edit Gradeable form can be changed
later.  You can return to this form from the main page by pressing the
"Edit" button at the end of the row for this gradeable.  Two fields
cannot be changed after the initial gradeable creation:

* Unique id of the gradeable.  This id should not have spaces.  This
  id will be used as the name of the subdirectory storing files for
  this gradeable, etc.  We suggest "hw01", "lab_12", "midterm",
  "lecture_quiz_2a", etc.

* Type of gradeable (more details below)

_IMPORTANT NOTE: You should not change the TA Grading rubric after
TAs have started grading!_




### Types of Gradeables

A "Gradeable" is any single item that will be graded automatically
and/or manually by the instructor/TAs.  We offer 3 basic types of
gradeables: electronic submission, numeric, or checkboxes.


   **_Electronic Submission_** should be used for
   homework/project/exercise file uploads by students (e.g., code,
   .pdfs, images, etc.) or submitted via VCS.  Electronic Submission 
   can be automatically graded, fully manually graded, or a combination
   of both.

   **_Numeric_** is used for data entry of quizzes or exams where the
   scores for each student are a simple array of one or more numbers
   (possibly with a short text comment).  We provide a spreadsheet
   like interface for manual data entry of the numeric scores per
   problem that are summed for a total score.  Or you can just enter
   the total score as a single column.  We also provide a .csv upload
   if your numeric scores for this gradeable are already in an
   electronic format.

   **_Checkpoints_** should be used for manually graded items with one
   or more parts that are marked as full, half, or no credit.  This is
   commonly used for in class exercises (e.g., lab or recitation)
   where the TAs verify the students have completed the exercise and
   demonstrated sufficient competency with the material.  Similar to
   numeric gradeables, we provide a spreadsheet-like interface for
   manual data entry.




### Autograding Configuration Path

For Electronic File uploads you must specify the full path to the
autograding configuration config.json file stored on the submission
server.  (More details on the 
[Assignment Configuration](assignment_configuration) page.)
    
If you do not need any automated testing or grading; that is, if you
are collecting files for the TAs to fully manually grade, choose the
"no autograding" sample assignment configuration:


```
/usr/local/submitty/more_autograding_examples/upload_only/config/
```


### Gradeable Dates & Times

From the create/edit a gradeable page you can specify (or change):

* the date/time the homework assignment should open to receive student
  submissions,

* the due date/time (plus allowed "late day" submissions), 

* the date/time the system opens to allow TAs/mentors/graders to
  grade, and

* the date/time that the TA/mentor grades will be released to
  students.
  
* the date/time the student can start making grade inquiries, if grade inquiry is enabled for the gradeable.
   


### Grading User Groups

Grading permission denotes the lowest privileged user that may grade
the gradeable. Grading permissions fall into 1 of 4 categories.

* The highest privileged is "instructor" (1), who has unlimited
  access.

* Then next highest is "full access grader" (2), who can view and edit
  grades for all sections.

* The third highest is "limited access grader" (3), who can only see
  and grade sections or gradeables they are assigned to.

* The least privileged user is "student" (4), who has no access to
  grading.

Both full access graders and limited access graders are assigned
sections of students to grade for each gradeable (by registration or
rotating section, see below).  When these users log in to the system
they are presented with only the grading work they have not yet
completed.  The difference between these grading types is that full
access graders can navigate to inspect or regrade any student for that
gradeable (even sections they are not assigned).  Limited access
graders are restricted.


###  Grader Assignment Method

Grader Assignment Method can be chosen for each gradeable.  It specifies 
the set of students assigned to each grader.

* Gradeables set to **_All Access Grading_** (0) give all graders with
  sufficient permission access to all student submissions.
  
  _NOTE: This is the same as selecting "Rotating Section" and assigning
  all sections to every grader._
  
* Gradeables set to **_Registration Section_** (1) assign a
  fixed set of one or more graders per section across all gradeables
  for the entire term.  For example, grader John is assigned to
  registration sections 1 and 2.  For gradeables "g1", "g2", "g3",
  which are graded by registration section, John will always grade the
  same set of students, those assigned to registration section 1 and
  registration section 2.

  _NOTE: Typically registration section grading should be used for lab
  checkpoint data entry, and exam data entry._


* Gradeables set to **_Rotating Section_** (2) allow for a grader to be
  assigned a different set of students per gradeable.  For example,
  gradeables "g4", "g5", "g6", are graded by rotating section.  For "g4" 
  John may be assigned to grade users in rotating section 3, for "g5" he 
  may grade users in rotating sections 1 and 2, and for "g6" he may not 
  be assigned any rotating sections.

  _NOTE: Often rotating section grading is useful for homework
  grading.  This way each student receives feedback from multiple TAs
  throughout the term.  It can even out differences in grading between
  the TAs and is perceived by the students as being more fair (you're
  not always graded by the "mean" TA)._




### Build/Debug all Grading Configurations

After adding one or more new electronic submission gradeables, or if
you have modified any of the assignment configuration files, the
configuration must be built or re-built.  If you are using a
system-wide sample configuration or if you are using a configuration
you uploaded through the website, the build will happen automatically
after you create or edit the gradeable.  

However, if you have specified a configuration in a private course
repository, 
(see [Assignment Configuration](assignment_configuration) page)
you must re-run the BUILD_XXXX.sh script.

1.  Log in to the server.  Navigate to your top level directory, e.g.

    ```
    /var/local/submitty/courses/s17/course_01/
    ``` 

2.  Run the script, e.g.:

    ```
    ./BUILD_course_01.sh
    ``` 

    To re-build only a single gradeable, you can specify that
    gradeable id as an optional argument.  E.g.:

    ```
    ./BUILD_course_01.sh hw01
    ``` 


3.  Fix any errors in your configurations, and re-run as necessary.



### Test your Assignment Configurations

1. To manually test your course and assignment configurations, follow
   the 
   [student submission instructions](/student/submission)


2. You can confirm that the files were received by checking this
   directory:

   ```
   /var/local/submitty/courses/s17/course_01/submissions/ASSIGNMENT_ID/USER_ID/VERSION
   ``` 

   For direct file upload submissions (single file or .zip) this
   directory will contain all submitted files and any directory
   structure contained in the zip file.  In addition to the submitted
   files, in that directory you will also find a
   `.submit.timestamp` file.  This is the time of submission, not
   the time that automated grading started/finished.

   For submission via SVN, this directory will only contain the
   `.submit.timestamp` file.  This timestamp will be used to retrieve
   the state of the repo at the time of submission.


4. For SVN submissions, you may also inspect an archive of the
   files/directory structure SVN repo at submission time in this
   directory:

   ```
   /var/local/submitty/courses/s17/course_01/checkout/ASSIGNMENT_ID/USER_ID/VERSION
   ```    


5. Once automated testing & grading has completed, you can inspect
   some behind the scenes details of the automated grading by looking
   in this directory:

   ```
   /var/local/submitty/courses/s17/course_01/results/ASSIGNMENT_ID/USER_ID/VERSION
   ```

   In this directory you will find the `results_grade.txt` summary of
   the automated grading results, and STDOUT, STDERR, execution
   logfiles for each test case.  You will also find log files for the
   compilation, runner, and validation components of automated grading
   that are helpful in debugging assignment configurations.

### Using Git

Submitty supports utilizing Git for handling submissions by students.
When a student hits "submit", Submitty performs a clone of their
repository. Submitty then does a checkout of the last revision made before
the timestamp of when they hit the submit button.

To configure Git for an assignment, you will want to select type 
"Electronic File" and then "Version Control System (VCS) Repository".
You will then be presented with a textbox to type in the repo url to
use. If the string does not start with a / nor has a "://" in it, it
will combine the contents of the textbox with the base url. You will
see the URL/path that will be shown to the users underneath the text
box.

![](/images/create_gradeable_git.png)

Additionally, the text field supports the following list of "variables"
which get replaced during execution of Submitty:
* {$vcs_type} - VCS type being used (currently always git)
* {$gradeable_id} - ID of gradeable being submitted
* {$user_id} - ID of user who is submitting 
* {$team_id} - ID of team who is submitting

Submitty comes with a setup for an internal Git server out of the box,
but if you wish to use an external source, such as Github, you may need
to configure Submitty to be able to access those repos via SSH. See 
[System Administrator/Setting Up Git](/sysadmin/git) for more details.
