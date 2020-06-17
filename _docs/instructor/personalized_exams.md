---
title: Personalized Exams
category: Instructor
---


We provide scripts to prepare personalized exams for each student,
facilitating randomized assigned seating, QR codes, and notes/crib sheets:


* (Optional) Collect student left or right handedness.  
  Provided Submitty

  [Gradeable for left or right handedness](https://github.com/Submitty/Submitty/blob/master/more_autograding_examples/left_right_exam_seating/config/)

* (Optional) Collect student-prepared notes (crib sheet).

  [Gradeable for 2 pages of notes](https://github.com/Submitty/Submitty/tree/master/more_autograding_examples/test_notes_upload/config)

  [Gradeable for 3 pages of notes](https://github.com/Submitty/Submitty/tree/master/more_autograding_examples/test_notes_upload_3page/config/)


* Prepare the `test_seating.txt` file:  
  _Note: [Rainbow Grades](/instructor/rainbow_grades/) can be used to generate this file._

    ```
    Jones     Sally    joness     2     Darrin  308   RED    8    9    6-7:50pm  
    Williams  Chris    williamsc   
    Miller    Fred     millerf    3     Darrin  239   EXTRA  N/A  N/A  4-7:50pm, laptop
    N/A       N/A      N/A        N/A   Darrin  308   RED    2    5    N/A
    Smith     Alex     smitha     8     Sage    3303  BLUE   2    6    6-7:50pm
    N/A       N/A      N/A        N/A   Darrin  308   RED    N/A  16   N/A
    Collins   Bethany  collinsb   1     Darin   308   RED    8    7    6-7:50pm
    ```


* Prepare a "blank" test as a .pdf file.  Be sure to empty space on
  the first page to allow placment of the large box with student
  information and the QR code.

  ![](/images/instructor/personalized_exam/blank_page_1.png){:width="380px"}
  ![](/images/instructor/personalized_exam/blank_page_2.png){:width="380px"}


* Download [Submitty Instructor Tools repository](https://github.com/Submitty/InstructorTools/)
  and follow the
  [QR TestMaker](https://github.com/Submitty/InstructorTools/tree/master/QR_TestMaker)
  instructions to prepare personalized exams.

  Note that in addition to the QR code on the first page, the
  student's name and email address is placed in the upper right corner
  of all following pages.

  ![](/images/instructor/personalized_exam/personalized_page_1.png){:width="380px"}
  ![](/images/instructor/personalized_exam/personalized_page_2.png){:width="380px"}


* _TODO: Write instructions for printing a large set of personalized exams
  with our specific copier._