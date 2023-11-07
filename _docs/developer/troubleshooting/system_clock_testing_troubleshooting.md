---
title: System Clock Testing & Troubleshooting
category: Developer > Troubleshooting
---

---

* If the VM has a clock skew (incorrect time)

  ```
  sudo service ntp stop
  sudo ntpd -gq
  sudo service ntp start
  ```


* If you need to test time and/or date dependent elements, you can
  change it in the vagrant machine so you don't have to wait.  To
  remove the syncing and set your own time:

  ```
  sudo systemctl disable ntp
  timedatectl set-ntp 0
  sudo date -s "<year>-<month>-<day> <hour>:<minute>:<seconds>
  ```

  To check the date, helpful to make sure the date and time you set has stuck:

  ```
  date
  ``` 

  To sync back with the current time:

  ```
  sudo systemctl enable ntp
  timedatectl set-ntp 1
  ```

---