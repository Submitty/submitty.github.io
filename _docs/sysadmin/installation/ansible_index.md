---
title: Installing with Ansible
category: System Administrator > Installation
redirect_from:
  - /developer/installation
---

These are the ansible install instructions that will help guide you to installing Submitty onto a server.

Getting Started:

**Note**: We assume that you're installing Submitty on a dedicated machine.

1. [Install Ubuntu 22.04 server edition (or other supported distro)](/sysadmin/installation/server_os)

   Note: If you are duplicating an existing Submitty installation onto a new server, you should
   synchronize `/etc/passwd`, `/etc/shadow`, `/etc/group`, and `/etc/gshadow` before installing
   the rest of Submitty to avoid mismatched UIDs and GIDs of the Submitty users.

2. Install Ansible:
   
   Installing ansible on your local environment is required. Below is a link for more help.

   https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html


3. Edit Inventory and Add Server IP:

   Replace 'submitty_ip' with your machine's IP address. This will give you access to the site on the server once the install process is completed successfully. 

4. Edit default playbook to match your server(ansible/playbooks/submitty_install.yml):

   Note: Your edits should match your dedicated machine (or VM) necessary requirements to properly install Submitty onto your machine. See `ansible/roles/app_submitty/defaults/main.yml` for default installation parameters. 

5. Configure SSL

   Secure Sockets Layer (SSL) is a protocol for establishing authenticated and encrypted links between networked computers. It's necessary for secure data transmission, such as user login credentials.

   To configure SSL for your Submitty installation, you'll need to obtain an SSL certificate. This can be from a Certificate Authority (CA) or a self-signed certificate if it's for development purposes.

   Once you have your certificate and key, place them in the appropriate directory (usually `/etc/ssl/certs/` for the certificate and `/etc/ssl/private/` for the key). 

   Then, update the `ansible/roles/app_submitty/defaults/main.yml` file with the paths to your certificate and key. The relevant lines might look something like this:

   ```yaml
   ssl_certificate: /etc/ssl/certs/mycert.pem
   ssl_certificate_key: /etc/ssl/private/mykey.pem
   ```

   Save your changes and proceed to run the Ansible script.

6. Run Ansible Script

   In the terminal, run the command:

   ```
   Ansible-playbook -i inventory/submitty playbooks/submitty_install.yml
   ```

This command initiates the Ansible playbook, which orchestrates the comprehensive installation process for Submitty. For a detailed understanding of the installation steps, refer to `ansible/roles/app_submitty/tasks/main.yml`.

7. Check Install Log

   Navigate to `/usr/local/submitty/install.log` on your machine(or VM) to see the output of the install process. 
   
8. Navigate to Web Server

   Navigate to your servers IP in a web browser. 
