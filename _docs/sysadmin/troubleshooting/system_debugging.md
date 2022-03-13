---
title: Websockets / System & Debugging
category: System Administrator > Troubleshooting & Other Information
redirect_from:
  - /sysadmin/system_debugging
---


### Diagnosing Problems related to WebSockets


* Check status of websocket daemon:

  ```
  sudo systemctl status submitty_websocket_server
  ```


* If necessary, try to restart the websocket daemon:

  ```
  sudo systemctl restart submitty_websocket_server
  ```


* Look at the more detailed, recent stdout & stderr from the websocket daemon:

  ```
  sudo journalctl -u submitty_websocket_server
  ```


* Look for errors about sockets in:

  ```
  /var/log/syslog
  ```


* Look in the Submitty site_errors log:

  ```
  tail -n 50 /var/local/submitty/site_errors/<TODAYS_DATE>.log
  ```  


* Look for errors in the apache log:

  ```
  /var/log/apache2/submitty.log
  ```

* Look for errors in the nginx log:

  ```
  /var/log/nginx/error.log
  ```

* Check the SSL keys / certificates for apache & nginx.
  Look for ssl key & certificate files specified in the enabled
  `.conf` files for apache & nginx:

  ```
  grep ssl /etc/apache2/sites-enabled/*.conf
  grep ssl /etc/nginx/sites-enabled/*.conf
  ```

  Make sure the `.key`, `.cert`, and `.pem` files are valid &
  up-to-date.  The files may all be stored in:

  ```
  /etc/apache2/ssl
  ```

  When you replace your `.cert` file for apache, be sure to also
  replace the `.pem` file for nginx.  See also
  [v20.09.00 NGINX for Websocket Request](/sysadmin/installation/version_notes/v20.09.00).