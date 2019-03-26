---
title: Log Files
category: Instructor
order: 4
---

### User Access Logs

These logs record each time a user (successfully) logs in, or logs
out, or uploads an assignment.

```
 /var/local/submitty/logs/access/<DATE>.log
```

_FIXME: CHECK/DOCUMENT WHO SHOULD HAVE ACCESS TO THESE LOGS...  everyone, or only root?_



### Autograding Queue Logs

Instructors with ssh access have permission and are encouraged to
examine the logs of all automated grading.  The records for each day
are stored in files named with the year, month, and day.  For example:


```
/var/local/submitty/logs/autograding/<DATE>.txt
```

Each new student submission and each instructor-request regrade action
will appear in the file on two lines.  First, when the item is
selected from the queue and grading begins, a line with is added to
this log.  It contains the 'wait:' time in seconds.  Next, when the
grading completes for that assignment a second line is added to the
log with the 'grade:' time in seconds, and the automated grading
total.

It can be helpful to grep this file file for your course number,
assignment name, and or student user name as you are investigating
student confusion or automated grading problems.  For example:


```
cat /var/local/submitty/logs/autograding/*.txt | grep s17 | grep csci1200 | grep hw02 | grep smithj
```


If there was a fatal error with the process of autograding (hopefully
rare!), the keyword "ERROR" may appear on the grading line.




### Autograding Results Logs

To investigate a problem with a specific student user, for a
particular electronic upload, navigate to the results directory for
that student.  For example:

```
cd /var/local/submitty/courses/s17/csci1200/results/hw02/smithj/3/
```

From here you can examine the log files from each phase of automated
grading:

```
logs/overall.txt
logs/compilation_log.txt
logs/runner_log.txt
logs/validator_log.txt
```

The overall.txt log can be used to inspect the files as they are
copied from and to various directories
(see also [Phases of Autograding](assignment_configuration) )


The other three files log each of these phases, which walk through the test cases in your
`config.json` file in order, performing the necessary actions.  If
there was a fatal error in one of these scripts, it can be helpful to
study what test case was being processed.

If the logs look complete and correct, then the students overall
grade summary should be correctly stored in these two files:

```
results.json
grade.txt
```



### TA Grading Logs

If there is an error during TA grading (hopefully rare!), a detailed error message may
be added to the TA grading logs.  The logs are also stored in files
named with the year, month, and day.  For example:

```
/var/local/submitty/logs/site_errors/<DATE>.log
```

_FIXME: CHECK/DOCUMENT WHO SHOULD HAVE ACCESS TO THESE LOGS...  everyone, or only root?_




### Grading Configuration Logs

If there was an error when building the configuration for the
automated grading for a specific gradeable you can inspect the cmake
and make log files.

_FIXME: add the location of these logfiles, and write FAQ / debugging tips_