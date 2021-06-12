---
title: Room Templates
category: Instructor
redirect_from:
  - /instructor/rainbow_grades/room_templates
---


Room Templates works in coordination with the Rainbow Grades
[Exam Seating](/instructor/rainbow_grades/exam_customization).


Submitty can assist in assigning specific seats to each student for
exams.  When a student logs into the course, they will see a custom
message and diagram describing the time and location of their
exam.  For example:

![](/images/room_templates_nav_page.png)


### Creating Room Templates

The repository contains a variety of room templates for the specific facilities at RPI:
[Sample room templates from RPI](https://github.com/Submitty/Submitty/tree/master/site/room_templates)

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




### Specifying Seating Configurations for a Gradeable

For a specific quiz/test/exam gradeable with assigned seating, an
instructor specifies a configuration file for each room that will be
used, and partitions the room into one or more "zones", and specifies
which rows within each zone will be used vs. skipped.  

Some examples of these configurations can be found in the repo:
[Sample seating
configurations](https://github.com/Submitty/Submitty/tree/master/sample_files/seating_configs)

These files will soon _(fingers crossed)_ be prepared and installed
by the Rainbow Grades configuration.

Once prepared and installed these files are located here:
`{course_dir}/uploads/seating/{gradeable_id}/{building}/{room}.json`



### Student Seating Assignments

Rainbow Grades will soon _(fingers crossed)_ be updated to prepare and
install seating assignments for each student (for each gradeable with
assigned seating).  These files will be placed here:

`{course_dir}/reports/seating/{gradeable_id}/{user_id}.json`

And here is a sample of the contents of a typical file:

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


### Selecting the Active Gradeable for Seating Assignments

Once all the room templates, seating configurations, and per-user
seating assignments are in place, the instructor selects the
appropriate gradeable from the Course Settings page:

![](/images/room_templates_course_settings.png)



### Missing / Incomplete Data and Errors

If the building and room names in the student's json file do not match
a valid room template and seating configuration, the student will
instead see the following error message:

![](/images/room_templates_nav_page_no_template.png)


Similarly, if the student does not have a valid seating assignment,
they will be directed to see the instructor at the start of the exam:

![](/images/room_templates_nav_page_no_report.png)
