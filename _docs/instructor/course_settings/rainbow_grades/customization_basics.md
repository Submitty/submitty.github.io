---
category: Instructor > Course Settings > Rainbow Grades
title: Customization Basics
redirect_from:
  - /instructor/rainbow_grades/customization_basics
---


The `customization.json` file is primarily how you will configure Rainbow Grades.
You will need to modify it to fit your grading scheme and gradeables. You can modify this file at
any time and re-run Rainbow Grades, so small incremental changes are recommended.

You are allowed to have C/C++ style comments in a `customization.json` file. When
Rainbow Grades is built, it produces a new comment-free version called `customization_no_comments.json`.

What follows is a partial specification for the `customization.json` file. Information on other parts
of the file are written on separate pages also grouped under "Rainbow Grades" on the navigation sidebar.

* **field:** ``"display"``  
  **type:** _array of strings_  
  **REQUIRED**

The display field specifies what will be shown in the output HTML and individual student reports.
It can contain the following:

* ``"instructor_notes"``: Shows notes for early warnings, plagiarism, etc. only to the instructor
* ``"grade_summary"``: Shows the overall score and score for each syllabus bucket (e.g. homework)
* ``"grade_details"``: Shows the score for each gradeable
* ``"section"``: Show the students' registration section.
* ``"messages"``: Show a text message at the top of the page.
* ``"final_grade"``: Shows final grade letters and some statistics about the final grade distribution.
* ``"manual_grade"``: Manually assign final grades to specific students.
* ``"exam_seating"``: Shows exam seating assignments. To display the assignment on the Submitty course homepage,
  the instructor should make sure "Display Rainbow Grades Custom Message" is enabled in "Course Settings" on the Submitty
  course page.
* ``"display_rank_to_individual"``: Shows each student's rank in the course, independent of section.

  ```json
    "display": [
      "grade_summary",
      "grade_details",
      "section",
      "messages",
      "final_grade",
      "manual_grade"
    ]
  ```

* **field:** ``"display_benchmark"``  
  **type:** _array of strings_  
  **REQUIRED** if using ``"curve"`` in ``"gradeables"`` described below

  This array specifies which benchmarks will be displayed to instructors and students. Valid options are:
   * ``"average"``: The average for each gradeable
   * ``"stddev"``: The standard deviation for each gradeable
   * ``"perfect"``: Perfect scores (excluding extra credit) for each gradeable
   * ``"lowest_a-``, ``"lowest_b-"``, ``"lowest_c-"``, ``"lowest_d"``: Based on curves, the lowest scores that will earn
   the name of the benchmark. 

  ```json
    "display_benchmark": [
      "average",
      "stddev",
      "perfect",
      "lowest_a-",
      "lowest_b-",
      "lowest_c-",
      "lowest_d"
    ]
  ```

* **field:** ``"benchmark_percent"``  
  **type:** _associative array / mapping from string to float_  
  **REQUIRED** if using ``"curve"`` in ``"gradeables"`` described below, or if any grade-letter benchmarks are used in ``"display_benchmark"`` above.

  Each of the benchmarks starting with "lowest" should be in this array along with the minimum percentage of total points
  necessary to obtain that grade. For example to require an 82% for an A-, there should be an entry in the ``"benchmark_percent"`` array:
  ``"lowest_a-": 0.82``

  To display all benchmarks, include the following:
  ```json
    "benchmark_percent": {
      "lowest_a-": 0.9,
      "lowest_b-": 0.8,
      "lowest_c-": 0.7,
      "lowest_d": 0.6
    }
  ```

* **field:** ``"section"``  
  **type:** _associative array / mapping from string to string_  
  **REQUIRED**

  Rainbow Grades puts a label on each section, and you must specify what those
  labels are. Any string can be used as a label, but any section not listed in
  this array will be treated as invalid and ignored. These labels are only displayed
  on the instructor's `output.html`.

  ```json
    "section": {
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10"
    }
  ```

* **field:** ``"messages"``  
  **type:** _array of strings_  

  These messages will be displayed at the top of the instructor summary and each
  student's individual Rainbow Grades report.

  ```json
    "messages": [
      "Example message"
    ]
  ```

* **field:** ``"final_cutoff"``  
  **type:** _associative array / mapping from string to float_  
  **REQUIRED** if using ``"final_grade"`` in ``"display"``

  Each grade letter that you want should be associated with the minimum overall semester score required to get that grade.
  This array is unrelated to benchmarks. For example:

  ```json
  "final_cutoff" : {
    "A": 93.0,
    "A-": 90.0,
    "B+": 87.0,
    "B": 83.0,
    "B-": 80.0,
    "C+": 77.0,
    "C": 73.0,
    "C-": 70.0,
    "D+": 67.0,
    "D": 63.0
  }
  ```

* **field:** ``"manual_grade"``  
  **type:** _array of associative arrays_  

  For each student that you want to assign a manual grade to, add an item to
  ``"manual_grade"`` with fields ``"user"``, ``"grade"``, and ``"note"`` containing
  any note about the adjustment. The note is only visible to the instructor. For example, 
  to give user ``smithj`` a grade lettter of ``D`` with a reason of 
  ``"Put in extraordinary effort."``:

  ```json
  "manual_grade" : [{
     "user":"smithj",
     "grade": "D",
     "note": "Put in extraordinary effort."
  }]
  ```

* **field:** ``"warning"``  
  **type:** _array of associative arrays_  

  This is similar to the ``"manual_grade"`` field, but is used to automatically
  generate a note for each student that fails to obtain a target score on a list
  of gradeables. For example, to add a note of "Low HW 1&2" to all students that
  fail to get at least 34 points on their hw01 and hw02 scores combined, the code
  below could be used. 

  ```json
  "warning": [{
     "msg": "Low HW 1&2",
     "ids" : [ "hw01", "hw02" ],
     "value" : 34
  }]
  ```
