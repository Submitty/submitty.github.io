---
title: Jobs Daemon
category: Developer
---


Submitty has a daemon to run various helper jobs.  The system is
configured by default to run at most five jobs in parallel.  When an
instructor creates or edits a gradeable, the build script for the
autograding configuration is automatically placed into this job queue.
Similarly, when a new plagiarism detection task is created or an
existing one is edited, a job is placed in the queue.



*  The details for each job are written to a .json file in the
   `/var/local/submitty/daemon_job_queue/` directory.


*  To restart the daemon:

   ```
   sudo systemctl restart submitty_daemon_jobs_handler
   ```


*  To stop the daemon:

   ```
   sudo systemctl stop submitty_daemon_jobs_handler
   ```


*  When debugging, it can be helpful to manually run the daemon and
   inspect the output:

   ```
   sudo su -c '/usr/local/submitty/sbin/submitty_daemon_jobs/submitty_daemon_jobs.py' submitty_daemon
   ```


*  To start the daemon:

   ```
   sudo systemctl start submitty_daemon_jobs_handler
   ```


*  To check the status of the daemon:

   ```
   sudo systemctl status submitty_daemon_jobs_handler
   ```

_NOTE: When you re-run `sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh`, it will stop and
restart the jobs daemon if it is running._
