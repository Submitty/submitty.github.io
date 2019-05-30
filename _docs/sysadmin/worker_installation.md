---
title: Worker Installation
category: System Administrator
---

A Submitty instance is capable of leveraging additional machines to distribute
autograding load. This capability can be used to ship jobs which require
specialized hardware to appropriate machines. This guide details the steps
to install Submitty in worker mode, and to configure the resulting worker machine
for use by a "Primary" Submitty instance.

Note: We assume that you're installing Submitty on a dedicated machine. If this machine is
used for other things, you may need to adapt the instructions below and
[install_system.sh](https://github.com/Submitty/Submitty/blob/master/.setup/install_system.sh)
for your needs (as the script installs all of the dependencies that Submitty depends on).

_Note: These instructions should be run under root/sudo._


1. [Install Ubuntu 16.04 or 18.04 server edition](server_os)

2. Create a ```submitty``` user on the machine. The user's name is not important.
The user should only be used for submitty related activities.

3. After installing the operating system, clone the git repository:

   ```
   mkdir -p /usr/local/submitty/GIT_CHECKOUT
   git clone https://github.com/Submitty/Submitty.git /usr/local/submitty/GIT_CHECKOUT/Submitty
   ```

4. Run the automated portion of the install, using the ```--worker``` option.

   ```
   cd /usr/local/submitty/GIT_CHECKOUT/Submitty
   bash ./.setup/install_system.sh --worker
   ```

   You will be asked to provide the name of your submitty user by the
   [CONFIGURE_SUBMITTY.sh script](https://github.com/Submitty/Submitty/blob/master/.setup/CONFIGURE_SUBMITTY.sh).

5. Run installations specific to your university.  
   For example:  [RPI Computer Science specific installations](https://github.com/Submitty/Submitty/blob/master/.setup/distro_setup/ubuntu/rpi.sh)

   ```
   sudo bash /usr/local/submitty/.setup/distro_setup/ubuntu/rpi.sh
   ```

6. Add the submitty user to the ```submitty_daemon``` and ```submitty_daemonphp```
   groups.

   ```
   sudo usermod -a -G submitty_daemon YOUR_SUBMITTY_USER
   sudo usermod -a -G submitty_daemonphp YOUR_SUBMITTY_USER
   ```

7. Next, we must set up an ssh key so that submitty_daemon user on the primary
  machine can copy files to our worker machine.

  On primary submitty:  
  ___NOTE: ssh-keygen asks for the name of your submitty user.___  
  ___NOTE: The ssh-copy-id line requires a replacement___
  ```
  su submitty_daemon
  cd ~/.ssh
  ssh-keygen
  ssh-copy-id -i ~/.ssh/id_rsa.pub SUBMITTY_USER@HOSTNAME
  ```

8. Finally, we must add the machine to the list of workers available to our
  primary machine. To do this:  
  *  Log on to the primary Submitty machine.
  *  Open ```/usr/local/submitty/config/autograding_workers.json``` with your favorite text editor.
  *  Add a new entry with a unique key.
  *  add at least one capability to the capabilities list. This capability will determine
      which jobs should be shipped to this machine.
  *  Add the 'address' of the machine to the address field (e.g. ```my_department.my_university.edu```).
  *  Add the number of autograding workers (simultaneously processed jobs) for the machine.
  *  Add the name of the submitty user on the machine as the username.
  *  Set the machine to be enabled.

9. Run ```/usr/local/submitty/.setup/INSTALL_SUBMITTY.sh``` so that the changes take effect.

10. Inside of your assignment configurations, you may now add the line  
  ```
    required_capabilities : 'CAPABILITY'
  ```
  to ship your jobs to a worker with the capability CAPABILITY.


# Additional Instructions for Graphics Application Workers

1. Make sure the display will not go to sleep

   __FIXME: add instructions__

2. Give the untrusted user access to the Xserver

   ```
   xhost + SI:localuser:untrusted00
   ```
