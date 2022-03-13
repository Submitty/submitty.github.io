---
category: Instructor > Course Management
title: SQL Toolbox
redirect_from:
  - /instructor/sql_toolbox
---

While Submitty provides mechanisms of getting information about a course, or grades, an
instructor may wish to run one-off queries against their database. To facilitate this,
Submitty provides for each course a "SQL Toolbox" that can be accessed from the
sidebar. Within the toolbox, instructors may run a `SELECT` query and see the results
in tabular format.

The toolbox does come with a number of important limitations, put in place to help
prevent accidental data loss and general security. As such, the toolbox will:

* only run `SELECT` queries. Other types of queries (e.g.
  `INSERT` or `UPDATE`) will return an error.
* only run one query at a time. Attempting to run two queries separated by `;` will
  return an error.
* run each query inside of a transaction that is rolled back and never committed.

![](/images/sql_toolbox.png)
