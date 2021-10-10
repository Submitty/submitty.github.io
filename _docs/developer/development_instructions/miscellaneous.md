---
title: Miscellaneous
category: Developer
---


## Testing Authentication

Our vagrant environment defaults to PAM authentication, but is also
setup to easily use any of the other supported authentication methods.

To switch, either re-run CONFIGURE_SUBMITTY.py or edit
`/usr/local/submitty/config/authentication.json` and change the
authentication method to any of the methods. You should be able
to leave all other settings to the default.

For `LdapAuthentication`, the default settings are:

```json
"ldap_options": {
    "url": "ldap://localhost",
    "uid": "uid",
    "bind_dn": "ou=users,dc=vagrant,dc=local"
}
```

When using DatabaseAuthentication, Submitty allows users to
[change their password](/student/account/password) from the home screen.

