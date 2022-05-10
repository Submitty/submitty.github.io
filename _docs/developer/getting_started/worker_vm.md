---
title: Virtual Box Worker Installation
category: Developer > Getting Started > Advanced Setup
redirect_from:
  - /developer/worker_vm
---

If you are are developing or testing the distributed system for
automated grading, you may want to set up one or more *worker
machines* in addition to your primary vagrant virtual machine.

## Automated Virtualbox Worker Installation

These steps will create a worker machine alongside the normal Submitty machine.
1. Destroy `ubuntu-20.04` and `submitty-worker` vagrant machines (if they exist) with 
```
vagrant destroy
```

2. Create the Submitty VM and the worker VM with 
   ```
   WORKER_PAIR=1 vagrant up
   ```
   On Windows you will have to first set the environment variable to 1 which lasts for the session of that console, then call vagrant up.
   ```
   SET WORKER_PAIR=1
   vagrant up
   ```
   If you want to unset the variable, you can do
   ```
   SET WORKER_PAIR=
   ```

   **NOTE**
   If you encounter error messages relating to IP addresses, you may need to change the IP for the `submitty-worker` machine in the `Vagrantfile` to avoid collisions.

   When not using the Worker VM, it is recommended to set `enabled: false` under the `submitty-worker` machine in `/usr/local/submitty/config/autograding_workers.json` to avoid prolonged wait times when running `INSTALL_SUBMITTY.sh`.

3. To boot up both VMs after they have been halted, simply run 
   ```
   WORKER_PAIR=1 vagrant up
   ```
   using the same method as in step 2.

---

## Manual Virtualbox Worker Installation

1. Open the Virtual Box application.

2. Click `New` to create a new machine.
   Give it a useful name: e.g., `worker_machine_a`
   Specify the type: `Linux`
   And the version: `Ubuntu 64`

3. Specify the amount of memory: 2048 = 2GB should be sufficient.

4. Create the disk as a `new virtual disk`.
   Specify RAM memory: 2048 (2GB)
   Create new virtual disk.
   Choose `VDI`
   Choose `Dynamically allocated`
   Specify size: e.g., 20GB

5. Download the Ubuntu 20.04 installer 64 bit .iso.
   Save this somewhere on your host computer.

6. Click on `Start` to power on.
   Browse your files to find the Ubuntu installer .iso we downloaded earlier.
   Press `Start`.

7. Follow the Ubuntu installation menu...
   Click `Install Ubuntu`.
   Select `English` keyboard.
   Select `normal` installation.
   Agree to `Erase disk & Install Ubuntu`.
   Specify your timezone.
   Then specify your username, computer name, password.
   Then click through various menus, and wait a while installing system.
   Then restart the VM to finish installation.

8. At some point, it will suggest that you install updates for Ubuntu 20.04, go ahead and do that.
   You'll probably have to reboot.

9. Allow ssh connections to the worker VM from outside (e.g., from your primary machine):
   from virtual box, select the VM, click on `Settings`, then `Network`,
   `Enable Network Adapter` should be checked, then set
   Attached to: `Bridged Adapter`

10. From the VM, open a terminal and install a bunch of additional packages:

    ```
    sudo apt update
    sudo apt install net-tools
    sudo apt install openssh-server
    sudo apt install git
    ```

11. Install Guest Additions (Improves screen resolution, copy paste to/from the VM, etc.)

    While the VM is running, focus on the VM window.
    Then from the menu, select `Devices` -> `Insert guest additions CD image`
    Open a terminal in the VM
    Go to the guest additions CD directory, and run the guest additions installer:

    ```
    mount
    cd /media/<USERNAME>/VBox_GAs_<VERSION>/
    sudo ./VBoxLinuxAdditions.run
    ```

12. Get a permanent IP address for your machine
    Go to your router, assign a fix ip address for your mac address
    E.g., in a browser, go to `192.168.0.1` and log in...
    Helpful command to find  your mac address & current IP address:

    ```
    ifconfig
    ```

13. Prevent worker VM from going to sleep (so you can send autograding jobs to it at any time).
    `Settings` -> `privacy` -> `screen lock` -> `turn off screen lock`
    `Settings` -> `power` -> `suspend & power button` -> `automatic suspend` == off
    `Settings` -> `power` -> `blank screen` == `never`

14. Follow the [worker installation instructions](/sysadmin/worker_installation)

