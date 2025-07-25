---
category: Student > Courses & Profile
title: Self Account Creation
---

### Enable Self Account Creation

There are two steps to enable self account creation, Firstly you have to manually edit the submitty.json configuration file. The default location for this
file is `/usr/local/submitty/config/submitty.json`. By default, `self_account_creation_allowed` is set to `false`. To enable it, change this to `true`. Secondly,
you have to be using DatabaseAuthentication. To change authentication types, either re-run CONFIGURE_SUBMITTY.py or edit /usr/local/submitty/config/authentication.json and change the authentication method to any of the methods. You should be able to leave all other settings to the default.
 *Warning* This will disallow all users who are not in the database from being able to login, so this should only be used if you are only using database authentication. 

### Email and User ID Requirements

Below are the current accepted requirements for user_ids. 
* If `all` is set to `true`, then `length` parameters are the only parameters checked. 

* If `require_name` is true, then the user_id must start with and contain a certain amount of characters from the given name and/or family name. 

* If the user does not have the character amount for the given part of the name, then !add fix!

* `given_first` determines whether the given name or family name must come first. (e.g. Test User -> userte vs teuser)

```json
"user_id_requirements": {
    "all": true,
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
    }
}
```

```json
"accepted_emails": {
    "gmail.com": true,
    "rpi.edu": true
}
```