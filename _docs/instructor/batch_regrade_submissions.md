---
title: Batch Regrade Homework
category: Instructor
order: 6
---

If you have made changes to the configuration for an assignment and
want to reprocess your previous practice submissions, or an error in the
assignment configuration was detected after students submitted
homeworks, you can queue these previous submissions for regrading by
using the [`regrade.py` script][regrade.py].


1. This script takes as arguments, one or more paths pointing to the
   portion of the course directory structure to be regraded.

   * For example, to regrade student smithj's 5th submission for hw02, run this command:

     ```
     /usr/local/submitty/bin/regrade.py /var/local/submitty/courses/f16/csci1200/submissions/hw02/smithj/5
     ```

   * Instead to regrade every version of student smithj's hw02, run this command:
  
     ```
     /usr/local/submitty/bin/regrade.py /var/local/submitty/courses/f16/csci1200/submissions/hw02/smithj 
     ```

   * And similarly, to regrade all students submissions of hw02, run this command:

     ```
     /usr/local/submitty/bin/regrade.py /var/local/submitty/courses/f16/csci1200/submissions/hw02 
     ```

   * You can use wildcards in your pattern as well.  To regrade all of
     student smithj's submissions for all assignments in the course,
     run:

     ```
     /usr/local/submitty/bin/regrade.py /var/local/submitty/courses/f16/csci1200/submissions/\*/smithj 
     ```
   
     The command also works without the escaped wildcard -- the wildcard
     expansion happens on the command line instead of within the python
     script.  _Note that the command line expansion may fail if the
     wildcard expansion exceeds the maximum argument list length._

     ```
     /usr/local/submitty/bin/regrade.py /var/local/submitty/courses/f16/csci1200/submissions/*/smithj 
     ```

   * You may also use a relative path.  If you are currently in the
     `/var/local/submitty/courses/f16/csci1200/` directory, you can run:

     ```
     /usr/local/submitty/bin/regrade.py submissions/hw02/smithj/5
     ```


2. If the number of submissions matching the specified
   pattern is greater than 50, the script will require interactive
   confirmation [y/n] before queueing those homework submissions for
   reprocessing.


3. You may also want to use the [`grading_done.py` script][grading_done.py]
   to keep track of the progress in reprocessing a large set of
   submissions.

   ```
   /usr/local/submitty/bin/grading_done.py 
   ```

   This command will display the number of grading processes, the
   number of items waiting in the interactive queue (items recently
   submitted by students) and in the batch queue (items sent for
   reprocessing by any instructor).  

   _Note that currently typical instructor users cannot access the
   details of the interactive queue, thus only the status of the batch
   queue is presented._

   It is often helpful to combine these two commands, e.g.:

   ```
   /usr/local/submitty/bin/regrade.py /var/local/submitty/courses/f16/csci1200/submissions/hw02 && /usr/local/submitty/bin/grading_done.py 
   ```

[regrade.py]: https://github.com/Submitty/Submitty/blob/master/bin/regrade.py
[grading_done.py]: https://github.com/Submitty/Submitty/blob/master/bin/grading_done.py