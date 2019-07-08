---
title: API
category: Developer
---

*Note: API is still a work in progress.*

API provides an alternative way of interacting with Submitty. It facilitates testing, helps system administrators to modify resources and enables users to create customized frontends.

Note that as we rely on the Authorization header information to authenticate users, please make sure that you have a correct Apache configuration file as specified in [Installation Version Notes: v19.06.02](https://submitty.org/sysadmin/version_notes/v19.06.02).

#### Documentation

The documents are automatically generated with the help of [apiDoc](http://apidocjs.com/). If you modified API annotations, please run `apidoc -f ".*\\.php"` to generate the most recent endpoint information.

Note that instead of using templates to generate html pages, we use our own template in Jekyll. Therefore, after running `apidoc`, it is necessary to replace the `api_data.json` in `_data` directory of [submitty.github.io repository](https://github.com/Submitty/submitty.github.io) with a newly generated `api_data.json` under default `doc` directory.