---
title: How To Checkout and Commit to a PR from a Forked Repository
category: Developer > Getting Started
---

Contributors who are part of the Submitty organization on Github can
make new branches on our Github repositories and should make PRs from
a *branch directly within the Submitty repository*.  External
contributors cannot make new branches on the Submitty repositories.
Instead, external contributors will clone/fork the Submitty repository
and then make a PR from *a branch on their forked repository*.

It is simpler to review a PR made from a branch, and it is easy to
make small revisions as needed and commit and push those changes to
the branch.  It is a little more work to do the same with a PR made
from a fork, but it is still possible -- *assuming that the owner of
the forked repository has granted the necessary permissions*.  This
allows multiple developers to collaborate and finalize a PR for
merging to the main branch.

The instructions below are for command line use of git.


1.  First, from the PR on the Github website, find the name of the
    fork + branch name.  It should be formatted something like this:
    ```
    contributorusername:contributor_branch_name
    ```


2.  Next, make a local branch on your computer in your working repository
    with the proposed code changes.  Here are the command lines
    (substitute the fork & branch name we found above):

    If you **are not** using ssh keys on git:
    ```
    git checkout -b contributorusername-contributor_branch_name main
    git pull https://github.com/contributorusername/Submitty.git contributor_branch_name
    ```
    
    If you **are** using ssh keys on git:
    ```
    git checkout -b contributorusername-contributor_branch_name main
    git pull git@github.com:contributorusername/Submitty.git contributor_branch_name
    ```


3.  This has made a local branch named
    `contributorusername-contributor_branch_name`.  Go ahead and test
    and review the PR and make code edits and new commits to your
    local branch as needed.



4.  In order to push the changes to the contributor's fork (and the PR
    on Github from the fork), you will specify the upstream to be the
    contributor's fork:

    If you **are not** using ssh keys on git:
    ```
    git remote add upstream https://github.com/contributorusername/Submitty.git
    ```


    If you **are** using ssh keys on git:
    ```
    git remote add upstream git@github.com:contributorusername/Submitty.git
    ```


    Confirm that the upstream was set:
    ```
    git remote -v
    ```

    Which should print something like this if you **are not** using ssh keys on git:
    ```
    origin      https://github.com/Submitty/Submitty.git (fetch)
    origin      https://github.com/Submitty/Submitty.git (push)
    upstream    https://github.com/contributorusername/Submitty.git (fetch)
    upstream    https://github.com/contributorusername/Submitty.git (push)
    ```

    Or this if you **are** using ssh keys on git:
    ```
    origin      git@github.com:Submitty/Submitty.git (fetch)
    origin      git@github.com:Submitty/Submitty.git (push)
    upstream    git@github.com:contributorusername/Submitty.git (fetch)
    upstream    git@github.com:contributorusername/Submitty.git (push)
    ```


5.  Now once you are finished with your code changes, first commit them to
    the local branch (named
    `contributorusername-contributor_branch_name`).

    And then push them from your local branch to the external
    contributor's fork and update the PR on github:
    ```
    git push upstream contributorusername-contributor_branch_name:contributor_branch_name
    ```

    *NOTE:  If you encounter a permissions error, it is possible that the external
    contributor didn't grant access for collaboration on the branch.*

6.  Confirm that you can see the changes on the Github website for the PR.


---

See also [How to Make a Pull Request](make_a_pull_request) and
[How to Review a Pull Request](review_a_pull_request).
