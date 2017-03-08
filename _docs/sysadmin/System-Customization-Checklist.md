---
title: System Customization Checklist
category: System Administrator
order: 6
---

_NOTE: THIS FILE IS INTENDED TO BE SUGGESTIONS OR OPTIONAL
INSTRUCTIONS FOR THE SYS ADMIN OF A LIVE INSTALLATION._


### Customize upload students script 

The system admin or instructor can upload student data from either
an XLSX or CSV spreadsheet of their student classlist (obtained
from the university registrar).

```
sudo ./bin/setcsvfields W X Y Z
```

Since the format of this data may vary between universities, this
command allows customization of what columns from the spreadsheet
represent students first name (W), last name (X), campus e-mail
(Y), and registration Section ID (Z).

For example: If the students' first name is column 13, last name
is column 12, e-mail is column 15, and section ID is column 7, then
the command is:

```
sudo ./bin/setcsvfields 13 12 15 7
```



### Schedule backups of production server data

Specifically, the configuration, submission, and results data for all courses:

```
/var/local/submitty/courses/
```

And the central location of the student SVN repositories (if used):

```
/var/lib/svn/
```
You may want to back up more of `/var/local/submitty` to save configurations and logs, but be sure to exclude
   `/var/local/submitty/to_be_graded_batch` and to_be_graded_interactive


### Capture cron error messages

The ``` hwcron ``` user runs the [bin/grade_students.sh][bin/grade_students.sh]
script.  STDERR output from this script should be logged or emailed
to ensure that system errors can be reported and addressed.

See cron job details in [INSTALL_SUBMITTY_template.sh][INSTALL_SUBMITTY_template.sh].


### Configure log rotation 

The defaults will work, but you may want to keep records around for
longer and enable compression so that the logs don’t take up as
much space.  Edit /etc/logrotate.conf and change the log rotation,
retention, and compression settings to suit your situation.  The
comments in the file will tell you what each setting is for, or see
[logrotate(8)](http://www.linuxcommand.org/man_pages/logrotate8.html) for more
details.


### Set password policy

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

Note: The values after min= correspond to password length minimum
if they contain: a single character class, 2 classes, a passphrase,
3 classes, 4 classes.


__Note: If you would like to allow local machine passwords for pam
authentication, make sure the hwcgi user is in the shadow group.__


### Secure SSH

We encourage you to edit `/etc/ssh/sshd_config` to use only stronger encryption sets along the lines of:

```
Protocol 2
MACs hmac-sha1,umac-64@openssh.com,hmac-ripemd160
Ciphers aes256-ctr,aes192-ctr,aes128-ctr,arcfour256,arcfour128 
```

### Block some brute-force ssh connections by typing the following at a command prompt:

``` 
sudo bash
iptables -I INPUT -p tcp --dport 22 -m state --state NEW -m recent --set
iptables -A INPUT -p tcp --dport 22 -m state --state NEW -m recent --update --seconds 60 --hitcount 8 -j DROP
iptables-save > /root/eth0.fw
exit
```

Edit ``` /etc/rc.local ``` to automatically reload the software
firewall on boot and add the following just before the ``` exit 0 ```

```
/sbin/iptables-restore < /root/eth0.fw 
```

Note: This method may not be appropriate or may need to be tuned
if you normally expect a lot of ssh connections from a given host.
You may also opt to whitelist addresses or networks that are
allowed to connect more frequently.

### Disable PHP Functions

To improve the security of the system, it might be useful to disable various unused PHP functions. This can be done by modifying the [disabled_functions](https://secure.php.net/manual/en/ini.core.php#ini.disable-functions) directive. Provided below is the setting used within our Vagrant and live setup:

```
disable_functions = popen,pclose,proc_open,chmod,php_real_logo_guid,php_egg_logo_guid,php_ini_scanned_files,php_ini_loaded_file,readlink,symlink,link,set_file_buffer,proc_close,proc_terminate,proc_get_status,proc_nice,getmyuid,getmygid,getmyinode,putenv,get_current_user,magic_quotes_runtime,set_magic_quotes_runtime,import_request_variables,ini_alter,stream_socket_client,stream_socket_server,stream_socket_accept,stream_socket_pair,stream_get_transports,stream_wrapper_restore,mb_send_mail,openlog,syslog,closelog,pfsockopen,posix_kill,apache_child_terminate,apache_get_modules,apache_get_version,apache_lookup_uri,apache_reset_timeout,apache_response_headers,virtual,system,phpinfo,exec,shell_exec,passthru,pcntl_alarm,pcntl_fork,pcntl_waitpid,pcntl_wait,pcntl_wifexited,pcntl_wifstopped,pcntl_wifsignaled,pcntl_wexitstatus,pcntl_wtermsig,pcntl_wstopsig,pcntl_signal,pcntl_signal_dispatch,pcntl_get_last_error,pcntl_strerror,pcntl_sigprocmask,pcntl_sigwaitinfo,pcntl_sigtimedwait,pcntl_exec,pcntl_getpriority,pcntl_setpriority,
```

However, this should be only applied to the `php.ini` running the web server and not applied to the `cgi/php.ini` which does require some of these functions to function properly.

[bin/grade_students.sh]: https://github.com/Submitty/Submitty/blob/master/bin/grade_students.sh
[INSTALL_SUBMITTY_template.sh]: https://github.com/Submitty/Submitty/blob/master/bin/.setup/INSTALL_template.sh