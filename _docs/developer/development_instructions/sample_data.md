---
title: Sample Courses Data
category: Developer > Development Instructions
redirect_from:
  - /developer/development_instructions/sample_data
---

As a developer, there are 5 sample courses:
- **BLANK**
    - Empty course.
- **DEVELOPMENT**
    - All files from `/more_autograding_examples/`, which mostly tests autograding.
- **SAMPLE**
    - A simultation of a "live" course mid-semester with lots of students and lots of submissions. Tests features such as ta grading, due dates, categories, etc.
    - For manual & automated website testing.
- **TUTORIAL**
    - All tutorial gradeables are in sequence, emphasizing one new feature as they grow in complexity.
- **PLAGIARISM**
    - Used to test Lichen plagiarism detection.
    - This is not available by default. You must clone the [Lichen Test Data](https://github.com/Submitty/LichenTestData) repository locally to see this.

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


  This command will also have to be run twice a year on July 1st and January 1st when the test semester will change from fall to spring or vice versa.

  See also: [Database Migrations](/developer/development_instructions/migrations)

---

## Predefined Data

Predefined data is set using files in `/.setup/data/` and the script `/.setup/bin/setup_sample_courses.py`.

| Data | Location | 
|------|----------|
| Course Gradeables | `/.setup/data/courses` |
| Forum Threads | `/.setup/data/forum` |
| Polls | `/.setup/data/polls` |
| Office Hours Queue | `/.setup/data/queue` |
| Team Assignment | `/.setup/data/teams` |
| Predefined Users | `/.setup/data/users` |

---

## Sample Courses Student Data

Sample Courses Student Data is set using `.yml` files and the script `/.setup/bin/setup_sample_courses.py`.

#### Predefined Users

`setup_sample_courses.py` parses the yaml files in `.setup/data/users/`. If you want to know more about how to write the user yaml files, read `.setup/data/users.yml`, which explains all the options.

#### Random Users

`setup_sample_courses.py` also generates random users. Randomly generated users generate random family and given names, user ids based on the names chosen, random anonymous user ids, numeric ids, and pronouns. For more information, read the `generate_random_users` function in `setup_sample_courses.py`.

Randomly generated students are the same in every build, unless you make changes to `setup_sample_courses.py` or related files. This is because the random seed is set to a specific value. This decision was to keep test cases consistent. However, if you make changes that utilize randomness, it may change the randomly generated students, thus making the test cases obsolete. 

If you make changes that use/alter random number generation, you may need to 
edit the following files:
- Peer Review:
    - `.setup/data/random/students.txt`
    - `.setup/data/random/graders.txt`
- Office Hours Queue:
    - `.setup/data/queue/queue_data.json`
- Discussion Forum:
    - `.setup/data/forum/threads.txt`
    - `.setup/data/forum/posts.txt`
- Teams:
    - `.setup/data/teams/sample_open_team_homework_teams.csv`
        
These files are manually written for a given set of users (the set is predetermined due to 
the random's seed staying the same). If you make any changes that affects the contents of the 
set these files will be outdated and result in failure of recreate_sample_courses.

You may also need to edit test cases in Cypress, Selenium, etc. 
