---
title: How to Make a Pull Request
category: Developer > Getting Started
redirect_from:
  - /developer/how_to_contribute
  - /developer/getting_started/how_to_contribute
---

Be sure to read the [Suggestions for New Developers](/developer/getting_started/index).

1. _In most cases_, a pull request (PR) should be addressing/closing
   an [open issue](https://github.com/Submitty/Submitty/issues).

   _NOTE: You do not need to be formally assigned to an issue on
   GitHub to make a pull request to contribute to Submitty!  We
   happily accept and review pull requests from contributors new to
   our organization._


2. Contributors from outside the Submitty GitHub organization should
   clone/fork the repo on their own GitHub page, and create a branch with
   the modifications to be included with this pull request (PR).

   _**IMPORTANT NOTE**:_ Please grant write access to the Submitty
   organization administrators so we can more conveniently make small
   edits (e.g., UI text wording changes).  This will speed up the
   approval and merging of your contributions.

   Contributors who are already active members of the Submitty GitHub
   organization can make a branch within the Submitty organization
   repo.  _Note:_ This is the preferred method, since it allows other
   members of the organization to directly push changes to the branch
   (with fewer steps), and simplifies work as a group on larger features.

   PRs can be made from either type of branch.


3. Before submitting a PR or updating an existing PR, you should make
   sure your code follows our [Style Guide](/developer/coding_style_guide)
   and passes the relevant [tests](/developer/testing).


4. The PR title should be useful and descriptive.

    * Titles of PR, Issues, and commits should be <= 50 characters. 

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
      * `InstructorUI` (includes course and gradeable configuration),  
      * `SubminiPolls`,  
      * `HelpQueue`,  
      * `CourseMaterials`,  
      * `Plagiarism`,  
      * `RainbowGrades`,  
      * `Calendar`,  
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
      [migrations](/developer/development_instructions/migrations) and do not need to be flagged in this
      way.  However some operations, like edits to the Apache
      configuration should not be performed automatically via a
      migration because these files commonly have customizations that
      make automation difficult or problematic.    
      See also: [Installation Version Notes](/sysadmin/installation/version_notes)

    * To help ensure a title follows our standards, we utilize a
    [GitHub workflow](https://github.com/Submitty/Submitty/blob/master/.github/workflows/pr_title.yml)
    for validation. Updating your PR title will immediately re-run the workflow, allowing you to edit 
    it till it does pass validation.


4. The body of the PR should describe the purpose of the PR.

     * When merged, this PR body will be part of the documentation for
       the
       [next Submitty release](https://github.com/Submitty/Submitty/releases).
       Thus, the contents should be
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
       of [Web Accessibility](/developer/software_and_system_design/web_accessibility).

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


---

See also [How to Review a Pull Request](review_a_pull_request).

---

These guidelines drawn from:

[https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests)

[https://github.com/blog/1943-how-to-write-the-perfect-pull-request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)

[https://github.com/thoughtbot/guides/tree/master/code-review](https://github.com/thoughtbot/guides/tree/master/code-review)


