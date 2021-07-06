---
title: Plagiarism Detection
category: Instructor
redirect_from:
  - /instructor/plagiarism
---

Submitty has its own system for plagiarism detection called Lichen, similar in function to Stanford's MOSS system that was used in the past.
Instructors can interact with the Lichen tool through a UI, which can be accessed from the sidebar of the course site under “Plagiarism Detection”, or, alternatively, interact with it by running the tool from the command line on the server machine.

## Using the Lichen UI

Through the Lichen UI, instructors can create new plagiarism detection configurations for gradeables, and edit or re-run existing ones.
The Lichen tool enables you to create multiple configurations per gradeable, where each configuration gets a unique ID, which allows running the tool on the same set of submissions under different settings.

### Plagiarism Main Page
The plagiarism main page displays a summary table of the results from previous runs of existing gradeable configurations, as well as those that are currently running.
Each row in the table represents a gradeable configuration, and contains the information on the gradeable name, configuration ID, run timestamp, number of students submitted and total number of submissions, and an overview of the run results.

![](/images/instructor/lichen/summary_page.png)

The log of a run for a configuration can be viewed at any time by clicking the "View Log" button, which will toggle a preview of the output of the Lichen processes which are taking place as part of the plagiarism detection algorithm.
This can be useful for tracking the progress of lengthy runs, or for troubleshooting in case a configuration does not run as expected.

![](/images/instructor/lichen/view_log.png)

_TODO: nightly rerun feature_

### Creating a New Configuration
To create a new configuration for a gradeable, from the main plagiarism page, click the "Configure New Gradeable for Plagiarism Detection" button, which will open a form with the different customizable parameters for the configurations, described below.

#### Gradeable
The configuration form allows you to select a gradeable from a dropdown of all the gradeables in the course that have submissions, on which you want to run the plagiarism detection.
If you select a gradeable that already has an existing configuration, then submitting the new configuration form will create another one, with a new unique ID.
Different configurations for gradeables are independent from each other, so editing, re-running, or deleting one configuration for a gradeable will not affect the other existing ones.

#### Instructor Provided Code
The "Instructor Provided Code" file upload is an optional field in the form.
The uploaded files will be used in the matching algorithm to identify regions in student submissions that match the provided code for that assignment.
Those matching regions will not be considered plagiarized regions, and will be specifically marked as "provided code" in the run results UI.

#### Version
Instructors can configure to either include all versions of students' submissions, or just the active version of students' submissions to be included and compared against in the matching algorithm.

#### Files to be Compared
This field in the form is used to specify which files for each student's version(s) are used in the matching algorithm.
Instructors can specify which of the three directories --"submissions", "results", and "checkout" (see also [Directory Structure](directory_structure)) -- to scan and grab submission files from.

In addition to specifying the directories, instructors can also specify exact file names, or [regular expressions](https://docs.python.org/3/library/fnmatch.html) for the file names, to be compared against in the algorithm.
For example, if we specify the file names "*.cpp, plaintext.txt" and the directories "submissions" and "results", then only files with the name `plaintext.txt` or with the extension `.cpp` in those two directories will be taken.

This field is particularly useful for when only certain files are of interest to an instructor to run plagiarism detection on, like when the files that are to be compared are not the files the students have directly submitted, but the output of their autograded tests. Another use case would be for gradeables to which students have submitted multiple files of different kinds, that would each yield the best results when run under different configuration parameters. For instance, if all the students submitted a `README.txt` and a `main.cpp` to a gradeable, then it might be helpful to make two separate configurations, the first where the C++ files are run under the C++ tokenizer (specified under the "Language" field, see next), and the second where the README.txt are run under the plain text tokenizer.

#### Language
The "Language" parameter affects the way regions of code from the student submissions are tokenized and compared against each other.
For example, the "Plain Text" option would compare tokens by trying to find exact strings that match across submissions files, while the "C++" option would compare tokens in the context of the programming language syntax, so it would be blind to the specific text in variable names and comments.

#### Common Code Threshold
This field in the form represents the threshold for maximum the number of students who share a matching segment of code to be considered plagiarized.
This means that if more students than the number specified as the threshold share matching code, the said shared code will be marked "common code" instead of as plagiarized, and will be specifically marked so in the run results UI.
This threshold is useful for assignments where student solutions generally fall into the same category or approach, and naturally a large portion of the submissions match.
Unique regions of match, where the number of students that share them is lower than the threshold, will still be identified and marked as plagiarized.

#### Sequence Length
The sequence length defines the amount of tokens in a section, or the window size, of code segments across student submissions that are to be compared.
Different settings for the "Language" field will (see above) will probably require different settings for the sequence length for optimal results, which is why for every supported language we have default recommended values for the sequence length.

#### Prior Term Gradeables
_TODO: future feature_

#### Users to be Ignored
This section of the configuration form allows the instructor to specify users whose submissions should not be included in the matching algorithm.
This can be useful for example in courses where the instructors, TAs, or other graders submit files to gradeables in order to test the automated grading before the assignment is released to students, and where finding matches across the course staff's test submissions is undesirable.
Instructors also have the option to list specific student names whose submissions are to be ignored, if they wish so.

### Viewing the Results of a Run
To view the results of a gradeable configuration's run, click the name of the gradeable in the main plagiarism page table.

When you are done filling out the form, click the "Save Configuration" button. The new configuration will be created, and will be automatically placed in the `daemon_job_queue` queue. You will be redirected to the main page, where you should see your newly created configuration under the status "_Running_".

## Running Lichen Manually

To run plagiarism detection manually with custom a configuration, you will need to log into the server and run the script:

```bash
bash "/usr/local/submitty/Lichen/bin/process_all.sh" "<config_path>" "<data_path>"
```
This script is the startup script for Lichen. It accepts a two paths and creates the necessary output directories as appropriate, relative to the provided paths.

The path `<config_path>` should be a path to a directory containing the custom configuration file for this gradeable, named `config.json` (on Submitty, the path would probably be: `.../<semester>/<course_id>/lichen/<gradeable_id>/<config_id>/`, however, the program can work with any path to a directory that contains a `config.json` file).
This path is also the path to the directory in which the output will be written to.

The path `<data_path>` should be a path to a directory containing the semesters and the courses with their data, which would probably be `/var/local/submitty/courses` on Submitty.
This path is used to get the submissions of the course users to be used in the plagiarism detection algorithm, and, if configured so, to get submissions from courses in prior terms.

Note: if the two paths you provide are absolute paths, then the above command to run the Lichen script can be executed from anywhere on the system.


### Provided Code Files
In addition to the parameters that can be specified in the configuration file (see "Configuration Parameters" next), if you wish to include files to be used in the matching algorithm as "instructor provided code", make sure to create the directory `<config_path>/provided_code/files/` and locate the files there.
If that directory does not exist, or if it contains no files, then the matching algorithm will run without trying to compare student submissions to "instructor provided code" files.


### Configuration Parameters
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
* **"prev_term_gradeables"** - [optional], _TODO: future feature_
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


### Editing and Re-running
If you wish to edit the configuration settings, you can edit the `config.json` file, and re-run the bash script with the same paths as arguments.
All of the existing output files of the previous run will be automatically removed when re-running the script, except for the configuration file and instructor provided code files, and the new run would generate new output files.
If you wish to add, change, or remove the files that would be used as the "instructor provided code" files, you would have to do so manually before re-running.
