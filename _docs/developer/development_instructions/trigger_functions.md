---
title: Trigger Functions
category: Developer > Development Instructions
redirect_from:
  - /developer/trigger_functions
---

Trigger functions are a useful tool to keep data in sync. When a
database table's column is modified, a trigger function can be
set up to activate and modify the database as appropiate.

### Editing an Existing Trigger Function
To edit an existing trigger function, simply edit the appropiate file inside the
``migrations/migrator/triggers`` directory. When you next run ``submitty_install`
or the migrator manually, the trigger functions on the database will be updated
with the changes to the code.

### Creating New Trigger Functions
To create a new trigger function,

1.  First, navigate to the ``migrations/migrator/triggers`` directory. Then choose
    between the ``master`` and ``course`` folder. Choose the ``master`` folder if
    your trigger function is activated by changes to the master database, and similarly,
    choose the ``course`` if your trigger function is activated by changes to the course
    database.

2.  Create your file ``trigger_function_name.sql`` with these contents:

    ```
        --
        -- Name: trigger_function_name(); Type: FUNCTION; Schema: public; Owner: -
        --

        CREATE OR REPLACE FUNCTION public.trigger_function_name() RETURNS trigger
        LANGUAGE plpgsql
        AS $$
            BEGIN
                (Body)
            END;
        $$;

    ```
    Replace the body with the trigger function. We recommend
    [this tutorial series](https://www.postgresqltutorial.com/postgresql-triggers/introduction-postgresql-trigger/)
    on how to write them. Check other trigger functions we have for an idea
    on the syntax. One of the most important ideas to note is that OLD.column represents
    the column's date before the edit and NEW.column represents the column's data after the
    edit.

3. Create a migration (see [here](/developer/development_instructions/migrations)
    on how to write a migration). Somewhere in the migration, include the following:

    ```
        CREATE OR REPLACE FUNCTION public.trigger_function_name()
            RETURNS trigger
            LANGUAGE plpgsql
            AS $$
        BEGIN
            RETURN NEW;
        END;
        $$;
        
        CREATE TRIGGER some_name_about_your_trigger_function
        BEFORE/AFTER UPDATE/INSERT/DELETE ON public.the_table_your_function_is_activated_by
        FOR EACH ROW EXECUTE PROCEDURE trigger_function_name();
    ```
    There's a few things to break down here. Your trigger function can be actived before or after
    a table has a deltion, an insertion, or a value update on it. Pick either ``BEFORE`` or ``AFTER``. Pick either ``UPDATE``, ``INSERT``, or ``DELETE``. If you want your function to be activated on, say, an update or an insertion, write instead
    ``UPDATE OR INSERT`` in the spot above.

    The blank body of the trigger function above is neccessary so that we can then
    bind the trigger function to the appropiate action on the table. The blank body will
    be replaced by the migrator with the completed body in your file, so do not worry.

    It can be strategic to choose when in your migration you include the code above,
    as you may want your trigger function binded only after a table is created.
