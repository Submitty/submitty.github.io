---
category: Instructor > Course Management
title: SQL Toolbox
redirect_from:
  - /instructor/sql_toolbox
---

While Submitty already provides information about courses and grades, an
instructor may wish to run one-off queries against Submitty's database in order to see 
information in a format of their own choosing. To facilitate this,
Submitty provides for each course a "SQL Toolbox" that can be accessed from the
sidebar. Within the toolbox, instructors may run a `SELECT` query and see the results
in tabular format.

![](/images/sql_toolbox.png)
### Basic Use
The button labeled "Database Schema Documentation" at the top of the SQL Toolbox page
contains details of all the information stored by Submitty and how these different
pieces of information relate to one another.

One simple query you can use the SQL toolbox for is to check what assignment IDs you've already used when trying to decide on a new one. The code for that looks like:
```TSQL
SELECT g_id from gradeable
```
If you have a lot of gradeables, it might help to sort the output of that code like so:
```TSQL
SELECT g_id from gradeable ORDER BY g_id
```
### Outside Learning Sources
If you're brand new to writing SQL queries, here are a couple of popular resources for learning:

[SQL Bolt](https://sqlbolt.com/)

[w3 Schools](https://www.w3schools.com/sql/sql_intro.asp)
### Advanced Use
Once you're comfortable with writing SQL and have explored the database schema documentation some, you can start to write more complex queries. The query below shows all comments that have been written on all submissions from one student (username dents5 for this example):
```TSQL
SELECT comm.*, g.g_grade_due_date FROM gradeable_data_overall_comment comm INNER JOIN gradeable g ON comm.g_id = g.g_id WHERE comm.goc_user_id = 'dents5' ORDER BY comm.g_id
```
### Limitations
The toolbox does come with a number of important limitations, put in place to help
prevent accidental data loss and general security. As such, the toolbox will:

* only run `SELECT` queries. Other types of queries (e.g.
  `INSERT` or `UPDATE`) will return an error.
* only run one query at a time. Attempting to run two queries separated by `;` will
  return an error.
* run each query inside of a transaction that is rolled back and never committed.
