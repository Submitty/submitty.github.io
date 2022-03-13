---
title: JSON Configuration Files
category: Developer > Software and System Design
redirect_from:
  - /developer/json_configuration_files
---

The system configuration and state are stored in several different
types of JSON data files.  demonstration purposes we assume the system
has a user "smithj" and assignment "hw1".  The examples below are
relative to a top level course path
```/var/local/submitty/courses/f16/csci1100/```, for assignment ```hw1``` and
student ```smithj```. Listed are first the JSON files and then
examples of these JSON files.

Each line is preceded by a comment in the structure of ```//
[type|default] comment```


**config/form/form_\<gradeable_id\>.json**: The last set of data exported from the "Gradeable" form when a gradeable is created/updated. These files may be imported in bulk from the "Import From JSON" option. [{config}/form/form_\<gradeble_id\>.json]

**config/build/build_\<gradeable_id\>.json**: Details on specific automated tests for this assignment

**user_assignment_settings.json**: Data for which version the user wants to submit as the final assignment as well as history of version changes [{submission}/hw1/smithj/user_assignment_settings.json]

**submission.json**: All data about a specific user submission [{results}/hw1/smithj/1/submission.json]


**.grade.timestamp**: Timestamp data about a specific user submission [{results}/hw1/smithj/1/submission.json




## \*_assignment_config.json
The \* would be equivalent to the ```assignment_id``` field in ```class.json``` as well as the ```id``` field in this json file. This file is generated when you build an assignment from it's ```config.json``` file.
```
{
    // [String] assignment id, should match the first part of the filename as well as field in class.json
    "id": "hw01",
    // [String|""] message to show to the user above any of their submission results
    "assignment_message": "Be sure to upload the assignment to the right bucket to get full credit",
    // [int|20] max number of submissions allowed by the server for an assignment before user
    // would lose credit for each additional submission attempt
    "max_submissions": 20,
    // [Numeric] max size of the submission of all files added together. for zips, we open the zip
    //and add up the size of all contained files
    "max_submission_size": 100000,
    "auto_pts": 8,
    "points_visible": 8,
    "ta_pts": 42,
    "total_pts": 50,
    "num_testcases": 3,
    // [Integer|1] Number of parts for submission, each part gets its own submission bucket
    "num_parts": 3,
    // [Array(String)|[]] Names for each part. If not set, defaults to "Part #" where # is the part number
    "part_names": [
        // [String] name for a given part to be shown in the upload zone for that part
        "Part 1",
        "Part 2",
        "Part 3"
    ],
    // [Array(Objects)|[]] array of test cases that represent how the assignment will be auto-graded
    "testcases": [
        {
            // [String|""] Name of the test case to be displayed to the user
            "title": "Test 1 README",
            // [String|""] Additional details about the test such as command used to run the test case
            "details": "",
            // [Numeric|0] How many points is this test case worth
            "points": 2,
            // [Boolean|false] Is the results (including score) hidden from the user
            "hidden": false,
            // [Boolean|false] Do the hidden details turn visible when grades are released
            "release_hidden_details": false,
            // [Boolean|false] Is this test case worth extra credit or regular credit
            "extracredit": false,
            // [Boolean|true] Doesn't do anything?
            "visible": true,
            // [Boolean|true] Doesn't do anything?
            "points_visible": true
        }
    ]
}
```

## user_assignment_settings.json
```
{
    // [Integer] What's the active version of the assignment, a 0 signifies that it's been cancelled
    "active_version": 1,
    // [Array(Objects)|[]] history of the active version changes that a user has done. This is ordered earliest to latest.
    "history": [
        {
            // [Integer] Version that user had changed to
            "version": 1,
            // [String] Timestamp of when user changed to this particular version
            "time": "2016-07-24 12:05:35"
        }
    ]
}
```

Proposed changes:
* change ```active_assignment``` to ```active_version```

## submission.json
```
{
    "submission_number": 1,
    "points_awarded": 0,
    "nonhidden_points_awarded": 0,
    "extra_credit_points_awarded": 0,
    "non_extra_credit_points_awarded": 0,
    "submission_time": "2012-07-08 11:59:0.0",
    "testcases": [
        {
            "test_name" : "Readme",
            "points_awarded": 2,
            "message": "You have a README!"
        },
        {
            "test_name": "Compilation",
            "points_awarded": 3,
            "message" : "You were able to compile!"
        },
        {
            "test_name": "Case1",
            "points_awarded": 5,
            "diff":{
                "instructor_file":"path/from/CSCI1200",
                "student_file":"path/from/submission.json",
                "difference":"path/from/submission.json"
            }
        }
    ]
}
```

## form.[gradeable_id].json
```
{
    "gradeable_id": "cpp_custom",
    "gradeable_title": "CPP Custom",
    "gradeable_type": "Electronic File",
    "date_submit": "07/30/2016 00:00:01",
    "instructions_url": "https://github.com/Submitty/Submitty/tree/master/more_autograding_examples/cpp_custom/sample_submissmions",
    "date_due": "08/07/2016 23:59:59",
    "eg_late_days": 2,
    "upload_type": "Upload File",
    "config_path": "/usr/local/submitty/more_autograding_examples/cpp_custom/config/",
    "point_precision": 0.5,
    "ta_grading": true,
    "comment_title": [
        "Uses non-trivial recursion"
    ],
    "ta_comment": [
        "Subtract 2 pts for static variables. No credit if no recursion was used."
    ],
    "student_comment": [
        "Made use of recursion without static variables"
    ],
    "points": [
        5
    ],
    "minimum_grading_group": 1,
    "ta_instructions": "",
    "section_type": "reg_section",
    "date_grade": "08/11/2016 23:59:59",
    "date_released": "08/08/2016 23:59:59",
    "gradeable_buckets": "homework"
}
```

## .grade.timestamp
```
{
  // [String] Timestamp for when the assignment is due
  "assignment_deadline"            : "Fri Jul 22 23:59:59 EDT 2016",
  // [String] Timestamp for when this version was submitted
  "submission_time"                : "Sun Jul 24 12:11:49 EDT 2016",
  // [Integer] Days the version is late (difference between deadline and submission time, rounded up to next day)
  "days_late_(before_extensions)"  : "2",
  // [String] timestamp on when the version entered the grading queue
  "queue_time"                     : "Sun Jul 24 12:11:49 EDT 2016",
  // [String] timestamp on when the version left the grading queue and started being graded
  "grading_began"                  : "Sun Jul 24 12:11:50 EDT 2016",
  // [String] number of seconds that the assignment was in the queue
  "wait_time"                      : "1 seconds",
  // [String] timestamp when grading for the version was finished
  "grading_finished"               : "Sun Jul 24 12:11:50 EDT 2016",
  // [String] number of seconds that the assignment took to be graded
  "grade_time"                     : "0 seconds"
}
```
