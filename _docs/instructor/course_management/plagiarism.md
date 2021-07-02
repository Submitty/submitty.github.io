---
title: Plagiarism Detection
category: Instructor
order: 10
---

Submitty has its own system for plagiarism detection called Lichen, similar in function to
Stanford's MOSS system that was used in the past. Instructors can interact with the Lichen tool through a UI, which can be accessed from the sidebar of the course site under “Plagiarism Detection”, or, alternatively, run the tool from the commandline on the server machine.

## Using the Lichen UI

TODO: explanation on how the UI works and how to create configurations

## Running Lichen Manually

To run plagiarism detection with custom configuration, you will need to log into the server machine and run the script:

```
bash "/usr/local/submitty/Lichen/bin/process_all.sh" "<config_path>" "<data_path>"
```
This script is the startup script for Lichen. It accepts a two paths and creates the necessary output directories as appropriate, relative to the provided paths.

The path `<config_path>` should be a path to a directory containing the custom configuration file for this gradeable, named `config.json` (on Submitty, the path would probably be: `.../<semester>/<course_id>/lichen/<gradeable_id>/<config_id>/`, however, the program can work with any path to a directory that contains a `config.json` file). This path is also the path to the directory in which the output will be written to.

The path `<data_path>` should be a path to a directory containing the semesters and the courses with their data, which would probably be `/var/local/submitty/courses` on Submitty. This path is used to get the submissions of the course users to be used in the plagiarism detection algorithm, and if configured so, to get submissions from courses in prior terms.

Note: if the two paths you provide are absolute paths, than the above command to run the Lichen script can be executed from anywhere on the system.

The expected `config.json` file mentioned above is of the template:
```json
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

# Configuration Parameters

All of the fields in the configuration file correspond to the fields in the UI configuration form (see above for explanations).

* **"semester"** - a string, should be the same as the semester ID in the course URL
* **"course"** - a string, should be the same as the course ID in the course URL
* **"gradeable"** - a string, should be the same as the custom ID given to the gradeable on which you want to run the plagiarism detection
* **"config_id"** - [optional] a string. If you wish for this gradeable to show up on the plagiarism UI, make sure that this string is unique for the different runs of lichen on this gradeable
* **"version"** - a string, can be either "all_versions", or  "active_version"
* **"regex"** - a string of expressions separated by commas and spaces, in which every string is a regular expression for a submission file name to be included in the plagiarism detection algorithm. An empty string is equivalent to include all the submission files.
* **"regex_dirs"** - an array of strings, can be any combination of: "submissions", "results", "checkout"
* **"language"** - a string, can be one of: "plaintext", "python", "java", "cpp", "mips".
* **"threshold"** - an integer, must be greater than or equal to 1
* **"sequence_length"** - an integer, must be greater than or equal to 2
* **"prev_term_gradeables"** - [optional -- future feature],
* **"ignore_submissions"** - an array of strings, where every string is a user ID whose submissions are to be ignored in the plagiarism detection algorithm. If you wish to ignore no one, leave it blank (set to an empty array: `[]`)


Here is an example `config.json` for the course (for example, if you had a Fall 2017 course named `test_course`, which is found in the directory `/var/local/submitty/courses/f17/test_course`):

```json
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
    	"ta2"
        "instructor",
        "bitdiddle",
        "aphacker"
    ]
}
```

In addition to the above parameters that can be specified in the configuration file, if you wish to include files to be used in the matching algorithm as "instructor provided code", those files need to located in `<config_path>/provided_code/files/`.

If you wish to edit the configuration settings, you can edit the `config.json` file, and rerun the bash script. All of the output files of the previous run will be removed, except for the configuration file and instructor provided code files, and new run would generate new output. If you wish to change the files that would be used as the instructor provided code files, you would have to do so manually before rerunning the bash script.
