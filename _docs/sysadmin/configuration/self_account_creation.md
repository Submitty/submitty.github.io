---
category: System Administrator > Configuration & Administration
title: Self Account Creation
---

The feature of User Account Creation (a.k.a. Self Account Creation) is
only available on systems that use DatabaseAuthentication.

To change authentication types, either re-run `CONFIGURE_SUBMITTY.py`
or manually edit `/usr/local/submitty/config/authentication.json` and
change the authentication method to `DatabaseAuthentication`.

See also [Managing Enrollment](/instructor/course_management/managing_enrollment)


### Enable Self Account Creation

To enable self account creation, manually edit the
`/usr/locl/submitty/config/submitty.json` configuration file. By
default, `user_create_account` is set to `false`. To enable it, change
this to `true`.  You will also need to add configuration settings for
`"user_id_requirements"`:


```json
"user_create_account": true,
"user_id_requirements": {
    "any_user_id": true,
    "require_name": false,
    "min_length": 6,
    "max_length": 25,
    "name_requirements": {
      "given_first": false,
      "given_name": 2,
      "family_name": 4
    },
    "require_email": false,
    "email_requirements": {
      "whole_email": false,
      "whole_prefix": false,
      "prefix_count": 6
    },
    "accepted_emails": [
      "gmail.com"
    ]
}
```


### Email and User ID Requirements


* If `require_name` is true, then the `user_id` must start with and contain a
certain amount of characters from the given name and/or family name.

* If the user does not have the character amount for the given part of the name, then !add fix!

* `given_first` determines whether the given name or family name must come first. (e.g. Test User -> userte vs teuser)

