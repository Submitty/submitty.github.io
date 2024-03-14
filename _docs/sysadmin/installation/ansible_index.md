---
title: Installing with Ansible
category: System Administrator > Installation
redirect_from:
  - /developer/installation
---

These are the ansible install instructions that will help guide you to installing Submitty onto a
server.

Things you need before starting:
Need a machine with ansible - find link how to install ansible on any machine




**Note**: We assume that you're installing Submitty on a dedicated machine.

1. [Install Ubuntu 22.04 server edition (or other supported distro)](/sysadmin/installation/server_os)

   Note: If you are duplicating an existing Submitty installation onto a new server, you should
   synchronize `/etc/passwd`, `/etc/shadow`, `/etc/group`, and `/etc/gshadow` before installing
   the rest of Submitty to avoid mismatched UIDs and GIDs of the Submitty users.

2. Install Ansible:
   
   


2. Edit inventory and add server IP:

   Replace submitty_ip with your machine's IP address. This will give you access to the site on the server once the install process is completed successfully. 

3. Edit default playbook to match your server(ansible/playbooks/submitty_install.yml):

   Note: Your edits should match your dedicated machine (or VM) necessary requirements to properly install Submitty onto your machine. See `ansible/roles/app_submitty/defaults/main.yml` for default installation parameters. 



ssl

3. Run ansible script

   In the terminal, run the command:

   ```
   Ansible-playbook -i inventory/submitty playbooks/submitty_install.yml
   ```

   This ansible command will run the entire Submitty install process step by step. See `ansible/roles/app_submitty/tasks/main.yml` for more information on the Install process. 

4. Check Install Log

   Navigate to `/usr/local/submitty/install.log` on your machine(or VM) to see the output of the install process. 
   
access


THings you need
Clean ubuntu install
a machine that runs ansible (probably not the ubuntu vm)
need a machine that runs ansible and can connect 
