---
title: Automated Grading
category: Developer
---

Submitty grades in parallel, with multiple
[`grade_students.sh`](https://github.com/Submitty/Submitty/blob/master/bin/grade_students.sh)
scripts checking for jobs in the the
`/var/local/submitty/to_be_graded_interactive` and
`/var/local/submitty/to_be_graded_batch` queues.  

The grade_students.sh processes are started by the `hwcron` user via a
cron job every 3 minutes.  Each process runs for ~16 minutes of idle
time.  So during quiet submission period, there will be 5-6 grading
processes at one time.  During a busy submission period, there will be
more processes to handle the load.

---

To debug new features for autograding, it can be helpful to run a
single grade_students.sh process and inspect the output.  To do this:


1. First disable the cron job.  In the "GENERATE & INSTALL THE CRONTAB
   FILE FOR THE hwcron USER" section of the 
   [`INSTALL_SUBMITTY_HELPER.sh`](https://github.com/Submitty/Submitty/blob/master/.setup/INSTALL_SUBMITTY_HELPER.sh)
   script, comment out the scheduling of the grade_students.sh process.

   

2. Then re-install Submitty:

   ```
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
   ```

   _NOTE: You can confirm that the cronjob is disabled by inspecting
   the crontab file, run `crontab -e` as the `hwcron` user._



3. Kill any remaining grade_students.sh processes:

   ```
   sudo killall grade_students.sh
   ```



4. Now, as the `hwcron` user, you can run a single grade_students.sh
  process and watch the output.  

   ```
   sudo su -c '/usr/local/submitty/bin/grade_students.sh  untrusted00  continuous' hwcron
   ```

  All program execution will be done with the `untrusted00` user, and
  the `continous` argument means the process will not stop after the
  usual 16 minutes of idle time.  Use control-C to stop when you've
  finished your debugging.
