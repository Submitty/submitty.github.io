---
title: SAML Authentication
category: System Administrator > Configuration & Administration
---


Security Assertion Markup Language (SAML) is available starting with release
[v22.07.00](https://github.com/Submitty/Submitty/releases/tag/v22.07.00).

To configure your system:

1.  Download and install on your server Submitty version v22.07.00 or later.

2.  Generate the meta data file for your server.

    * Make the directory

      ```
      mkdir -p /usr/local/submitty/config/saml/certs/
      cd /usr/local/submitty/config/saml/certs/
      ```

    * Generate private key and certificate.  _NOTE: these will be placed in current directory._

      ```
      openssl req -x509 -sha256 -nodes -days 8000 -newkey rsa:4096 -keyout sp.key -out sp.crt
      ```

      Sample interaction:

      ```
      Country Name (2 letter code) [AU]: <INSERT YOUR ANSWER>
      State or Province Name (full name) [Some-State]: <INSERT YOUR ANSWER>
      Locality Name (eg, city) []: <INSERT YOUR ANSWER>
      Organization Name (eg, company) [Internet Widgits Pty Ltd]: <INSERT YOUR ANSWER>
      Organizational Unit Name (eg, section) []: <INSERT YOUR ANSWER>
      Common Name (e.g. server FQDN or YOUR name) []: <INSERT YOUR ANSWER>
      Email Address []: <INSERT YOUR ANSWER>
      ```

    * Verify `sp.key` and `sp.crt` are in `/usr/local/submitty/config/saml/certs/`

    * Set the ownership and permissions on the key `sp.key` (it should
      not be shared with anyone!) and certificate `cp.crt` (will be
      shared with your Identify Provider):

      ```
      chgrp submitty_php /usr/local/submitty/config/saml/
      chgrp submitty_php /usr/local/submitty/config/saml/certs/
      chgrp submitty_php /usr/local/submitty/config/saml/certs/sp.crt
      chgrp submitty_php /usr/local/submitty/config/saml/certs/sp.key
      chmod g+r /usr/local/submitty/config/saml/certs/sp.key
      ```

    * Fetch the metadata from your Identity Provider (IdP) and create and save
      it as file `/usr/local/submitty/config/saml/idp_metadata.xml`

      For example, if your IdP's metadata is stored here:
      `https://shib.auth.university.edu/idp/shibboleth`

      Then you would type:
      ```
      curl https://shib.auth.university.edu/idp/shibboleth > /usr/local/submitty/config/saml/idp_metadata.xml
      ```

      And set the ownership and permissions of this file:

      ```
      chgrp submitty_php /usr/local/submitty/config/saml/idp_metadata.xml
      ```

    * Prepare the metadata file.  Run:

      ```
      /usr/local/submitty/sbin/saml_utils.php --generate_metadata
      ```

    * Send the metadata file,
      `/usr/local/submitty/config/saml/sp_metadata.xml` to the
      sysadmins for your Identity Provider.

      _Note: This file does not need to be preserved on your system --
      the owner/group permissions on this file are not important, it's
      ok to leave this file owned and accessible only by root._

3.  Configure SAML

    * Get the _SAML username attribute_ from your Identity Provider
      (IdP).  After a user is successfully authenticated, the username
      attribute is the field from the return object that contains the
      user's username.

    * Re-run `CONFIGURE_SUBMITTY.py` to enable SAML, specify the SAML
      username attribute, and customize login message.

      ```
      python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/CONFIGURE_SUBMITTY.py
      ```

      You can press `return` to keep the current settings for most of
      the settings, except:

      ```
      What authentication method to use:
      1. PamAuthentication
      2. DatabaseAuthentication
      3. LdapAuthentication
      4. SamlAuthentication
      Enter number?: [1] 4

      Enter name you would like shown to user for authentication?: <YOUR CUSTOM MESSAGE E.g., "Login with your University ID via Duo">

      Enter SAML username attribute?:  <ENTER THE SAML username attribute>
      ```

    * Reinstall Submitty, run:

      ```
      /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
      ```

    * Customize the username validation script, which is used to
      differentiate and/or verify the validity of SAML usernames and
      proxy users.  Modify the sample SAML validation C++ program as necessary
      for your Identity Provider and university policies.

      ```
      TODO: Insert sample C++ source code.
      ```

      Compile this program to an executable with this path:

      ```
      /usr/local/submitty/config/saml/validate
      ```

    * Put all current users into the SAML table by running:

      ```
      /usr/local/submitty/sbin/saml_utils.php --add_users
      ```

      This program will run for a while -- a few seconds per user on
      your system.  It checks the SAML validity of every username and
      inserts this information into the `saml_mapped_users` table
      of the main Submitty database.

    * Inspect the contents of the SAML user data in the main Submitty
      database.

      ```
      select * from saml_mapped_users;
      ```

      Most student users will have a one-to-one mapping from their
      SAML id/username to their Submitty user id.

      ```
       id | saml_id | user_id | active
      ----+---------+---------+--------
      1   | smithj  | smithj  | t
      2   | jonesb2 | jonesb2 | t
      3   | leec    | leec    | t
      ...
      ```

      An instructor user with a secondary account for testing can have
      multiple Submitty id's mapped to the same SAML id/username.

      ```
       id | saml_id | user_id    | active
      ----+---------+------------+--------
      ...
      4   | ortizf  | ortizf     | t
      5   | ortizf  | ortizf-stu | t
      ...
      ```

      Multiple SAML id's may be mapped to the same user_id to
      facilitate access to a shared Submitty system admin account.  For example: To
      allow If multiple users can logAn instructor user with a
      secondary account for testing can have multiple Submitty id's
      mapped to the samel SAML id/username.

      ```
       id | saml_id | user_id        | active
      ----+---------+----------------+--------
      ...
      6   | kingd   | submitty_admin | t
      7   | warde4  | submitty_admin | t
      ...
      ```

      Correct and/or add additional SAML id to Submitty user id
      mappings to this table either through manual database inserts or
      using the Web UI.

      ```
      TODO: ADD URL & SCRENNSHOTS
      ```

    * Periodically, check the validity and completeness of data in the
      saml table using the username validation script.

      ```
      TODO: INSERT THESE INSTRUCTIONS
      ```

4.  After making the switch to SAML, you will likely want to force
    everyone to re-authenticate with your new Identity Provider
    (IdP).  This can be done in a few ways:

    * By clearing the session table in the database.

      ```
      TRUNCATE TABLE sessions;
      ```

    * Or, by running CONFIGURE_SUBMITTY.py clears the jwt.

      TODO: VERIFY THIS???


    * Or, by deleting the jwt secrets file.  It will be recreated
      (TODO: WHEN?  When INSTALL_SUBMITTY.sh is run???)

      ```
      rm /usr/local/submity/config/secrets_submitty_php.json
      ```