---
title: Overview
category: System Administrator > Installation
redirect_from:
  - /developer/installation
---

These instructions will help guide you to installing Submitty onto a
server (whether on a dedicated machine or a VM).

**Note**: We assume that you're installing Submitty on a dedicated machine.

1. [Install Ubuntu 22.04 server edition (or other supported distro)](/sysadmin/installation/server_os)

   Note: If you are duplicating an existing Submitty installation onto a new server, you should
   synchronize `/etc/passwd`, `/etc/shadow`, `/etc/group`, and `/etc/gshadow` before installing
   the rest of Submitty to avoid mismatched UIDs and GIDs of the Submitty users.

2. [Edit default playbook to match your server](ansible/playbooks/submitty_install.yml)

   Note: Your edits should match your dedicated machine (or VM) necessary requirements to properly install Submitty onto your machine. This will ensure the install script can run without failure. See ansible/roles/app_submitty/defaults/main.yml for example. 

3. []




