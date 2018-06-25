---
title: Server OS
category: System Administrator
order: 1
---


### Ubuntu 16.04 Server Edition


The Submitty Homework Submission Server is currently supported only on
**Ubuntu 16.04 64-bit Server**.  We are working towards support for Ubuntu
18.04.  _We use the server edition of Ubuntu because it saves a lot of disk
space and doesn't include a lot of extra packages which will require
more frequent updates.  You also have more options in some cases, and
you can always add a graphical display manager to it after the fact if needed._

After selecting your language, you can generally just select "Install
Ubuntu Server".  (If you find you have hardware compatibility issues,
you may need to look at the "Modes" or "Other Options".)

Unless you have an unusual keyboard, it is generally not worth having
it detect your keyboard layout and you can accept the defaults.



### Setting up networking

If you have more than one network interface, select the one you want
to be the primary interface for the host.

If you are using a static ip address rather than dhcp, you may want to
cancel the dhcp detections when they come up, or select "Go back" to
fix it.  It is also possible to edit it manually after installation is
complete.


### Partitioning the disk

If this is a standalone machine with no other information on the disk,
it is ok to let it unmount partitions that are not in use.  You may want to select
manual partitioning and set up more partitions to keep submissions
from filling up the root partition.

```
/     30G   (set as the primary partition and make it bootable)
swap  (1-2 times the amount of memory you have)
/usr  30G
/var  the rest of the space to hold the bulk of the submissions
```

Select "Finish partitioning and write changes to disk"


### Proxy

Unless you know otherwise, assume you are not using a proxy server.
(If you know you have one available, it may speed up the process
through caching if you have a lot of machines to set up that use the
same files).


### Updates

We suggest selecting "Install security updates automatically" to keep
the server as secure as possible.  If you have a lot of systems,
Landscape will let you administer a lot of machines through a central
interface for a fee.


### Selecting packages

It is fine to select "OpenSSH Server" from the menu, but do not have
it set up LAMP/Apache from the menu.  You will need more control over
the options and will do it later.

### Install git  

After the machine reboots, log in and install git:  

```
apt-get install git
```