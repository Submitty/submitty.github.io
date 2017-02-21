---
title: Directory Structure
category: Instructor
order: 4
---

1. Login to the homework server.  _NOTE: If you are a developer/admin,
   you will need to switch user to the instructor user for that
   specific course, e.g.: `sudo su smithj`_


2. Go to the top level directory for that course.  For example:

   ``` 
   cd /var/local/submitty/courses/f16/csci1200/ 
   ```

   _NOTE: If your course is cross-listed (e.g., 4000 level for
   undergraduates 6000 level for graduate students), you probably want
   to choose just one course number for the directory.  You can assign
   students to different registration sections to help organize the
   rainbow grades chart._


3.  Here is an overview of the course directory structure:


   ```
   var
   └── local
       └── submitty
           └── courses
               └── {semesters}          [e.g., "f15", "s16", "f16", "s17", ... ]
                   └── {courses}        [e.g., "csci1100", "csci1200", ... ]
                       ├── BUILD_{course_name}.sh
                       ├── bin
                       |   └── {course assignments}   [e.g., "hw01", "hw02", ... ]
                       |       └── {autograder executables}
                       ├── config
                       |   └── {course and assignment json config files}
                       ├── results
                       |   └── {course assignments}
                       |       └── {students}         [e.g., "jonesa", "smithj", ... ]
                       |           └── {versions}     [e.g., "1", "2", "3", ... ]
                       |               └── {grades, logs, myers-diff data}
                       ├── submissions
                       |   └── {course assignments}
                       |       └── {students}
                       |           └── user_assignment_settings.json
                       |           └── {versions}
                       |               └── {student code, readme, timestamp (if 1-part hw)}
                       |               └── {parts (if multi-part)}[e.g."part1","part2",...]
                       |                   └── {student code, readme, timestamp}
                       ├── test_code
                       |   └── {course assignments}
                       |       └── {instructor source code files used in assignment}
                       ├── test_input
                       |   └── {course assignments}
                       |       └── {input text files used for grading}
                       └── test_output
                           └── {course assignments}
                               └── {text files of expected outputs}
   ```
   

4. In that directory, you'll find a copy of the [build_course.sh
   script](../blob/master/bin/build_course.sh), named
   ```BUILD_csci1200.sh``.  To run this script, type:

   ```
   ./BUILD_csci1200.sh 
   ```

   You'll need to re-run this script each time you add or edit a
   Gradeable, or modify the assignment configuration details in
   corresponding ``config.json`` or the associated assignment files.
   For more details, please see: [Course Management: Assignment
   Configuration Details](Assignment-Configuration)

   NOTE: The script copies your homework configuration and testing
   files to the different subdirectories (```build```,
   ```test_code```, ```test_input```, ```test_output```, and
   ```config```), and compiles the ```config.h``` file with the core
   grading code located in
   [/usr/local/submitty/src/grading/](https://github.com/Submitty/Submitty/tree/master/grading)
   to produce executables (stored in the ```bin``` diretory) that will
   be used for grading each submission.


5. When assignment submissions are received for this course, they are
   stored in the ``submissions`` directory (or the ``checkout``
   directory for SVN repository submissions).  All versions of all
   homeworks for all students are stored.  The file
   ``user_assignments_settings.json`` stores the current "ACTIVE"
   assignment, and this history of changes to the "ACTIVE" assignment
   made by the student.

   In a parallel directory hierarchy named ``results`` you can review
   the autograding results.

   Finally, in the ``reports`` directory you can review text files with
   the TA grades and per student overall course grade summaries.