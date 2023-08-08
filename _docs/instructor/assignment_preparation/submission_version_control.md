---
category: Instructor > Assignment Preparation
title: Submissions via Version Control
redirect_from:
  - /instructor/assignment_preparation/create_edit_gradeable/managing_git
  - /instructor/managing_git
  - /instructor/git
---

### Using Git

Submitty supports utilizing Git for handling submissions by students.
When a student hits "submit", Submitty performs a clone of their
repository. Submitty then does a checkout of the last revision made before
the timestamp of when they hit the submit button.

To configure Git for an assignment, you will want to select type 
"Students will submit by committing files to a version control system (VCS) repository",
and then chosing the option that suits your needs. 

![](/images/instructor/assignment_preparation/vcs_gradeable_type.png)

Submitty comes with a setup for an internal Git server out of the box,
but if you wish to use an external source, such as Github, you may need
to configure Submitty to be able to access those repos via SSH. See 
[System Administrator/Setting Up Git](/sysadmin/git) for more details.


### Assignment Creation

Text fields in the VCS Repository Details section support the following list of "variables"
which get replaced during execution of Submitty:
* {$vcs_type} - VCS type being used (currently always git)
* {$gradeable_id} - ID of gradeable being submitteds
* {$user_id} - ID of user who is submitting 
* {$team_id} - ID of team who is submitting

There are multiple different options for students submitting files from version control. 

* Submitty hosted -- single gradeable repository
   - This should be used when you want Submitty to create an empty repository for each student in the course automatically.
   The path to this repository will be {$vcs_base_url}/{$gradeable_id}/{$user_id}.
* Submitty hosted – choose repository name (can be used for multiple gradeables)
   - This should be used when you want to specify the repository path, instead of using the gradeable id. This can be used for multiple gradeables. 
* Externally hosted - public repository, students will provide URL
   - This should be used if the students will create repositories and supply the link.
* Externally hosted - private repository, students will provide URL -- (INCOMPLETE)
   - The implementation of the access requirements for this gradeable is incomplete. 
* Externally hosted - Instructor created repository
   - This should be used if the Instructor/Sysadmin creates a repository that all students fork.


 If this is a team assignment, encourage the students to form their teams through the Submitty interface promptly, so they are not delayed by the creation of their team version control repository.

 If the students files will be in a subdirectory of their main repository, select "yes" and put the path to the student's files in the required field. 

![](/images/instructor/assignment_preparation/subdirectory_gradeables.png)

### Generating Submitty Server Version Control Repositories

Once you have created the gradeable, you may create empty repositories
for each student/team for that assignment if you are using the Submitty hosted
VCS repositories.  The provided script `generate_repos.py` creates a bare 
shared repository with restricted permissions.

The script accepts a `--help` flag to explain the arguments it
accepts. The basic usage:

```
sudo /usr/local/submitty/bin/generate_repos.py <semester> <course_code> <project_name/gradeable_id>
```

_NOTE: In order to use this script, instructors for courses needing
repositories should be given limited sudo access to run this script._

If the third argument is not an existing gradeable_id, the user is
prompted to confirm to make these repositories.  If confirmed, an
empty repository is made for every user in the course.  If it is an
existing gradeable, the script checks to see if this gradeable is an
individual or team assignment.  If it is an individual gradeable, an
empty repository is made for every user.  If it is a team gradeable,
an empty repository is made for every team that has been formed so
far.  The script can be re-run when additional teams are formed.

Permissions on these repositories (which is handled automatically by
the generate script) is that these directories and files must be
readable and writeable by www-data or else students won't be able to
clone/push/etc.

All repositories are stored under `/var/local/submitty/vcs/git`.

#### Cloning Your Repositories

After the instructor has created the git repositories, your students and you can checkout their repositories from
the following `http(s)://GIT_URL/git/<semester>/<course>[/<gradeable_id>]/user_id`.

access restricted to the student (or members of the
team), the instructor(s), and the full access graders.




### Public Repositories (e.g., Github)

_TODO:_


### Private, Instructor-Created Repositories (e.g., Github Classroom)

_TODO:_


### Private, Student-Created Repositories (e.g., Github)

_TODO:_


### Uploading Instructor Provided Code to GIT


1. First, generate the repos as directed above.
   clone/download the following script:

2. Then, to distribute instructor-provided code, clone/download the following script:

   [GIT Provided Code Script](https://github.com/Submitty/InstructorTools/blob/master/GitProvidedCode/git_provided_code.py)


3. Prepare a simple text file (e.g., `students.txt`) with the
   usernames of all of your students.  One username per line.


4. Prepare a directory with the files you would like to provide to
   each student.


5. Run the script:

   ```
   python3  git_provided_code.py  <server> <semester> <course> <repo/gradeable> <path to provided code> <initial commit message> <student usernames file>
   ```

   For example:

   ```
   python3  ~/Submitty/GIT_CHECKOUT/InstructorTools/GitProvidedCode/git_provided_code.py  https://submitty.myuniversity.edu/git s19 csci1200 hw1 ~/teaching/s19/hw1/src 'provided hw1 code' ~/teaching/s19/students.txt
   ```

   _IMPORTANT: Note that without a trailing slash on the provided code
   directory `~/teaching/s19/hw1/src`, the `src` directory and its
   contents will be added to the repositories._

   _With the trailing slash (`~/teaching/s19/hw1/src/`) the `src`
   directory will NOT be added to the repository, only the contents of
   the `src` directory will be added to the repositories._


6. This script will create a directory structure in the current
   directory for the specified repository/gradeable, clone each
   student repository, create a `provided` branch, and add the files
   to that branch.

   If a file has been removed from the provided code directory, it
   will be removed from the branch in the repository.

   If the repository does not yet contain a `master` branch, it will
   be created and the code from the provided branch will be
   copied/merged into the new branch.  If the `master` branch already
   exists, it will not be modified.  All other branches are unmodified.



---


See also:  [Student: Assignment Submission via GIT](/student/git_submission)

See also:  [System Administrator: Setting up Internal Git](/sysadmin/git)
