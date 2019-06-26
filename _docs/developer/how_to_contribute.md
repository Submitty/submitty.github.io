---
title: How To Contribute
category: Developer
---

Be sure to read the [Suggestions for New Developers](/developer#suggestions-for-new-developers).

### How to make a Pull Request (PR) to Submitty 

* Contributors from outside the Submitty GitHub organization should
  clone the repo on their own GitHub page, and create a branch with
  the modifications to be included with this PR.  _Note: Please
  grant write access to the submitty organization
  administrators so we can more conveniently make small edits (e.g.,
  UI text wording changes).  This can speed up the
  approval and merging of your contributions._

  Contributors who are already active members of the Submitty GitHub
  organization can make a branch within the Submitty organization
  repo.  _Note: This is the preferred method, since it allows other
  members of the organization to directly push changes to the branch
  (with fewer steps), and allows work as a group on larger features._

  PRs can be made from either type of branch.

* Each pull request (PR) should be addressing/closing an open issue.
  *Usually*.

* The PR title should be useful and descriptive (not just the issue#).

    * Titles of PR, Issues, and commits should be <= 50 characters.  *Usually*.

    * Suggested format of the PR Title:

      ```
      [<TYPE>:<MODULE>] <SUBJECT>
      ```

      Where `<TYPE>` is one of the following:  
      `Bugfix`, `Documentation`, `Refactor`, `Dependency`, `Testing`, `Feature`, `UI/UX`, `VPAT`, etc.

      And `<MODULE>` is one of the following:  
      `Submission`, `Forum`, `TAGrading`, `Autograding`, `RainbowGrades`, etc.

      _Note that `(#<PR NUMBER>)` is appended to the title
      automatically by GitHub when the PR is merged with "squash &
      merge".  Do not include this when you open a new pull request._

      **IMPORTANT:** If this PR requires system administrator action
      before/after installation, the PR title should be prefixed by
      `[SYSADMIN ACTION]` and the commit message should describe the
      specific actions required and include links to additional
      documentation as appropriate.  For example:

      ```
      [SYSADMIN ACTION][<TYPE>:<MODULE>] <SUBJECT>
      ```

      Most moderate database changes and software package
      installation/updates will be handled automatically by
      [migrations](migrations) and do not need to be flagged in this
      way.  However some operations, like edits to the Apache
      configuration will not be performed automatically via a
      migration because these files commonly have customizations that
      make automation difficult or problematic.  
      See also: [Installation Version Notes](../sysadmin/version_notes)

* Include the string `Closes #1234` or `Fixes #1234` within the top
  comment of the PR so that GitHub issue will be automatically closed
  when the pull request is merged.

* The commit message should talk about *WHAT* changed, and *WHY*. Not
  *HOW*.  How is the diff, and you don't need to repeat it.

* Comments explaining the code should be *in* the code, rather than in
  the PR message or comments.

* Including screenshots in the issue or PR message is helpful for UI
  changes.

* The comments should explain a bit about the purpose/history/overview
  -- don't assume the reader knows it (or link to the issue that
  explains everything).

* Be explicit about what you want feedback on, or why you are asking
  for specific reviewers.

* Prepend '[Bugfix]' to the start of the PR title if the contribution
  is primarily fixing an error with an existing Submitty feature.

* Prepend '[WIP]' to the start of the PR title if you would like
  feedback / detailed review on work in progress.  This indicates to
  the reviewers and project managers that this feature is not ready to
  be merged into the master branch.  When it is ready to merge, edit
  the title to remove the '[WIP]'.



These guidelines drawn from:

[https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests)

[https://github.com/blog/1943-how-to-write-the-perfect-pull-request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

[https://github.com/thoughtbot/guides/tree/master/code-review](https://github.com/thoughtbot/guides/tree/master/code-review)




### How To Review a Pull Request (PR)

So you've been assigned to review another developer's code.  What do
you need to do?

* Make sure you understand the purpose of the PR.  Read the notes in
  the PR and read the notes from any issues that are referenced in the
  PR.

  *What bug(s) is the PR attempting to fix?*  
  If it's a bug, it's a good idea to try to reproduce the problem from
  the current master branch.  Make sure you understand the sequence of
  actions needed to produce the erroneous behavior.

  *What new feature(s) is the PR adding?*  
  If it's a new feature, make sure you understand the purpose of the
  new feature and how it's supposed to work.  As needed, test the current
  master branch to understand how the system works without the new feature.


* Checkout the branch containing the bug fixes and/or new feature.
  Re-install the system as necessary.  Test the system with typical
  use cases.  Think about how a novice user will experience this portion
  of the Submitty system.  Is it clear and intuitive?  Are the
  instructions (on page or on submitty.org) clear?  As appropriate
  leave comments for the PR author with specific suggestions for
  improvement.

  Test the system with extreme use cases or corner cases.  Try to
  break the overall system or new feature.  If you find an error,
  leave a comment in the PR describing how to reproduce the problem.


* Look through the source code for the pull request.  Depending on
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
     necessary changes to automate these updates?


* Is the PR title appropriate?  Are the PR notes sufficient?  Will a
  system administrator understand the purpose & importance of
  installing this commit on their system?  

* Through the github review system, indicate whether you approve as is
  or require changes on this PR before it can be merged.

  If you have indicated that changes are necessary, be prompt in
  following up with the PR author as the changes are made, and
  hopefully, in short order, approving that the code be merged into
  the master branch.

### How To Edit Submitty.org Documentation

If you want to update or add documentation to Submitty.org here's what you do:

  * If you haven't already, you'll need to clone the git repo of 
    Submitty.org:

    ```
    git clone https://github.com/Submitty/submitty.github.io.git
    ```

  * After cloning the repo, go into the _docs folder. You will see a folder 
    representing each major category on Submitty.org

  * Navigate to whichever page you want to edit and open it in your text editor of choice. 
    The files are written in Markdown.

  * Run Jekyll locally to generate and view the webpages and proofread your edits:
    [README.md](https://github.com/Submitty/submitty.github.io/blob/master/README.md)

  * After you are done editing, you can submit a pull request for review.  
