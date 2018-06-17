---
title: Update Submitty
category: System Administrator
order: 2
---


**IMPORTANT NOTE: If your system was initially installed prior to
early June 2018, please start with the section at the bottom of this
page.**



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

    One of the early steps of this script checks your system for
    updates to system installation and the database since your last
    installation.  The system and database _migrations_ will
    automatically be applied.
    
    Typically this re-installation will take less than a minute.  It
    will pause and restart from scratch any autograding that is
    currently happening.


3.  Depending on what has been updated in the system, you may need to
    also rebuild the autograding scripts for your existing courses &
    gradeables.  And you may need to regrade the previously submitted
    assignments.

    See more information in:
    [Development Instructions](../developer/development_instructions)



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
    step 1 of previous section.


3.  Next, we need to apply updates to the course databases so they
    match the database schema for Submitty as it was in early
    June 2018.  Run this command:

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/update_database.py
    ```

    Check the output of this script to be sure each course currently
    in use has been processed.  The script will print error messages
    for database edits that have been processed by a previous run of
    this script (e.g. columns, relations, constrations, and/or tables
    that already exist, duplicate keys, etc.).  These error messages
    can be safely ignored as long as the script proceeds.


4.  Next, it may be necessary to update the installed base linux
    system packages.  We do this by re-running the system installation
    script, which is safe to re-run on an existing Submitty system
    installation.

    ```
    sudo /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/install_system.sh
    ```

    Note, that after finished with system installation, this script
    will automatically call...


5.  ```
    sudo /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/CONFIGURE_SUBMITTY.sh
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
    
                                                                                                    
                                                                                                    




