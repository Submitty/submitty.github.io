---
title: Update Submitty
category: System Administrator
order: 2
---


1.  To update the submitty code, get the specific branch/release to which
    you want to upgrade.  For example:

    ```
    cd /usr/local/submitty/GIT_CHECKOUT/Submitty
    git checkout master
    git pull origin master
    ```


2.  It may be necessary to update the database for the new version of
    Submitty.  Check the release notes.  If needed, update the
    database for each database in the system:

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/update_database.py
    ```

    Check the output of this script to be sure each course currently
    in use has been processed.  Error messages about columns already
    existing can be safely ignored.


    * Moving from v.1.0.1 to v.1.0.2 (release date: 11/6/2017) requires
      the database update.


    * A database update is suggested (not required) when switching to
      v.1.0.3 (release date: 11/15/2017).


3.  _NOTE: Usually you can skip this step._

    It may be necessary to update the installed base linux system
    packages.  This should be safe to re-run on an existing Submitty
    system installation.  Note that it will ask you to confirm some
    system configuration settings, pressing return at each prompt will
    keep your current configurations.

    ```
    sudo /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/install_system.sh
    ```

    _NOTE: This step automatically launches the step below._


4.  Then re-install the Submitty source code.  This should take less
    than a minute.  It will pause and restart from scratch any
    autograding that is currently happening.

    ```
    sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
    ```


5.  Depending on what has updated in the system, you may need to also
    rebuild the autograding scripts for your existing courses &
    gradeables.  And regrade the previously submitted assignments
    (especially if you're installing the update to fix a problem).

    See more information in:
    [Development Instructions](../developer/development_instructions)

                                                                                                    
                                                                                                    
                                                                                                    
          