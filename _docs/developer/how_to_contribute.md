---
title: How To Contribute
category: Developer
---

* Each pull request (PR) should be addressing/closing an open issue.
  *Usually*.

* The PR title should be useful and descriptive (not just the issue#).

* Titles of PR, Issues, and commits should be <= 50 characters.
  *Usually*.

* Include the string "Closes #1234" within the comment so that the
  issue will be automatically closed issue when the pull request is
  merged.

* The commit message should talk about *WHAT* changed, and *WHY*. Not
  *HOW*.  How is the diff, and you don’t need to repeat it.

* Comments explaining the code should be *in* the code, rather than in
  the PR message or comments.

* Including screenshots in the issue or PR message is helpful for UI
  changes.

* The comments should explain a bit about the purpose/history/overview
  -- don't assume the reader knows it (or link to the issue that
  explains everything).

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
  use cases.  Think out how a novice user will experience this portion
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
     of existing functions?  Or modify existing functions with new
     parameters so code sharing is feasible?

   * Critique code for security-related vulnerabilities.

   * Critique code for language-specific coding & style conventions.


* Through the github review system, indicate whether you approve as is
  or require changes on this PR before it can be merged.

  If you have indicated that changes are necessary, be prompt in
  following up with the PR author as the changes are made.


