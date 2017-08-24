---
title: Exam Seating
category: Instructor
order: 14
---

8. If you'd like to assign zones for an upcoming exam:

   NOTE: This approach may change in the near future.

   1. Add ``"exam_seating"`` to the ``"display":`` array in `customization.json` .

   2. In the associative array (includes ``"id":``) for the gradeable you want seating
      for in ``gradeables:``, add a new field ``"exam_data"`` which is associated with another
      associative array containing:

      * **field:** ``"active":``  
        **type:** _integer_  

        This should be set to `1` if this seating configuration is going to be used, and `0` otherwise.

      * **field:** ``"exam_title":``  
        **type:** _string_  

        This will be shown along with the ``"exam_date":`` and ``"exam_time":`` fields in the Iris Custom
        Message shown to students on Submitty (if enabled).

      * **field:** ``"exam_date":``  
        **type:** _string_  

      * **field:** ``"exam_time":``  
        **type:** _string_  

      * **field:** ``"min_overall_for_zone_assignment":``  
        **type:** _float_  

        You can include this field to require that students have at least a certain overall score in the course
        in order to be assigned a seat. Otherwise, a zone will be assigned to each student who has an overall 
        grade of at least 0.1 and is in a valid section.

      * **field:** ``"exam_default_room":``  
        **type:** _string_  

        If a student is not assigned to a particular zone/seat, they will be assigned to this room with a
        zone of "SEE INSTRUCTOR".

      * **field:** ``"exam_seating_count":``  
        **type:** _string_  

        The name of the zone counts file described in the next steps.
        We'll use `exam1_zone_counts.txt` as an example.

      * **field:** ``"exam_seating":``  
        **type:** _string_  

        The name of the seating assignments file described in the next steps.
        We'll use ``exam1_seating.txt` as an example.

      An example of these fields in use is:

      ```
      "gradeables": [
      {
        "type": "exam",
        "count": 2,
        "ids":[
        {
          "id": "exam1",
          "max": 100,
          "exam_data": {
            "active": 1,
            "exam_title": "My CS Course Exam 1",
            "exam_date": "Wednesday May 10th",
            "exam_time": "3-5:50pm",
            "min_overall_for_zone_assignment": 40.5,
            "exam_default_room": "DCC 308",
            "exam_seating_count": "exam1_zone_counts.txt",
            "exam_seating": "exam1_seating.txt"
          }
        }
        ]
      }
      ]
      ```

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
