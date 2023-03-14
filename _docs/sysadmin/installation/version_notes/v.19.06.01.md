---
title:  v.19.06.01 > URL Rewrite Rules
category: System Administrator > Installation Version Notes
redirect_from:
  - /system_admin/version_notes/v.19.06.01
  - /sysadmin/version_notes/v.19.06.01
---

Beginning with version `v.19.06.01` of the main Submitty repository we
will be using the [Symfony router](https://symfony.com/) to shorten
URLs for the pages within the site.  Shortening the URLs makes them
more legible and intuitive for users.  It is also related to our work
to establish an API and refactor and improve the code.

Old URL:

```
https://submitty.myuniversity.edu/index.php?&component=navigation&course=csci1000&semester=s19
```

New URL:

```
https://submitty.myuniversity.edu/s19/csci1000
```

Note: The shortened URLs will be implemented in stages over multiple
PRs throughout the next few weeks.  Links within the site will be
updated to use the new router.

If your production installation or vagrant virtual machine
installation is recent (from mid-June 2019, `v.19.06.01` or later) then you
shouldn't have to change anything manually.

If your installation is a bit older, in order to use the shortened
URLs you must edit your Apache configuration.  This is not something
we want to tackle with a automatic [migration](/developer/migrations).


##### Updating a Production Installation

Edit your Apache configuration:

1. Go to `/etc/apache2/sites-available`

2. Find the appropriate `.conf` file.

   _Note: If you have multiple files, you can double check which
   configurations are linked (and thus in-use) from the
   `/etc/apache2/sites-enabled` directory._

3. Find the configuration block for `/usr/local/submitty/site/public`
   and edit it to add the lines below to enable the rewrite engine and
   define these rewrite rules.

   ```
   <Directory /usr/local/submitty/site/public>
        Require all granted
        Order allow,deny
        Allow from all

        RewriteEngine On

        # If the requested filename exists, simply serve it.                                             
        RewriteCond %{REQUEST_FILENAME} -f
        RewriteRule ^ - [L]

        # Else rewrite urls to use index.php, however we have to be aware of two                         
        # possible conditions of whether index.php is in the URL already or not.                         
        # To be backwards compatible, we want to ensure that having /index.php                           
        # is valid and usable. In anycase, we rewrite everything up-to /index.php                        
        # to be the "url" parameter of the query, and then append whatever else we                       
        # had in the QUERY_STRING after it.                                                              
        RewriteRule ^(.+)/index\.php$ /index.php?url=$1&%{QUERY_STRING} [NC,END]
        RewriteRule ^(.+)$ /index.php?url=$1&%{QUERY_STRING} [NC,END]

        # NOTE: This line is required starting with v19.06.02
        SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1

    </Directory>
    ```

    _NOTE: See also [Apache configuration update for v19.06.02](v19.06.02)_

4.  Restart Apache

    ```
    sudo systemctl restart apache2.service
    ```


5.  Now it should be safe to update the Submitty software on your
    machine to v.19.06.01 or later

    ```
    sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
    ```


6.  And then you should be able to use the shortened URLs, for example to
    access the main navigation page of one of your existing courses.

    ```
    https://submitty.myuniversity.edu/s19/csci1000
    ```

    _Note: Version `v.19.06.01` is backwards compatible and both versions
    of the URLs work.  Later versions will only support the new
    shortened urls._



##### Updating a Developer Virtual Machine

You can follow the steps above, or copy the configuration from
the repository (with edits) and restart Apache.

1. Copy the Apache config from the repository:

   ```
   cp /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/vagrant/sites-available/submitty.conf /etc/apache2/sites-enabled/submitty.conf 
   ```


2. Manually edit the `/etc/apache2/sites-enabled/submitty.conf` file to replace `SUBMITTY_URL` with  `192.168.56.111`


3. Restart Apache:

   ```
   sudo systemctl restart apache2.service
   ```

