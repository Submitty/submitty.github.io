---
title: Chris Reed
category: Developer - Rensselaer Center for Open Source (RCOS)
redirect_from:
  - /developer/rpi_summer_rcos/2021_Chris_Reed.md
---

Throughout the summer, I worked on various new features, bug fixes, and refactors for Submitty. All of my work can be seen
[here](https://github.com/Submitty/Submitty/commits?author=cjreed121) and is documented below.

### SQL Toolbox

This was the first area I started to work on with Submitty. I added a few features to this area of Submitty:

- Added row numbers to the query result
- Added functionality to download a CSV file of the query result
- Added schema information above the query box for instructors to see all tables in fields in the database.

### Course Materials

I worked on a refactor of the course materials page of Submitty. Before, all data for course materials was stored in a JSON file on the system.
Now, all information about course materials are stored in the Postgres database. This also uses Doctrine for entities to represent each course
material. There was no clear MVC structure before which there now is. This required writing migrations to read the old JSON data while inserting
into the database, adding a model to the current site, and then finally a massive rewrite of the view and controller to support this new model.

After the refactor I worked on a few new features to course materials. My first feature was allowing for instructors to edit links after they
have been uploaded. Before this feature any link would had to have been deleted, reuploaded, and reconfigured. Another feature I worked on was
the addition of a new tag next to all course materials the user has not viewed. This makes it easy for students to find any new materials their
instructor has put up. I additionally rewrote some of the routes to support accessing course materials by their database ID so shorter and less
complex URLs could be used on the site.

### Gradeables

While working on Submitty I got to add a few features to gradeables. One feature I added was the addition of a timer to the gradeable page.
This timer could be used for simply telling when your homework is due or telling you exactly how much time you have left on a test. When a test
timer is visible, a progress bar of how far along you are in the test would also show. This is a feature I would have liked to see on Submitty
in the past. This required having an accurate Javascript timer, a method to sync back with the server periodically, and a way for gradeables to
store their allowed minutes in the database when being built.

Another feature I implemented was the ability for instructors to chose an order for which gradeables should be completed. This forces students 
to complete a certain assignment before being allowed to open and submit the next assignment. This could be used in work at your own pace classes
or in crash courses.

### Secondary Email

I added the ability for all Submitty users to add a secondary email address to their profile. This would allow for them to receive email to that
address in addition to their primary address. It would also allow for instructors to get ahold of students in the event the primary email
addresses were not functional.

### Smaller tasks

- Identified and fixed a few security issues
- Added ability for teams to choose names
- Storing Unix groups in database for easy access