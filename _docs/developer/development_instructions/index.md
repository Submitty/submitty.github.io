---
title: Overview
category: Developer > Development Instructions
redirect_from:
  - /developer/development_instructions
  - /developer/development_instructions/index
---

We recommend that you do all file edits within your checkout of the
Submitty GIT repository on your local / host machine.  This is a
shared directory between the host machine and the virtual machine, so
you can use your favorite code/text editor on your local machine.

The different stages of the installation and build process copy files
from the repository to the installation directories, substitute
variables, compile libraries, and change permissions.  Depending on
the type of software change, you will need to do different levels of
re-installation to test those changes.  The instructions below apply
to changes you have made within your local Submitty checkout
(including pulling new code from GitHub or switching to another
branch).

_NOTE: Depending on the types of changes you have made, the complexity of the
reinstallation will vary (and thus also the time necessary to complete
the installation).  This page is organized with the simplest and least
expensive reinstallation steps at the top of the page, and the more
complicated and expensive steps at the bottom of the page._

Please also see [Installation Version Notes](/sysadmin/installation/version_notes)

Please also see [Re-Installation Troubleshooting](/developer/troubleshooting/reinstallation_troubleshooting)

---

## Submitty Help - List of Shortcuts

* All of the commands below should be typed into the Vagrant VM
  terminal.  That is, after you have completed the
  [vagrant setup instructions](/developer/vm_install_using_vagrant)
  and typed:

  ```
  vagrant ssh
  ```


* To see the available command shortcuts/aliases, from the Vagrant VM
  terminal you can type:

  ```
  submitty_help
  ```

---

## Website and Bin Script Changes

* If you have only made minor or modest visual changes to website
  (e.g., the html, css, twig, or php files), other files in the `site`
  folder, or translation files in the Localization repository, you can
  apply those changes by running this shortcut:

  ```
  submitty_install_site
  ```

  Which is equivalent to running this full command:

  ```
  sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY_HELPER_SITE.sh
  ```

* Similarly, other minor or modest changes to the `bin` and/or `sbin`
  directories can be applied with this shortcut:

  ```
  submitty_install_bin
  ```
     
  Which is equivalent to running this full command:

  ```
  sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY_HELPER_BIN.sh
  ```

---

## Incremental Development Updates

When _incrementally_ editing code in the `site`, `bin`, or `sbin`
directories, you can enable the Submitty development *code watcher* to
automatically detect and automatically update those files on your
installation through the scripts described above.  The code watcher is
convenient for testing changes to the website appearance (e.g., simple
edits to CSS or twig/html/php).  Once the update finishes, you should
be able to reload the website and see the update.

* To enable the code watcher, run this shortcut from the vagrant terminal:

  ```
  submitty_code_watcher
  ```
  
  Which is equivalent to running this full command:
  
  ```
  sudo python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/bin/code_watcher.py
  ```
  
  Or instead, you may run this command from your host computer:

  ```
  vagrant ssh -c "python3 /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/bin/code_watcher.py"
  ```

  Leave this terminal open after starting the code watcher.  Each time
  you save a file, text output from the installation process will
  scroll in this terminal.  Press Control C in this terminal to
  disable / stop the code watcher.


* Alternately, many of our developers like the efficiency of the
  PhpStorm IDE (integrated development environment) for incremental
  editing and development of website files.

  See also: [PhpStorm configuration instructions](/developer/getting_started/phpstorm)


### Clearing Your Browser Cache


* If the JavaScript files have changed and there are errors or you do not see the
  changes then you may need to clear your browser's cache.

  **For Chrome:** Choose the menu button, then "More tools", then "Clear browsing data"

  **For Firefox:** Choose the menu button, then "Options", then "Advanced" in the
  "Network" tab under "Cached Web Content" click "Clear Now"

  **For Microsoft Edge:** Choose the Hub icon then the History icon, then "Clear all history"

* If the Twig files which are being cached by the browser or/and there
  are errors then you may again need to clear your browser's cache
  or/and cookies. [To make sure your actions don't affect other site,
  you can clear cache from the past hour].



---

## Update _ALL_ Submitty Software

If you have made changes to the autograding pipeline or other more
significant changes to Submitty infrastructure, it may be necessary to
re-compile source code, apply database changes, update third-party
libraries, and restart daemon processes.

Similarly, if you are upgrading your current working branch with
multiple pull requests from the `main` Submitty branch, or if you are
reviewing and testing the pull request from another developer that may
include more significant Submitty source code changes, it will likely
be necessary to conduct a more complete update and reset re-set of all
of the Submitty source code.




* In these cases, run this shortcut in the vagrant terminal:

   ```
   submitty_install
   ```

   Which is equivalent to running this full command:

   ```
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
   ```

   _NOTE: This command uses rsync and should run reasonably fast (1-2
   minutes) since it's only copying and rebuilding what has changed._


* If recent changes have moved/renamed/deleted files, it's good to do
   a `clean` install of the Submitty source code, which deletes and
   then re-copies these source code directories:

   ```
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh clean
   ```


Note: The above commands will also apply any necessary system and
database [Migrations](/developer/development_instructions/migrations).


### Autograding Development

In addition to the `submitty_install` command above, if you modify an
autograding configuration, you'll probably need to:

* [Rebuild Gradeables](/instructor/assignment_preparation/index#builddebug-all-grading-configurations) using those configurations, and also

* [Batch Regrade Homeworks](/instructor/batch_regrade_submissions) already submitted to those gradeables.

---


## Virtual Machine Recovery using Snapshots

In the event of a non-recoverable error while working on Submitty the last resort is to, perform a fresh `vagrant up`. However, this process can be time-consuming. To avoid such situations and save time, it is highly recommended to take a snapshot when you first set up your Vagrant environment by following the tutorial links provided below:

* [Virtual Box](https://www.youtube.com/watch?v=Kl-Qc6N9znw)

* [VMWare](https://www.youtube.com/watch?v=DQutP_-2j3g)

* [Vagrant](https://developer.hashicorp.com/vagrant/docs/cli/snapshot)

By taking a snapshot at this initial stage, you can later revert to this saved state if needed, ensuring a quick recovery. Once you have restored the snapshot, you can then proceed with the following steps:

1. Launch the virtual machine using `vagrant up`.
2. Access the virtual machine with `vagrant ssh`.
3. Run `submitty_install` command to conduct a more complete update and reset of all of the Submitty source code.

