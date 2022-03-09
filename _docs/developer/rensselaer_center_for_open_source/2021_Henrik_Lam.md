---
title: Henrik Lam
category: Developer - Rensselaer Center for Open Source (RCOS)
redirect_from:
  - /developer/rpi_summer_rcos/2021_Henrik_Lam.md
---

In the summer of 2021, I mostly worked on creating new pages for instructors, sysadmins, and faculties.
Most of these pages are meant to bring out information that is only available to those who have SSH access
into the Submitty machine or those who have access to our database. Through these page, the non-student 
users of the system will be better informed on the status of the System and be more confident when
using our system. In addition, they will also be able to better understand the status of the system as
compared to when they had to go through the ssh or the sysadmin to get the information or confirmation
they need.

## Email Status

Throughout the Submitty system, there are a couple places where emails are sent to notify the users.
This includes the forum messages and regrade requests which are widely used in each course. However,
to see the status of the email sending requests they must either contact the system administrator,
or access the Submitty database. This page served to bridge the gap between the faculties and the 
email database on our system. To implement this page, I had to

- Change the existing database to allow emails to be associated with the course it was sent from
- Read the appropriate emails based on the user accessing the page
- Parse and display the results from the database in a comprehensive manner

I also eventually brought the page to the system administrators, which required me to

- Switch backend's traditional sql query string to use DoctrineORM instead to simplify future work 
on the email database
- Create a pagination on the email results and a dynamic webpage based on the page specified through 
AJAX requests
- Design a strategy for the page to load and display a set amount of emails to avoid overloading
the server and the user
- Create a python script to insert sample emails when the development environment is being set up
to ensure the system will not be overloaded

## Sysadmin Email All Page

This page was designed to allow the system administrators to contact the Submitty users. Some cases
in which this might be used is when there is in times of an emergency in which the users need to be
contacted through the secondary emails the users specified in their profile, and when there is a
big feature change which the instructors need to be aware of. For this page, I had to

- Query the database to show how many people will be emailed
- Query the database to get the level of access that the emails should go to, which is defined by the
sender. The levels are broken down into:
    - Faculties
    - Instructors
    - Full Access Graders and up
    - Limited Access Graders and up
    - Students and up
- Insert the emails as appropriate into the database

## Student Activity Dashboard

This page was designed to allow the instructors to monitor the students' activities on the system
so that the instructors can be sure the students are staying up to date on the course work, and also 
allows the instructors to reach out to the student before it is too late. This page was originally designed
by Roland Rao, and I took over his work for the Summer. In this feature, I contributed by
- Polishing the UI of the dashboard
- Optimizing the sorting of the results and modularizing the comparison between different columns
- Altering the database query to show accurate results
- Finishing the download feature which allows the user to download a csv representation of the dashboard

## Docker UI

This page was an existing page on the system which I revamped during this Summer. This page allows the
user to see the details and credentials of the docker containers installed on the system. The work which
I have done on this page include
- Logging of the updates on the machines and its docker images
    - Parsing the logs to spot any failures in the last update on either machines or images
    - Logging the last time an update was done
- Getting the interesting docker related information from the system
    - To do so, I originally used the pre-existing CGI script which uses the docker python library to
    access all relevant information on the primary
    - I eventually moved this to a python script to be called on both primary and worker machines to gain
    information on all the docker images as well as the machines themselves
    - Access the worker machine through SSH calls with the pre-exisitng ssh_proxy_jump class to call the
    docker update and log the output from the worker machine
- Wrote a new Daemon Job to update the docker information
- Added a button to update the system, allowing the instructors to update the system as appropriate
- Added a functionality on the page to allow the instructors to add a docker image to an existing capability
    - Checks the specified docker name through Regex to see if the format is appropriate
    - Pings the Docker V1 API to see if the docker exists
    - Edits the autoworkers_containers.json file
    - Queue the system to update both the primary and worker machines through the Daemon Job

## Autograding Status
This page serves as the gap between the instructors and the autograding status of the system, which is another
piece of information on the system only available to those with SSH access to the machine. On this feature, I
had to
- Write a new python script which traverses the directories in the system to monitor the queue files
- Monitor what is currently being graded and what is in the queue
    - Categorizes the jobs based on whether it is a regrade job or a non-regrade job
    - Display the jobs currently being graded
        - Shows the gradeable id and the course from which the job originated from
- Determine what courses the user has instructor access to
    - Display the job's owner's user id if the current user has instructor access to the job's originating course
- Periodically update the page to give the user fresh and relevant information
    - Dynamically add the status of the autograding system as a row in a table to allow better monitoring of the 
    system's progress
    - Added a button to pause  and unpause the updating of the page in case they want a snapshot of the state of
    the machine