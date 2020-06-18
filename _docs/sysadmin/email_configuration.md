---
title: Email Configuration
category: System Administrator
---


Submitty can be configured to send email notifications in addition to
on-site notications of actions such as instructor announcements, new
messages on the discussion forum, responses to grade inquiries,
etc.  See also [notifications & email](/student/notifications).

First, the Submitty server must be configured to send email:


1. Obtain an email address that will be the sender for all email.

   This should probably not be an actual user nor a mailing list used
   for any other purpose.  It is probable that students who receive
   these emails may `reply-to` the sender without realizing they are
   sending it to a Submitty user rather than their instructor or
   teaching assistant.  Decide what you will do with these mistakenly
   sent emails.

   Learn what rate limits are configured for this email address.
   E.g., number of total emails sent per minute and/or number of
   emails sent per hour to external (non-university) email addresses.
   These limits may require adjustment of the `send_email.py` script
   (currently set to send a maximum of 100 email messages per minute).   


2. Run `sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/CONFIGURE_SUBMITTY.py` and enter each email field.

   `/usr/local/submitty/config/email.json` should now contain:

    ```
    {
      "email_enabled": true,
      "email_user": "<SPECIAL USER NAME>",
      "email_password": "<PASSWORD FOR SPECIAL USER NAME>",
      "email_sender": "submitty@myuniversity.edu",
      "email_reply_to": "submitty_do_not_reply@myuniversity.edu",
      "email_server_hostname": "mail.myuniversity.edu",
      "email_server_port": 25
    }
    ```

    *NOTE:*  The user (login name) and sender (appears on the
    `From:` line of the emails) might not be exactly the same.


3. Ensure the permissions of this file allow read access by the
`submitty_daemon` user:

    ```
    -r--r----- 1 root submitty_daemonphp     email.json
    ```

4. Confirm that a cron job is scheduled to run every minute.  The file
`/etc/cron.d/submitty` should contain the following line:

    ```
    * * * * * submitty_daemon   python3 /usr/local/submitty/sbin/send_email.py
    ```



## Troubleshooting


If you've done an action that should result in an email being sent and
it's not working:


1. Check the `emails` table in the master database.  First connect to the database:

   ```
   sudo su postgres
   psql
   \c submitty
   ```

   Then search for a specific target recipient that hasn't received email.  For example:

   ```
   select id,recipient,subject,created,sent from emails where recipient='myuser@university.edu' order by created;
   ```

   Verify that recent emails have been inserted into the table for the
   user (created column should have today's date & time).  Once the email
   is successfully sent, the sent column will be filled with that date
   & time.


2. Check the Submitty email error log:
   
   ```
   /var/local/submitty/logs/emails/<CURRENT_DATE>.txt
   ```


3. Attempt to manually run the script to send emails from the database:

   ```
   sudo su
   su submitty_daemon
   /usr/local/submitty/sbin/send_email.py
   ```


4. You can also check for cron errors in the general system logs:  `/var/log/syslog`



Developers, please see also [Vagrant Email Configuration](/developer/development_instructions/vagrant_email_configuration).
