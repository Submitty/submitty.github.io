---
title: Nia Heermance
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2023
---

This summer, most of my work was in Course Materials, TA Grading, and site-wide refactors.

### Course Materials

An outstanding issue in Course Materials was the ability to hide folders from students.
You can hide a folder by setting its release date to the future, but once a folder was released,
there was now way to hide a folder's name besides a button that hid its contents. Now, when folders are hidden,
their names do not appear on the Course Materials page for students. I accomplished this through a recursive function on
the server PHP code that creates a dictionary used when rendering the page.

While working on this issue, I found a bug where hiding one folder's contents would unintentionally hide
other folder's contents. I fixed this bug as well with additional logic.

Another issue was the lack of folder suggestions when uploading a file or moving a file. Users would then accidentally
create a new folder rather than placing a file in an existing folder as intended. I added a list, created via server-side
PHP code and maintained by JavaScript client-side code, that provides suggested folders.

### TA Grading

In addition to a big project I'll discuss soon, I work on bug fixes and features throughout TA Grading. One feature I worked
on with part-time dveloper Yanli was the ability for instructors to set a default grading blindness for TAs. TAs of course
have the ability to turn off this blindness and see who they're grading, but sometimes setting the default to be unable to
see who you are grading is appropiate for the current gradeable. 

A bugfix I worked on was the blindness setting for limited access graders (i.e. undergraduate mentors) was accidentally
hiding student information for full-access graders (i.e. instructors and TAs). Worse, the limited access setting wasn't
hiding student information from the mentors themselves for team assignments! There were some small logic changes
necessary to get this setting working again.

The main project I worked on this summer was a TA Grading refactor. Behind the scenes, TA Grading loads all of the grading
panels at once and hides the ones currently inactive. This made the page slow to boot up and also made it difficult
to expand the page to allow the panels to be popup windows. The goal of the refactor was to change the panels to be
client-side rendered so that the panels would only be loaded when necessary and student traversal wouldn't require a whole page refresh.

Unfortunately, this refactor was my main failure of the summer. I overestimate the scope of the goal, as currently Submitty
is not set up for client-side rendering. Still, I got the grounds going for a refactor, and if I continue working on Submitty
in the future, I am confident I could continue this refactoring effort into a much faster user experience!

### Side-wide Refactors

The Submitty codebase has some outdated terminology. Grade Inquiries used to be called Regrade Requests, so that's what they were referred as in the code. We also used a mix of the word "semester" and the word "term" throughout when our goal is to switch to entirely the word "term" to be less confusing to schools without a semester system. These refactors were great for familiarizing myself with the codebase as I was a new Submitty developer this summer. The "semester" to "term" refactor isn't quite done, but it's getting there!