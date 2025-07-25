---
title: Install PHP
category: Developer > Development Instructions > Continuous Integration Testing
---

In order to run the PHP Linter, Static Analysis, and PHPUnit tests locally 
you will need to have PHP installed on your host machine first.

### Linux & WSL:

*If you're distro cannot find the correct package or installs the wrong version you may have to specify php8.1 in each package name*

```bash
sudo apt-get update
sudo apt-get install -y php php-curl php-xml php-mbstring 
```
### MacOS

```bash
brew install php
```
If you are missing extensions you can install them with `PECL` which will be 
installed automatically with PHP, but you should have everything required by 
default.

### Windows

Download [php 8.1](https://windows.php.net/download/) as a zip file under the thread safe category. Then extract the contents of the zip to a folder, and add the path to that folder to your path system variable. It's suggested that one extracts the contents of the zip to a folder called `php`, which can be put at `C:\php` for simplicity. You can then add `C:\php` to your path system environment variable.

------------- 

Verify you have PHP installed correctly, submitty requires a version greater than 7.0

```bash
php -v
```
