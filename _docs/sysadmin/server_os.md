---
title: Server OS
category: System Administrator
permalink: /sysadmin
---

### Supported Distros

The Submitty Homework Submission Server is currently supported on
the following platforms:

| Distro | Version | Supported            | Release Page |
|--------|---------|----------------------|--------------|
| Ubuntu | 18.04   | Yes                  | [Release Page](http://releases.ubuntu.com/bionic/)
| Ubuntu | 16.04   | No  (Since 05/2019)  | [Release Page](http://releases.ubuntu.com/xenial/)
| Debian | 8       | No  (Since 05/2019)  | [Release Page](https://www.debian.org/releases/jessie/)

We suggest you using the amd64 releases for a release when
installing it. Support for other architectures should mostly
work, but are unsupported. We also suggest using the server
installation option if available to save on size of the image.

Note: We commit to supporting at least the latest LTS version of
Ubuntu. Additionally, after officially supporting that version,
we will drop support of the last LTS release after the end of the
next academic year from when we added support of the new LTS version.
For the other distros, we will attempt to support the latest version
before dropping support, but may drop support at anytime.

### Partitioning the disk

Assuming this is a standalone machine with no other information on the
disk, we recommend to manually partition the machine in such a way so
as to not allow submissions (which is the largest amount of data that
Submitty uses) from filling up the root partition.


```
/     30G   (set as the primary partition and make it bootable)
swap  (1-2 times the amount of memory you have)
/usr  30G
/var  the rest of the space to hold the bulk of the submissions
```
