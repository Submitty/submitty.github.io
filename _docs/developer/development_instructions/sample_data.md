---
title: Sample Courses Data
category: Developer > Development Instructions
redirect_from:
  - /developer/development_instructions/sample_data
---

As a developer, there are 4 sample courses:
- **BLANK**
    - Empty course.
- **DEVELOPMENT**
    - All files from `/more_autograding_examples/`, which mostly tests autograding.
- **SAMPLE**
    - A simultation of a "live" course mid-semester with lots of students and lots of submissions. Tests features such as ta grading, due dates, categories, etc.
    - For manual & automated website testing.
- **TUTORIAL**
    - All tutorial gradeables are in sequence, emphasizing one new feature as they grow in complexity.

---

## Re-Creating All Sample Course Data

* If you've changed the script to create a new course
  (`create_course.sh`), or the schema for the master database
  (`submitty_db.sql`), or the schema for the course databases
  (`course_tables.sql`), or you changed student/gradeable data
  we need to delete all courses and recreate
  the course databases, users, and sample submission uploads.

  _NOTE: Make sure you are not be connected to any DBs (e.g., through
  pgAdmin) or else running the below scripts could put things into a
  broken state._

  Run this command:

  ```
  sudo bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/bin/recreate_sample_courses.sh
  ```
  
  You can append the `--no_submissions` flag to the above command to
  skip creation of any sample submission data in the sample courses.
  This will accelerate the completion of this command, but you will be
  missing the hundreds of sample student submissions present in the
  full installation.

  See also: [Database Migrations](/developer/development_instructions/migrations)


---

## Sample Courses Student Data

Sample Courses Student Data is set using `.yml` files and the script `/.setup/bin/setup_sample_courses.py`.

`setup_sample_courses.py` uses parses the yaml files in `.setup/data/users/`. The settings for how 

