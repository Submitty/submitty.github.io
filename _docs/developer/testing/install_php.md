---
title: Install PHP
---

In order to run the PHP Linter, Static Analysis, and PHPUnit tests locally 
you will need to have PHP installed on your host machine first.

### Linux & WSL:

*If you're distro cannot find the correct package or installs the wrong version you may have to specify php7.0 in each package name*

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

------------- 

Verify you have PHP installed correctly, submitty requires a version greater than 7.0

```bash
php -v
```
