---
title: Lichen Plagiarism Detection
category: Developer
---

See also [Instructor UI for Lichen Plagiarism Detection](/instructor/plagiarism).


### Lichen Configuration File

Here is an example `config.json` file for a gradeable called
`example_gradeable` in course named `test_course` in `Fall 2017`, which
is found in the directory
`/var/local/submitty/courses/f17/test_course`:

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
    "prior_term_gradeables": [
        {
           "prior_semester": "f16",
           "prior_course": "sample",
           "prior_gradeable": "example_gradeable"
        }
    ],
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


The expected values for the configuration parameters are:

* **"semester"** - a string, should be the same as the semester ID in
    the course URL

* **"course"** - a string, should be the same as the course ID in the
    course URL

* **"gradeable"** - a string, should be the same as the custom ID
    given to the gradeable on which you want to run the plagiarism
    detection

* **"config_id"** - [optional] a string. If you wish for this
    gradeable to show up on the plagiarism UI, make sure this string
    is unique for each of the different runs of Lichen on this
    gradeable

* **"version"** - a string, can be either "all_versions", or
    "active_version"

* **"regex"** - a string of expressions separated by commas and
    spaces, in which every string is a regular expression for a
    submission file name to be included in the plagiarism detection
    algorithm. To include all the submission files, put an empty
    string here.

* **"regex_dirs"** - an array of strings, can be any combination of:
    "submissions", "results", "checkout", where each string should
    appear at most once

* **"language"** - a string, can be one of: "plaintext", "python",
    "java", "cpp", "mips".

* **"threshold"** - an integer, must be greater than or equal to 1

* **"sequence_length"** - an integer, must be greater than or equal to 2

* **"prior_term_gradeables"** - an array of objects that
    represent gradeables whose submissions are to be included in
    the matching algorithm, where each object contains:
    * `prior_semester` - the semester ID of the other gradeable
    * `prior_course` - the course ID of the other gradeable
    * `prior_gradeable` - the gradeable ID of the other gradeable

  If you wish to include no other gradeables, set to an empty array: `[]`


* **"ignore_submissions"** - an array of strings, where every string
    is a user ID whose submissions are to be ignored in the plagiarism
    detection algorithm. If you wish to ignore no one, leave it blank
    (set to an empty array: `[]`)




### Running Lichen Manually

To run plagiarism detection manually with custom a configuration, you
will need to log into the server and run the script:

```bash
bash /usr/local/submitty/Lichen/bin/process_all.sh <config_path> <data_path>
```

`<config_path>` should be a path to a directory containing
the `config.json` configuration file for this gradeable, e.g.,
`.../<semester>/<course_id>/lichen/<gradeable_id>/<config_id>/`.

`<data_path>` should be a path to a directory containing the
semesters and the courses with their data, e.g.,
`/var/local/submitty/courses`.  This path is used to get
the submissions of the course users to be used in the plagiarism
detection algorithm, and, if configured so, to get submissions from
courses in prior terms.


If the sample configuration file from the previous section is located in
`/var/local/submitty/courses/f17/test_course/lichen/example_gradeable/1`. To
run the script with this configuration file, we would run:

```bash
bash /usr/local/submitty/Lichen/bin/process_all.sh /var/local/submitty/courses/f17/test_course/lichen/example_gradeable/1 /var/local/submitty/courses
```



### Running the Lichen Test Suite

Some parts of Lichen have automated tests which are run by GitHub Actions.
It is also possible to run the tests locally by navigating to `/usr/local/submitty/GIT_CHECKOUT/Lichen/tests`
inside your Vagrant virtual machine and running `python3 -m unittest discover`.
See more about automated testing on Submitty [here](/developer/testing).

### Provided Code Files

If you wish to include files to be used in the matching algorithm as
"instructor provided code", make sure to create the directory
`<config_path>/provided_code/files/` and locate the files there.  If
that directory does not exist, or if it contains no files, then the
matching algorithm will run without trying to compare student
submissions to "instructor provided code" files.


### Editing and Re-running

If you wish to edit the configuration settings, you can edit the
`config.json` file, and re-run the bash script with the same paths as
arguments.  All of the existing output files of the previous run will
be automatically removed when re-running the script, except for the
configuration file and instructor provided code files, and the new run
would generate new output files.  If you wish to add, change, or
remove the files that would be used as the "instructor provided code"
files, you would have to do so manually before re-running.


### Algorithm Overivew

After a `config.json` file is made for a gradeable configuration with
the custom parameters, a job for it is placed in the
`daemon_job_queue` queue. When the job gets processed, the script
`process_all.sh` is run, which calls the following series of programs
that together produce the output for that configuration including
details of the types of matches found across student submissions:

1. `concatenate_all.py`: gathers all the files that are to be compared
and searched for matches, as specified in the configuration file, and
outputs a `submission.concatenated` file for each submission

2. `tokenize_all.py`: tokenizes each `submission.concatenated` file
and produces a `tokens.json` based on the language specified in the
configuration

3. `hash_all.py`: hashes all the tokens in each `tokens.json` and
outputs its `hashes.txt`

4. `compare_hashes.cpp`: uses the `hashes.txt` files to find matches
between all users and versions, to produce an `overall_ranking.txt`
files which contains the summary of all the submissions with the most
percent match, and individual `matches.json` and `ranking.txt` files
for every submission with suspicious matches.

Besides the final output files produced by the fourth step, the other
intermediate output files of the programs are used in the Submitty web
UI, like the `submission.concatenated` and `tokens.json` which are
used to display the code block where users can see the matches.

### Directory Structure

Here is an overview of the directory structure relevant to processes
in Lichen runs:

```
⋮
└── courses
    └── {semesters}          [e.g., "f15", "s16", "f16", "s17", ... ]
        └── {courses}        [e.g., "csci1100", "csci1200", ... ]
            ├── submissions
            ├── results
            ├── checkout
            └── lichen
                ├── nightly_rerun.json
                └── {gradeable}
                    └── {config_id}
                        |
                        ├── config.json
                        |
                        ├── logs
                        |   └── lichen_job_output.txt
                        |
                        ├── provided_code
                        |   ├── files
                        |   |   └── {files uploaded by instructor}
                        |   └── submission.concatenated
                        |   └── tokens.json
                        |   └── hashes.txt
                        |
                        ├── other_gradeables
                        |	└── {term}__{course}__{gradeable}
                        |		└── {user}
                        |			└── {version}
                        |				├── submission.concatenated
                        |				├── tokens.json
                        |				└── hashes.txt
                        ├── users
                        |	└── {user}
                        |		└── {version}
                        |			├── submission.concatenated
                        |			├── tokens.json
                        |			├── hashes.txt
                        |			├── matches.json
                        |			└── ranking.txt
                        |
                        └── overall_ranking.txt
```            


### Lichen Test Data and Development Debugging

Checkout the companion LichenTestData repository before running
`vagrant up` to create the `Plagiarism` course which includes a suite
of development and regression test gradeables and submissions.  Note:
Currently the LichenTestData repository is a private GitHub repository
for members of the Submitty GitHub organization.
