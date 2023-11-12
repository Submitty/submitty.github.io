---
category: Instructor > Course Settings > Rainbow Grades
title: Manual Setup
redirect_from:
  - /instructor/rainbow_grades/manual_setup
---

1. **Export the 'Grade Summaries' (complete data for each student)**
   Go to the Submitty website.  Click 'Grade Reports' from the left sidebar.
   Then Click "Generate Grade
   Summaries".  Once the grade summary reports have been created, the
   browser will finish reloading the page and display a green box with
   "Successfully Generated Grade Summaries" in it. Currently this box
   disappears automatically a few seconds after is is loaded.

   Those json files are saved on the server here:   

   ```
   /var/local/submitty/courses/<semester>/<course>/reports/all_grades/<username>_summary.json
   ```


2. In order to run RainbowGrades on your local machine, you'll need
   to install `git`, `make`, `ssh`, `rsync`, `wget`, and `python3`.



3. **Obtain the Rainbow Grades Chart Software**  
   On your local computer (recommended so you can preview the results
   before posting), clone both the 
   [Submitty/Submitty repository](https://github.com/Submitty/Submitty/tree/master/)
   and the
   [Submitty/RainbowGrades repository](https://github.com/Submitty/RainbowGrades/tree/main/).
   We recommend you put this in a convenient top-level directory,
   separate from the materials for a specific course.  These directories should be in neighboring folders, e.g.:

   ```
   ~/Submitty/GIT_CHECKOUT/Submitty
   ~/Submitty/GIT_CHECKOUT/RainbowGrades
   ```


4. **Make a directory for preparing the grades**  
   This should not be within either of the Submitty repository checkouts above.  
   If you have a repository/dropbox for your course, put it there (and
   then you can backup the configuration files)

   Copy the [`SAMPLE_Makefile`][SAMPLE_Makefile] and
   [`SAMPLE_customization.json`][SAMPLE_customization.json] files from the RainbowGrades repository
   to that new directory (in the instructions below we'll assume you
   called the directory `grades_summary`).  Change the names to
   `Makefile` & `customization.json`.


4. **Edit the Makefile**  
   Set the variables at the top of the file
   (`USERNAME`, `RAINBOW_GRADES_DIRECTORY`, `HWSERVER`, `REPORTS_DIRECTORY`)

   If you are not a developer, jump to step 5 after setting these variables.

   Note (**FOR DEVELOPERS ONLY**):  When using the development VM, you can connect to the server as the instructor user:

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

   This will ask for your password on the server, and then it should
   copy those files to this local directory:

   ```
   grades_summary/raw_data/<username>_summary.json
   ```


6. **Start your customization**  
   In order to run Rainbow Grades you will need to set up a `customization.json` file. While we
   provide a sample file as a starting point, you will need to make changes in order to tailor
   Rainbow Grades for your course. Starting details are on the [Customization Basics](/instructor/course_settings/rainbow_grades/customization_basics) page.

7. **Add in gradeables**  
   Once you've set up general course information, you'll want to focus on adding gradeables
   to your `customization.json` file. This array describes each assignment to Rainbow Grades.
   You will likely update this many times throughout the semester. 

8. **Other customization extras**  
   `customization.json` supports other options. While the list may evolve over time, we currently
   provide documentation for [assigned exam seating](/instructor/course_settings/rainbow_grades/exam_customization).



9. **Generate the reports**.   
   Run:

   ```
   make
   ```

   This will produce an overall spreadsheet-like view for the instructor:

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


11. From the "Course Settings" tab (leftmost tab in the instructors
    black option bar), make sure the "Display Rainbow Grades Summary"
    option is checked (so the students can see the file).


12. View the student-facing submission site and confirm that the data
    in `<username>_message.html` is presented at the top of the main Submitty page,
    and `<username>_summary.html` is presented to the student when they press the "View Grades" button on the main page.


13. By default, the instructor table is sorted by overall grade.  But you can sort the list in different ways:

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

[SAMPLE_Makefile]: https://github.com/Submitty/RainbowGrades/blob/main/SAMPLE_Makefile
[SAMPLE_customization.json]: https://github.com/Submitty/RainbowGrades/blob/main/SAMPLE_customization.json

[Drop lowest function]
Although it is not yet implemented in web-GUI, RainbowGrades support drop lowest grade.
Directly edit the customization.json file
Here is a example usage, removing one lowest gradeable from given type
  ```json
{
  "count": 8,
  "percent": 0.12,
  "type": "quiz",
  "remove_lowest": 1,
  "ids": [
    {
      "max": 10.0,
      "id": "quiz01",
      "percent": 0.125,
      "released": true
    }
     ]
}
  ```




