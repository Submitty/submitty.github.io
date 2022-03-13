---
title: Miles Ednie
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2021
redirect_from:
  - /developer/rpi_summer_rcos/2021_Miles_Ednie.md
---

This summer, I spent the majority of my time working on the backend of
the site with PHP. I became proficient in working with our
model-view-controller framework to add features and fix bugs. I spent
the rest of my time working with jQuery/javascript, HTML, Twig and CSS
on the front end. I was able to combine my skills across both ends of
the site to solve tough problems and make some great additions to
Submitty.

As a student I never saw the Instructor/TA side of Submitty but that
is where I spent most of my time while working as a developer. I
worked on the TA grading interface, rubric configurations, peer
grading and much more. I added easy to use buttons to allow
instructors to regrade their student's submissions which could
previously only be done from the command line.  This involved adding
functions to create files that contained all of the necessary
information for the workers and shippers to be able to do their job
and regrade the submissions.

As a freshman, my classes didn’t use peer grading, but I heard about
it and was interested in working on it as a developer because I know
how helpful it could be to students. I spent a lot of time working on
the peer grading rubric, squashing as many bugs as I could so that the
feature could be used more across RPI and beyond. A lot needed to be
done from a privacy perspective so that peer graders couldn’t access
too much information about the students that they were grading. This
took a lot of work on the backend with all sorts of permissions
checking and new functions to properly display the correct information
to the right people.  I hope to use peer grading in my future classes
to really test my work and benefit from the system.

The Submitty rubric has a “custom mark” option where a grader can give
however many points they want and leave whatever comment they want. A
lot of people love this feature but there were complaints from people
in large classes that they’d rather not have custom marks in order to
keep consistency when grading classes with hundreds of students. In
order to solve this, I added a setting that allows instructors to
choose if they want custom marks to be allowed on the rubric for an
assignment.  I also added and improved grading statistics to help out
TA’s and instructors.

Unrelated to TA grading but still on the backend, I added a feature
that allows Instructors to specify regex patterns that a student’s
contact information must match in order for them to enter the office
hours queue. This was helpful because with online learning it seemed
to be a frequent problem that a student would enter the wrong type of
link or email address when entering the queue, and then it made it
hard for the mentor or TA to help them.  In addition, I also
implemented the ZipStream library in multiple places across the site
to allow users to download folders in an efficient way.

On the frontend I used jQuery to do a complete refactor of the code
that autosaves test answers for students. The way it was previously
implemented had a bug that could lead to data loss, so a total
refactor was necessary. I had to figure out how to use jQuery
selectors to save answers from all different types of questions
(multiple choice, multiple select, short answer and code boxes) to
local storage and then restore them properly. I hope my work saves a
few people some major headaches in the future. I also used jQuery to
implement a popup that appears during tests and quizzes.  The popup
has a button that allows students to submit their current progress so
that time doesn’t run out on them before they can submit their work.
I had to tie the popup into a timer that used the server to keep an
accurate time because we wanted the popup to appear every x number of
minutes depending on the total time allowed.

Working for Submitty was my first job as a developer, and I learned so
much. From the technical things, to working on a development team and
to working on open source software in general. I look forward to
making more contributions to this great project in the future as I
progress as a developer and a computer scientist.
