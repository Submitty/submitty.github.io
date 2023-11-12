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
    - Most new features that need gradeables to test them will be put here.
- **SAMPLE**
    - A simultation of a "live" course mid-semester with lots of students and lots of submissions. Tests features such as ta grading, due dates, categories, etc.
    - For manual & automated website testing.
- **TUTORIAL**
    - All tutorial gradeables are in sequence, emphasizing one new feature as they grow in complexity.
- **PLAGIARISM**
    - Used to test Lichen plagiarism detection.
    - This is not available by default. You must clone the [Lichen Test Data](https://github.com/Submitty/LichenTestData) repository locally to see this.

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

---

See also: [Re-Creating All Sample Course Data](/developer/troubleshooting/reinstallation_troubleshooting/index#re-creating-all-sample-course-data)
