---
title: Performance Testing
category: Developer > Development Instructions > Advanced Development
---


There are a couple ways of measuring performance of the Submitty webserver.
Below lists a few ways it can be done.

## Xdebug

This is useful for determining what function calls take the longest in a single
page load. If you notice a specific page take significantly long, you can enable
the Xdebug profiler to create a profile output to see what PHP functions take
the longest. See more info about setting this up
[here](/developer/getting_started/xdebug).

## Apache Bench

Apache Bench is useful for testing to see how many requests a server can handle
and see how fast it handles those requests. You can specify how many requests and
how much concurrency to send those requests at. This can allow you to change
a couple settings/code and see the difference that it makes on the server.

Here is an example of how you can run Apache Bench locally:
`ab -n 1000 -c 50 http://localhost:1511/`. This performs 1000 requests with 50
concurrent requests.

If you want to add the submitty session cookie to avoid unauthorized requests you
can do the following: `ab -n 1000 -c 50 -C "submitty_session=XXX" http://localhost:1511/`.
You can copy your submitty_session from your cookies on your browser.

If you want to test this on a production server then just replace `http://localhost:1511/`
with your URL.

_NOTE: Only run this on a server that you have permission to do so on._

## SQL

#### Viewing Queries Executed by Submitty

When Submitty is in debug mode (enabled by default in a Vagrant VM), the footer of pages will have an additional `Show Page Details` link which shows all queries that were made on the database in the process of rendering the page.
#### Running Queries

See the [Database Design page](/developer/software_and_system_design/database_design) for information about connecting to the Submitty database to run queries.

One way to run the query directly on the Submitty VM is to use the following command: `sudo su - postgres -c "psql -d submitty_f22_sample -XqAt -f explain.sql > analyze.json"` where `submitty_f22_sample` is replaced with the target database (see the [Database Design page](/developer/software_and_system_design/database_design) for info about the databases in Submitty), `explain.sql` is replaced with a text file that has your query in it, and `analyze.json` is the file that you want the query plan to be output to.

#### Query Plan Visualization

One method for profiling and visualizing queries is to use a query plan visualizer such as `https://explain.dalibo.com`. 

For this site, you generate a query plan for your query by prefixing your query with `EXPLAIN (ANALYZE, COSTS, VERBOSE, BUFFERS, FORMAT JSON)`, running it and pasting the output into the site along with your query (without the EXPLAIN prefix). The site then provides a visualization of your query, showing details such as the time it takes for individual parts of the query to run.

