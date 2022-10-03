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


