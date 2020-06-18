---
title: Miscellaneous
category: Developer
---


## Pam vs. Database Authentication

Our vagrant environment defaults to PAM authentication, but is also
setup to use database authentication.

To switch, either re-run CONFIGURE_SUBMITTY.py or edit
`/usr/local/submitty/config/database.json` and change the
authentication method from `PamAuthentication` to
`DatabaseAuthentication`.

When using DatabaseAuthentication, Submitty allows users to
[change their password](/student#how-can-i-change-my-password) from the home screen.

