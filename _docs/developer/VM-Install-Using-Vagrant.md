---
title: VM Install using Vagrant
category: Developer
order: 2
---

1. To develop with a Virtual Machine (VM), your computer should have
   at least 8GB of RAM and a 64-bit host OS.  AMD-V or Intel VT-x are
   also required (most computers have these).  Submitty is RAM and I/O
   intensive, so more RAM and a fast disk are better.


2. Enable [Virtualization](http://tinyurl.com/enable-virtualization)


3. Download and install [VirtualBox](https://www.virtualbox.org/), [Vagrant](https://www.vagrantup.com), and [vagrant-vbguest](https://github.com/dotless-de/vagrant-vbguest). 

    These versions and "host" operating system combinations have been tested and known to work for the project:

    | OS                    | VirtualBox Version | Vagrant Version | Notes  |
    |-----------------------|--------------------|-----------------|--------|
    | Windows 7 SP1         | 4.3.36             | 1.8.1           | |
    | Windows 10 Education  | 5.0.20             | 1.8.1           | |
    | Mac 10.9.5            | 4.3.36             | 1.8.1           | |
    | Mac 10.11.6           | 5.0.26             | 1.8.4           | |
    | ~~Mac 10.11.6~~       | ~~5.1.2~~          | ~~1.8.5~~       | Could not establish link to VM on vagrant (broken shared folder) |
    | ~~Fedora 22~~         | ~~4.3~~            | ~~1.7.2~~       | Didn't work, conflict with installed vmware? |

    Below are quick steps to get everything installed and running. You can just go to the respective sites and downloaded the necessary binary (which you must do for Windows).

    **Mac Installation**  
    Install [homebrew](http://brew.sh/) if you don't have it and then run:
    ```
    brew cask install virtualbox
    brew cask install vagrant
    sudo vagrant plugin install vagrant-vbguest
    ```
   
    **Ubuntu Installation**
    ```
    sudo apt-get install virtualbox
    sudo apt-get install vagrant
    sudo vagrant plugin install vagrant-vbguest
    ```

2. Clone [the Submitty repository](https://github.com/Submitty/Submitty) to a location on
   your computer (the "host").
    
   ```
   git clone https://github.com/Submitty/Submitty.git
   ```


3. Navigate to that directory on your computer in a shell/terminal and
   type:

   ```
   vagrant up
   ```

   Vagrant will build your VM.  This will take maybe 30 minutes to a
   few hours depending on your Internet connection speed.  When this
   command finishes, your VM is ready to use.


5. To stop and restart the VM:

   * When you are finished working, you can suspend the virtual
     machine (save state, a little faster to restart):

     ```
     vagrant suspend
     ```
     
     or halt the virtual machine (complete VM shutdown, a little
     slower to restart):

     ```
     vagrant halt
     ```
   
   * To resume work on a VM that is suspended or halted:

     ```
     vagrant up
     ```

   * If you just want to restart the VM (same as halt/up), type:
     ```
     vagrant reload
     ```

     If you haven't made any drastic changes to the build script, 
     you should be able to just re-provision the VM. You can do this by
     using the `--provision` flag with either `up` or  `reload`. This is 
     will be faster than doing a full `destroy`/`up`, however depending on
     the changes you've done to the VM, could leave it potentially unstable.
     If the VM breaks, simply `destroy`/`up` as normal.

     NOTE: when resuming work, you may see this warning several
     times, `default: Warning: Remote connection
     disconnect. Retrying..  .` These warnings are not harmful and can
     be ignored.

6. To completely delete the virtual machine (such as to start over from
   scratch with a fresh VM), type:

   ```
   vagrant destroy
   ```

   And if desired:

   ```
   vagrant up
   ```


7. When the VM is "up", you can go visit the homework submission
   website.
   
   * From a web browser (Chrome, Firefox, IE, etc.) on your host
     computer, go to:  
     <http://192.168.56.101/index.php?semester=s17&course=csci1100>  
     Edit the semester and course url variables to access other courses.

   * You can test the submission, autograding, and viewing of the
     grades details by uploading sample submissions from the Submitty
     repository, located in this directory:  
     <https://github.com/Submitty/Submitty/tree/master/sample_files/sample_submissions>

   * You will enter the TA grading website from grading links on the main navidation page.
     _NOTE:  Because TA grading is still through a separate top level URL, you will need to enter your
     password a 2nd time.  This will go away when we finish the move to a combined site.
     (this still gives the security warning above?)_

   * These URLS are configured:
     * <http://192.168.56.101> (submission)
     * <http://192.168.56.102> (cgi-bin scripts)
     * <http://192.168.56.104> (ta grading)
     * <https://192.168.56.103> (svn)


8. When the VM is "up", you can connect from your host computer to the
   virtual machine via ssh.  Windows users will need to install SSH
   software (e.g., Cygwin or Putty).  From a terminal in the
   repository directory type:

   ```
   vagrant ssh
   ```

   You will connect to the VM as user `vagrant` initially. 


9.  The following additional users exist on the VM:

    | user | password |
    |------|----------|
    | vagrant | vagrant |
    | root | vagrant |
    | hsdbu | hsdbu |
    | hwcgi | hwcgi |
    | hwphp | hwphp |
    | hwcron | hwcron |
    | instructor | instructor |
    | ta | ta |
    | developer | developer |
    | postgres | postgres |
    | student | student |


10. The VM has the following three courses by default and they are all part of semester `f16`:

    _FIXME:  This will change to "python course", "c++ course", "java course", etc._
    
    * csci1000
    * csci1100
    * csci1200
    * csci2600


11. Currently, there are four user accounts that can be used that have different permission levels within the system. Their password is the same as their username:
   
    * developer
    * instructor
    * ta
    * student

11. Things that currently need to be done manually on Vagrant VM:

    * Setup SVN for one of the courses
    * Add users to the grading database for the courses
    * Add additional students to both the submission and grading areas