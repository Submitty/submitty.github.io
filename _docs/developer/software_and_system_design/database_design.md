---
title: Database Design
category: Developer > Software and System Design
redirect_from:
  - /developer/database_design
---

## Connecting to Vagrant DB Locally

   The Vagrant VM sets up PostgreSQL such that you can access it from
   within the VM as well as from outside it for ease of development. When
   you start Vagrant, it will map the port 5432 inside the VM to the port
   16442 outside the VM. You can then connect by specifying localhost for
   the host and then `submitty_${SEMESTER}_${COURSE}` (replacing
   `${SEMESTER}` and `${COURSE}` with the actual one you want) for the DB
   to connect to. The user and password are both `submitty_dbuser`. All tables are then
   located in the `public` schema.

   We recommend that to connect to the DB that you use one of the following
   options ranging from simplest to most powerful.

   1. [psql](http://postgresguide.com/utilities/psql.html) (CLI for connecting to PostgreSQL)

   2. [pgAdmin](https://www.pgadmin.org/) (GUI for connecting to PostgreSQL)

   3. [navicat](https://www.navicat.com/en/products/navicat-for-postgresql) (GUI for managing PostgreSQL)

   4. [DataGrip](https://www.jetbrains.com/datagrip/) ("Database IDE", can connect to most DB types)


Note: When adding a new server to pgAdmin, change the following parameters in the
server's `Connection` settings:

* `Host name/address`: `localhost`
* `Port`: `16442`
* `Username`: `submitty_dbuser`
* `Password`: `submitty_dbuser`

You do not need to change the port or the maintenance database - the port should say `5432`
and the maintenance database should say `postgres` by default.



## Entity-Relation Diagrams

   1. Submitty Database (updated 2019-06-05, see [code for most recent](https://github.com/Submitty/Submitty/blob/master/migration/migrator/data/submitty_db.sql)):
      ![Database Entity Graph](/images/database_entity_graph.png)

   2. Courses Tables (updated 2019-06-05, see [code for most recent](https://github.com/Submitty/Submitty/blob/master/migration/migrator/data/course_tables.sql)):
      ![Database Entity Graph](/images/database_course_entity_graph.png)

   Diagram generated using [DataGrip](https://www.jetbrains.com/datagrip/), by
   connecting to the DB, right-clicking on `public` schema,
   Diagrams > Show Visualization...
