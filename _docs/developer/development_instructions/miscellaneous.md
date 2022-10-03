---
title: Miscellaneous
category: Developer > Development Instructions
---


## Testing Authentication

Our vagrant environment defaults to PAM authentication, but is also
setup to easily use any of the other supported authentication methods.

To switch, either re-run CONFIGURE_SUBMITTY.py or edit
`/usr/local/submitty/config/authentication.json` and change the
authentication method to any of the methods. You should be able
to leave all other settings to the default.

#### LDAP

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


#### SAML

To easily setup SAML authentication locally: You can run the following
command which will switch to SAML, generate the necessary keys, turn
on the required Docker container, and add all users to the mapping table.

```
bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/testing/setup_saml.sh
```

This SAML IdP hooks into the LDAP system on the vagrant machine. So if you
cannot log in, try testing LDAP first as that could be a reason it fails.


