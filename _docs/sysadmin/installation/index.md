---
title: Overview
category: System Administrator > Installation
redirect_from:
  - /developer/installation
---

These instructions will help guide you to installing Submitty onto a
server (whether on a dedicated machine or a VM).

**Note**: We assume that you're installing Submitty on a dedicated machine. If this machine is
used for other things, you may need to adapt the instructions below and
[install_system.sh](https://github.com/Submitty/Submitty/blob/master/.setup/install_system.sh)
for your needs (as the script installs all of the dependencies that Submitty depends on).

**Note:** Part of the installation process consists of changing the default umask
for users from 002 to 027 to better protect the files that Submitty generates
during operation as well as any instructors who are SSHing into the machine and
so as to not potentially allow other access to confidential material. This does
mean that installing certain things (like python packages through pip) into a
global scope will need to have their permissions updated or else only the owner
will be able to read/execute it.

_Note: These instructions should be run under root/sudo._

We have two methods for installing Submitty. The first method is running the bootstrap
script which follows the set of instructions listed below. The second installation method uses Ansible.
You can use these [instructions](/sysadmin/installation/ansible).


1. [Install Ubuntu 22.04 server edition (or other supported distro)](/sysadmin/installation/server_os)

   Note: If you are duplicating an existing Submitty installation onto a new server, you should
   synchronize `/etc/passwd`, `/etc/shadow`, `/etc/group`, and `/etc/gshadow` before installing
   the rest of Submitty to avoid mismatched UIDs and GIDs of the Submitty users.

1. Install Submitty:
   ### Option 1: Run the bootstrap script.
   ```
   bash -c "$(curl -s https://raw.githubusercontent.com/Submitty/Submitty/master/.setup/bootstrap.sh)"
   ```
   This will generate a random password for the database users. You will still have to edit the config file(s) generated, but you will have to do so after Submitty has been installed.

   ### Option 2: Clone the git repository and run the scripts manually (requires git and lsb-release to be installed):

   Note: During installation, if you have pre-configured JSON config files, put them in `/usr/local/submitty/config/`. Otherwise, generate default configs that you can edit, and will be found in the same path.

   ```
   mkdir -p /usr/local/submitty/GIT_CHECKOUT
   git clone https://github.com/Submitty/Submitty.git /usr/local/submitty/GIT_CHECKOUT/Submitty
   cd /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup
   python3 ./generate_configs.py
   ```
   Edit the config files to use your institutions specific values.
   ```json
   {
      "submitty_install_dir": "/usr/local/submitty", // Installation dir (created in the steps above)
      "submitty_repository": "/usr/local/submitty/GIT_CHECKOUT/Submitty", // Where Submitty is cloned
      "submitty_data_dir": "/var/local/submitty", // Directory where Submitty courses are stored
      "autograding_log_path": "/var/local/submitty/logs/autograding",
      "sys_admin_email": "sysadmin@example.com", // Sysadmin email
      "sys_admin_url": "https://example.com",
      "site_log_path": "/var/local/submitty/logs",
      "submission_url": "http://localhost:1511", // URL where students will submit homework
      "vcs_url": "", // If using VCS, the URL where students students push to
      "cgi_url": "http://localhost:1511/cgi-bin", // Should be the <submission_url>/cgi-bin
      "websocket_port": 8443, // Only change if required
      "institution_name": "", // Name of your institution (e.x. Rensselaer Polytechnic Institute)
      "institution_homepage": "", // The homepage of your institution (e.x. rpi.edu)
      "timezone": "America/New_York", // Your time zone TZ identifier
      "default_locale": "en_US",
      "duck_special_effects": false, // Allow special effects
      "course_material_file_upload_limit_mb": "100",
      // Allow users to create their own accounts (Only works with DatabaseAuthentication), see documentation for how to use
      "user_create_account": false, 
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
      },
      "worker": false // Is Submitty being run as a worker
   }
   ```
   For switching authentication methods, edit
   `<submitty_install_dir>/config/authentication.json` and change the
   authentication method to any of the methods. You should be able
   to leave all other settings to the default.


   After you have edited the config files, run the install script.
   ```
   bash ./.setup/install_system.sh
   ```

1. Run installations specific to your university.
   For example:  [RPI Computer Science specific installations](https://github.com/Submitty/Submitty/blob/master/.setup/distro_setup/ubuntu/rpi.sh)

   ```
   sudo bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/distro_setup/ubuntu/rpi.sh
   ```

1. Edit PHP Settings

   We recommend for security that you modify your PHP installation and disable certain PHP functions.
   To do this, edit `/etc/php/8.2/fpm/php.ini`  and find the entry for `disable_functions` and make sure the list of
   disabled functions contains:

   ```
   popen,pclose,proc_open,php_real_logo_guid,php_egg_logo_guid,php_ini_scanned_files,php_ini_loaded_file,readlink,symlink,link,set_file_buffer,proc_close,proc_terminate,proc_get_status,proc_nice,getmyuid,getmygid,getmyinode,putenv,get_current_user,magic_quotes_runtime,set_magic_quotes_runtime,import_request_variables,ini_alter,stream_socket_server,stream_socket_accept,stream_socket_pair,stream_get_transports,stream_wrapper_restore,mb_send_mail,openlog,syslog,closelog,pfsockopen,posix_kill,apache_child_terminate,apache_get_modules,apache_get_version,apache_lookup_uri,apache_reset_timeout,apache_response_headers,virtual,system,phpinfo,exec,shell_exec,passthru,disk_free_space,disk_total_space,diskfreespace,getlastmo,getmypid,extract,parse_str,mail,fsockopen,posix_setpgid,posix_setsid,posix_setuid,exif_read_data,read_exif_data,exif_thumbnail,exif_imagetype,tempnam,
   ```

   _Note: Depending on your version of Ubuntu, your version of php fpm will be different._

1. Setup Apache

   To access Submitty's web interface, you will need to setup Apache for it.
   To help you along, we provide an annotated apache configuration for Submitty at
   [.setup/apache/submitty.conf](https://github.com/Submitty/Submitty/blob/master/.setup/apache/submitty.conf)
   which you can copy to `/etc/apache2/sites-available/submitty.conf`. You will
   need to replace all instances of `__your_domain__` with your actual
   domain / IP (don't include the `https://` part of it).

   The basic commands to do this are:
   ```
   cp /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/apache/submitty.conf /etc/apache2/sites-available/submitty.conf
   a2ensite submitty
   ```

   The annotated apache configuration above is setup only for HTTP. For production
   systems, we highly recommend setting up SSL/HTTPS for the server. If your institute
   or organization does not have a centralized SSL provider to use, we recommend
   using [Let's Encrypt](https://letsencrypt.org/) to get one through their
   [certbot](https://certbot.eff.org/) tool, which should handle upgrading the Submitty
   apache configuration to SSL for you. The generated certificates will
   be available under `/etc/letsencrypt/live/__your_domain__`. If going through
   a centralized provider, they should provide instructions about where to place
   the certificates (commonly at `/etc/ssl` or `/etc/apache2/ssl`) and the changes
   necessary for Apache. See [this page](https://httpd.apache.org/docs/2.4/ssl/ssl_howto.html)
   for more details about the various settings for SSL.

   Note: It's recommended that after setting up SSL, that you add the following block to
   redirect all HTTP requests to HTTPS:
   ```
   <VirtualHost __your_domain__:80>
        ServerName __your_domain__
        Redirect / https://__your_domain__/
   </Virtualhost>
   ```

   We also recommend that you edit `/etc/apache2/conf-enabled/security.conf` to ensure
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

   At this point, you should be able to access the site by going to `your_domain`
   through a browser.

1. Configure NGINX

   Submitty uses a NGINX server to proxy the websocket server. By default
   the websocket server will run without HTTPS. If Apache is configured with
   HTTPS then websockets must also be configured with HTTPS or they will
   not connect. To setup HTTPS on NGINX,
   modify `/etc/nginx/sites-available/submitty.conf` and put the following:

   ```
   server {
       # SSL configuration
       listen 8443 ssl default_server;
       listen [::]:8443 ssl default_server;

       #dont show OS or version identity
       server_tokens off; 

       ssl on;
       ssl_certificate /etc/apache2/ssl/submitty-demo.pem;
       ssl_certificate_key /etc/apache2/ssl/submitty-demo.key;
       ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
       ssl_prefer_server_ciphers on;
       ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-RC4-SHA:ECDHE-RSA-AES128-SHA:AES128-SHA:RC4-SHA;
       ssl_session_cache shared:SSL:10m;

       server_name _;

       location / {
           return 404;
       }

       location /ws {
           proxy_pass http://unix:/var/local/submitty/run/websocket/server.sock:;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection "Upgrade";
           proxy_set_header Host $host;
       }
   }
   ```

   You should modify the values for `ssl_certificate` and `ssl_certificate_key`
   to point to your SSL certificate and private key.

   To create the `.pem` file required by NGINX, combine the existing
   `chain.cer` cert chain with the `submitty.cer` file:

   ```
   cp submitty.cer submitty.pem
   cat chain.cer >> submitty.pem
   ```
       #### Configure Websocket Port

    Submitty allows you to configure the websocket server to use a custom port. To do this:
    
    Open the Submitty configuration file:
    
       bash
       /usr/local/submitty/config/submitty.json```
    
     Add or modify the websocket_port field, for example:
       
       "websocket_port": 9001
       ```
     The websocket server will default to port 8443 if this value is not set.
       Update the proxy_pass directive in your NGINX configuration 
       ```(/etc/nginx/sites-available/submitty.conf)``` to match the new port:
   ```
   location /ws {
    proxy_pass http://127.0.0.1:9001; # Updated port here
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
    }
    ```
    
    Restart NGINX for the changes to take effect:
    
       ```
       sudo systemctl restart nginx
       ```


1. We recommend that you should leave the PostgreSQL setup unless you know what
   you're doing. If you are running PostgreSQL on the same server as Submitty,
   we recommend using the UNIX socket, and to disable TCP if unused. By default,
   the socket is found at `/var/run/postgresql`, and disabling TCP is done through
   editing the [`pg_hba.conf`](https://www.postgresql.org/docs/10/auth-pg-hba-conf.html)
   file for PostgreSQL. Using the socket improves query responses as it will not
   need to go through the TCP stack. Disabling TCP if not used will improve security
   as it prevents anyone from attempting to get into the DB from the outside
   world. To disable TCP, you would comment out all the lines that start with `host`
   and `hostssl` in the `pg_hba.conf` file. Setting the socket to be used for
   Submitty is done by editing `<submitty install dir>/config/database.json` and setting the
   database host to the socket (e.g. `/var/run/postgresql`).

   NOTES:
   - If you intend to run the [Student Registration Feed](/sysadmin/configuration/registration_feed), do not
     disable TCP.

1. Test apache config with:  `apache2ctl -t`

   If everything looks ok, restart apache with:  `service apache2 restart'


1. We suggest reviewing [Additional System Customizations](/sysadmin/installation/system_customization)
    that might be appropriate for your installation.


### Troubleshooting
- **I cannot connect to PAM!**
  1. Submitty authenticates PAM through the python module
     [python-pam](https://pypi.python.org/pypi/python-pam/) using the
     `submitty_cgi` user. By default, we assume you're going to use local accounts
     for authentication and as such `submitty_cgi` has been added to the `shadow`
     group so that it can read /etc/password which is necessary for PAM to work.

     To test PAM, you can do:

     ```bash
     $ sudo su submitty_cgi -c python3
     Python 3.5.1 (default, Jun 29 2016, 13:08:31)
     [GCC 4.9.2] on linux2
     Type "help", "copyright", "credits" or "license" for more information.
     >>> import pam
     >>> p = pam.pam()
     >>> p.authenticate('username', 'password')
     True
     ```

     (where `username` and `password` match some account on the machine).

     If you get an error about module pam not being found, that means that
     `submitty_cgi` does not have the proper permissions to the module and if
     you get False on authentication, then `submitty_cgi` does not have the
     proper permissions to check the right files via PAM.

  2. If the PAM module is functioning, but Submitty is still erroring during
     user authentication, check `/var/log/apache2/submitty.log` for these
     entries with a recent timestamp:

     1. `AH01630: client denied by server configuration: /usr/local/submitty/site/cgi-bin/pam_check.cgi`
     2. `POST /cgi-bin/pam_check.cgi HTTP/1.1" 403 470 "-" "-"`

     This indicates that apache is blocking the execution of Submitty's
     authentication code.  Try adding this line to `submitty.conf` under the
     heading `<Directory "/usr/local/submitty/site/cgi-bin">`.

     - `Require all granted`

- **Installation Fails During NTP Setup**

  1.  This is indicative that you installed the Ubuntu 2X.04 "Live" server.
      "Live" server is unsupported.  Please install the traditional server.
      Please see the [Server OS](/sysadmin/installation/server_os) page for more details.
