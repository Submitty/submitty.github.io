---
title: Plagiarism Detection
category: Instructor
order: 10
---

Submitty has its own system for plagiarism detection, similar in function to
Stanford's MOSS system that was used in the past. Currently, instructors must
run the plagiarism tool manually, but in the future this process will be
automated.

## Running Plagiarism - Using Default Options

To run plagiarism detection with the default configuration, run

```
/usr/local/submitty/SubmittyAnalysisTools/plagiarism --path-base 'index.php?semester=<SEMESTER>&course=<COURSE>&assignment=<ASSIGNMENT>' -l <LANGUAGE> submissions/<ASSIGNMENT>
```

from within the directory for the course (for example, if you had a Fall 2017
course named `test_course`, this directory would be
`/var/local/submitty/courses/f17/test_course`).
