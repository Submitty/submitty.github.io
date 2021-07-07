---
title: Lichen
category: Developer
---

Lichen is Submitty's system for plagiarism detection, similar in function to Stanford's MOSS system that was used in the past.
Instructors can interact with the Lichen tool through the Submitty UI or by running it from the command line on the server machine.
The code that is run as path of the plagiarism detection algorithm can be found under the Submitty/Lichen public repository.

_See also [Plagiarism Detection](/instructor/plagiarism) for explanations on what user features are supported for the tool._

## The Algorithm -- Overivew
After a `config.json` file is made for a gradeable configuration with the custom parameters, a job for it is placed in the `daemon_job_queue` queue. When the job gets processed, the script `process_all.sh` is run, which calls the following series of programs that together produce the output for that configuration including details of the types of matches found across student submissions:

1. `concatenate_all.py`: gathers all the files that are to be compared and searched for matches, as specified in the configuration file, and outputs a `submission.concatenated` file for each submission
2. `tokenize_all.py`: tokenizes each `submission.concatenated` file and produces a `tokens.json` based on the language specified in the configuration
3. `hash_all.py`: hashes all the tokens in each `tokens.json` and outputs its `hashes.txt`
4. `compare_hashes.cpp`: uses the `hashes.txt` files to find matches between all users and versions, to produce an `overall_ranking.txt` files which contains the summary of all the submissions with the most percent match, and individual `matches.json` and `ranking.txt` files for every submission with suspicious matches.

Besides the final output files produced by the fourth step, the other intermediate output files of the programs are used in the Submitty web UI, like the `submission.concatenated` and `tokens.json` which are used to display the code block where users can see the matches.

## Directory Structure
Here is an overview of the directory structure relevant to processes in Lichen runs:
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

## Developing and Debugging
Along with the other sample courses that get created when you run "vagrant up", there exists the option to create a course whose pre-made gradeables have submissions specifically designed to test the Plagiarism Detection Tool features; however, you must be a member of the Submitty organization to use this course.
