---
title: VM Install using Vagrant
category: Developer > Getting Started
redirect_from:
  - /developer/vm_install_using_vagrant
---

The instructions below will setup an instance of Submitty on your own
hardware that will have several courses, many sample assignments, and
a hundred students with assignment submissions so you can explore the
features of Submitty as it would appear "mid-semester".  Your host
computer can run any modern operating system (Windows, Mac, or
Unix/Linux).  The installation process will create a new Virtual
Machine (VM) on your computer and the VM will use the Ubuntu GNU/Linux
operating system.

__Note:__ We only officially support and test development using VirtualBox. 
The instructions below are for VirtualBox.  While alternatively using 
VMWare should work, we have not tested this, and do not provide these 
instructions.

---

## Pre-Installation Checklist

1. To develop with a Virtual Machine (VM), your computer should have
   at least 8GB of RAM and a 64-bit host OS.  AMD-V or Intel VT-x are
   also required (most computers have these).  Submitty is RAM and I/O
   intensive, so more RAM and a fast disk are better.

2. Make sure you have at least 65GB of hard disk available for
   installation.  We do not recommend installing the Submitty
   Developer VM on DropBox, OneDrive, GoogleDrive, or other cloud
   storage.

3. Some developers have had problems running both VirtualBox and
   VMWare on the same computer.  If you have problems, we suggest
   shutting down the VMWare VMs, or stopping the VMWare services, or
   uninstalling VMWare.

4. If you're running Windows, it is recommended to disable Hyper-V.
   Leaving it enabled will force VirtualBox to use the Hyper-V
   backend, which will be slower and can cause instability in the
   VM.
   
   **Note:**
   This may stop programs like Docker Desktop and WSL 2 from
   working. If these programs are essential to your workflow, consider
   looking up how to add a separate boot entry with "hypervisorlaunchtype"
   set to "off" for use with VirtualBox.
   
   **Note:**
   Installing WSL2 may also reconfigure your OS to use Hyper-V or Windows hypervisor 
   platform and prevent VirtualBox from working correctly. It is recommended to not install
   or use WSL2 alongside Virtualbox for now.

5. The complete installation process could take an hour or more.  Make
   sure your internet connection is strong and consistent.  You'll
   probably want to plug in your laptop power cord.  Check your
   computer settings and make sure the machine does not hibernate or
   go to sleep during installation.


---

## Submitty Developer VM Installation

