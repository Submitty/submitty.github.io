---
title: How To Review a Pull Request
category: Developer > Getting Started
---


You've been asked to review another developer's work, which has been
posted to GitHub as an open [pull request (PR)](https://github.com/Submitty/Submitty/pulls).
What do you need to do?

1. Read the [Suggestions for New Developers](/developer/getting_started/index).

2. Make sure you understand the purpose of the PR.  Read the notes in
   the PR and read the notes from any issues that are referenced in the
   PR.

   * *What bug(s) is the PR attempting to fix?*  

      If it's a bug, it's a good idea to try to reproduce the problem from
      the current main branch.  Make sure you understand the sequence of
      actions needed to produce the erroneous behavior.

   * *What new feature(s) is the PR adding?*  

      If it's a new feature, make sure you understand the purpose of the
      new feature and how it's supposed to work.  As needed, test the current
      main branch to understand how the system works without the new feature.


3. Checkout the branch containing the bug fixes and/or new feature.

    * If the PR is a branch of the main Submitty repository, you can
      check it out with
      
      ```
      git checkout BRANCH_NAME
      ```

    * If the PR is from a fork of the main Submitty repository, first
      create a new branch based of the pull request ID (PR_ID). The new branch
      will be called BRANCH_NAME in this example
      
      ```
      git fetch origin pull/PR_ID/head:BRANCH_NAME
      ```

      Then, checkout the new branch.
      
      ```
      git checkout BRANCH_NAME
      ```

      Now you have a version of the code in a new branch on the main repo.
      Review the PR normally and delete the temporary branch when you are done


4.  [Re-install the system](/developer/development_instructions/index)
    as necessary


5. Test the system with typical use cases.  Think about how a novice
   user will experience this portion of the Submitty system.  Is it
   clear and intuitive?  Are the instructions (on page or on
   submitty.org) clear?  As appropriate leave comments for the PR
   author with specific suggestions for improvement.

   Test the system with extreme use cases or corner cases.  Try to
   break the overall system or new feature.  If you find an error,
   leave a comment in the PR describing how to reproduce the problem.


6. Look through the source code for the pull request.  Depending on
   your familiarity with this portion of the code, your review may be
   cursory or in depth.

   * Does the new or modified code have adequate comments?

   * Is the code well structured into functions and/or classes?

   * Has the PR introduced code duplication?  Should the code make use
     of existing functions/classes?  Or modify existing functions with
     new parameters so code sharing is feasible?

   * Critique code for security-related vulnerabilities.

   * Critique code for programming language-specific coding & style
     conventions.

   * Does the PR require system level changes or database updates to
     work with older, existing installations?  Does the PR include
     necessary changes to automate these updates using
     a course or system-wide
     [Migration](/developer/development_instructions/migrations)?



7. Is the PR title appropriate?  Are the PR notes sufficient?  Will a
   system administrator understand the purpose & importance of
   installing this commit on their system?  


8. Through the github review system, leave feedback and comments and
   indicate whether you approve as is
   or require changes on this PR before it can be merged.

   If you have indicated that changes are necessary, be prompt in
   following up with the PR author as the changes are made, and
   hopefully, in short order, approving that the code be merged into
   the main branch.


### Working with a PR from an External Contributor's fork

An external contributor cannot make new branches on the Submitty
repositories.  Instead, external contributors will fork the Submitty
repository and then make a PR from a branch on their fork.  We can
collaborate on the PR (e.g., make small revisions) assuming they have
granted permission for collaborators to push to their fork.  The
instructions below are for command line use of git, and assume that
you have setup ssh keys for working with github.


1.  First, from the PR on github, find the name of the fork + branch
    name.  It should be formatted something like this:

    ```
    contributorusername:contributor_branch_name
    ```

2.  Next, make a local branch on your computer in your working repository
    with the proposed code changes.  Here are the command lines
    (substitute the fork & branch name we found above):

    ```
    git checkout -b contributorusername-contributor_branch_name main
    git pull git@github.com:contributorusername/Submitty.git contributor_branch_name
    ```

    This has made a local branch named
    `contributorusername-contributor_branch_name` where you can test and
    review the PR and make code edits as needed.


3.  Specify the upstream to be the contributors fork:

    ```
    git remote add upstream git@github.com:contributorusername/Submitty.git
    ```

    Confirm that the upstream was set:
    ```
    git remote -v
    ```

    Which should print something like this:
    ```
    origin	git@github.com:Submitty/Submitty.git (fetch)
    origin	git@github.com:Submitty/Submitty.git (push)
    upstream	git@github.com:contributorusername/Submitty.git (fetch)
    upstream	git@github.com:contributorusername/Submitty.git (push)
    ```

4.  Now once you are finished with your code changes, commit them to the
    local branch (named `contributorusername-contributor_branch_name`).

    And then to push them to the external contributor's fork and update
    the PR on github:
    ```
    git push upstream contributorusername-contributor_branch_name:contributor_branch_name
    ```

    Confirm that you can see the changes on the Github website for the PR.

    If you encounter a permissions error, it is possible that the external
    contributor didn't grant access for collaboration on the branch.


---

See also [How to Make a Pull Request](make_a_pull_request).