---
title: Worker VM Setup
category: Developer > Getting Started > Advanced Setup
redirect_from:
  - /developer/worker_vm
---

If you are are developing or testing the distributed system for
automated grading, you may want to set up one or more *worker
machines* in addition to your primary vagrant virtual machine.

## Automated Worker Installation

These instructions are intended to be followed after [configuring the main virtual machine](/developer/getting_started/vm_install_using_vagrant).

1. Ensure you have [Python 3](https://www.python.org/downloads/) installed on your machine.
   `python3 --version`

2. Generate configuration for the worker machine(s).
   ```
   vagrant workers generate
   ```
   For multiple workers, append the `-n` flag. (ex. `-n 3` for 3 machines).

3. If you are on MacOS running QEMU, make sure to restart the network socket.
   ```
   vagrant workers socket restart
   ```
   If the VM runs into errors when attempting to reach the internet, try starting the socket
   in public mode. (`vagrant workers socket restart --public`)
   
   __NOTE__: Never interact with the socket while a worker machine is running. This can make the machine inaccessible.

6. Now you can create the worker machine(s) with:
   ```
   vagrant workers up
   ```
   Do not use the --provider flag with this command, since it will conflict with the
   provider of the main virtual machine.

7. Once all the workers are fully set up and running, `vagrant ssh` into the main virtual machine and do a `submitty_install`
---

## Connecting to the Worker Machine

If you would like to ensure the worker is functioning properly, or enter the worker machine for managing it directly, you can follow these steps.

To connect to a worker machine through SSH, run:
```
vagrant workers ssh <worker-name>
```

If you want to test the connection between the primary VM and a worker, you can first `vagrant ssh` into the primary machine and then run this command to SSH into the worker from there:
```
su submitty_daemon -c ssh <worker-name>
```

The list of worker names can be displayed with `vagrant workers status`.

__NOTE__: Depending on the performance of your computer and the size of the autograding queue passed to the worker, the SSH command may hang for some time.

---

## Manual Worker Installation (VirtualBox)

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

5. Download the Ubuntu 22.04 installer 64 bit .iso.
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

8. At some point, it will suggest that you install updates for Ubuntu 22.04, go ahead and do that.
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

