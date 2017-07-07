---
title: Automated Grading
category: Developer
---

Submitty grades in parallel, with multiple
[`grade_students.sh`](https://github.com/Submitty/Submitty/blob/master/bin/grade_students.sh)
scripts checking for jobs in the the
`/var/local/submitty/to_be_graded_interactive` and
`/var/local/submitty/to_be_graded_batch` queues.  

In the default system configurations,
the grade_students.sh processes are started by the `hwcron` user via a
cron job every 3 minutes.  Each process runs for ~16 minutes of idle
time.  So during quiet submission period, there will be 5-6 grading
processes at one time.  During a busy submission period, there will be
more processes to handle the load.

---

To debug new features for autograding, it can be helpful to run a
single `grade_students.sh` process and inspect the output.  To do this:


1. First, modify how configurations for the `grade_students.sh` processes.
   As root, edit the `/usr/local/submitty/.set/INSTALL_SUBMITTY.sh` settings.

   You can modify the max number of simultaneous instances of
   grade_students.sh by editing this line:

   ```
   MAX_INSTANCES_OF_GRADE_STUDENTS=15
   ```

   You can modify the frequency of cron job automated starts by modifying this line:

   ```
   GRADE_STUDENTS_STARTS_PER_HOUR=20
   ```

   For example, if you wanted to only have a single grading process
   and want to manually run it (so you can see the output), change
   those lines to be:

   ```
   MAX_INSTANCES_OF_GRADE_STUDENTS=1
   GRADE_STUDENTS_STARTS_PER_HOUR=0
   ```


2. Then re-install Submitty:

   ```
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
   ```


3. Kill any remaining `grade_students.sh` processes:

   ```
   sudo killall grade_students.sh
   ```


4. Now, as the `hwcron` user, you can run a single grade_students.sh
   process and watch the output.  

   ```
   sudo su -c '/usr/local/submitty/bin/grade_students.sh  untrusted00  continuous' hwcron
   ```

   All program execution will be done with the `untrusted00` user, and
   the `continuous` argument means the process will not stop after the
   usual 16 minutes of idle time.  Use control-C to stop when you've
   finished your debugging.


5. Note:  If you re-run `CONFIGURE_SUBMITTY.sh` it will undo these changes.
