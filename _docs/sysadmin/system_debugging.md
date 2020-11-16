---
title: System Debugging
category: System Administrator
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


* Look in the site_errors log:

  ```
  tail -n 50 site_errors/<TODAYS_DATE>.log
  ```  


* Look for errors in the the apache log:

  ```
  /var/log/apache2/submitty.log
  ```

