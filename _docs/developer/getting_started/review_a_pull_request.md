---
title: How To Review a Pull Request
category: Developer > Getting Started
---

Be sure to read the [Suggestions for New Developers](/developer/getting_started/index).

So you've been asked to review another developer's code.  What do
you need to do?

1. Make sure you understand the purpose of the PR.  Read the notes in
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


2. Checkout the branch containing the bug fixes and/or new feature.

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


3.  [Re-install the system](/developer/development_instructions/index)
    as necessary


4. Test the system with typical use cases.  Think about how a novice
   user will experience this portion of the Submitty system.  Is it
   clear and intuitive?  Are the instructions (on page or on
   submitty.org) clear?  As appropriate leave comments for the PR
   author with specific suggestions for improvement.

   Test the system with extreme use cases or corner cases.  Try to
   break the overall system or new feature.  If you find an error,
   leave a comment in the PR describing how to reproduce the problem.


5. Look through the source code for the pull request.  Depending on
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



6. Is the PR title appropriate?  Are the PR notes sufficient?  Will a
   system administrator understand the purpose & importance of
   installing this commit on their system?  


7. Through the github review system, leave feedback and comments and
   indicate whether you approve as is
   or require changes on this PR before it can be merged.

   If you have indicated that changes are necessary, be prompt in
   following up with the PR author as the changes are made, and
   hopefully, in short order, approving that the code be merged into
   the main branch.


See also [How to Make a Pull Request](make_a_pull_request).