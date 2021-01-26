---
title: How To Contribute
category: Developer
---

Be sure to read the [Suggestions for New Developers](/developer#suggestions-for-new-developers).

### How to make a Pull Request (PR) to Submitty 

* Contributors from outside the Submitty GitHub organization should
  clone the repo on their own GitHub page, and create a branch with
  the modifications to be included with this PR.  _Note: Please
  grant write access to the Submitty organization
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

* Before submitting a PR or updating an existing PR, you should make
  sure your code follows our [Style Guide](/developer/coding_style_guide)
  and passes the relevant [tests](/developer/testing).

* The PR title should be useful and descriptive.

    * Titles of PR, Issues, and commits should be <= 50 characters.  *Usually*.

    * The PR title should not include the issue #.  

    * To help developers, system administrators, and users who are
      reading the release notes, please categorize your contribution
      by formatting your PR title as follows:

      ```
      [<TYPE>:<MODULE>] <SUBJECT>
      ```

      Where `<TYPE>` is one of the following:  
      * `Bugfix`,   
      * `Feature`,   
      * `Refactor`,   
      * `Testing` (includes sample data),  
      * `Documentation`,  
      * `VPAT`,  
      * `UI/UX` (includes mobile, css), or
      * `Dependency`.

      And `<MODULE>` is one of the following:  

      * `Submission` (includes bulk uploads, teams, late days, notebook gradeables, and other student features),
      * `Autograding` (includes router, container/docker),
      * `Forum`,   
      * `Notifications` (includes email and grade inquiries),  
      * `TAGrading` (includes PDF annotation, peer grading),  
      * `InstructorUI` (includes course and gradeable configuration, course materials, office hours queue, plagiarism detection),  
      * `RainbowGrades`,  
      * `System` (includes installation, migrations, vagrant),
      * `Developer`, or
      * `API`

      And `<SUBJECT>` adds more specific details.

      _Note that `#<PR NUMBER>` is appended to the title
      automatically by GitHub when the PR is merged with "squash &
      merge".  Do not include this when you open a new pull request._

    * If your PR is *Work In Progress*, please make a
      [Draft Pull Request](https://github.blog/2019-02-14-introducing-draft-pull-requests/) on GitHub.
      This indicates to other developers and reviewers
      that you'd like detailed feedback on your work, but it is incomplete.
      When a PR is in the draft state it cannot be merged into the master branch.
      Note that draft pull requests will run the ["Travis CI - Branch" test suite](/developer/testing/travis_ci),
      but will skip the more extensive "Travis CI - Pull Request" test suite.

    * **IMPORTANT:** If this PR requires system administrator action
      before/after installation, the PR title should be prepended with
      `[SYSADMIN ACTION]` and the commit message should describe the
      specific actions required and include links to additional
      documentation as appropriate.  For example:

      ```
      [SYSADMIN ACTION][<TYPE>:<MODULE>] <SUBJECT>
      ```

      Most moderate database changes and software package
      installation/updates should be handled automatically by
      [migrations](migrations) and do not need to be flagged in this
      way.  However some operations, like edits to the Apache
      configuration should not be performed automatically via a
      migration because these files commonly have customizations that
      make automation difficult or problematic.    
      See also: [Installation Version Notes](/sysadmin/version_notes)

    * To help ensure a title follows our standards, we utilize a
    [GitHub workflow](https://github.com/Submitty/Submitty/blob/master/.github/workflows/pr_title.yml)
    for validation. Updating your PR title will immediately re-run the workflow, allowing you to edit 
    it till it does pass validation.


* The body of the PR should describe the purpose of the PR.

     * When merged, this PR body will be part of the documentation for
       the next Submitty release.  Thus, the contents should be
       understandable to an average Submitty instructor user or system
       administrator.  The description can include links to related
       issues or PRs, but this description should not require the user
       to follow links to have a general understanding of the PR
       purpose.

     * Include the string `Closes #1234` or `Fixes #1234` within the
       top comment of the PR so that GitHub issue will be
       automatically closed when the pull request is merged.

     * The commit message should talk about *WHAT* changed, and
        *WHY*. Not *HOW*.  How is the diff, and you don't need to repeat
       it.

     * Comments explaining the code should be *in* the code, rather than in
       the PR message or comments.

     * Developers are encouraged to test all user interface modifications with
       [all available Submitty Themes](/student/account/theme):
       e.g., light mode, dark mode, black mode, to ensure compliance/improvement
       of [Web Accessibility](interface_design_style_guide/web_accessibility).

     * Including screenshots/videos in the issue or PR message is
       helpful for UI changes -- both to solicit quick feedback from
       reviewers and also to serve as documentation for the future
       [release notes](https://github.com/Submitty/Submitty/releases).

       *NOTE: Please use light mode by default for all
       screenshots/videos (this is our default theme).  If your PR
       includes a modification/bugfix related to the available
       Submitty Themes (light mode vs. dark mode vs. black mode),
       please also include comparison screenshots/videos for all
       available themes.*

     * The comments should explain a bit about the
       purpose/history/overview -- don't assume the reader knows it
       (or link to the issue that explains everything).

     * Be explicit about what you want feedback on, or why you are asking
       for specific reviewers.




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
