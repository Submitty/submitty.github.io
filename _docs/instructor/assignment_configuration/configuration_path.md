---
category: Instructor > Assignment Configuration
title: Configuration Path
redirect_from:
  - /instructor/assignment_configuration/configuration_path
---


### Select An Autograding Configuration

From the second tab of the edit gradeable page, the instructor
specifies the path to the autograding configuration file.  Use the 
text box to search the available configuration options in the dropdown menu,
or manually type in the full path to a configuration file.

The dropdown menu is populated with several standard provided configurations ("PROVIDED"),
any autograding configurations uploaded from the website for this course ("UPLOADED"),
and configurations within the Course Autograding Configuration Directories ("DIRECTORY").
These options are explained in more detail below.

![](/images/config_path_interface.png)

### Provided Configurations

Submitty provides a number of simple autograding configurations that
can be selected from the drop down selection menu (prefixed by
"PROVIDED").  These default, provided autograding configurations are:

_TODO: Insert documentation of the upload only, pdf_exam, 
left-right seating assignment, 2 & 3 page test notes upload._


### Interface to Upload Autograding Configuration

Instructors may prepare and upload autograding configurations through
the website by selecting the "Upload a custom autograding configuration"
button.  After uploading a chosen file, it will appear in the list of 
previous uploads below.  The uploaded configurations are sequentially numbered by
default, but the name may be edited by clicking on the pencil to the
left of each configuration.

![](/images/config_upload_interface.png)

Note: These uploaded configurations are stored in the course directory:


```
/var/local/submitty/courses/<SEMESTER>/<COURSE>/config_upload/
```

Alll uploaded configurations will be available for selection in the
dropdown menu (prefixed by "UPLOADED").

However, repeatedly uploading files through this interface is a
tedious workflow to develop and debug complex autograding
configurations.


### Course Autograding Configuration Directory

Alternatively, instructors with ssh access to the machine are
encouraged to instead prepare and edit their autograding
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

The path (or paths) to the location of these autograding configurations can be set from the
"Course Settings" Page, by specifying the "Course Autograding Config
Directory".  To include multiple paths, separate the desired paths with 
commas within the text box.

The specified directories will be searched for 
folders containing a file named 'config.json'.  Folders that are 
found will be displayed in the dropdown menu (prefixed by "DIRECTORY"), as well as warnings if 
an error is encountered while searching the directory.

![](/images/config_repo_box.png)