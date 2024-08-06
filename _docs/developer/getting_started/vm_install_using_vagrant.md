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

***NOTE:** We only officially support and test development using VirtualBox for AMD and Intel machines and QEMU for M-Series ARM MacOS machines.*

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

   ***NOTE:**   This may stop programs like Docker Desktop and WSL 2 from
   working. If these programs are essential to your workflow, consider
   looking up how to add a separate boot entry with "hypervisorlaunchtype"
   set to "off" for use with VirtualBox.*

   ***NOTE:**   Installing WSL2 may also reconfigure your OS to use Hyper-V or Windows hypervisor
   platform and prevent VirtualBox from working correctly. It is recommended to not install
   or use WSL2 alongside Virtualbox for now.*

5. If you're on M-series ARM MacOS (e.g., M1, M2, M3), you will be using QEMU with SMB file sharing.
   To enable this, open **System Settings** and navigate to **General > Sharing**.
   Press the (i) button next to **File Sharing**, and in thse popup window
   click "Options...". Then turn on "Share files and folder using SMB" and
   check the box next to your name in the list below.

6. The complete installation process could take an hour or more and 
   will quite possibly fail if paused or interrupted.  Make
   sure your internet connection is strong and consistent.  You'll
   probably want to plug in your laptop power cord.  Check your
   computer settings and make sure the machine does not hibernate or
   go to sleep during installation.

---

## Submitty Developer VM Installation


