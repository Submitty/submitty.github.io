---
title: Room Templates
category: Instructor
order: 18
---


### Using/Creating Room Templates

There are some templates from rooms at RPI in the repository.

One needs root access to edit these files on the server.  In order to
make a new room for your institution, you can simply edit these files
until the generated template matches what you're looking for.

These are stored in the repo as:

`site/room_templates/{building}/{room}.twig`

These files are similar to each other, but with slight tweaks to the
curvature and to the number of seats in each section.

[Sample room template from RPI](https://github.com/Submitty/Submitty/tree/master/site/room_templates)



### Using/Creating Seating Configs 

To configure which seats in the room will be designated as which
sections, you must upload configs.

The location to place all of the configs for the rooms that will be used for seating is:
`{course_dir}/uploads/seating/{gradeable_id}/{building}/{room}.json`

Some examples of these can be found in the repo:


[Sample seating configurations](https://github.com/Submitty/Submitty/tree/master/sample_files/seating_configs)




### Student Seating Assignments

The location where the student generated seating assignments will be placed is:
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




Once all the templates, configs, and by-user seating assignments are
in place, the instructor can go the course settings page and select
that gradeable as the room seating gradeable to use.

![](/images/room_templates_course_settings.png)

Then, when a student logs into the course, they will see a message at
the top of their navigation page telling them when and where the exam
is.

![](/images/room_templates_nav_page.png)

If the building and room names in the student's json file do not match
the names of the above directories, they will see a message instead of
the room.

![](/images/room_templates_nav_page_no_template.png)

If the student does not have a report generated, their information
will be filled out with `SEE INSTRUCTOR`

![](/images/room_templates_nav_page_no_report.png)
