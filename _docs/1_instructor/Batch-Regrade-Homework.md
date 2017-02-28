---
title: Batch Regrade Homework
category: Instructor
order: 6
---

If you have made changes to the configuration for an assignment and
want to reprocess your previous practice submissions, or an error in the
assignment configuration was detected after students submitted
homeworks, you can queue these previous submissions for regrading by
using the [regrade.sh
script](../blob/master/bin/regrade.sh).

This script takes a single argument, the full path pointing to the
portion of the course directory structure to be regraded.

1. For example, to regrade student smithj's 5th submission for hw02, run this command:

   ```
   /usr/local/submitty/bin/regrade.sh /var/local/submitty/courses/f16/csci1200/submissions/hw02/smithj/5
   ```

2. Instead to regrade every version of student smithj's hw02, run this command:

   ```
   /usr/local/submitty/bin/regrade.sh /var/local/submitty/courses/f16/csci1200/submissions/hw02/smithj 
   ```

3. And to regrade all students submissions of hw02, run this command:

   ```
   /usr/local/submitty/bin/regrade.sh /var/local/submitty/courses/f16/csci1200/submissions/hw02 
   ```

4. Note that if the number of submissions matching the specified
   pattern is greater than 50, the script will require interactive
   confirmation [y/n] before queueing those homework submissions for
   reprocessing.

5. You may also want to use the [grading_done.sh script]
   (../blob/master/bin/grading_done.sh)
   to keep track of the progress in reprocessing a large set of
   submissions.

   ```
   /usr/local/submitty/bin/grading_done.sh 
   ```
