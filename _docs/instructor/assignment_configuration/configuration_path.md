---
title: Configuration Path
category: Instructor -- Autograding Configuration
---


### Select An Autograding Configurations

From the second tab of the edit gradeable page, the instructor
specifies the path to the autograding configuration file.  Use the 
text box to search the dropdown menu populated with existing 
configuration options, or manually type in the full path to a 
configuration file.

The dropdown menu is populated by provided configurations, 
uploaded configurations, and configurations within the Course 
Autograding Configuration Directory. This is explained in more
detail below.

_TODO: Insert screenshot of interface to select the autograding
configuration._


### Provided Configurations

Submitty provides a number of simple autograding configurations that
can be selected from the drop down selection menu.  These default,
provided autograding configurations are:

_TODO: Insert documentation of the upload only, pdf_exam, iclicker,
left-right seating assignment, 2 & 3 page test notes upload._


### Interface to Upload Autograding Configuration

Instructors may prepare and upload autograding configurations through
the website.

_TODO: Insert screenshot of interface._

Note: These uploaded configurations are stored in the course directory:


```
/var/local/submitty/courses/<SEMESTER>/<COURSE>/config_upload/
```

However, repeatedly uploading files through this interface is a
tedious workflow to develop and debug complex autograding
configurations.


### Course Autograding Configuration Directory

Alternatively, instructors with ssh access to the machine are
encouraged to instead directly prepare and edit their autograding
configurations directly on the server.

Specifically, to allow backups and re-use of assignment
configurations, we recommend that assignment configurations be
prepared in a separate version controlled repository (e.g, GIT).

The assignment configuration may contain hidden input examples,
solution output, and/or solution code that should not be publicly
available to students.  Thus, this repository should be private or
shared only with other instructors or teaching assistants.

For example, we suggest storing these per course private repositories
on the server, with controlled permissions.  For example:

```
/var/local/submitty/private_course_repositories/computer_science_1/
/var/local/submitty/private_course_repositories/data_structures/
etc.
```

The path or paths that are relevant to a course can be set from the
Course Settings Page, by specifying the Course Autograding Config
Directory.

_TODO: Insert screenshot of interface._