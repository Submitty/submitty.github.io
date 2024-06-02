---
title: PhpStorm Setup Instructions
category: Developer > Getting Started > Advanced Setup
redirect_from:
  - /developer/phpstorm
---

Download at [https://www.jetbrains.com/phpstorm/](https://www.jetbrains.com/phpstorm/)

---

First clone the repository and set up Vagrant.
Once you have that finished, open PhpStorm and make a `New Project from Existing Files` using the repository root as your project.
When prompted to select your scenario, select _Source files are in a local directory, no Web server is yet configured._

## Configure a SFTP connection

Configuring a SFTP connection to your vagrant virtual machine allows PhpStorm to do thing like access the remote PHP
interpreter and deploy file changes automatically.
This step should be done first as this connection will be used in many of the later steps.

Open `Tools` > `Deployment...` > `Configuration`.
Press the `+` and add a server of type `SFTP`.
Give the server a name, like _Submitty Vagrant_.
Set the following parameters under the `Connection` tab:

- `SSH Connection`: create a new connection using `...` and then clicking on the `+`
  - `Host`: `127.0.0.1`
  - `Port`: `2222`
  - `User Name`: `root`
  - `Authentication Type`: `Key pair (OpenSSH or PuTTY)`
  - `Private Key File`: `<submitty repository root>/.vagrant/machines/ubuntu-22.04/virtualbox/private_key`
  - `Key Passphrase`: leave empty
- `Root Path`: `/usr/local/submitty`
- `Web server URL`: `http://localhost:1511/`

Under the `Mappings` tab, set the following:

- Press `Add Another Mapping`
- In the first mapping, set:
  - `Local Path`: `<submitty repository root>`
  - `Deployment Path`: `/`
  - `Web Path`: leave empty
- In the second mapping, set:
  - `Local Path`: `<submitty repository root>/site/public`
  - `Deployment Path`: `/site/public`
  - `Web Path`: `/`

## Running code from vagrant

This step will configure PhpStorm to use the PHP CLI that is configured inside your vagrant machine.
It is important to use this PHP installation as opposed to some other one as it ensures environment consistency among developers and production servers.

Under PhpStorm settings, open `PHP`. Press the `...` button next to `CLI Interpreter` and, on the left list of the interpreters window, press the `+` and select `From Docker, Vagrant, VM, Remote...`.
Select `Vagrant` from the list of radio buttons.
Then press `OK` to add the interpreter and `OK` to save the list of interpreters.

## Deploying updates automatically to vagrant

Open `Tools` > `Deployment...` > `Options`. Set `Upload changed files automatically to the default server` to `Always`. Press `OK` to save this.

## Enable PHP debugging using xdebug

Under PhpStorm settings, open `PHP` > `Debug`. In the pre-configuration steps, press `Validate` to open the configuration validator. Choose `Remote Web Server` and set the following:

- `Path to create validation script`: `<submitty repository root>/site/public`
- `Deployment Server`: Use the SFTP connection you set up in the first step

Press the `Validate` button to make sure the setup works.

At this point you may see an error message that says ```Specified URL is not reachable, caused by: 'Request failed with status code 404'```.  You may safely disregard this message.

Follow instructions 2 - 4 on [this website](https://confluence.jetbrains.com/display/PhpStorm/Zero-configuration+Web+Application+Debugging+with+Xdebug+and+PhpStorm) to prepare PhpStorm for debugging and add bookmarklets to enable xdebug from your browser.

## Connecting to the PostgreSQL database

Open a database window by going to `View` > `Tool Windows` > `Database`. Press the `+` button and under `Data Source` choose to add a `PostgreSQL` database. Then set the following:

- `Host`: `127.0.0.1`
- `Port`: `16442`
- `Database`: `submitty`
- `User`: `vagrant`
- `Password`: `vagrant`
- Check `Remember Password`

Press `Test Connection` to verify that it works. Press `OK` to confirm adding the database.

Next to the database name in the panel, there should be a label that says `1 of 6`. This is actually a button. Click it to see the other databases and turn on the check next to `submitty_s18_sample` to show that database in the list. Press the refresh arrows and some schemas should appear under `submitty_s18_sample`. Click the check next to the `public` schema to show it in the list.

Now you can browse the tables in the database window by expanding the tabs next to the `public` schema. Double click on any table to see and edit its contents.

## Running PHPUnit tests

Under PhpStorm settings, open `PHP` > `Test Frameworks`. Press the `+` button to add a testing configuration, using the `PHPUnit by Remote Interpreter` type. Choose the interpreter you configured in earlier steps. Then set:

- `PHPUnit Library`: `Use Composer autoloader`
- `Path to script`: `/usr/local/submitty/GIT_CHECKOUT/Submitty/site/vendor/autoloader.php`
- Hit the arrows button to confirm that it can find PHPUnit
- `Default Configuration File`: `/usr/local/submitty/GIT_CHECKOUT/Submitty/site/phpunit.xml`

Press `OK` to save the test configuration.

Then you need to add a run configuration for PHPUnit. Open `Run` > `Edit Configurations`. Press the `+` button and add a `PHPUnit` configuration. Set:

- `Test Scope`: `Defined in the configuration file`
- `Use alternative configuration file`: Unchecked

Press `OK` to save the test run configuration. You should be able to run it as normal (or even with coverage!) from the `Run` menu.

## Debugging JavaScript in PhpStorm

This one is not as guaranteed as the others. Make sure you have already ran the `Deploying updates to vagrant` steps.
Also, you need to use Google Chrome for this.

You'll need to install [the JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji) plugin for Chrome. Then, after navigating to the page with the JavaScript you want to debug, right click the extension and press `Inspect in PhpStorm`. If it decides to work, you'll see a banner in Chrome that says `"JetBrains IDE Support" is debugging this browser`. Note that closing the banner will disconnect the debugger so you'll have to leave it up.

Then, you should be able to set breakpoints in your JavaScript files in PhpStorm and debug them.

#### If that doesn't work

Alternatively, you can debug in Chrome by using a custom run configuration. Open `Run` > `Edit Configurations`. Press the `+` button and add a `JavaScript Debug` configuration. Set:

- `URL`: `http:/localhost:1511`
- `Browser`: `Chrome` (only option currently)
- `Ensure breakpoints are detected when loading scripts`: Leave unchecked unless you're debugging some code that runs on page load

In the `Remote URLs of local files (optional)` section, find `site/public` and give it a `Remote URL` of `http://localhost:1511`.

Press `OK` to save the run configuration. If you then `Debug` the configuration, it should open a new Chrome process and automatically start debugging, note that this Chrome will not have any of your user data / configuration / extensions. Note that if you `Run` the configuration you will not be able to debug JavaScript.

## Making debugging less annoying

During debugging, you may get decently upset at how often you step into magic methods and class loaders etc. There's an easy fix for this:

Under PhpStorm settings, open `PHP` > `Debug` > `Step Filters`. Check `Skip magic methods` and add the following to `Skipped Methods`:

- `app\views\AbstractView->__construct`
- `app\models\AbstractModel->convertName`
- `app\models\AbstractModel->__call`
- `app\libraries\Utils::startsWith`
- `app\models\AbstractModel->app\models\{closure}`

Add the following to `Skipped Files`:

- Hit the `...` and navigate to `site/vendor/composer/ClassLoader.php`
