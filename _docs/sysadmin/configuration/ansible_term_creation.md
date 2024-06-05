---
title: Term Creation using Ansible
category: System Administrator > Configuration & Administration
redirect_from:
  - /sysadmin/ansible_term_creation
---

# Term Creation using Ansible

Ansible is a powerful automation tool that can be used to manage configurations and automate the term creation process in Submitty.

## Prerequisites

This guide assumes that you are already following the Ansible installation guide for Submitty. If you have not yet installed Ansible or set up Submitty with Ansible, please refer to the [Ansible Installation Guide](sysadmin/installation/ansible.md) before proceeding with term creation.

## Steps to Create a Term

1. Navigate to the `ansible directory` in your Submitty installation:

    ```
    cd .setup/asnible
    ```

2. There is a playbook available named `submitty_course_creation.yml`. This playbook contains the necessary roles to create a new term in Submitty. You can edit this file to specify the details of the term you want to create.

    **Remember: The term should be an abbreviated semester name like: `s24` . THe start and end date must be formatted in mm/dd/yyyy format. 

3. Run the playbook using the following command:

    ```
    ansible-playbook -i inventory/submitty playbooks/submitty_course_creation.yml
    ```

    This command will start the term creation process. Ansible will display the progress in the terminal.

4. Once the process is complete, your new term should be available in Submitty.

    **For a more detailed step-by-step guide on creating a course, you can refer to the [Term Creation Documentation](term_creation.md). 

    **If you wish to understand the individual tasks that are performed during the course creation process, you can examine the tasks defined under the `submitty_term_creation` role. 