1. ENABLE VIRTUALIZATION  
   *Follow the instructions below specific to your host operating system:*

   * **MacOS**  
     *Virtualization is generally enabled by default.*

   * **Windows 10**
      1. Open the **Settings** app by searching for it in the windows bar or clicking it in the Windows menu.
      2. Navigate to **Update and Security**, then select **Recovery** from the side menu.
      3. Under **Advanced Startup**, click **Restart Now**.
      4. Once your PC has rebooted, click the **Troubleshoot** option.
      5. Click **Advanced Options**.
      6. Click **UEFI Firmware Settings** and restart as suggested.
      7. Enter your **BIOS** (generally by pressing Del, F12, or other keys while booting).
         If you are not able to find the key combo needed to enter your BIOS,
         refer to [this guide](https://www.tomshardware.com/reviews/bios-keys-to-access-your-firmware,5732.html).
      8. Locate **Virtualization**, and enable it.
         (Note: Some motherboards may call it SVM, AMD-V, VT-x/Vanderpool.
         If you cannot find the option to enable virtualization,
         [search Google](http://tinyurl.com/enable-virtualization) for a tutorial on enabling it with your motherboard.) 
      9. Reboot your computer.

   * **Windows 11**
      1. Open **Change advanced start-up options** by searching for it in the search bar.
      2. Under **Advanced Startup**, click **Restart Now**.
      3. Once your PC has rebooted, click the **Troubleshoot** option.
      4. Click **Advanced Options**.
      5. Click **UEFI Firmware Settings** and restart as suggested.
      6. Locate **Virtualization**, and enable it.
         (Note: If you cannot find the option to enable virtualization,
         [search Google](http://tinyurl.com/enable-virtualization) for a tutorial on enabling it with your motherboard.)
      7. Reboot your computer.

   * **Ubuntu**
      1. Enter your **BIOS** (generally by pressing Del, F12, or other keys while booting).
      2. Navigate the **BIOS Settings**.
      3. Locate **Virtualization** and enable it. (Some motherboards may call it SVM, AMD-V, VT-x/Vanderpool)
      4. Be sure to choose **Hardware Virtualization** in the **System -> Acceleration**
         settings of the virtual machine you are using.  
      5. **NOTE:** If using secure boot, Vagrant may fail to work with VirtualBox.
         You will then either need to disable secure boot from the boot menu/BIOS or
         follow [these steps](https://era86.github.io/2018/01/24/vagrant-virtualbox-secureboot-in-ubuntu-1604.html)
         to self-sign the necessary packages to run Vagrant and VirtualBox.

2. DOWNLOAD AND INSTALL THE LATEST DEPENDENCIES

   * You will need:  
     *Follow the instructions below specific to your host operating system*
     
      * [Ruby](https://www.ruby-lang.org/en/downloads)  
      * [Git](https://git-scm.com/downloads)  
      * M-SERIES ARM MacOS: [QEMU](https://www.qemu.org)  
      * EVERYONE ELSE: [VirtualBox](https://www.virtualbox.org/wiki/Download_Old_Builds_6_1)  
      * [Vagrant](https://www.vagrantup.com)  
   
   
   * **MacOS**  
      You can either go to respective sites and download the necessary binaries or
      install [Homebrew](http://brew.sh/), if you don't have it, and then:

      If you have an M-series ARM Mac, run:
      ```
      brew install --cask vagrant
      brew install qemu
      vagrant plugin install vagrant-qemu
      ```
  
      Or if you have an older Intel-based Mac, run:

      ```
      brew install --cask vagrant
      brew install --cask virtualbox
      ```

   * **Windows**  
      *You can just go to the respective sites and download the necessary binaries.*


   * **Ubuntu/Debian**

      * The Ubuntu repository does not contain the latest version of
        Vagrant or VirtualBox and using them may not work nor are they
        supported. We recommend that you either download the necessary
        binaries from their respective steps or follow the steps
        outlined below for each:

        VirtualBox: <https://www.virtualbox.org/wiki/Linux_Downloads>

        Vagrant: <https://developer.hashicorp.com/vagrant/downloads>  
        (if that doesn't work, try: <https://vagrant-deb.linestarve.com/>)

   * **Fedora/Red Hat Linux**

      * For Fedora, the latest version of VirtualBox is recommended to
        prevent errors. Download the RPM from the VirtualBox
        website. Make sure your version of Fedora is up to date using
        ```
        sudo dnf update
        sudo dnf upgrade
        ```

        and inputting your password. Then install the Virtual Box rpm
        using:
        ```
        sudo dnf install VirtualBox-xxxxx.rpm
        ```

        Install Vagrant using:
        ```
        sudo dnf install vagrant
        ```

      * **Common errors when running vagrant up (Fedora/RHEL)**
      
        1. Missing virtnetworkd:  
           Enable it in your terminal by running:
           ```
           sudo systemctl start virtnetworkd
           ```
               
        2. If your vagrant ever freezes kill it with 
           ```
           VBoxManage controlvm VM_NAME poweroff
           ```
           or if that doesn't work, reboot the computer and then
           run `vagrant destroy` before re-running `vagrant up --provider=virtualbox` again.


4. CLONE THE [SUBMITTY REPOSITORY](https://github.com/Submitty/Submitty)

   * Clone it to a location on your computer (the "host").

     ```
     git clone https://github.com/Submitty/Submitty.git
     ```

     ***NOTE:** If you are not currently part of the Submitty organization on GitHub, you may want to
     [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
     the repo and use the git url from your fork instead, especially if you are looking to contribute.*


   * **OPTIONAL:** If you will be developing code in one of the companion
      Submitty repositories (e.g., AnalysisTools, Lichen,
      Localization, RainbowGrades, Tutorial), also clone those
      repositories to the same directory.  For example:

      ```
      home
      └── myusername
          └── Submitty
               └── GIT_CHECKOUT
                   ├── AnalysisTools  (optional)
                   ├── Lichen         (optional)
                   ├── Localization   (optional)
                   ├── RainbowGrades  (optional)
                   ├── Submitty
                   └── Tutorial       (optional)
      ```

      *This host directory structure will be shared / synced between
      your host operating system and the Submitty virtual machine.*


5. RUN VAGRANT

   
   * Navigate into the Submitty repository on your computer in a
     shell/terminal.   *On Windows, run CMD or PowerShell on administrator mode.*


   * **Build pre-packaged VM**

     *NOTE: The pre-packaged Submitty VM is not (yet)
     available for qemu / M-Series ARM Mac machines.*
 
     If you are using VirtualBox as your provider, you will by default
     use a pre-packaged Submitty VM.  This will have all of Submitty
     already setup.  This is a recently built machine,
     but it may be slightly older than the current
     [main branch on GitHub](https://github.com/Submitty/Submitty).
 
 
     To create the virtual machine from the pre-packaged image, run:
     ```
     vagrant up --provider=virtualbox
     ```
 
     If you wish to use a specific version of the pre-packaged Submitty VM, on Linux/MacOS type:
     ```
     PREBUILT_VERSION={version} vagrant up --provider=virtualbox
     ```
     
     or on Windows, type:
     ```
     SET PREBUILT_VERSION={version} 
     vagrant up --provider=virtualbox
     ```
     
     *The version must be only the numbers, not including the `v` in front, for example `24.05.00.2405260215` not `v24.05.00.2405260215`*
 
     *This process will take 10 minutes to maybe half an hour
     depending on your internet connection speed.*
 
 
     ***Note:** The vagrant up command creates and provisions the virtual machine on the first run.
     The `--provider` flag is important if you have more than one provider
     installed on your machine (e.g., VirtualBox, VMWare, QEMU, libvirt).
     For subsequent runs, you do not need to append the `--provider` flag as the VM is
     already created.*


   * **Build (from scratch) using QEMU on an M-Series Arm MacOS**

     If you have an M-series ARM Mac, run:
     ```
     vagrant up --provider=qemu
     ```
 
     *As noted above, you do not need to append the `--provider` flag on subsequent runs after the VM is already created.*


   * **Build from scratch**

     If you wish to run `vagrant up` from scratch, on Linux or Intel-based Mac type:
     ```
     FROM_SCRATCH=1 vagrant up --virtualbox
     ```
     
     Or on Windows with `cmd`, type: 
     ```
     SET FROM_SCRATCH=1
     vagrant up --virtualbox
     ```

     *As noted above, you do not need to append the `--provider` flag on subsequent runs after the VM is already created.*

     *This process will take anywhere from 30 minutes to a few hours
     depending on your internet speed.*


     ***ADDITIONAL NOTE:** When the `vagrant up` command completes
     successfully, you will be able to access the Submitty website
     (instructions follow in the next section).  The VM will continue
     to run jobs in the background and consume a nontrivial amount of
     CPU resources, while completing a backlog of autograding for a
     dozen or more sample submissions for each of the more than 100
     users in the sample courses.*


   * **Build from scratch without sample submissions**

     If your development work *will not require sample assignment
     submissions or autograding results*, you may prepend
     `NO_SUBMISSIONS=1` to the previous command, which will skip the
     creation of these sample submissions and their autograding and
     decrease the time to complete installation.

     * On Linux or Intel-based Mac:  
       ```
       NO_SUBMISSIONS=1 FROM_SCRATCH=1 vagrant up --provider=virtualbox
       ```

     * On M-series ARM Mac:
       ```
       NO_SUBMISSIONS=1 vagrant up --provider=qemu
       ```

     * On Windows using `cmd`:  
       ```
       SET NO_SUBMISSIONS=1
       SET FROM_SCRATCH=1
       vagrant up --provider=virtualbox
       ```

       On Windows using PowerShell, you will have to set the environment variables differently:  
       ```pwsh
       $Env:NO_SUBMISSIONS=1
       $Env:FROM_SCRATCH=1
       vagrant up
       ```

       If you want to unset the variables later in `cmd`, you can do:  
       ```
       SET NO_SUBMISSIONS=
       SET FROM_SCRATCH=
       ```

       Or in PowerShell:  
       ```pwsh
       Remove-Item Env:\NO_SUBMISSIONS
       Remove-Item Env:\FROM_SCRATCH
       ```

       Similarly, you can check that the variables are set in `cmd` with:  
       ```
       SET NO_SUBMISSIONS
       SET FROM_SCRATCH
       ```

       Or in PowerShell:  
       ```pwsh
       $Env:NO_SUBMISSIONS
       $Env:FROM_SCRATCH
       ```


7. AND YOU ARE DONE!

   When the installation has completed, you should see the message:
   ```
   #####################################################################

                        INSTALLATION SUCCESS!
   
                           .GGQGGGSlu
                         .GGGGGGGGGGGS
                    :llUGGGGGGGGGGGGGGGG
                    'GGGGGGGGGGGGGGGGGGb        .
                       %GGGGGGGGGGGGGGG~   ..GSGGG
                          GGGGGGGGGGGGGGSGGGGGGGGGG[
                        ;GGGGGGGGGGGGp\ \ \GGGGGGGGL
                       !GGGGGGGGGGGGGGS\ \ \GGGGGG
                       GGGGGGGGGGGGGGGGG\ \ \9GGGG
                       %GGGGGGGGGGGGGGGS/ / /.GGG
                        %GGGGGGGGGGGGGS/ / /GGG
                         '%NNNNNNNNNNNNNNNNNN
   #####################################################################
   ```

   ***Note:** There are times when the install will pause for a brief
    period with the message `Done`. This does not mean the install has
    ended, and the install should continue after a bit of time.*


   If you do not see this message due to an error or the installation
   has frozen, check out:  
   [Installation Troubleshooting](/developer/troubleshooting/installation_troubleshooting)

---

## Using your Submitty Developer VM


1. When the VM is "up", you can go visit the homework submission
   website.

   * From a web browser (Chrome, Firefox, IE, etc.) on your host
     computer, go to:

     <http://localhost:1511/index.php>

     (see the VM login & password info below)

   * You can test the submission, autograding, and viewing of the
     grade details by uploading sample submissions from the Submitty
     repository, located in one of these directories:

     - The ["tutorial" course](https://github.com/Submitty/Tutorial/tree/main/examples)

     - The ["sample" course](https://github.com/Submitty/Submitty/tree/master/more_autograding_examples)

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
    | superuser | superuser | Superuser |
    | vagrant | vagrant | OS user |
    | root | vagrant | OS user |
    | submitty_cgi | submitty_cgi | Submitty process |
    | submitty_php | submitty_php | Submitty process |
    | submitty_daemon | submitty_daemon | Submitty process |
    | postgres | postgres | database process |
    | instructor | instructor | Instructor submitty user |
    | ta | ta | Full access grader submitty user |
    | grader | grader | Limited access grader submitty user |
    | student | student | Student submitty user |

   Note that there are many more student and grader users on the VM; you may
   log in as any of them using their **User ID** as the username and password.
   The easiest way to see the list of users is to log in as an instructor, access
   a course, and click **Manage Students** or **Manage Graders**.

5. The VM has the following four courses by default and they are all part of the current semester:

    * tutorial
    * sample
    * development
    * blank

    **Note**: The current semester is calculated by either using an `s` if in the month is < 7 else use `f`
    and then take the last two digits of the current year. So April 2017 would be `s17` while September
    2017 would be `f17`.*


---

## Starting and Stopping the Submitty VM


1. When you take a break from Submitty development work, you can
   suspend the Submitty VM to save resources (CPU and battery) on
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

   Note: when resuming work, you may see this warning several times,
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

   At the time of writing, `<VM>` is `ubuntu-22.04`, and `<VM BACKEND>` is `virtualbox`.

5. Use SSH to connect from the remote device to the machine that is running the VM, and use SSH port forwarding (local forwarding) to forward the necessary ports.

   The username to sign in is `root` and the authentication method is with private key (using the private key specified in part 4). If you encounter authentication issues, try adding `vagrant` as the password in addition to the private key.

   For most things, you will only need to forward the `site` port and the `websockets` port (1511, 8443).

   The configuration to set up the connection will differ based on your client; below is an example for if you're using an SSH binary to connect, assuming that the SSH configuration file has the username, private key (identity file), IP address (host name), and port stored.

   ```
   ssh -L 1511:localhost:1511 -L 8443:localhost:8443 $SUBMITTY_HOST
   ```

   where `$SUBMITTY_HOST` is a reference to the `Host` from the SSH config file.

   **Note:**
   Especially for mobile operating systems, make sure that your SSH client supports SSH port forwarding. On iOS, you will also have to enable location tracking for the client to keep the connection alive in the background.

   This has been tested with Blink for iOS and Termius for iOS (also available on Android, untested).

6. Navigate to `localhost:1511` on the remote device.

---

## Developing in HTTPS

For *developers* who need to upgrade to HTTP/2 in their development environments,
please follow the step below:

- Run `bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/dev-upgrade-h2.sh up`.

   After a successful execution, please use `https://` instead of `http://`.

- To downgrade to HTTP/1.1, run `bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/dev-upgrade-h2.sh down`.

The script should automatically handle the upgrading and issuing a self-signed
certificate.  If your browser complains about the security, please head to
[WebSocket](/developer/developing_the_php_site/websocket).
