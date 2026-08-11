---
title: Emma Roy
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2026
---

[Commit History](https://github.com/Submitty/Submitty/commits?author=roye2)

**32** Pull Requests Reviewed & Merged  
**38** Pull Requests Created & Merged  
**2** Pull Requests Taken Over & Merged

I am a rising sophomore CSCI major at Rensselaer Polytechnic Institute.
I became a Submitty developer as a Rensselaer Center for Open Source (RCOS) student in the Spring 2026 semester.
This summer, I was excited to have the opportunity to continue my work on Submitty.

---

## What I Worked On this Summer
Below is a list of some of the projects I worked on over the summer. Links to the GitHub pull requests and applicable screenshots of UI have been included.

### Creating the 'submitty_test' Docker Environment for Developers

#### Pull Request: [PR #13003](https://github.com/Submitty/Submitty/pull/13003)

At Submitty, we use a combination of unit, integration, and end-to-end testing on our code while developing. 
Additionally, code is linted and statically analyzed using a variety of standard tools. 
Because there are several languages used in Submitty, we felt that making developers install the dependencies to run each type of linter and test locally would be unnecessary.
For that reason, the `submitty_test` alias and a script for running the tools were created for the developer VM.
Developers could use tools that were preinstalled on the VM to lint and test their code, and not have to worry about installing anything extra themselves.  
***Note**: The initial implementation of `submitty_test` can be found here: [PR #9675](https://github.com/Submitty/Submitty/pull/9675)*

There were limitations to `submitty_test` that my PR aimed to fix. Some options for linters and tests did not work properly. 
For example, due to how permissions were handled with files copied to the VM shared folder, the 'fix' option for linters did not work. 
To address these issues, I refactored `submitty_test` to use a Docker container.

The new implementation of `submitty_test`, using the Docker container, has several advantages.
Firstly, developers have many more tools and flags available to them than they did before. 
Fix options now work, and support for more languages has been added. 
Additionally, developers now have the option to run the script locally. 
This will build the image and run the container on their host, meaning it is saved for future use if they are planning to rebuild their VM often.
The script was designed to be easily expanded upon, so when new tools are added, only minimal changes will be necessary to use them with the script.  

The new Docker environment is a significant improvement over the original implementation, giving developers more effective options to lint and test their code locally.

Additionally, I updated the documentation for `submitty_test` in [Submitty.github.org PR #775](https://github.com/Submitty/submitty.github.io/pull/775).
For more reading on `submitty_test`, you can view said documentation here:
[Submitty Test](/developer/testing/linting_static_analysis#submitty-test-script).

### Manage Teams UI

#### Pull Request: [PR #12909](https://github.com/Submitty/Submitty/pull/12909)

Instructors who use Submitty can configure Team Gradeables for group assignments. 
In most cases, students handle the formation of their own teams, but instructors also have the ability to create teams individually for students.
At RPI, we have a special use case where we would like to use Submitty teams: RCOS. 
For those unfamiliar, in RCOS, students organize themselves into projects and do their work as a group for the duration of the semester.
RCOS uses Submitty to grade students' contributions to their projects and ensure they are consistently contributing.

In Submitty, teams are created by gradeable, but for a class like RCOS, teams are effectively semester-long.
This means it is inconvenient for RCOS instructors to have to manage team creation for each assignment.

In my PR, I added some options to allow instructors to create teams en masse, based on certain data already present about the student.
The options for team management added in my PR include:  
1. **Create Teams from Registration Subsections**  
   This option would be used by instructors who have configured their course such that students have both a registration section and a registration subsection.
   Registration subsection is a separate option from registration section or lab section.
   In the case of RCOS, students will be placed into subsections based on their project. For example, as an RCOS student, I could be registered in the course under '1-Submitty'. 
   Registration sections are used to split up grading, but registration subsections are not dependent on the section. Here is a small example of RCOS registration:

   | Student            | Registration Section | Registration Subsection |
   |---------------------|:---:|:---:|
   | Emma Roy            | 1   | Submitty |
   | Nick Ciuica         | 1   | Submitty |
   | Matt Lifrieri       | 2   | Submitty |
   | Ben Bitdiddle       | 3   | RPIGames |
   | Alyssa P Hacker     | 5   | RPIGames |
   | D'Andre Collins     | 5   | Submitty |
   | Dage McNitt         | 9   | Submitty |

   In this case, when the instructor elects to create teams from registration subsections, Emma, Nick, Matt, D'Andre, and Dage will be placed on the Submitty team for the gradeable. 
   Ben and Alyssa will be placed on the RPIGames team. 
   This significantly speeds up the process of team creation for group project based courses like RCOS and enables them to grade students based on their group without added difficulty.

2. **Create Single Student teams**  
   This option is useful for gradeables where students are to be put on a team of one. 
   Since the automatic team creation skips students who are already on a team, an instructor could also use this to create teams for students who were as yet teamless, and grade them accordingly.
   This might be useful if some students did not complete the assignment, but need to be on a team to be graded.

3. **Delete All Teams**  
   This option is fairly straightforward. It gives instructors the option to delete all teams that have not made submissions. 
   This can be useful during the setup phase of the gradeable (before it has been released to students) if the instructor has made a mistake with the team preparation.

In addition to the actions described above, the Manage Teams page also displays a summary of the teams that currently exist for the gradeable. 
This information includes the number of existing teams, as well as how many students are on teams or not.  

This is a significant improvement for group-project based courses like RCOS, giving instructors improved options to manage teams on their gradeables.

For more information on team gradeables, you can view the documentation here: [Team Assignments](/instructor/assignment_preparation/team_assignments).


#### Screenshots:
![](/images/manage_teams_ui.png)
*What an instructor sees on the Manage Teams page, including the 'Create Teams from Registration Subsections', 'Create Single Student Teams' and 'Delete All Teams' buttons, 
alongside the summary of existing teams for the gradeable.*


### Submission Limit Warning Banners

#### Pull Request: [PR #12887](https://github.com/Submitty/Submitty/pull/12887)

This was a PR that added some inline warning messaging to students for gradeable submission.
Of the changes I made this summer, this is probably the one that the most users will see, including myself!
In all, 3 types of messages were added:

1. **Penalty Free Submissions Remaining Count**
   This message appears when a student only has a few penalty free submissions remaining on the gradeable. 
   For example, if the gradeable is configured to have a maximum of 20 penalty free submissions, then the banner will appear once the student has made their 15th submission.

2. **Maximum Allowed Number of Files**
   This message appears if a student has uploaded more files than the allowed limit. In most cases, it is 20 files. 
   It also instructs students to use a zip file if they wish to upload more than 20 files, since Submitty has the capability to process those.

3. **Total Upload Size Limit**
   This message appears when the student's total submission size is above the allowed limit for the gradeable.

For all 3 banners, the state is adjusted live on the page using JavaScript & AJAX.
For example, if a student uploads a file that is too large, the banner will then appear.
If they then remove that file, the banner will then disappear. 
Overall, this is a nice quality of life feature for students to help them understand what they can and can't submit, as well as how many times they are allowed to do so.

#### Screenshots:
![](/images/submission_limit_warning_banners.png)
*Here, all three types of Submission Limit Warning Banners are visible.*

### Instructor/Sysadmin Docker Status Page

#### Pull Request: [PR #13088](https://github.com/Submitty/Submitty/pull/13088)

This PR was an update to the UI/UX Docker UI page. Instructors and superusers of Submitty use the Docker UI page to configure which Docker images are available for autograding.
On this page, you can add and remove images from the configuration, as well as adjust their autograding capabilities.

The aim was to improve the messaging presented to the user when adding and removing images.
It also added some descriptive printing of logs by accessing logs that are created during the process of updating the system's Docker images.

Additionally, the process of updating the system's Docker images is asynchronous.
Before my PR, once you clicked the 'Update Dockers and Machines' button, you were given a message that told you to refresh the page in a bit.
This meant that you didn't know what the status of an update was while it was running, or how long you needed to wait before refreshing.

With the new behavior, instructors & superusers are now able to see the log output of each time they click 'Update Dockers and Machines'.
The status section also now reports 'Changes applying...' when a change is applying, and will give a success or error message depending on the outcome.

Overall, this change was a good improvement to the Docker UI page and added several quality of life features for instructors and superusers to utilize when interacting with the page.

For more information on the Docker UI page, you can view the documentation here: [Docker UI](/instructor/autograding/docker_ui).

#### Screenshots:
![](/images/dockerui_image_added.png)
*This message displays when a user adds a new image.*

![](/images/dockerui_changes_applying.png)
*Changes applying.*

![](/images/dockerui_changes_applied.png)
*Changes applied and log output.*

### Additional Work

#### Cypress

Submitty uses Cypress on GitHub CI for end-to-end testing. This summer I learned how to write and review Cypress tests, and many of my PRs either updated existing tests or added new testing alongside the new feature.

Additionally, one of my work in progress tasks is removing retries from Cypress on CI ([PR #13039](https://github.com/Submitty/Submitty/pull/13039)).
Retries were included in the original implementation of Cypress since many tests were flaky.
Now, most tests pass reliably, and removing retries will be a good way to ensure all tests pass the first time they are run.
I also added Cypress tests for the Manage Teams UI detailed above ([PR #13043](https://github.com/Submitty/Submitty/pull/13043)), and for the Upload Classlist feature ([PR #13119](https://github.com/Submitty/Submitty/pull/13119)).

#### Adding Global Submitty Python venv (virtual environment)

##### Pull Request: [PR #12141](https://github.com/Submitty/Submitty/pull/12141)

This is a pull request that was originally opened by a senior contributor at Submitty.
In the near future, Submitty plans to update the system from Ubuntu 22.04 to Ubuntu 24.04.
In Ubuntu 24.04, installing pip & Python dependencies globally is considered bad practice, hence the need to add a global Submitty virtual environment.
A Python virtual environment is used to sandbox dependencies so that they do not break the system packages.

Since our goal is to upgrade Submitty from Ubuntu 22.04 to Ubuntu 24.04 as soon as possible, we needed to finish the addition of the venv as soon as possible.
Thus, Nick Ciuica and I both contributed to this PR this summer with the goal of moving it closer to completion.
As this change is still a work in progress, you may view the PR to see our debugging process and the current status.
Hopefully, by the time you are reading this, it will be finished!

---

## Reflection & Future Goals at Submitty

During my time working at Submitty this summer, I learned a lot about the software development process and working as a team.
I improved my technical skills in web development, containerization with Docker, and testing with Cypress.
I also got the chance to practice my teamwork and communication while collaborating with the other summer developers from RCOS and GSoC.

One thing I noticed this summer is that as time passes, some of our senior developers on the project are growing busier with their lives and contributing less frequently. (Good for them!)
For complicated changes, we often rely on their experience and this can make things take longer than is ideal.
Since I have been working on Submitty for two semesters now, and plan to continue in Fall 2026,
I hope to keep learning more about the most complicated parts of Submitty so I can be a more effective reviewer and contributor when it comes to complex changes.
I have already been starting to do this; for example, my contributions to the global Submitty Python venv PR as mentioned previously.
As another example, we still need to work on the upgrade from Ubuntu 22.04 to Ubuntu 24.04, which would be an opportunity for me to learn about the system installation process.

Beyond trying to expand my technical skills further, I also look forward to acclimating our new developers from Fall 2026 RCOS to Submitty!
Hopefully I will be able to pass on some of the teamwork and technical skills that I've developed so far.
I am excited to continue working on Submitty and to see what the future work will bring.
