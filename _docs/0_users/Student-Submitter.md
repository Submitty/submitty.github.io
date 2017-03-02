---
title: Student Submitter
category: Users
order: 1
---


### Accessing the Homework Submission Server

What is the Homework Submission Server URL for your course?  (Your
instructor should provide this information.)  Load this URL in your
favorite web browser.

Have your login credentials ready.  (Again, your instructor should
provide this information.)  If you have trouble
authenticating/accessing the page, double check the URL and your
username and password, and contact the instructor, TA, or system
administrator as appropriate.

![](/images/Login.png)



### Navigation Page

The initial navigation page displays all available assignments
organized in reverse chronological order of deadline into several
categories:

  * "Open" - accepting submissions for a homework deadline that is in the
     future.  

  * "Past Due" - depending on the course rules for late work or
    extensions for special circumstances, submission may still be
    allowed for these assignments.

  * "Closed" - the TAs are manually grading these assignments.

  * "Grades Available" - TA manual grading is complete and available
    for review for these assignments.

![](/images/Navigation.png)



### Uploading a New Submission

After selecting the appropriate assignment, you should prepare their
work for submission.  Carefully read both the course syllabus & and any
specific instructions for this assignment.  Your instructor has
configured the submission site with one or submission areas.  You may:

* "Drag and drop" one or more files into each submission area, or
* Click on a submission area, which will bring up a file browser
   allowing you to select one or more files for upload.

If you choose a .zip file, the files within this .zip file will be
extracted on submission.  If your .zip file contains one or more
folders/directories, this folder/directory structure will be
preserved.

Alternatively, if you instructor has configured this assignment to
receive files via version control (SVN), the submission interface will
consist of a single button, allowing you to indicate that the system
should grab your most recent materials from the repository for
grading.


![](/images/Submission_Files.png)


As you collect files for submission, if you make a mistake you may
remove files by clicking on the trashcan icon.  Or you may press
"Clear" to remove all files.  Or, if you have already submitted to
this assignment, you may press "Get Most Recent Files" to initialize
the submission with those materials.  You can then delete or add new
files.

Once you have selected all necessary files, press "Submit".

Then wait patiently for your assignment to be graded.  The page will
automatically refresh when grading is complete.  If the assignment is
computationally intensive or if the server is busy grading your
classmates work, you may need to wait longer.


![](/images/Submission_Result_Buggy.png)

If you find an error or omission with your submission, you can
repeat the steps above to upload a new version of the code.



### Examining the Results of Automated Testing

The webpage displays a summary of the results on the test cases
configured by your instructor.  If the test case is configured to
award automated grading points, a green, yellow, red, or gray token
appears next to each test.  Green means full credit, yellow is partial
credit, red is low or no credit.  The gray token appears if the test
is extra credit or hidden.

If more details are available for a specific test case, a "Details"
link will appear on the right side.  You may click on this link or on
the title of the test case to toggle expansion of these details.
_NOTE: Additional details are intentionally not available for hidden
test cases._

![](/images/TestCaseDetails.png)

If the test case was graded by line-by-line or character-by-character
comparison to the instructors expected output, these files will be
displayed and differences highlighted in yellow and/or red.

Additional output to STDOUT, STDERR, or specific error messages may be
displayed, depending on the instructor configuration of each test
case.


### Reviewing Previous Submissions

The server stores all uploaded files and all automated grading results
for each of your submissions.

You may review the results of automated grading for the most recent
submission or any prior submission by choosing that version from the
"Select Submission Version:" drop down menu.


![](http://submitty.org/images/student_ui_progression.png)


### Reverting to an Earlier Submission

By default, the server marks as "active" your most recent submission
(with the highest version number).  Your "active" submission is the
version that will be graded by the teaching assistant and recorded in
the gradebook.

![](/images/Rollback.png)

If you would like to specify that an earlier version be used as your
"active" version (if you accidentally submit files to the wrong
assignment!), you may do so by selecting that version from the "Select
Submission Version:" drop-down menu, and then pressing the "Grade This
Version" button.

![](/images/Rollback2.png)

Similarly, you may click the "Do Not Grade This Assignment" button if
you would like to retract all of your submissions to this assignment.
The system does not delete your uploaded materials, but the assignment
will not be graded by the TAs and you will receive a '0' for this
assignment.

Note:  You may not change the "active" version after TA grading has begun.



### Accessing TA Grades and Semester Averages

When the TA grading has been completed, and the instructor has
released these grades, a summary report of the TA grading will appear
below the summary of the automated grading.

Contact the grading TA if you have questions about the TA grading
portion.

