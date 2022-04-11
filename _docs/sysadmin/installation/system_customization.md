---
title: System Customization
category: System Administrator > Installation
---


The optional instructions below are suggestions for the system
administrators of a live Submitty installation.


## Schedule backups of production server data

Specifically, the configuration, submission, and results data for all courses:

```
/var/local/submitty/courses/
```

And the central location of the student VCS (e.g. git version control) repositories (if used):

```
/var/local/submitty/vcs/
```

You may want to back up more of `/var/local/submitty` to save configurations and logs, but be sure to exclude
   `/var/local/submitty/to_be_graded_batch` and `to_be_graded_interactive`.


## Capture cron error messages

The `submitty_daemon` user runs the [sbin/send_email.py](https://github.com/Submitty/Submitty/blob/master/sbin/send_email.py)
script.  Console output from this script can be emailed to a sysadmin to help ensure that errors can be reported and addressed.

The first line should be set as `MAILTO=` with a valid email address.  For example:
```
MAILTO=sysadmins@lists.myuniversity.edu
* * * * * python3 /usr/local/submitty/sbin/send_email.py
```



## Configure log rotation

The defaults will work, but you may want to keep records around for
longer and enable compression so that the logs don’t take up as
much space.  Edit `/etc/logrotate.conf` and change the `log rotation`,
`retention`, and `compression` settings to suit your situation.  The
comments in the file will tell you what each setting is for, or see
[logrotate(8)](https://linux.die.net/man/8/logrotate) for more
details.




## Set password policy

It is a good idea to enforce strong passwords and password aging
Edit `/etc/login.defs` to set default password and account expiration
and set the umask to block world readable/writable files by default
(search for the keywords and update the values after them)

```
UMASK 027

PASS_MAX_DAYS   730
PASS_MIN_DAYS   0
PASS_WARN_AGE   30
```

Apply settings by running:

```
pam-auth-update
```

Accept the defaults from the above command.

Edit `/etc/pam.d/common-password` to tweak settings under the line:

```
# here are the per-package modules (the "Primary" block)
```

along the lines of:

```
password  requisite  pam_passwdqc.so min=disabled,disabled,15,12,12 similar=deny enforce=everyone retry=3
```

Note: The values after `min=` correspond to password length minimum
if they contain: a single character class, 2 classes, a passphrase,
3 classes, 4 classes.


__Note: If you would like to allow local machine passwords for pam
authentication, make sure the `submitty_cgi` user is in the shadow group.__




## Configure NTP to Synchronize your Clock

Install and configure the `ntp daemon`.  Customize your configuration
to point at local NTP servers, e.g., available at your university.
Use `ntpq -p` to check when the NTP servers were last checked.


## Block some brute-force ssh connections by typing the following at a command prompt:

```
sudo bash
iptables -I INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 60 --hitcount 8 -j DROP
iptables-save > /root/eth0.fw
exit
```

Edit `/etc/rc.local` to automatically reload the software
firewall on boot and add the following just before the `exit 0`

```
/sbin/iptables-restore < /root/eth0.fw
```

Note: This method may not be appropriate or may need to be tuned
if you normally expect a lot of ssh connections from a given host.
You may also opt to whitelist addresses or networks that are
allowed to connect more frequently.



## Disable PHP Functions

To improve the security of the system, it might be useful to disable various unused PHP functions. This can be done by modifying the [disabled_functions](https://secure.php.net/manual/en/ini.core.php#ini.disable-functions) directive. Provided below is the setting used within our Vagrant and live setup:

```
disable_functions = popen,pclose,proc_open,chmod,php_real_logo_guid,php_egg_logo_guid,php_ini_scanned_files,php_ini_loaded_file,readlink,symlink,link,set_file_buffer,proc_close,proc_terminate,proc_get_status,proc_nice,getmyuid,getmygid,getmyinode,putenv,get_current_user,magic_quotes_runtime,set_magic_quotes_runtime,import_request_variables,ini_alter,stream_socket_client,stream_socket_server,stream_socket_accept,stream_socket_pair,stream_get_transports,stream_wrapper_restore,mb_send_mail,openlog,syslog,closelog,pfsockopen,posix_kill,apache_child_terminate,apache_get_modules,apache_get_version,apache_lookup_uri,apache_reset_timeout,apache_response_headers,virtual,system,phpinfo,exec,shell_exec,passthru,pcntl_alarm,pcntl_fork,pcntl_waitpid,pcntl_wait,pcntl_wifexited,pcntl_wifstopped,pcntl_wifsignaled,pcntl_wexitstatus,pcntl_wtermsig,pcntl_wstopsig,pcntl_signal,pcntl_signal_dispatch,pcntl_get_last_error,pcntl_strerror,pcntl_sigprocmask,pcntl_sigwaitinfo,pcntl_sigtimedwait,pcntl_exec,pcntl_getpriority,pcntl_setpriority,
```

However, this should be only applied to the `php.ini` running the web server and not applied to the `cgi/php.ini` which does require some of these functions to function properly.



## Increasing the max number of files that can be uploaded at once

By default, PHP only allows 20 files to be uploaded at a time. To change this limit, edit:

```
/etc/php/7.4/fpm/php.ini
```

and modify the variable:

```
upload_max_filesize
```

Then restart PHP
```
systemctl reload php7.4-fpm
```

## Allowing Large Student File Upload Submissions

By default, Apache / Ubuntu limits the size of file upload by POST to
2MB.  A from-scratch Submitty installation will be configured with a
10mb limit (prior to v21.10.00) or a 200mb limit (v21.10.00 or later).
To check the current limit configured on your system, or modify the
value, view/edit this file:


```
/etc/php/7.4/fpm/php.ini
```

_Note: Ubuntu 20.04 is using 7.4, but older versions might be using `php7.0-fpm`._

Change these variables as appropriate:

```
post_max_size
upload_max_filesize
```

And restart apache:

```
sudo systemctl restart apache2.service
sudo systemctl restart php7.4-fpm.service
```

and/or

```
sudo service apache2 restart
sudo service php7.4-fpm restart
```

_Note: Ubuntu 20.04 is using 7.4, but older versions might be using `php7.0-fpm`._

By default, a Submitty electronic gradeable allows students to upload
files totaling 100KB.  Instructors can adjust this limit per gradeable
in the `config.json`, for example:

```
// 1 mb maximum submission size
"max_submission_size" : 1000000
```

If you are having difficulty with student upload size, you can modify the
following in `/etc/php/7.4/fpm/php.ini`:

```
memory_limit
```

Just be aware that modifying this number can have repercussions when multiple
students are using the system at once.





## Tune the performance of the website to handle a large number of users


Adjust the following settings in `/etc/php/7.4/fpm/pool.d/submitty.conf`.

We have found that the following settings work well for a production
server with approximately 2000 students.  The commented out line is
the default value.  Please read the documentation to determine values
that are appropriate for your own system.


```
; pm.start_servers = 4
pm.start_servers = 20

; pm.min_spare_servers = 2
pm.min_spare_servers = 10

; pm.max_spare_servers = 6
pm.max_spare_servers = 30

; pm.max_children = 20
pm.max_children = 100
```


After editing these values, be sure to restart apache and php-fpm:


```
sudo systemctl restart apache2.service
sudo systemctl restart php7.4-fpm.service
```



## Show system message to all users

Submitty allows showing a message to all users on all pages. This is useful for advertising
events that affect all users, such as system maintainence windows where it would be unavailable.
This message is shown in a yellow bar displayed underneath the header.

To add or remove this message, edit `/usr/local/submitty/config/submitty.json` and add/remove the
key/value for `system_message`. If the key exists, but is empty, no message will be shown.




## Adding Additional Links To The Footer

You may add additional links to be shown in the footer.  i.e. you may link to pages related to your institution or public policy notices.
Additional links will appear to the right of the copyright notice and credit links to Github and RCOS.

1. Create an empty file `footer_links.json` and place it in Submitty's system configuration folder.
  * The configuration folder is typically `/usr/local/submitty/config`.
2. The `footer_links.json` file must be readable by the `submitty_php` user.
  * e.g. Set ownership of the file to `root:submitty_php` and permissions to `640 (RW-R-----)`.
3. Every link requires a `title` property and a `url` property.
  * An `icon` property is optional.  Check [here](https://fontawesome.com/v4.7.0/icons/) for a list of icons.
4. Here is an example `footer_links.json`.  Make sure your JSON file is properly formatted with square brackets, curly braces, commas, etc.
```
[
    {
        "title": "Dept of Computer Science",
        "url": "https://www.myuniversity.edu/computer_science"
    },
    {
        "icon": "universal-access",
        "title": "Accessibility Policy",
        "url": "https://www.myuniversity.edu/info/accessibilitypolicy"
    }
]
```
5. If any links do not display, they probably have failed validation.  Validation can be particular, so please carefully proofread `footer_links.json` with instructions 1—4.



## Customizing the login screen

You can customize the login screen with markdown. By default, `# Login` is rendered which you can replace or add onto.

1. Create an empty file `login.md` and place it in Submitty's system configuration folder.
  * The configuration folder is typically `/usr/local/submitty/config`.
2. The `login.md` file must be readable by the `submitty_php` user.
  * e.g. Set ownership of the file to `root:submitty_php` and permissions to `640 (RW-R-----)`.
3. Place whatever content you would like to display on the login screen in this file. You may wish to start the file with `# Login` if you want to keep the current login header.

Refer to [this](/student/communication/markdown) to learn more about markdown.

