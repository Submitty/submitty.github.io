---
title: Room Templates
category: Instructor
---


_NOTE: This is a work-in-progress._

Room templates works in coordination with the Rainbow Grades
[Exam Seating](exam_customization).


Submitty can assist in assigning specific seats to each student for
exams.  When a student logs into the course, they will see a custom
message and diagram describing the time and location of their
exam.  For example:

![](/images/room_templates_nav_page.png)


### Using/Creating Room Templates

The repository contains a variety of room templates for the specific facilities at RPI:
[Sample room template from RPI](https://github.com/Submitty/Submitty/tree/master/site/room_templates)

These files define the basic geometry of the room including number of
rows and aisle placement.  These files will produce a vector graphics
rendering of the room.  These files are similar to each other, but
with slight tweaks to the curvature and to the number of seats in each
section.

One needs sudo/root access to edit the room templates or install new
templates on the server.  In order to make a new room for your
institution, you can simply edit these files until the generated
template matches what you're looking for.

Once installed, these files are stored in the repo here:
`site/room_templates/{building}/{room}.twig`




### Using/Creating Seating Configs 

For a specific exam, an instructor can specify which rows of the room
will be used or skipped, and partition the room into "zones".  The
instructor will provide a configuration file for each room for each
quiz/test/exam gradeable.

Some examples of these can be found in the repo:
[Sample seating configurations](https://github.com/Submitty/Submitty/tree/master/sample_files/seating_configs)

These files will soon _(fingers crossed)_ be prepared and installed
by the Rainbow Grades configuration.

Once prepared and installed these files are located here:
`{course_dir}/uploads/seating/{gradeable_id}/{building}/{room}.json`



### Student Seating Assignments

Rainbow Grades will The location where the student generated seating assignments will be placed is:
`{course_dir}/reports/seating/{gradeable_id}/{user_id}.json`


```
{
    "building": "Darrin",
    "room": "308",
    "username": "instructor",
    "zone": "A",
    "row": "5",
    "seat": "3",
    "gradeable": "grading_homework",
    "date": "Monday November 13th",
    "time": "6-7:50pm"
}

```

These files will soon _(fingers crossed)_ be prepared and installed
by the Rainbow Grades configuration.


### Selecting the Active Gradeable for Seating Assignments

Once all the templates, configs, and by-user seating assignments are
in place, the instructor specifies the gradeable from the Course Settings page:

![](/images/room_templates_course_settings.png)



### Missing / Incomplete Data and Errors

If the building and room names in the student's json file do not match
the names of the above directories, they will see a message instead of
the room.

![](/images/room_templates_nav_page_no_template.png)

If the student does not have a report generated, their information
will be filled out with `SEE INSTRUCTOR`

![](/images/room_templates_nav_page_no_report.png)
