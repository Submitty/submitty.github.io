---
title: Lichen
category: Developer
---

_see also: [Plagiarism Detection](/instructor/plagiarism)_

Lichen is Submitty's system for plagiarism detection, similar in function to Stanford's MOSS system that was used in the past.
Instructors can interact with the Lichen tool through the Submitty UI or by running it from the command line on the server machine.
The code that is run as path of the plagiarism detection algorithm can be found under the Submitty/Lichen public repository.

## The Algorithm -- Overivew

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

## Debugging

## Writing Tests

## Test Data
