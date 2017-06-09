---
title: Automated Grading
category: Developer
---

Submitty grades in parallel, with multiple
[`grade_students.sh`](https://github.com/Submitty/Submitty/blob/master/bin/grade_students.sh)
scripts checking for jobs in the the
`/var/local/submitty/to_be_graded_interactive` and
`/var/local/submitty/to_be_graded_batch` queues.

