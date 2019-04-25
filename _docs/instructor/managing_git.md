---
title: Facilitating Student Submissions via GIT
category: Instructor
---


### Assignment Creation

1. When you create a new gradeable, specify that students will submit
their work by version control (GIT).  _Note: this selection cannot be
modified after initial gradeable creation._

2. If this is a team assignment, encourage the students to form their teams through the Submitty interface promptly, so they are not delayed by the creation of their team version control repository.


### Generating Submitty Server Version Control Repositories

Once you have created the gradeable, you may create empty repositories
for each student/team for that assignment.  The provided script
`generate_repos.py` creates a bare shared repository with restricted
permissions

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
   clone/download the the following script:

2. Then, to distribute instructor-provided code, clone/download the the following script:

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
   student respository, create a `provided` branch, and add the files
   to that branch.

   If a file has been removed from the provided code directory, it
   will be removed from the branch in the repository.

   If the repository does not yet contain a `master` branch, it will
   be created and the code from the provided branch will be
   copied/merged into the new branch.  If the `master` branch already
   exists, it will not be modified.  All other branches are unmodified.



---


See also:  [Student: Assignment Submission via GIT](../student/git_submission)

See also:  [System Administrator: Setting up Internal Git](../sysadmin/git)
