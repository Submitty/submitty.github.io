---
title: Migrations
category: Developer > Development Instructions
redirect_from:
  - /developer/migrations
---

We use [database migrations](https://en.wikipedia.org/wiki/Schema_migration)
to handle updating Submitty's databases, both in development and production,
in such a way that it is repeatable, easy to see the status of a given database,
and that we are not left with partial DB upgrades due to a broken script.

To do this, we utilize a custom migration tool written for Submitty,
[migrator](https://github.com/Submitty/Submitty/tree/master/migration). This tool
can be used manually, as well as being baked into the
installation/upgrade procedure of Submitty. For instance, running
`/usr/local/submitty/.setup/INSTALL_SUBMITTY.sh` will apply any pending
migrations for all environments.

The migrator tool has three distinct "environments" that all have their
own unique list of migrations. They are:
* system
* master
* course

Where `system` migrations should deal mainly with package installation/changes,
system changes, new dependencies, etc. `master` migraitons deals with changes to the master Submitty
database. `course` migrations are applied individually to each course
detected in `/var/local/submitty/courses` and can be used to adjust the
courses' DB, config files, etc.

For all commands, it is required that you pass in the environment you wish
to operate on to migrator.

See also: [System Administration / Update Submitty](/sysadmin/installation/update)

NOTE: Some mandatory installation updates _should not be implemented_
via the migration system if automatic updates may be problematic due
to customized installation.  For example, Submitty updates should not
attempt to automatically edit the Apache configuration.  PR's requiring
manual system administrator edits before/after installation should be
prefixed by `[SYSADMIN ACTION]`.

See also: [How to make a Pull Request(PR) to Submitty](/developer/getting_started/make_a_pull_request)


### Manually Applying Migrations

To manually run or apply all new, unapplied migrations to your system
and existing courses you can run:

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -e <environment> migrate
```

Migrations are run in chronological order in a set order of `master`,
`system`, and then `course`, regardless the order you specify the environments
on the CLI.

After a migration is applied, the status is stored in the master
database (for system or master database migrations) or the course
database (for course migrations).

To see additional options, run:

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -h
```


### Rolling Back or Reverting a Migration

It can be useful during development to rollback or undo a migration.
The commands below will undo the most recent migration (in
chronological order) to the system installation, master database, or
course database, respectively:

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -e system rollback
```

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -e master rollback
```

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -e course rollback
```

### View Status of Migrations

It may be useful to get an overview of the status of migrations for the
different environments. To do this, run:

```
sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -e <environment> status
```

This will output a table showing the migrations that are `UP` or `DOWN`.

### Writing New Migrations

If your bugfix or new feature requires a change to the system
installation, or the master or course database, or the course
directory or file structure:


1.  You should make the necessary edits to build a new system from
    scratch in the relevant files, e.g.:

    `GIT_CHECKOUT/Submitty/.setup/install_system.sh`, or the files in
    `GIT_CHECKOUT/Submitty/.setup/distro_setup/`


2.  And you should also prepare a migration file of the appropriate
    type (`system`, `master`, or `course`) to update an existing system and
    existing courses.  A migration is a python file with 2 optional functions,
    `up` (called for the `migrate` command) and `down` (called for the
    `rollback` command).  Run the appropriate command below to create
    the template with the appropriate function signatures:

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -e system create <MY_MIGRATION_NAME>
    ```

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -e master create <MY_MIGRATION_NAME>
    ```

    ```
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -e course create <MY_MIGRATION_NAME>
    ```

    A new file will be created in the
    appropriate subfolder of
    `/usr/local/submitty/GIT_CHECKOUT/Submitty/migration/migrator/migrations/`.
    The file will be named with the current date (year, month, day,
    hour, minute, second) and migration name string you supplied.
    The filename pattern will allow the migration system to
    chronologically sort your changes relative to existing & future
    changes. The created file has a string defining the arguments
    for that file, but largely, it's a config object for Submitty
    (for accessing info stored in `/usr/local/submitty/config`), a
    database object to make changes to the DB via a SQLAlchemy
    session, and then for course migration, the semester and course
    being affected. For interacting with the DB, you'll mainly just
    want to use:

    ```
    database.execute("SQL QUERY TO RUN")
    ```

    which will run the query automatically within a transaction that's
    started before running the migration file.

    See the [existing migrations](https://github.com/Submitty/Submitty/tree/master/migration/migrator/migrations)
    for examples.

    NOTE: The `up` and `down` functions are optional to be defined and
    you can omit the function if you do not need it for your migration.

    NOTE: In general, your `down` migration should only undo the
    necessary changes to make earlier versions of the Submitty
    software work.  For example, if your migration is adding a column
    to an existing table in the database, it is probably not necessary
    or desirable to delete that data in the `down` function.  We don't
    want to lose any data since we likely plan to return to this state
    in the future. Your `down` function may be empty.

    Thus, it is important to ensure that the `up` migration can be
    re-run after the corresponding `down` migration is run.  For example,
    your `up` function should not crash on adding the column if the column
    already exists.


3.  After you have written your migration to update an existing system
    and are satisfied with it, you must also update the base .sql
    files used to create a new Submitty system.  To
    accomplish this, first apply the migration that you wrote in the previous
    step, placing the DB into the desired end state, and then run the following
    command from within the Vagrant VM:

    ```bash
    sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/migration/run_migrator.py -e master -e course dump
    ```

    This will update `migration/migrator/data/submitty_db.sql` and `migration/migrator/data/course_tables.sql`.
    If you only wish to update one of them, you can use just `-e master` for `submitty_db.sql` and `-e course`
    and `course_tables.sql`.


4.  Lastly, you should verify that the edits made to the database schema(s) match what you intended to edit in the following file(s):

    `GIT_CHECKOUT/Submitty/migration/migrator/data/submitty_db.sql`
    `GIT_CHECKOUT/Submitty/migration/migrator/data/course_tables.sql`

    If the edits are not inline with what you intended, you may have to modify your new migration in order to achieve the desired result.
