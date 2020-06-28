---
title: Autograding Configuration Structure
category: Instructor -- Autograding Configuration
---

You can study the [Tutorial Example Assignment Configurations](https://github.com/Submitty/Tutorial/tree/master/examples)

And [additional configuration examples](https://github.com/Submitty/Submitty/tree/master/more_autograding_examples) are available.


Each assignment configuration will have a top level directory with a
```config.json``` file.  Here is the general structure of a homework
configuration directory:

   ```
   computer_science_1
   └── my_python_homework
       ├── config.json                   [ REQUIRED ]
       ├── provided_code                 [ OPTIONAL ]
       |   └── instructor_code.cpp
       |   └── instructor_code.h
       ├── test_input                    [ OPTIONAL ]
       │   └── input_1.txt
       │   └── input_2.txt
       │   └── input_3.txt
       ├── test_output                   [ OPTIONAL ]
       │   └── output_1.txt
       │   └── output_txt
       │   └── output_3.txt
       ├── instructor_CMakeLists.txt     [ OPTIONAL ]
       └── custom_validation_code        [ OPTIONAL ]
           └── grader.cpp
           └── grader.h
           └── another_file.cpp

   ```




### Automatically Generated Submission Limit Test Case

  Students are allowed to resubmit if they discover an error.  And
  students should be able to submit partial work early and verify they
  are on the right track.

  However, we assume that students will do the bulk of their
  development, testing, and debugging on a local machine.  To prevent
  overuse of limited resources, Submitty adds a test case that adds a
  small 1/10th of a point penalty for each submission over 20
  submissions.
  _Note that autograding totals round down to the nearest integer._


  ```
        {
            "title": "Submission Limit",
            "type": "FileCheck",
            "max_submissions": 20,
            "penalty": -0.1,
            "points": -5
        }
   ```

   You may adjust this limit by pasting this syntax into your
   config.json and adjusting the parameters.  The student is allowed
   `max_submissions` penalty-free submissions.  After that, they will
   be charged `penalty` points per additional submission.  The maximum
   penalty is set with the `points` parameter.  For example:

   [Hidden Test Case configuration with customized Submission Limit](https://github.com/Submitty/Submitty/blob/master/more_autograding_examples/cpp_hidden_tests/config/config.json)


   Note, you can view the defaults added to your config file by
   viewing:

   ```
   /var/local/submitty/courses/<SEMESTER>/<COURSE>/config/complete_config/complete_config_<GRADEABLE>.json
   ```




