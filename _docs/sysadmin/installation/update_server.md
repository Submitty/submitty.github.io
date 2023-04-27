---
title: Update GNU/Linux Server
category: System Administrator > Installation
redirect_from:
---

Please also see [Update Submitty](update_submitty) and [Installation Version Notes](version_notes).


### Announce Upcoming System Outage

*  In advance of system updates or system maintenance, you may wish to
   announce the outage to your users.  To do this, edit the
   `/usr/local/submitty/config/submitty.json` file adding/editing the
   `"system_message"` field:

    ```
    "system_message" : "We will have brief maintenance outage on Tuesday at 8am."
    ```

    ![](/images/system_outage_message.png)



### Update Your GNU/Linux Server


_Below are simplified server update instructions for Ubuntu GNU/Linux.
Follow best practices on frequency of updates and system maintenance._


1. Check your current kernel version

   ```
   uname -r
   ```


2. Update the Linux Kernel & Linux Packages

   ```
   sudo apt-get update
   sudo apt-get upgrade
   ```


3. Reboot the server


4. Confirm that your kernel version has been updated appropriately

   ```
   uname -r
   ```