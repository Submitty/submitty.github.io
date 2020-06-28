---
title: Version Control / GIT
category: Student -- Submission
redirect_from:
  - /student/git_submission
---



### Submitty Server Version Control Repositories

1. If your instructor has prepared a repository for you, you will see
   how to clone the initial repository when you click to submit your
   assignment.  It will look something like this:

   ```
   git clone https://submitty.myuniversity.edu/git/s19/csci1200/hw1/myusername SPECIFY_TARGET_DIRECTORY
   ```

   Copy and paste this line into a terminal on your computer.  Replace
   `SPECIFY_TARGET_DIRECTORY` with a path and directory name on your
   computer.  Run the command.


2. You will be prompted to enter your username and password.

   If the command fails, check the assignment instructions.  Your
   instructor may not have created the intial repositories yet and you
   should check back later.  Contact your instructor if you think the
   repositories should be available now.


3. Your initial repository may be empty (no branches and no files).
   If this is the case you should start by default in the `master`
   branch.  Create/copy files/directory structure into the repository
   directory following the assignment instructions.

   _Note: Please also read the section below on Instructor Provided Code._


### Public Repositories (e.g., Github)

_TODO:_


### Private, Instructor-Created Repositories (e.g., Github Classroom)

_TODO:_


### Private, Student-Created Repositories (e.g., Github)

_TODO:_


### Committing Your Work

1. To check what changes you've made since your last commit, run:

   ```
   git status
   ```

   Make sure you're on the `master` branch.  You'll see messages about
   any files you have "modified", files you may have "deleted", files
   that are "new" (you've already indicated they should be added to
   the repository), and files that are "untracked" (and will be
   ignored, unless you add them to the repository).
   

2. If you've created a new file and you do want it to be in the
   repository, you need to tell git about it:

   ```
   git add FILENAME
   ```


3. Confirm the details of the edits you've made to the above files:

   ```
   git diff
   ```

4. When you're happy with the contents that you're committing, type: 

   ```
   git commit -m 'SPECIFY YOUR COMMIT MESSAGE'   
   ```

   _Be sure to write a good commit message, this will be entered in
   the log and is helpful if you ever need to revert your work!_



### Pushing your Commits to the Server and Submitting Your Assignment

Currently your work is only on your local machine.


1. If there have been edits to your repository on the server, you may
   need to first pull those changes to your local machine:

   ```
   git pull
   ```

   _Note: Please also read the section below on Instructor Provided Code._

   _Note: Please also read the section below on Team Work with GIT._


2. Then to push your work to the server:

   ```
   git push
   ```

   If you are on the `master` branch on your local machine, this will
   push your local master branch to the master branch of `origin`,
   which is the machine from which you originally cloned the
   repository.

   _NOTE: Yay! Your work is now backed up.  If your local machine
   explodes, you can download your code from the server._

   However, your code is not yet submitted, and won't be automatically
   tested/graded by Submitty.  And your instructor/TA won't be
   directed to manually grade you work either.
   

3. If you would like to submit this version of your work (for
   automatic and/or manual grading), go to the Submitty website for
   this assigment and press the blue "Grade My Repository" button.

   Submitty will checkout the latest version of your code committed
   and pushed to the server, and will run any automated tests and
   automated grading on the assignment.  When complete, you will see
   the results of this testing and grading on the website.

   If you notice any problems with your work, you can modify the code
   on your local machine, commit those changes, push the commit to the
   server, and then press the blue "Grade My Repository" button again.


4. _TODO: We eventually plan to add a 'hook' to trigger repository
   grading in some situations (on each push to the server, and/or just
   before the assignment deadline).  But currently this remains a
   manual step._


### Other Useful GIT Commands

* To search for a specific string within all the files in the repository:

   ```
   git grep -ni 'SEARCH STRING'
   ```


### Working with Instructor Provided Code

If your instructor distributes initial provided code and/or updates
this provided code, follow those instructions.  If your instructor
chooses to distribute code via a `provided` branch, your interaction
will look like this:


1. Go to the top level of the directory, and check your current status:

   ```
   git status
   ```

   Make sure you are on the `master` branch, and all of your changes
   have been committed.  _NOTE: Please refer to GIT documentation as
   needed._


2. Grab all branches from the remote server:

   ```
   git fetch -p
   ```

   You can see what branches exist on your local machine and the server with:

   ```
   git branch --all
   ```

   If the instructor has made changes to the `provided` branch, you
   should see messages indicating that.


3. You can review the commit messages on the `provided` branch:

   ```
   git log remotes/origin/provided
   ```

   (press spacebar to scroll, 'q' to quit, if the log is lengthy)


4. You can review the differences between your current branch
   (`master`) and the `provided` branch:

   ```
   git diff remotes/origin/provided
   ```

   (press spacebar to scroll, 'q' to quit if the diff is lengthy)


5. If you would like to merge the updates to the provided code with
   your current branch:

   ```
   git merge remotes/origin/provided
   ```

   If the changes don't overlap with edits you have made (in different
   files, or in non-overlapping sections of the same files), the merge
   should complete automatically.  If you have conflicts, you'll need
   to handle that now.    _NOTE: Please refer to GIT documentation as
   needed._


### Team Work with GIT

_TODO: Let's write some tips for working on teams... including using
branches and handling merge conflicts._


---


See also:  [Instructor: Facilitating Student Submissions via GIT](/instructor/managing_git)

See also:  [System Administrator: Setting Up Internal Git](/sysadmin/git)