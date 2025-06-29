---
title: Installation Troubleshooting
category: Developer > Development Troubleshooting
---


* If your install becomes stuck on ``SSH auth method: private key`` for more than three minutes,
   then what you can do is open Virtual Box, navigate to your VM, and click the green "Show" button.
   Having the VM's terminal GUI open can seem to keep it awake for communication. While developing on Submitty,
   this "Show" terminal option can sometimes lead to the VM being faster with loads, so it may be worth having the GUI
   open even after your vagrant up.
  * If the VM environment becomes stuck on any command for more than three minutes, opening the VM's terminal GUI may prompt it to continue. Keeping the terminal open is generally a good idea.

* If your install seems to randomly freeze during `vagrant up` 
with no explanation, then there are a couple of things that may be going wrong:

    *Note: If this happens, it may be worth running a simple `vagrant destroy` before you try to `vagrant up` again. It is possible to repair, but it is usually more effort than it is worth.*

    * First, check to make sure you have a solid internet connection. 
    Even if the connection is fast, it may experience drop-outs every 
    once in a while, so it is highly recommended to install it with a wired 
    connection to the internet.

    * Secondly, check to make sure your computer is not going to 
    sleep, this can be changed in settings for some systems, or you 
    can install a program to keep it awake (for example, amphetamine on Mac).

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
    vagrant plugin install vagrant-timezone
    ```

    If you continue to have errors on Mac with `vagrant up` after
    reinstalling virtualbox and vagrant, check "System Preferences" ->
    "Security & Privacy".  You may need to approve/reapprove
    "Allow apps download from".  You may also need to restart your computer.

    Similar instructions for other OS.

* If this error is thrown during `vagrant up` command:
   ```
   ubuntu-26.84: E: Failed to fetch http://us.archive.ubuntu.com/ubuntu/pool/main/g/gcc-9gcc-9_9.4.0-1ubuntu1-20.84.1_amd64.deb Connection fail [IP: 189.211.241.193]
   ```
   then you should use VPN to connect to the internet and then try `vagrant up`.This error usually occurs when you are outside the United States and the connection to the Ubuntu package repository is being blocked or restricted.

   __Note:__ The IP address provided in the error message may vary.
   ProtonVPN, which provides free VPN service can be used. You can download from their official website at (https://protonvpn.com). You can also use other VPN services.

---

## Forwarded Port Already in Use

* If you see an error similar to:

  ```
  Vagrant cannot forward the specified ports on this VM, since they
  would collide with some other application that is already listening
  on these ports. The forwarded port to #### is already in use
  on the host machine.
  ```

  This means that one or more of the ports requested by vagrant is already in
  use by another application running on your computer.


* This may happen if you attempt to create multiple Submitty VMs --
  perhaps unintentionally!  E.g., if you have multiple directories on
  your computer each with a clone/copy of the Submitty repo.  It is
  necessary to run `vagrant destroy` in each of these
  directories/repositories to clean up unwanted VMs.

  The following command can help locate misplaced repositories/VMs:
  ```
  vagrant global-status
  ```

  If you see unnecessary VMs, you can clean them up with (replace
  `1a2b3c4d` with the id of the VM you wish to destroy):
  ```
  vagrant destroy 1a2b3c4d
  ```

  If the command above does not successfully destroy and remove the VM from the
  global-status list, you may see an error similar to: `The machine
  with the name 'ubuntu-20.04' was not found configured for this
  Vagrant environment.`  You can try to clean up these undestroyed VMs record by
  running:
  ```
  vagrant global-status --prune
  ```

* If you might have old, forgotten VMs from previous OS versions
  hanging around it can be helpful to completely delete the `.vagrant`
  folder in your repository.  Also check to see if you have multiple
  clones or backups of the repository and thus multiple `.vagrant`
  folders on your machine.


* You can scan to see what processes on your machine are using the
  conflicting ports.  Depending on your operating system, try these
  commands:

  ```
  netstat -anvp tcp | awk 'NR<3 || /LISTEN/'
  ```

  ```
  lsof -i | grep LISTEN
  ```

  Then you can type `kill <pid>` with the `<pid>` of the process (if
  you confirm you don't need that process).  If you don't recognize
  the process using the port in question, search to figure out if you
  can or should disable it.  For example, on MacOS, the AirPlay
  Receiver in Control Center is using port 7000, so you may choose to
  turn that off.


* You can choose to override the default ports and use an alternate
  port through an environment variable. The current variables are
  `VM_PORT_SITE`, `VM_PORT_WS`, `VM_PORT_DB`, `VM_PORT_SAML`, and
  `VM_PORT_SSH`.

  For example, if the conflicting port is the default site port (1511),
  and you want to use port 1512 instead:
  ```
  VM_PORT_SITE=1512 vagrant up
  ```
  
  You can alternatively create a `.env` file in the root of your project
  with the text `VM_PORT_SITE=1512` (and any other variables separated by
  newlines). Note that you will need to install the env plugin beforehand:
  ```
  vagrant plugin install vagrant-env
  ```

---


## Host-Only / Static Networking

If you are having trouble being able to view the Submitty webpage after a ```vagrant up``` you might need to 
modify the interfaces in your VM. To fix this:

As root modify ```/etc/network/interfaces``` and add:

```
# The host-only network interface
auto eth1
iface eth1 inet static
address 192.168.56.101
netmask 255.255.255.0
network 192.168.56.0
broadcast 192.168.56.255
```

References and useful links: [https://gist.github.com/pjdietz/5768124](https://gist.github.com/pjdietz/5768124) and [http://christophermaier.name/2010/09/01/host-only-networking-with-virtualbox/](http://christophermaier.name/2010/09/01/host-only-networking-with-virtualbox/)

---

## SSH connection was unexpectedly closed

* If you see an error similar to on ARM64 Machine (Apple Silicon):

  ```
  The SSH connection was unexpectedly closed by the remote end. This
  usually indicates that SSH within the guest machine was unable to
  properly start up. Please boot the VM in GUI mode to check whether
  it is booting properly.
  ```

  This error message is indicating that there may be a problem with the SSH service on the VM, and you should check the VM's graphical interface to troubleshoot and ensure that it is starting up correctly.


#### Try the following steps:

* Reinstalls Vagrant using Homebrew
  ```
  brew reinstall --cask vagrant
  ```

* Updates the Vagrant plugins to the latest versions
  ```
  vagrant plugin update
  ```
  
* Updates the Vagrant box to the latest version
  ```
  vagrant box update
  ```

* Verify qemu is install correctly

  * Firstly, use this command will display the installed version of QEMU for ARM64. 
    ```
    qemu-system-aarch64 --version
    ```
      
  * Secondly, Verify that the QEMU binary for ARM64 is accessible in your system's PATH by running:
    ```
    which qemu-system-aarch64
    ```

    *Note: This command will display the path to the QEMU ARM64 binary (e.g., /opt/homebrew/bin/qemu-system-aarch64)

* Verify Vagrant Installation
  ```
  vagrant --version
  ```

* Verify Path: if Vagrant is installed but the command is not recognized, it might be due to the PATH variable not including the directory where Vagrant is installed. 
  ```
  echo $PATH
  ```

    * If Vagrant's directory is not in your PATH, you can add it temporarily for the current session by running:

      ```
      export PATH="/path/to/vagrant/directory:$PATH"
      ```
    * You should replace `/path/to/vagrant/directory` with the actual path where Vagrant is installed
    * You can find the path by runing command `which vagrant` or `where vagrant`
    * For example, if Vagrant is installed in `/usr/local/bin/vagrant`, the export command would look like this:`export PATH="/usr/local/bin:$PATH"`

* Removes the `.vagrant` folder, which stores Vagrant environment settings and state. This step effectively resets the Vagrant environment.
  ```
  rm -r .vagrant
  ```

* Destroys the Vagrant environment, shutting down and removing the associated VM instance
  ```
  vagrant destroy
  ```

* Boots up a new Vagrant environment using the QEMU provider
  ```
  vagrant up --provider=qemu
  ```

---

## Guest Additions


Submitty vagrant no longer uses Virtual Box Guest Additions.  If you
see errors about version mismatch with Guest Additions, and if the VM
hangs trying to update the version of Guest Additions to match the
host version of Guest Additions, you may have old versions of the
development process on your machine and may need to more completely
uninstall and reinstall Virtual Box and Vagrant to reset your system.

**NOTE: THESE ACTIONS WILL DELETE ALL VMS ON YOUR SYSTEM.**

Some things to check:

* From your main Submitty repository, e.g. `<SOMETHING>/GIT_CHECKOUT/Submitty/`
  run `rm -rf .vagrant`

  (you may need to put sudo in front)

* Check all files on your filesystem for vagrant.  Run 'locate
  vagrant' and remove any old library / installation files you see.
  E.g.:

  ```
  rm /Applications/VirtualBox.app/Contents/MacOS/VBoxGuestAdditions.iso
  rm -rf /opt/vagrant/
  rm -rf /Users/MY_HOME_DIRECTORY/.vagrant.d/
  rm -rf /Users/MY_HOME_DIRECTORY/.gem/specs/rubygems.org%443/quick/Marshal.4.8/vagrant-vbguest-0.31.0.gemspec
  ```
