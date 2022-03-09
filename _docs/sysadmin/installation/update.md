---
title: Update Submitty
category: System Administrator > Installation
redirect_from:
  - /developer/update
---


**IMPORTANT NOTE: If your system was initially installed prior to
early June 2018, please start with the section at the bottom of this
page.**


Please also see [Installation Version Notes](version_notes)

### Announce Upcoming System Outage

1. In advance of system updates or system maintenance, you may wish to
   announce the outage to your users.  To do this, edit the
   `/usr/local/submitty/config/submitty.json` file adding/editing the
   `"system_message"` field:

    ```
    "system_message" : "We will have brief maintenance outage on Tuesday at 8am."
    ```

    ![](/images/system_outage_message.png)



### Update Submitty

1.  To update the Submitty source code repository, get the specific
    branch/release to which you want to upgrade.  For example:

    ```
    cd /usr/local/submitty/GIT_CHECKOUT/Submitty
    git checkout master
    git pull origin master
    ```


2.  Then re-install the Submitty source code.

    ```
    sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
    ```

    If you provide the optional `skip_web_restart` option, the script won't
    restart Apache, nginx and PHP-FPM:

    ```
    sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh skip_web_restart
    ```

    One of the early steps of this script checks your system
    installation and course databases for updates since your last
    installation.  The necessary system and database _migrations_ will
    automatically be applied.

    See also: [Developer / Migrations](/developer/migrations)

    Typically this re-installation will take less than a minute.  It
    will pause and restart from scratch any autograding that is
    currently happening.


3.  Depending on what has been updated in the system, you may also need to
    rebuild the autograding scripts for your existing courses &
    gradeables.  And you may need to regrade the previously submitted
    assignments.

    See more information in:
    [Developer / Development Instructions](/developer/development_instructions)



### Installations prior to early June 2018


1.  First let's move your Submitty source code repository to its new suggested location:

    **Old repository path suggestion:**   `/usr/local/submitty/GIT_CHECKOUT_Submitty`  
    **New repository path suggestion:**   `/usr/local/submitty/GIT_CHECKOUT/Submitty`     

    If you have _not_ modified any of the helper Submitty repositories
    (`GIT_CHECKOUT_Tutorial`, `GIT_CHECKOUT_AnalysisTools`, etc.) stored
    in neighboring directories, you can remove those repositories and
    the installation & update scripts will re-clone & maintain these
    checkouts in a new location.


2.  Now, update the Submitty source code repository as described in
    step 1 of the previous section.


3.  Next, we need to apply updates to the course databases so they
    match the database schema for Submitty as it was in early
    June 2018.  Run this command:

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/update_database.py
    ```

    Check the output of this script to be sure each course currently
    in use has been processed.  Note that the script will print error messages
    for database edits that have already been processed by a previous run of
    this script (e.g. columns, relations, constrations, and/or tables
    that already exist, duplicate keys, etc.).  These error messages
    can be safely ignored as long as the script proceeds.


4.  Next, it may be necessary to update the installed base Linux
    system packages.  To do this, re-run the system installation
    script, which is safe to re-run on an existing Submitty system
    installation.

    ```
    sudo bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/install_system.sh
    ```

    Note: After finishing system installation updates, this script
    will automatically call...


5.  ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/CONFIGURE_SUBMITTY.py
    ```

    This script will ask you to interactively confirm some system
    configuration settings.  Pressing `enter/return` at each prompt
    will keep your current configurations.


6.  Now your system state has been updated to early June 2018.

    You're ready to continue with steps 2 & 3 in the previous section
    to automatically apply _migrations_ for Submitty changes from
    early June 2018 to present day.

    In the future, you will only need to apply the steps in the first
    section to update your Submitty installation.