1. Enable Virtualization

   **MacOS**
   1. Virtualization is generally enabled by default.

   **Windows 10**
   1. Open the **Settings** app by searching for it in the windows bar or clicking it in the Windows menu.

   2. Navigate to **Update and Security**, then select **Recovery** from the side menu.

   3. Under **Advanced Startup**, click **Restart Now**.

   4. Once your PC has rebooted, click the **Troubleshoot** option.

   5. Click **Advanced Options**.

   6. Click **UEFI Firmware Settings** and restart as suggested.

   7. Enter your **BIOS** (generally by pressing Del, F12, or other keys while booting). If you are not able to find the key combo needed to enter your BIOS, refer to [this guide](https://www.tomshardware.com/reviews/bios-keys-to-access-your-firmware,5732.html).

   8. Locate **Virtualization**, and enable it. (Note: If you cannot find the option to enable virtualization, [search Google](http://tinyurl.com/enable-virtualization) for a tutorial on enabling it with your motherboard.)

   9. Reboot your computer.

   **Ubuntu**
   1. Enter your **BIOS** (generally by pressing Del, F12, or other keys while booting).

   2. Navigate the **BIOS Settings**.

   3. Locate **Virtualization** and enable it.

   4. Be sure to choose **Hardware Virtualization** in the **System -> Acceleration** settings of the virtual machine you are using.

   **NOTE** 
   If using secure boot, vagrant may fail to work with VirtualBox. You will then either need to disable secure boot from
   the boot menu/BIOS or follow [these steps](https://era86.github.io/2018/01/24/vagrant-virtualbox-secureboot-in-ubuntu-1604.html)
   to self-sign the necessary packages to run vagrant and VirtualBox.

2. Download and install the latest version of [Ruby](https://www.ruby-lang.org/en/downloads).

3. Download and install the latest version of [Git](https://git-scm.com/downloads).

4. Download and install [VirtualBox](https://www.virtualbox.org/) and [Vagrant](https://www.vagrantup.com)

   Below are quick steps to get everything installed and running.

   **Windows 10**

   * You can just go to the respective sites and download the necessary binaries.

   **MacOS**

   * You can either go to respective sites and download the necessary binaries or
     install [homebrew](http://brew.sh/)    if you don't have it and then run:

     ```
     brew install --cask virtualbox
     brew install --cask vagrant
     ```

   **Ubuntu/Debian**

   * The Ubuntu repository does not contain the latest version of Vagrant or VirtualBox and using
     them may not work nor are they supported. We recommend that you either download the necessary binaries
     from their respective steps or follow the steps outlined below for each:

     VirtualBox: <https://www.virtualbox.org/wiki/Linux_Downloads>

     Vagrant: <https://vagrant-deb.linestarve.com/>

5. Clone [the Submitty repository](https://github.com/Submitty/Submitty) to a location on
   your computer (the "host").

   ```
   git clone https://github.com/Submitty/Submitty.git
   ```
   
   **NOTE:** If you are not currently part of the Submitty organization on Github, you may want to
   [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
   the repo and use the git url from your fork instead, especially if you are looking to contribute.

   _OPTIONAL: If you will be developing code in one of the companion
   Submitty repositories (e.g., AnalysisTools, Lichen, RainbowGrades, Tutorial), also
   clone those repositories to the same directory.  For example:_

     ```
     home
     └── myusername
         └── Submitty
             └── GIT_CHECKOUT
                 ├── AnalysisTools  (optional)
                 ├── Lichen         (optional)
                 ├── RainbowGrades  (optional)
                 ├── Submitty
                 └── Tutorial       (optional)
     ```

    _This host directory structure will be shared / synced between
    your host operating system and the Submitty virtual machine._

6. Navigate into the Submitty repository on your computer in a
   shell/terminal and type:

   _Windows should run CMD or powershell on administrator mode_

   ```
   vagrant up
   ```

   Vagrant will build your VM.  This will take maybe 30 minutes to a
   few hours depending on your Internet connection speed.  When this
   command finishes, your VM is ready to use.

7. When the `vagrant up` command completes successfully, you will be
   able to access the Submitty website (instructions follow in the
   next section).

   The VM will continue to run jobs in the background and consume a
   nontrivial amount of CPU resources, while completing a backlog of
   autograding for a dozen or more sample submissions for each of the
   more than 100 users in the sample courses.

   On MacOS and linux, if your development work *will not require sample assignment
   submissions or autograding results*, you may prepend
   `NO_SUBMISSIONS=1` to the previous command, which will skip the
   creation of these sample submissions and their autograding and
   decrease the time to complete installation.

   ```
   NO_SUBMISSIONS=1 vagrant up
   ```

   On Windows, you will have to first set the environment variable `NO_SUBMISSIONS` to 1
   which lasts for the session of that console, then call vagrant up.
   
   ```
   SET NO_SUBMISSIONS=1
   vagrant up
   ```

   If you want to unset the variable later, you can do
   ```
   SET NO_SUBMISSIONS=
   ```

   Similarly, you can check that the variable is set by doing
   ```
   SET NO_SUBMISSIONS
   ```

---

## Using your Submitty Developer VM


1. When the VM is "up", you can go visit the homework submission
   website.

   * From a web browser (Chrome, Firefox, IE, etc.) on your host
     computer, go to:

     <http://localhost:1511/index.php>

     (see the VM login & password info below)

   * You can test the submission, autograding, and viewing of the
     grades details by uploading sample submissions from the Submitty
     repository, located in one of these these directories:

     For the "tutorial" course:  
     <https://github.com/Submitty/Tutorial/tree/main/examples>

     For the "sample" course:  
     <https://github.com/Submitty/Submitty/tree/master/more_autograding_examples>

2. When the VM is "up", you can connect from your host computer to the
    virtual machine via ssh.  Windows users will need to install SSH
    software (e.g.,
    [WSL](https://ubuntu.com/wsl), or
    [Cygwin](https://www.cygwin.com/), or
    [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) ).
    From a terminal in the repository directory type:

    ```sh
    vagrant ssh
    ```

    You will connect to the VM as the `root` user.

    If `vagrant ssh` asks for a password for the root@127.0.0.1 user and "vagrant" without the quotation marks does not work, look at the vagrant ssh config file and make note of the hostname and port.

    ```sh
    vagrant ssh-config
    ```

    Then directly ssh into the VM by

    ```sh
    ssh vagrant@hostname -p port
    ```

    If it asks for password, it should be "vagrant"
    and then 

    ```sh
    sudo su
    ```

    to login as the root user. You should then see you are logged in as root@vagrant.

3. The following users exist on the VM:

    | user | password | role |
    |------|----------|-------|
    | vagrant | vagrant | OS user |
    | root | vagrant | OS user |
    | submitty_cgi | submitty_cgi | Submitty process |
    | submitty_php | submitty_php | Submitty process |
    | submitty_daemon | submitty_daemon | Submitty process |
    | postgres | postgres | database process |
    | instructor | instructor | Submitty user |
    | ta | ta | Submitty user |
    | student | student | Submitty user |

4. The VM has the following four courses by default and they are all part of the current semester:

    * tutorial
    * sample
    * development
    * blank

    *Note: The current semester is calculated by either using an `s` if in the month is < 7 else use `f`
    and then take the last two digits of the current year. So April 2017 would be `s17` while September
    2017 would be `f17`.*


---

## Starting and Stopping the Submitty VM


1. When you take a break from Submitty development work, you can
   suspend the Submitty VM to to save resources (CPU and battery) on
   your host machine.

   ```
   vagrant suspend
   ```

   Alternatively, you can halt the virtual machine.  This is a more
   complete shutdown and will take slightly longer to restart when you
   resume development work.

   ```
   vagrant halt
   ```

2. To resume work on a VM that is suspended or halted:

   ```
   vagrant up
   ```

   NOTE: when resuming work, you may see this warning several times,
   `default: Warning: Remote connection disconnect. Retrying..  .`
   These warnings are not harmful and can be ignored.

3. If you just want to restart the VM (same as `halt` then `up`), type:

   ```
   vagrant reload
   ```

4. Read the [Development Instructions](/developer/development_instructions) page
   for instructions on updating an existing installation with recent
   code changes.

5. To completely delete the virtual machine, type:

   ```
   vagrant destroy
   ```

   And if desired (to start over from scratch with a fresh VM):

   ```
   vagrant up
   ```

---

## Installation Troubleshooting

* If an error is thrown during `vagrant up`, you may need to
   uninstall Virtual Box and all virtual machines by typing the
   following commands:

   _CAUTION: This should only be done if you do not have any other virtual machines._

   To remove Virtual Box type:

   ```
   sudo apt-get remove --purge virtualbox
   ```
   To remove all virtual machines and configuration files type:

   ```
   sudo rm ~/"VirtualBox VMs" -Rf
   sudo rm ~/.config/VirtualBox/ -Rf
   ```
   This will delete all virtual machine settings. Then install
   the latest version of Virtual Box and vagrant from the links given in step 3 (using Ubuntu Software).

* If it has been a while since your last `vagrant destroy` and
    `vagrant up` you may need to update/upgrade/reinstall the virtual
    box, vagrant, and the installed boxes on your
    system:

    For example, on Mac:

    ```
    brew reinstall --cask virtualbox
    brew reinstall --cask vagrant
    vagrant plugin update
    vagrant box update
    ```

    If you continue to have errors on Mac with `vagrant up` after
    reinstalling virtualbox and vagrant, check "System Preferences" ->
    "Security & Privacy".  You may need to approve/reapprove
    "Allow apps download from".  You may also need to restart your computer.

    Similar instructions for other OS.

* See also [Development Instructions Troubleshooting](/developer/development_instructions/troubleshooting)

---

## Testing with a remote device

1. Make sure that the VM is stopped.

    ```
    vagrant halt
    ```

2. In the `Vagrantfile`, add a new port under `config.vm.define` for the primary box below the other forwarded ports (site, websockets, database).

   ```
   ubuntu.vm.network 'forwarded_port', guest: 22, host: <port>, id: "ssh", host_ip: "0.0.0.0"
   ```

   Replace `<port>` with the port you want to expose externally on the machine that is running the VM, and expose the specified port on the machine if necessary.

3. Start the vagrant machine with `vagrant up`.

4. Retrieve the private key for the vagrant machine, located at `<SUBMITTY GIT REPO>/.vagrant/machines/<VM>/<VM BACKEND>/private_key`.

   At the time of writing, `<VM>` is `ubuntu-20.04`, and `<VM BACKEND>` is `virtualbox`.

5. Use SSH to connect from the remote device to the machine that is running the VM, and use SSH port forwarding (local forwarding) to forward the necessary ports.

   The username to sign in is `root` and the authentication method is with private key (using the private key specified in part 4). If you encounter authentication issues, try adding `vagrant` as the password in addition to the private key.

   For most things, you will only need to forward the `site` port and the `websockets` port (1511, 8443).

   The configuration to set up the connection will differ based on your client; below is an example for if you're using an SSH binary to connect, assuming that the SSH configuration file has the username, private key (identity file), IP address (host name), and port stored.

   ```
   ssh -L 1511:localhost:1511 -L 8443:localhost:8443 $SUBMITTY_HOST
   ```

   where `$SUBMITTY_HOST` is a reference to the `Host` from the SSH config file.

   **NOTE**
   Especially for mobile operating systems, make sure that your SSH client supports SSH port forwarding. On iOS, you will also have to enable location tracking for the client to keep the connection alive in the background.

   This has been tested with Blink for iOS and Termius for iOS (also available on Android, untested).

6. Navigate to `localhost:1511` on the remote device.
