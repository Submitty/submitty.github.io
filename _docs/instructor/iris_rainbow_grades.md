---
title: Iris (Rainbow Grades)
category: Instructor
order: 7
---

![](http://submitty.org/images/iris.png)

1. **Export the grades from the TA grading system / database**    
   Go to the TA grading website.  From the top menu, select "HWReports,
   CSV Reports, and Grade Summaries", then Click "Generate Grade
   Summaries".  Once the grade summary reports have been created, the
   browser will finish reloading the page and display a green box with
   "Successfully Generated GradeSummaries" in it. Currently this box
   disappears automatically a few seconds after is is loaded.

   Those json files are saved here:   

   ```
   /var/local/submitty/courses/<semester>/<course>/reports/all_grades/<username>_summary.json
   ```


2. **Obtain the Rainbow Grades Chart Software**  
   On your local computer (recommended so you can preview the results
   before posting), checkout the [Submitty repository](https://github.com/Submitty/Submitty/archive/master.zip)
   so you have access to the [Rainbow Grades code](https://github.com/Submitty/Submitty/tree/master/RainbowGrades).
   We recommend you put this in a convenient top-level directory,
   separate from the materials for a specific course.


3. **Make a directory for preparing the grades**  
   This should not be within the RCOS repository checkout above.  
   If you have a repository/dropbox for your course, put it there (and
   then you can backup the configuration files)

   Copy the [`SAMPLE_Makefile`][SAMPLE_Makefile] and
   [`SAMPLE_customization.json`][SAMPLE_customization.json]
   to that new directory (in the instructions below we'll assume you
   called the directory `grades_summary`).  Change the names to
   `Makefile` & `customization.json`.


4. **Edit the Makefile**  
   Set the variables at the top of the file
   (`USERNAME`, `RAINBOW_GRADES_DIRECTORY`, `HWSERVER`, `REPORTS_DIRECTORY`)

   Note:  When using the development VM, you can connect to the server as the instructor user:

   ```
   ssh -p 2222 instructor@127.0.0.1
   ```

   And copy files as the instructor user:

   ```
   scp -P 2222 -r instructor@127.0.0.1:/var/local/submitty/courses/<SEMESTER>/<COURSE>/<ETC>  <DESTINATION>
   ```


5. **Download the per student grade summary text files from the server**     
   Run:

   ```
   make pull
   ``` 

   This should copy those files to this local directory:

   ```
   grades_summary/raw_data/<username>_summary.json
   ```


6. **Customize**  
   The `customization.json` file is very flexible, and you will need to modify
   it to fit your grading scheme and gradeables. You can modify this file at
   any time and re-run Rainbow Grades, so small incremental changes are recommended.

   You are allowed to have C/C++ style comments in a `customization.json` file. When
   Rainbow Grades is built, it produces a new comment-free version called `customization_no_comments.json`.

   What follows is a specification for the `customization.json` file. Once you have finished modifying
   your json, you can proceed to the next step if you need to set up exam seating, or to "8. Generate the Reports".

   * **field:** ``"display":``  
     **type:** _array of strings_  
     **REQUIRED**

   The display field specifies what will be shown in the output HTML and individual student reports.
   It can contain the following:

   * ``"instructor_notes"``: Shows notes for early warnings, plagiarism, etc. only to the instructor
   * ``"grade_summary"``: Shows the overall score and score for each syllabus bucket (e.g. Homework)
   * ``"grade_details"``: Shows the score for each gradeable
   * ``"iclicker"``: Shows iClicker information including indivudal responses color-coded for correctness.
   * ``"final_grade"``: Shows final grade letters and some statistics about the final grade distribution.
   * ``"exam_seating"``: Shows exam seating assignments. To display the assignment on the Submitty course homepage,
     the instructor should make sure "Display Iris Custom Message" is enabled in "Course Settings" on the Submitty
     course page.
   
   * **field:** ``"display_benchmark":``  
     **type:** _array of strings_  
     **REQUIRED** if using ``"curve"`` in ``"gradeables"`` described below
   
      This array specifies which benchmarks will be displayed to instructors and students. Valid options are:
      * ``"average"``: The average for each gradeable
      * ``"stddev"``: The standard deviation for each gradeable
      * ``"perfect"``: Perfect scores (excluding extra credit) for each gradeable
      * ``"lowest_a-``, ``"lowest_b-"``, ``"lowest_c-"``, ``"lowest_d"``: Based on curves, the lowest scores that will earn
      the name of the benchmark. 

   * **field:** ``"benchmark_percent":``  
     **type:** _associative array / mapping from string to float_  
     **REQUIRED** if using ``"curve"`` in ``"gradeables"`` described below, or if any grade-letter benchmarks are used in ``"display_benchmark"`` above.

      Each of the benchmarks starting with "lowest" should be in this array along with the minimum percentage of total points
      neccessary to obtain that grade. For example to require an 82% for an A-, there should be an entry in the ``"benchmark_percent"`` array:
      ``"lowest_a-": 0.82``

   * **field:** ``"section":``  
     **type:** _associative array / mapping from string to string_  
     **REQUIRED**

      Rainbow Grades puts a label on each section, and you must specify what those
      labels are. Any string can be used as a label, but any section not listed in
      this array will be treated as invalid and ignored. These labels are only displayed
      on the instructor's `output.html`.

   * **field:** ``"messages":``  
     **type:** _array of strings_  

      These messages will be displayed at the top of the instructor summary and each
      student's individual Rainbow Grades report.

   * **field:** ``"final_cutoff":``  
     **type:** _associative array / mapping from string to float_  
     **REQUIRED** if using ``"final_grade"`` in ``"display:"``

      Each grade letter that you want should be associated with the minimum overall semester score required to get that grade.
      This array is unrelated to benchmarks.

   * **field:** ``"manual_grade":``  
     **type:** _associative array / mapping from string to associative array_  

      For each student that you want to assign a manual grade to, their id must
      be mapped to an associative array with a field ``"grade":`` mapped to a string
      with the letter grade you want to give them, and ``"note":`` containing any note
      about the adjustment. The note is only visible to the instructor. For example, 
      to give user ``smithj`` a grade lettter of ``D`` with a reason of 
      ``"Put in extraordinary effort."``:

      ```
      "smithj" : {
         "grade": "D",
         "note": "Put in extraordinary effort."
      }
      ```

   * **field:** ``"warning":``  
     **type:** _array of associative arrays_  

      This is similar to the ``"manual_grade":`` field, but is used to automatically
      generate a note for each student that fails to obtain a target score on a list
      of gradeables. For example, to add a note of "Low HW 1&2" to all students that
      fail to get at least 34 points on their hw01 and hw02 scores combined, the code
      below could be used. 

      ```
      "warning": [
    	  {
          "msg": "Low HW 1&2",
    	  "ids" : [ "hw01", "hw02" ],
          "value" : 34
          }
      ]
      ```

7. **Add In Gradeables**
     Gradeables are complex enough to warrant their own ``"gradeables":`` array.
     For each syllabus bucket you want included, this array must have one associative 
     array. Each associative array has the following fields:

   * **field:** ``"type":``  
     **type:** _string_  
     **REQUIRED**

     This is where the name of the bucket goes, e.g. ``"lab"`` or ``"homework"``.

   * **field:** ``"count":``  
     **type:** _integer_  
     **REQUIRED**

     The number of expected gradeables in the bucket at the end of the semester. This is used
     to figure out how much of a contribution each assignment has towards the total bucket's score.

   * **field:** ``"percent":``  
     **type:** _float_  
     **REQUIRED**

     A number between 0.0 and 1.0 that represents the fraction of the overall semester grade that
     is accounted for by this particular syllabus bucket. The sum of ``"percent"`` fields across all
     buckets should add up to at least 1.0 .

   * **field:** ``"ids":``  
     **type:** _array of associative arrays_  

     Each entry inside this array represents one gradeable. The fields inside the associative array are:

     * **field:** ``"id":``  
       **type:** _string_  
       **REQUIRED**

       The id of the gradeable. This should match the id you provided on Submitty's Create/Edit Gradeable form.

     * **field:** ``"max":``  
       **type:** _integer_  
       **REQUIRED**

       The maximum score (before extra credit) that a student can receive for this gradeable.

     * **field:** ``"curve":``  
       **type:** _array of floats_  

       An optional array with 4 numbers that correspond to the minimum score required for an A-, B-, C-, and D respectively.

     * **field:** ``"percent":``  
       **type:** _float_  

       An optional number that specifies the percentage of the bucket accounted for by this gradeable. If this is omitted, Rainbow
       Grades will attempt to distribute the percentage points in the bucket equally among gradeables.

8. If you'd like to assign zones for an upcoming exam:

      NOTE: This approach may be changing soon.

      ```
		  "exam_data" : {
			"active" : 1,
			"exam_title": "Data Structures Final",
			"exam_date": "Wednesday May 10th",
			"exam_time": "3-5:50pm",
			//"min_overall_for_zone_assignment":48.7, //Upper thresh, 20 students (344-363)
			"min_overall_for_zone_assignment":40.5, // Actual see inst thresh, 28 students  (364-391)
			"exam_default_room": "DCC 308",
			"exam_seating_count":"exam4_zone_counts.txt",
			"exam_seating":"exam4_seating.txt"
			//#58 students in 308 for reserved spaces
			//#30 will probably show		
	          }
      ```


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
      line to your `customization.json` file:

      ```
      min_overall_for_zone_assignment <MINIMUM GRADE>
      ```

9. **To use iClickers**

   NOTE: iClicker ID extraction is currently being reworked. The following
   instructions simply assume that you have a CSV file mapping iClicker IDs 
   to student IDs, an example row might read:

   ```
   #123ABC,"smithj"
   ```

   The leading ``#``, the letters in the iClicker ID being capitalized, and
   the student ID being wrapped in quotation marks are all important.

   NOTE: iClicker support is based on iClicker software version 6, and may not
   work with newer versions.

   In `customization.json` there are only two additional entries needed to
   make iClickers work.

   * **field:** ``"iclicker_ids":``  
     **type:** _string_  
     **REQUIRED** for iClickers

     The string is a relative path (it can just be a name if it is in the
     `grades_summary` directory).

   * **field:** ``"iclicker":``  
     **type:** _associative array of string to array_  
     **REQUIRED** for iClickers

     This array maps lecture numbers (e.g. ``"2":`` for lecture 2) to an array
     of associative arrays, where each of the inner associative arrays corresponds
     to one iClicker question.

     The inner array format is:

     * **field:** ``"file":``  
       **type:** _string_  
       **REQUIRED**

       A relative path to the iClicker session file (should look something like LYYMMDDHHII.csv,
       where YY is the 2-digit year 00-99, MM is the 2-digit month 01-12, DD is the 2-digit day 01-31,
       HH is the two digit hour 00-23, and II is the 2-digit minute 00-59). Multiple files can
       be used for one lecture.

     * **field:** ``"column":``  
       **type:** _integer_  
       **REQUIRED**

       This field specifies which question in the iClicker session to read student responses from.
       Each question is one column, so to get the third question you would use ``"column": 3``.

     * **field:** ``"answer":``  
       **type:** _string_  
       **REQUIRED**

       The correct answer(s) should be in this string. Multiple answers can be counted as correct,
       simply use multiple letters with no spaces. If all five letters are used (``"answer": "ABCDE"``),
       the question is considered a poll question and Rainbow Grades will highlight student responses in
       yellow. For any other question, student responses will be highlighted in green if they are correct
       (1.0 points towards iClicker score) and red if they are incorrect (0.5 points towards iClicker score).


     Below is a short example which gets questions 2.1 (a poll) and 2.2 (two right answers) from one file,
     and 2.3 from another file which also contains 3.1 (a poll).


     ```     
     "iclicker_ids": "clicker_data/RemoteID.csv",
     "iclicker": {
        "2": [
           {"file": "clicker_data/L1701201013.csv", "column": 1, "answer": "ABCDE"},
           {"file": "clicker_data/L1701201013.csv", "column": 2, "answer": "AE"},
           {"file": "clicker_data/L1701220958.csv", "column": 1, "answer": "D"},
        ],     
        "3": [
           {"file": "clicker_data/L1701220958.csv", "column": 2, "answer": "ABCDE"},           
        ]
      }
      ```

10. **Generate the reports**.   
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
   grades_summary/all_students_summary_html/output_<month>_<day>_<year>.html       
   ```

   It will also produce 3 files per student:
    
   ```
   grades_summary/individual_summary_html/<student>_summary.html
   grades_summary/individual_summary_html/<student>_message.html
   grades_summary/individual_summary_html/<student>_message.json
   ```
   
   Examine the html files.  Change `customization.json` & re-run `make` as needed.


9. **Upload the files to the server**.    
   Run:

   ```
   make push
   ```


10. Confirm the individual `<username>_summary.html` and `<username>_message.html` files have been copied here:
    ```
    /var/local/submitty/courses/<semester>/<course>/reports/summary_html/
    ```


11. View the student-facing submission site and confirm that the data
    in `<username>_message.html` is presented at the top of the main Submitty page,
    and `<username>_summary.html` is presented to the student when they press the "View Grades" button on the main page.


12. By default, the instructor table is sorted by overall grade.  But you can sort the list in different ways:

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

[SAMPLE_Makefile]: https://github.com/Submitty/Submitty/blob/master/RainbowGrades/SAMPLE_Makefile
[SAMPLE_customization.json]: https://github.com/Submitty/Submitty/blob/master/RainbowGrades/SAMPLE_customization.json
