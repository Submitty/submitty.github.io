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

   An example has been given to you in the inventory file. Update localhost with your server ip address. This will allow access to your web interface. 

4. Edit playbook variables with your server properties(ansible/playbooks/submitty_install.yml):

   Note: Configure your playbook with your Submitty settings.  See `ansible/roles/app_submitty/defaults/main.yml` for default installation parameters. 

   **Important**: Any variables defined in the playbook will take precedence over the default values. This allows for fine-tuning and customization of your Submitty installation.

5. SSL COnfiguration

   Note: If you use SSL, follow steps to configure. If not, skip to step 6. 

   Secure Sockets Layer (SSL) is a protocol for establishing authenticated and encrypted links between networked computers. It's necessary for secure data transmission, such as user login credentials.

   To configure SSL for your Submitty installation, you'll need to obtain an SSL certificate. This can be from a Certificate Authority (CA) or a self-signed certificate if it's for development purposes.

   Once you have your certificate and key, place them in the appropriate directory (usually `/etc/ssl/certs/` for the certificate and `/etc/ssl/private/` for the key). 

   Then, update your server's SSL configuration file with the paths to your certificate and key. The relevant lines might look something like this:

   ```bash
   SSLCertificateFile /etc/ssl/certs/mycert.pem
   SSLCertificateKeyFile /etc/ssl/private/mykey.pem
   ```

   Save your changes and proceed to run the Ansible script.

6. Run Ansible Script

   To initiate the installation process, first navigate to the 'ansible' directory, then the install directory. You can execute the following command: 
   ```
   cd ansible
   ```
   
   Once you are in the `ansible` directory, you can proceed with the installation by running the Ansible playbook:

   ```
   ansible-playbook -i inventory/submitty playbooks/submitty_install.yml
   ```

This command initiates the Ansible playbook, which orchestrates the comprehensive installation process for Submitty. For a detailed understanding of the installation steps, refer to `ansible/roles/app_submitty/tasks/main.yml`.

7. Review Installation Log on VM

   Navigate to `/usr/local/submitty/install.log` on your machine(or VM) to see the output of the install process. 
   
8. Navigate to Web Interface

   Navigate to your domain name in a web browser. 
