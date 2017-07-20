---
title: Automated Grading
category: Developer
---

Submitty grades in parallel, under a scheduler daemon running
[`submitty_grading_scheduler.py`](https://github.com/Submitty/Submitty/blob/master/bin/submitty_grading_scheduler.py)
which checks for jobs in the
`/var/local/submitty/to_be_graded_interactive` and
`/var/local/submitty/to_be_graded_batch` queues.  

---

In the default system configurations, this script uses 5 parallel
worker processes.  To adjust this number:

1. As root, edit the `/usr/local/submitty/.set/INSTALL_SUBMITTY.sh`
   settings and change this line:

   ```
   NUM_GRADING_SCHEDULER_WORKERS=5
   ```

2. Then re-install Submitty:

   ```
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
   ```

Note:  If you re-run `CONFIGURE_SUBMITTY.sh` it will undo these changes.

---

To debug new features for autograding, it can be helpful to run
`submitty_grading_scheduler.py` interactively and inspect the output.

To do this:

1. Stop the daemon

   ```
   systemctl stop submitty_grading_scheduler
   ```

2. Now, as the `hwcron` user, run the scheduler and watch the output.  

   ```
   sudo su -c '/usr/local/submitty/bin/submitty_grading_scheduler.py' hwcron
   ```

   Use control-C to stop when you've finished your debugging.

3. Re-Start the daemon

   ```
   systemctl start submitty_grading_scheduler
   ```

   Note: You can check the status of the daemon:

   ```
   systemctl status submitty_grading_scheduler
   ```

