---
title: Resolving Merge Conflicts
category: Developer
---

Most of the time, `git` will easily and correctly combine the
simultaneous work of two or more developers.  However, if two
developers have both edited the same lines or nearby lines of a single
file, `git` will err on the side of caution and require that a
developer who is familiar with the specific file and the recent
changes to manually resolve this *merge conflict*.

For simple merge conflicts, it is often possible to resolve the merge
conflict using the GitHub web GUI for file editing.  But sometimes, it
is necessary to use the git command line and an editor on your local
machine.



## Composer PHP Package Manager Files

As a specific example, let's resolve a merge conflict with the
`composer.lock` file:

1. Make sure master is up-to-date:

   ```
   git checkout master
   git pull
   ```

2. Checkout your branch:

   ```
   git checkout <YOUR_SPECIFIC_BRANCH>
   ```
   
3. Replace the `composer.json` and `composer.lock` file in this branch with that of master:

   ```
   git checkout master -- site/composer.lock site/composer.json
   ```

4. Commit changed files:

   ```
   git add .
   git commit -m "wip"
   ```

5. Merge master:

   ```
   git merge master
   ```

6. Then re-introduce your dependency:

   ```
   pushd site
   composer require <YOUR_NEEDED_COMPOSER_PACKAGE>
   popd
   ```

7. Commit the updated `composer.json` and `composer.lock` files.