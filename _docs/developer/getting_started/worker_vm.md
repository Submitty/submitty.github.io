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

These steps will create a worker machine alongside the normal Submitty machine.
1. Make sure to destroy any existing vagrant machines with 
```
vagrant destroy
```

2. Ensure you have [Python 3](https://www.python.org/downloads/) installed on your machine

3. Generate configuration for the desired number of worker machines
   ```
   python3 generate_workers.py [-n NUM] [--ip-range IP_RANGE] [--base-port PORT]
   ```
   This will create or update a configuration file stored at `.vagrant/workers.json`.
   Now you can create the virtual machines with:
   ```
   vagrant up
   ```

   If you happen to encounter error messages regarding IP addresses or port conflicts, you can manually edit the `workers.json` file as needed.

   __NOTE__: Do not edit the `workers.json` configuration file or run the aforementioned python script if there are any existing vagrant machines in your project. This can result in the existing VMs continuing to run in the background or storing their data with no clean way to remove them.

4. To delete the worker machines and revert to a normal development setup, you can first run
   ```
   vagrant destroy
   ```
   And confirm to delete all the existing virtual machines.

   Next, you can delete the `workers.json` file, which will remove the worker configuration from your project.
   The next `vagrant up` should only create the primary development virtual machine without any workers.

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

