---
title: Database
category: System Administrator
order: 3
---


The Submitty Homework Submission System currently supports only a
PostgreSQL Database.


1. Set up the PostgreSQL server if you do not already have one you
   plan to use.


2. Make sure that the postgresql user is in the shadow group to use
   PAM authentication:

   ``` 
   adduser postgres shadow 
   ```

   and then restart postgres

   ```
   service postgresql restart
   ```


3. Edit the postgres configuration in `/etc/postgresql/9.3/main/pg_hba.conf`.

   Under "Put your actual configuration here" to allow connections
   from the local network:

   ```
   hostssl	all	all	192.168.56.0/24	pam
   host		all	all	192.168.56.0/24	pam
   ```


4. The [Course Creation](5_Course-Creation) page details how to create
   a new database for each course for each term and populate the
   database with the necessary tables and initial data.

#### Entity-Relation Diagram of the database
![](http://i.imgur.com/xZDJ7R6.png)

