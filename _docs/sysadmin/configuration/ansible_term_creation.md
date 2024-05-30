---
title: Term Creation using Ansible
category: System Administrator > Configuration & Administration
redirect_from:
  - /sysadmin/ansible_term_creation
---

# Term Creation using Ansible

Ansible is a powerful automation tool that can be used to manage configurations and automate the term creation process in Submitty.

## Prerequisites

Before you begin, ensure that you have installed Ansible on your machine. If not, you can install it using the following command:

```bash
sudo apt-get install ansible
```

## Steps to Create a Term
1. Navigate to the `ansible directory` in your Submitty installation:

```
cd /.setup/asnible
```

2. There is a playbook available named submitty_course_creation.yml. This playbook contains the necessary roles to create a new term in Submitty. You can edit this file to specify the details of the term you want to create.

3. Run the playbook using the following command:

```
ansible-playbook -i inventory/submitty playbooks/submitty_course_creation.yml
```

This command will start the term creation process. Ansible will display the progress in the terminal.

4. Once the process is complete, your new term should be available in Submitty.

** Remember, the `submitty_course_creation.yml` playbook can be customized to suit your needs. You can specify different parameters for the term such as the term name, start date, end date, etc.