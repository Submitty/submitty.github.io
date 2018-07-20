---
title: Migrations
category: Developer
---


Migrations automatically update existing Submitty installations and
existing Submitty courses to work with the latest release of Submitty.

The migrations are applied automatically when you run:

```
sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
```

See also: [System Administration/Update Submitty](../sysadmin/update)


## Manually Applying Migrations

To manually run or apply all new, unapplied migrations to your system
and existing courses you can run:

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/migrator.py migrate
```

Migrations are run in chronological order.

After a migration is applied, the status is stored in the master
database (for system or master database migrations) or the course
database (for course migrations).

To see additional options, run:

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/migrator.py -h
```


## Rolling Back or Reverting a Migration

To undo a migration (useful during development).  These commands will
undo the most recent migration (in chronological order) to the
system installation, master database, or course database, respectively:

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/migrator.py -e system rollback
```

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/migrator.py -e master rollback
```

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/migrator.py -e course rollback
```


## Writing New Migrations

If your bugfix or new feature requires a change to the system
installation, or the master or course database, or the course
directory or file structure:


1.  You should make the necessary edits to build a new system from
    scratch in:

    GIT_CHECKOUT/Submitty/.setup/install_system.sh, or the files in
    GIT_CHECKOUT/Submitty/.setup/distro_setup/, or the database schemas

    Or create new databases from scratch by editing the full schemas:

    GIT_CHECKOUT/Submitty/migration/data/submitty_db.sql
    GIT_CHECKOUT/Submitty/migration/data/course_tables.sql 


2.  And you should also prepare a migration file of the appropriate
    type (system, master, or course) to update an existing system and
    existing courses.  A migration is a python file with 2 functions,
    `up` (called for the `migrate` command) and `down` (called for the
    `rollback` command).  Run the appropriate command below to create
    the template with the appropriate function signatures:

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/migrator.py -e system create <MY_MIGRATION_NAME>
    ```

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/migrator.py -e master create <MY_MIGRATION_NAME>
    ```

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/migrator.py -e course create <MY_MIGRATION_NAME>
    ```

    The file will be named with the current date (year, month, day,
    hour, minute, second) and string migration name you supplied.

    See the existing migrations for examples.

    In general, your down migration should only undo the necessary
    changes to make earlier versions of the Submitty software work.
    If your migration is adding a column to an existing table in the
    database, it is probably not necessary or desirable to delete that
    data in the `down` function.

    Thus, it is important to ensure that the `up` migration can be
    re-run.  For example, your `up` function should not crash on adding the
    column if the column already exists.

