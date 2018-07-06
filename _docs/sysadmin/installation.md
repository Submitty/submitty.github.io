---
title: Installation
category: System Administrator
order: 2
---

These instructions will help guide you to installing Submitty onto a
server (whether on a dedicated machine or a VM).

Note: We assume that you're installing Submitty on a dedicated machine. If this machine is
used for other things, you may need to adapt the instructions below and
[install_system.sh](https://github.com/Submitty/Submitty/blob/master/.setup/install_system.sh)
for your needs (as the script installs all of the dependencies that Submitty depends on).

_Note: These instructions should be run under root/sudo._


1. [Install Ubuntu 16.04 server edition](server_os)


2. After installing the operating system, clone the git repository:

   ```
   mkdir -p /usr/local/submitty/GIT_CHECKOUT
   git clone https://github.com/Submitty/Submitty.git /usr/local/submitty/GIT_CHECKOUT/Submitty
   ```

3. Run the automated portion of the install.

   ```
   cd /usr/local/submitty/GIT_CHECKOUT/Submitty
   bash ./.setup/install_system.sh
   ```

   You will be asked several questions by the
   [CONFIGURE_SUBMITTY.sh script](https://github.com/Submitty/Submitty/blob/master/.setup/CONFIGURE_SUBMITTY.sh).
   These questions are:
   1. Database Host
   2. Database User
   3. Database Password
   4. Timezone
   5. Main Site URL
   6. Version Control System (VCS) URL
   7. Institution Name
   8. Authentication Method (PAM or Database)

   Unless you have a database server already set up, you will most
   likely just specify `localhost` for the Database Host. You will need
   to create a DB user to use for the system as well. A basic way to do this
   would be (Note: change the password for the user):

   ```
   su postgres -c "psql -c \"CREATE ROLE submitty_dbuser WITH SUPERUSER CREATEDB CREATEROLE LOGIN PASSWORD 'PASSWORD'\""
   ```

   and then the DB User would be `hsdbu` and the DB Password would be whatever you set.

   Do not enable debugging unless you are developing code on a non-production
   machine.


4. Edit PHP Settings

   We recommend for security that you modify your PHP installation and disable certain PHP functions.
   To do this, edit `/etc/php/7.0/fpm/php.ini`  and find the entry for `disable_functions` and prepend the list of
   disabled functions with:

   ```
   popen,pclose,proc_open,chmod,php_real_logo_guid,php_egg_logo_guid,php_ini_scanned_files,php_ini_loaded_file,readlink,symlink,link,set_file_buffer,proc_close,proc_terminate,proc_get_status,proc_nice,getmyuid,getmygid,getmyinode,putenv,get_current_user,magic_quotes_runtime,set_magic_quotes_runtime,import_request_variables,ini_alter,stream_socket_client,stream_socket_server,stream_socket_accept,stream_socket_pair,stream_get_transports,stream_wrapper_restore,mb_send_mail,openlog,syslog,closelog,pfsockopen,posix_kill,apache_child_terminate,apache_get_modules,apache_get_version,apache_lookup_uri,apache_reset_timeout,apache_response_headers,virtual,system,phpinfo,exec,shell_exec,passthru,
   ```


5. Setup Apache

   Note: If you don't have a SSL certificate for your server, we recommend
   using [Let's Encrypt](https://letsencrypt.org/) to get one. It's recommended
   that you use [certbot](https://certbot.eff.org/) to do this (and to have
   an HTTP configuration up).

   We provide a default apache configuration at
   [.setup/apache/submitty.conf](https://github.com/Submitty/Submitty/blob/master/.setup/apache/submitty.conf)
   which you can just copy to `/etc/apache2/sites-available`. You will
   need to replace all instances of `__your_domain__` with your actual
   domain (don't include the `https://` part of it) and
   `/path/to/ssl/certificate/` to the actual path for your SSL certificate.

   Note: If you used Let's Encrypt, your certificates will be at
   `/etc/letsencrypt/live/__your_domain__`, otherwise the common place to
   look would be `/etc/apache2/ssl`.

   The basic commands to do this are:
   ```
   cp /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/apache/submitty.conf /etc/apache2/sites-available/submitty.conf
   a2ensite submitty
   ```

   We also recommend that you Edit `/etc/apache2/conf-enabled/security.conf` to ensure
   these options below are set to limit the information the server
   gives to potential hackers:

   ```
   ServerTokens Prod
   ServerSignature Off
   ```

   You probably want to first disable or remove the default
   configurations to prevent unintended access to the web server (but
   don’t do this if the default site is already in use).

   ```
   a2dissite 000-default
   ```

   You may also want to comment out the directory specific portions of
   ``` /etc/apache2/apache2.conf ``` so that you do not risk
   configuration conflicts with your other configurations.  (Things
   that begin with Directory and end with /Directory).

   Alternately, we provide
   [submitty_http.conf](https://github.com/Submitty/Submitty/blob/master/.setup/apache/submitty_http.conf) to
   run Submitty on just HTTP. We recommend only using this
   if you are planning on developing for Submitty.
   For production, we strongly recommend that you get a certificate
   and use HTTPS/SSL.

7. You need to either comment out the system call to validate.auth.pl
   in **/var/local/submitty/bin/authonly.pl** and **new.svn.user.pl**
   or populate **/var/local/submitty/instructors/valid** with a list
   of valid userids.  If all valid users already have an account on
   the machine, one way to do this is:

   ```
   ls /home > /var/local/submitty/instructors/valid
   ```

8. We recommend that you should leave the PostgreSQL setup unless you know what you're doing.
   However, for the version of PostgreSQL that comes with Ubuntu (16.04), you can
   use UNIX sockets and disable the ability to connect to the DB via TCP. The socket
   improves query responses minorly while disabling TCP can better secure your DB if you don't
   plan to connect to it via localhost, IP, etc. The socket by default is run at
   `/var/run/postgresql`. To disable TCP, you will need to edit
   `/etc/postgresql/9.5/main/pg_hba.conf` and disable all the lines that start with `host` and
   `hostssl`. You will also have to modify `/usr/local/submitty/.setup/INSTALL_SUBMITTY.sh` and
   change `DATABASE_HOST` to point to the socket, and then re-run the script.

9. Test apache config with:  `apache2ctl -t`
    If everything looks ok, restart apache with:  `service apache2 restart'

##### Troubleshooting Installation
1. I cannot connect to PAM!

Submitty authenticates PAM through the python module
[python-pam](https://pypi.python.org/pypi/python-pam/) using the `hwcgi` user. By default, we
assume you're going to use local accounts for authentication and as such `hwcgi` has been
added to the `shadow` group so that it can read /etc/password which is necessary for PAM to work.

To test PAM, you can do:
```bash
$ sudo su hwcgi -c python3
Python 3.5.1 (default, Jun 29 2016, 13:08:31)
[GCC 4.9.2] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> import pam
>>> p = pam.pam()
>>> p.authenticate('username', 'password')
True
```
(where `username` and `password` match some account on the machine).

If you get an error about module pam not being found, that means that `hwcgi` does not have the proper permissions to
the module and if you get False on authentication, then `hwcgi` does not have the proper permissions to check the
right files via PAM.
