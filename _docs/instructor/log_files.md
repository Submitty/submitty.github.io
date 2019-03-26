---
title: Log Files
category: Instructor
order: 4
---

Submitty writes out logs for a variety of things, which can help instructors
and sysadmins to debug when things go wrong as well as view certain diagnostic
information. Most of these logs are named with a "<DATE>" which is named
as YYYYMMDD to allow for sorting of the files by name by date. Each type
of log is written out by a Submitty system user, and then readeable by anyone
in the instructor/course_builders group.

### User Access Logs

These logs record each time a user (successfully) logs in, logs
out, or uploads an assignment.

```
 /var/local/submitty/logs/access/<DATE>.log
```

### Site Error Logs

If there is an error while using the website, a detailed error message
may be added to the site error logs. These logs are stored at:
```
/var/local/submitty/logs/site_errors/<DATE>.log
```

### TA Grading Logs

During the course of grading, actions taken by graders (e.g. opening
a component, saving a component, etc.) are logged which can be later
referenced. These logs are stored at:
```
/var/local/submitty/logs/ta_grading/<DATE>.log
```

### Autograding Queue Logs

These contain a log of all autograding actions taken by the machine,
e.g. shipping a job, the worker acting on a job, etc. If something
does not get autograded as expected, these are good place to start.

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

However, in such a case, it may be useful to examine any stack traces
that were thrown related to the error, which are located in
```
/var/local/submitty/autograding/stack_traces/<DATE>.txt
```

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

### Gradeable Configuration Logs

If there was an error when building the configuration for the
automated grading for a specific gradeable you can inspect the cmake
and make log files. These files can be found at:
```
/var/local/submitty/courses/<SEMESTER>/<COURSE>/build/<GRADEABLE_ID>/
    log_cmake_output.txt
    log_make_output.txt
```
