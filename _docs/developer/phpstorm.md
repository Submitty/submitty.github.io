---
title: PhpStorm Setup Instructions
category: Developer
order: 19
---

Download at [https://www.jetbrains.com/phpstorm/](https://www.jetbrains.com/phpstorm/)

---


First clone the repository and set up Vagrant. Once you have that finished, open PhpStorm and make a `New Project from Existing Files` using the repository root as your project.

## Running code from vagrant

Add a PHP CLI Interpreter using vagrant:

Under PhpStorm settings, open `Languages & Frameworks` > `PHP`. Press the `...` button next to `CLI Interpreter` and, on the left list of the interpreters window, press the `+` and select `From Docker, Vagrant, VM, Remote...`. Select `Vagrant` with the `Machine Name` of `ubuntu`. Then press `OK` to add the interpreter and `OK` to save the list of interpreters.

After that, press the `...` button next to `Path Mappings`. Add a mapping from the `Local Path` of `<submitty repository root>/site` to `/usr/local/submitty/site` and press `OK` to save the mappings.

## Deploying updates to vagrant

Open `Tools` > `Deployment...` > `Configuration`. Press the `+` and add a server of type `SFTP`. Set the following parameters under the `Connection` tab:

- `SFTP Host`: `127.0.0.1`
- `Port`: `2222`
- `Root Path`: `/usr/local/submitty`
- `User Name`: `root`
- `Auth Type`: `Key pair (OpenSSH or PuTTY)`
- `Private Key File`: `<submitty repository root>/.vagrant/machines/ubuntu/virtualbox/private_key`
- `Key Passphrase`: leave empty

Under the `Mappings` tab, set the following:

- Press `Use this server as default`
- Press `Add Another Mapping`
- In the first mapping, set:
	- `Local Path`: `<submitty repository root>/site`
	- `Deployment Path`: `/site`
	- `Web Path`: leave empty
- In the second mapping, set:
	- `Local Path`: `<submitty repository root>/site/public`
	- `Deployment Path`: `/site/public`
	- `Web Path`: `/`

Press `OK` to save the configuration. Then, open `Tools` > `Deployment...` > `Options`. Set `Upload changed files automatically to the default server` to `Always`. Press `OK` to save this.


## Enable PHP debugging using xdebug

Under PhpStorm settings, open `Languages & Frameworks` > `PHP` > `Debug`. In the pre-configuration steps, press `Validate` to open the configuration validator. Choose `Remote Web Server` and set the following:

- `Path to create validation script`: `<submitty repository root>/site/public`
- `Deployment Server`: Use the Vagrant SFTP you set up in `Deploying updates to vagrant`

Press the `Validate` button to make sure the setup works.

Follow instructions 2 - 4 on [this website](https://confluence.jetbrains.com/display/PhpStorm/Zero-configuration+Web+Application+Debugging+with+Xdebug+and+PhpStorm) to prepare PhpStorm for debugging and add bookmarklets to enable xdebug from your browser.

## Connecting to the PostgreSQL database

Open a database window by going to `View` > `Tool Windows` > `Database`. Press the `+` button and under `Data Source` choose to add a `PostgreSQL` database. Then set the following:

- `Host`: `127.0.0.1`
- `Port`: `15432`
- `Database`: `submitty`
- `User`: `vagrant`
- `Password`: `vagrant`
- Check `Remember Password`

Press `Test Connection` to verify that it works. Press `OK` to confirm adding the database.

Next to the database name in the panel, there should be a label that says `1 of 6`. This is actually a button. Click it to see the other databases and turn on the check next to `submitty_s18_sample` to show that database in the list. Press the refresh arrows and some schemas should appear under `submitty_s18_sample`. Click the check next to the `public` schema to show it in the list.

Now you can browse the tables in the database window by expanding the tabs next to the `public` schema. Double click on any table to see and edit its contents.

## Running PHPUnit tests

Under PhpStorm settings, open `Languages & Frameworks` > `PHP` > `Test Frameworks`. Press the `+` button to add a testing configuration, using the `PHPUnit by Remote Interpreter` type. Choose the Vagrant interpreter you set up in `Running code from vagrant`. Then set:

- `PHPUnit Library`: `Use Composer autoloader`
- `Path to script`: `/usr/local/submitty/GIT_CHECKOUT/Submitty/site/vendor/autoloader.php`
- Hit the arrows button to confirm that it can find PHPUnit
- `Default Configuration File`: `/usr/local/submitty/GIT_CHECKOUT/Submitty/site/tests/phpunit.xml`

Press `OK` to save the test configuration.

Then you need to add a run configuration for PHPUnit. Open `Run` > `Edit Configurations`. Press the `+` button and add a `PHPUnit` configuration. Set:

- `Test Scope`: `Defined in the configuration file`
- `Use alternative configuration file`: Unchecked

Press `OK` to save the test run configuration. You should be able to run it as normal (or even with coverage!) from the `Run` menu.

## Debugging Javascript

This one is not as guaranteed as the others. Make sure you have already ran the `Deploying updates to vagrant` steps. Also, you need to use Google Chrome for this. 

You'll need to install [the JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji) plugin for Chrome. Then, after navigating to the page with the javascript you want to debug, right click the extension and press `Inspect in PhpStorm`. If it decides to work, you'll see a banner in Chrome that says `"JetBrains IDE Support" is debugging this browser`. Note that closing the banner will disconnect the debugger so you'll have to leave it up.

Then, you should be able to set breakpoints in your javascript files in PhpStorm and debug them.

### If that doesn't work

Alternatively, you can debug in Chrome by using a custom run configuration. Open `Run` > `Edit Configurations`. Press the `+` button and add a `JavaScript Debug` configuration. Set:
- `URL`: `http://192.168.56.101`
- `Browser`: `Chrome` (only option currently)
- `Ensure breakpoints are detected when loading scripts`: Leave unchecked unless you're debugging some code that runs on page load

In the `Remote URLs of local files (optional)` section, find `site/public` and give it a `Remote URL` of `http://192.168.56.101`.

Press `OK` to save the run configuration. If you then `Debug` the configuration, it should open a new Chrome process and automatically start debugging, note that this Chrome will not have any of your user data / configuration / extensions. Note that if you `Run` the configuration you will not be able to debug javascript.
