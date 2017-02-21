---
title: Iris (Rainbow Grades)
category: Instructor
order: 7
---

![](http://submitty.org/images/iris.png)

1. **Export the grades from the TA grading system / database**    
   Go to the TA grading website.  From the top menu, select "Grading
   Tools" -> "Generate Grade Summaries", then Click "Generate Grade
   Summaries".  After a brief pause, you should get confirmation that
   it created the grade summary report for each student.

   Those json files are saved here:   

   ```
   /var/local/submitty/courses/<semester>/<course>/reports/all_grades/<username>_summary.json
   ```


2. **Obtain the Rainbow Grades Chart Software**  
   On your local computer (recommended so you can preview the results
   before posting), checkout this repository so you have access to the
   [Rainbow Grades code]
   (https://github.com/Submitty/Submitty/tree/master/RainbowGrades).
   We recommend you put this in a convenient top-level directory,
   separate from the materials for a specific course.


3. **Make a directory for preparing the grades**  
   This should not be within the RCOS repository checkout above.  
   If you have a repository/dropbox for your course, put it there (and
   then you can backup the configuration files)

   Copy the
   [SAMPLE_Makefile](../blob/master/RainbowGrades/SAMPLE_Makefile)
   and
   [SAMPLE_customization.json](../blob/master/RainbowGrades/SAMPLE_customization.json)
   to that new directory (in the instructions below we'll assume you
   called the directory `grades_summary`).  Change the names to
   `Makefile` & `customization.json`.


4. **Edit the Makefile**  
   Set the variables at the top of the file
   (`USERNAME`, `RAINBOW_GRADES_DIRECTORY`, `HWSERVER`, `REPORTS_DIRECTORY`)


5. **Download the per student grade summary text files from the server**     
   Run:

   ```
   make pull
   ``` 

   This should copy those files to this local directory:

   ```
   grades_summary/raw_data/<username>_summary.txt
   ```


6. **Customize**  
   Modify the `customization.json` file for each gradeable category.

   FIXME:  Add more details


7. If you'd like to assign zones for the upcoming exam:

   1. Uncomment the `display exam_seating` flag at the top of the
      file.

   2. Uncomment the `exam_seating` option below.  This line includes
      the names of two files, the zone counts file and the seating
      assignments file.  We'll use `exam1_zone_counts.txt` and
      `exam1_seating.txt` in this example.

   3. Specify the number of seats you will have per zone in the
      `exam1_zone_counts.txt` file.  Each line of this file should
      be this format:

      ```
      <ZONE> <BUILDING> <ROOM> <#>
      ```

      Make sure you provide enough total seats across all zones for
      your students.


   4. If you'd like to specify zone assignments, you may do so by
      preparing the file `exam1_seating.txt` file yourself.  The
      program will check that the assignment zones are valid and do
      not exceed the # of students per zone.  If you do not provide
      the seating file, students will be randomly assigned to zones.
      If you do not assign all of the students in valid sections to a
      zone, the remaining students will be assigned.  NOTE: This
      seating file is overwritten to add any unassigned students.

      The format of each line of the seating file is:
      
      ```
      <lastname>  <firstname>  <username>  <building>  <room>  <zone>  <time>
      ```


   5. A zone will be assigned to each student in a valid section, who
      has an overall grade of at least 0.1.  Or you may specify your
      own minimum overall grade for zone assignment by adding this
      line to your `customization.txt` file:

      ```
      min_overall_for_zone_assignment <MINIMUM GRADE>
      ```


8. **Generate the reports**.   
   Run:

   ```
   make
   ```

   This will produce 1 master spreadsheet-like view for the instructor:

   ```
   grades_summary/output.html
   ``` 

   Note: This file is automatically archived/backed up/saved with
   today's date here:

   ```
   grades_summary/all_students_summary_html/output.html_<month>_<day>_<year>.html       
   ```

   It will also produce 2 files per student:
    
   ```
   grades_summary/individual_summary_html/<student>_summary.html
   grades_summary/individual_summary_html/<student>_message.html
   ```
   
   Examine these files.  Change `customization.txt` & re-run `make` as needed.


9. **Upload the files to the server**.    
   Run:

   ```
   make push
   ```


10. Confirm the individual `<username>_summary.html` and
    `<username>_message.html` files have been copied here:

   ```
   /var/local/submitty/courses/<semester>/<course>/reports/summary_html/
   ```


11. View the student-facing submission site and confirm that the data
    in `<username>_message.html` is presented at the top of the main Submitty page,
    and `<username>_summary.html` is presented to the student when they press the "View Grades" button on the main page.


12.  By default, the instructor table is sorted by overall grade.  But you can sort the list in different ways:

    To group by section, then sort alphabetically (useful to enter final grades!)
    ```
    make section
    ``` 

    To sort by specific gradeable:
    ```
    make lab
    make hw
    make test
    make quiz
    make exam
    make reading
    make project
    ``` 

    etc.