---
title: Plagiarism Detection
category: Instructor
order: 10
---

Submitty has its own system for plagiarism detection called Lichen, similar in function to Stanford's MOSS system that was used in the past.
Instructors can interact with the Lichen tool through a UI, which can be accessed from the sidebar of the course site under “Plagiarism Detection”, or, alternatively, interact with it by running the tool from the command line on the server machine.

## Using the Lichen UI

Through the Lichen UI, instructors can create new plagiarism detection configurations for gradeables, and edit or re-run existing ones.
The Lichen tool enables you to create multiple configurations per gradeable, where each configuration gets a unique ID, which allows running the tool on the same assignment under different settings.

#### Plagiarism Main Page
The plagiarism main page displays a summary table of the results from previous runs of existing gradeable configurations, as well as those that are currently running.
Each row in the table represents a gradeable configuration, and contains the information on the gradeable name, configuration ID, run timestamp, number of students submitted and total number of submissions, and an overview of the run results.

![](/images/instructor/lichen/summary_page.png)

The log of a run for a configuration can be viewed at any time by clicking the "View Log" button, which will toggle a preview of the output of the Lichen processes which are taking place as part of the plagiarism detection algorithm.
This can be useful for tracking the progress of lengthy runs, or for troubleshooting in case a configuration does not run as expected.

![](/images/instructor/lichen/view_log.png)

_TODO: nightly rerun feature_

#### Creating a New Configuration
To create a new configuration for a gradeable, from the main plagiarism page, click the "Configure New Gradeable for Plagiarism Detection" button, which will open a form with the different customizable parameters for the configurations, described below.

##### Gradeable
The configuration form allows you to select a gradeable from a dropdown of all gradeables that have submissions, on which you want to run the plagiarism detection.
If you select a gradeable that already has an existing configuration, then submitting the new configuration form will create another one, with a new unique ID.
Different configurations for gradeables are independent from each other, so editing, re-running, or deleting one configuration for a gradeable will not affect the other existing ones for that gradeable.

##### Instructor Provided Code
The "Instructor Provided Code" file upload is an optional field in the form.
The uploaded files will be used in the matching algorithm to identify regions in student submissions that match the provided code for that assignment.
Those matching regions will not be considered plagiarized regions, and will be specifically marked as "provided code" in the run results UI.

##### Version
Instructors can configure to either include all versions of students' submissions, or just the active version of students' submissions to be included and compared against in the matching algorithm.

##### Files to be Compared
_TODO_

##### Language
_TODO_

##### Common Code Threshold
_TODO_

##### Sequence Length
_TODO_

##### Prior Term Gradeables
_TODO: futute feature_

##### Users to be Ignored
_TODO_

#### Viewing the Results of a Run
_TODO_


## Running Lichen Manually

To run plagiarism detection with custom a configuration, you will need to log into the server machine and run the script:

```bash
bash "/usr/local/submitty/Lichen/bin/process_all.sh" "<config_path>" "<data_path>"
```
This script is the startup script for Lichen. It accepts a two paths and creates the necessary output directories as appropriate, relative to the provided paths.

The path `<config_path>` should be a path to a directory containing the custom configuration file for this gradeable, named `config.json` (on Submitty, the path would probably be: `.../<semester>/<course_id>/lichen/<gradeable_id>/<config_id>/`, however, the program can work with any path to a directory that contains a `config.json` file).
This path is also the path to the directory in which the output will be written to.

The path `<data_path>` should be a path to a directory containing the semesters and the courses with their data, which would probably be `/var/local/submitty/courses` on Submitty.
This path is used to get the submissions of the course users to be used in the plagiarism detection algorithm, and, if configured so, to get submissions from courses in prior terms.

Note: if the two paths you provide are absolute paths, then the above command to run the Lichen script can be executed from anywhere on the system.


#### Provided Code Files
In addition to the parameters that can be specified in the configuration file (see "Configuration Parameters" next), if you wish to include files to be used in the matching algorithm as "instructor provided code", make sure to create the directory `<config_path>/provided_code/files/` and locate the files there.
If that directory does not exist, or if it contains no files, then the matching algorithm will run without trying to compare student submissions to "instructor provided code" files.


#### Configuration Parameters
The expected `config.json` file mentioned above is of the template:
```
{
    "semester": "<semester>",
    "course": "<course_id>",
    "gradeable": "<gradeable_id>",
    "config_id": "<cofig_id>",
    "version": "<version_configuration>",
    "regex": "<regex_configuration>",
    "regex_dirs": [
    	"<submissions_dirs>"
    ],
    "language": "<language>",
    "threshold": <threshold>,
    "sequence_length": <sequence_length>,
    "prev_term_gradeables": [],
    "ignore_submissions": [
    	<users>
    ]
}
```

All of the fields in the above configuration file template correspond to the fields in the UI configuration form (see "Using the Lichen UI" for explanations).

The expected values for the configuration parameters are:
* **"semester"** - a string, should be the same as the semester ID in the course URL
* **"course"** - a string, should be the same as the course ID in the course URL
* **"gradeable"** - a string, should be the same as the custom ID given to the gradeable on which you want to run the plagiarism detection
* **"config_id"** - [optional] a string. If you wish for this gradeable to show up on the plagiarism UI, make sure this string is unique for each of the different runs of Lichen on this gradeable
* **"version"** - a string, can be either "all_versions", or  "active_version"
* **"regex"** - a string of expressions separated by commas and spaces, in which every string is a regular expression for a submission file name to be included in the plagiarism detection algorithm. To include all the submission files, put an empty string here.
* **"regex_dirs"** - an array of strings, can be any combination of: "submissions", "results", "checkout", where each string should appear at most once
* **"language"** - a string, can be one of: "plaintext", "python", "java", "cpp", "mips".
* **"threshold"** - an integer, must be greater than or equal to 1
* **"sequence_length"** - an integer, must be greater than or equal to 2
* **"prev_term_gradeables"** - [optional -- future feature],
* **"ignore_submissions"** - an array of strings, where every string is a user ID whose submissions are to be ignored in the plagiarism detection algorithm. If you wish to ignore no one, leave it blank (set to an empty array: `[]`)


Here is an example `config.json` file for a gradeable called "example_gradeable" in course named "test_course" in Fall 2017, which is found in the directory `/var/local/submitty/courses/f17/test_course`:

```
{
    "semester": "f17",
    "course": "test_course",
    "gradeable": "example_gradeable",
    "config_id": "1",
    "version": "all_versions",
    "regex": "README.txt, *.cpp",
    "regex_dirs": [
    	"submissions",
    	"results"
    ],
    "language": "plaintext",
    "threshold": 20,
    "sequence_length": 5,
    "prev_term_gradeables": [],
    "ignore_submissions": [
    	"grader",
    	"ta1",
    	"ta2",
        "instructor",
        "bitdiddle",
        "aphacker"
    ]
}
```

Let this file be located in `/var/local/submitty/courses/f17/test_course/lichen/example_gradeable/1`. To run the script with this configuration file, we would run:
```bash
bash "/usr/local/submitty/Lichen/bin/process_all.sh" "/var/local/submitty/courses/f17/test_course/lichen/example_gradeable/1" "/var/local/submitty/courses"
```


#### Editing and Re-running
If you wish to edit the configuration settings, you can edit the `config.json` file, and re-run the bash script with the same paths as arguments.
All of the existing output files of the previous run will be automatically removed when re-running the script, except for the configuration file and instructor provided code files, and the new run would generate new output files.
If you wish to add, change, or remove the files that would be used as the "instructor provided code" files, you would have to do so manually before re-running.
