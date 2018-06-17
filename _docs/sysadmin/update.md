---
title: Update Submitty
category: System Administrator
order: 2
---


**IMPORTANT NOTE: If your system was initially installed prior to
mid-June 2018, you'll need to manually update your Submitty source
code repository structure.  Please start with the section at the
bottom of this page.**



### Update Submitty

1.  To update the submitty code, get the specific branch/release to which
    you want to upgrade.  For example:

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
    
    Usually this installation will take less than a minute.  It will
    pause and restart from scratch any autograding that is currently
    happening.


3.  Depending on what has updated in the system, you may need to also
    rebuild the autograding scripts for your existing courses &
    gradeables.  And regrade the previously submitted assignments
    (especially if you're installing the update to fix a problem).

    See more information in:
    [Development Instructions](../developer/development_instructions)


---

### Update Submitty -- Installations prior to early June 2018


1.  First let's move your Submitty source code repository to a new location:

    _Old repository path suggestion:_ '/usr/local/submitty/GIT_CHECKOUT_Submitty'  
    _New repository path suggestion:_ '/usr/local/submitty/GIT_CHECKOUT/Submitty'     

    If you have not modified any of the helper Submitty repositories
    (GIT_CHECKOUT_Tutorial, GIT_CHECKOUT_AnalysisTools, etc.) stored in
    neighboring directories, you can remove those repositories, the
    installation & update scripts will re-clone & maintain these
    checkouts in the new location.

    Update the Submitty source code repository as described in step 1
    of previous section.


2.  We need to manually apply updates to the course databases so they
    match the database scheme for Submitty for early June 2018.  Run
    this command:

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/update_database.py
    ```

    Check the output of this script to be sure each course currently
    in use has been processed.  The script will print error messages
    for database edits that have been processed by a previous run of
    this script.  Those error messages can be safely ignored.


3.  Next, it may be necessary to update the installed base linux
    system packages.  We do this by re-running the system installation
    script, which is safe to re-run on an existing Submitty system
    installation.  

    ```
    sudo /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/install_system.sh
    ```

    Note, that after finished with system installation, this script
    will automatically call...


3.  ```
    sudo /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/CONFIGURE_SUBMITTY.sh
    ```

    This script will ask you to interactively confirm some system
    configuration settings.  Pressing 'enter/return' at each prompt
    will keep your current configurations.


4.  Now your system state has been updated to early June 2018.

    You're ready to continue with steps 2 & 3 in the previous section
    to automatically apply _migrations_ for Submitty changes from
    early June 2018 to present day.

    And you will only need to apply the update steps in the first
    section in the future.
    
                                                                                                    
                                                                                                    




