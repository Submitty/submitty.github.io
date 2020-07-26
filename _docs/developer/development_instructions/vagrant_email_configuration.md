---
title: Vagrant Email Configuration
category: Developer
---


When configured, Submitty can send instructor announcements and other
important messages to users via email.  Please see the System Administrator
Documentation: [Email Configuration](/sysadmin/email_configuration)

On the developer vagrant machine, the sending of emails is simulated with the
[nullsmtpd server](http://github.com/MasterOdin/nullsmtpd).



1. The email configuration file, `/usr/local/submitty/config/email.json`, should contain:

   ```json
   {
       "email_enabled": true,
       "email_sender": "submitty@myuniversity.edu",
       "email_reply_to": "submitty_do_not_reply@myuniversity.edu",
       "email_server_hostname": "localhost",
       "email_server_port": 25
   }
   ```


2. Verify that the `nullsmtpd` daemon is running:

   ```bash
   systemctl status nullsmtpd
   ```
   If it is not running, run the following command to start it:
   ```bash
   systemctl start nullsmtpd
   ```


3. After performing an action on the website that should trigger
   emails, you can check the contents of the `emails` table in the
   master `submitty` database.

   And you can also inspect the logged messages for each user here:

   ```
   /var/local/submitty/logs/emails/mailboxes/
   ```
