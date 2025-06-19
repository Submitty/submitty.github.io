---
title: Term Creation using Ansible
category: System Administrator > Configuration & Administration
---

NOTE: This guide assumes that you have first created a Submitty server
using Ansible following the
[Installation using Ansible](/sysadmin/installation/ansible) instructions.

## Steps to Create a Term

1. Navigate to the `ansible directory` in your Submitty installation:

    ```
    cd .setup/asnible
    ```

2. There is a playbook available named `submitty_course_creation.yml`. This playbook contains the necessary roles to create a new term in Submitty. You can edit this file to specify the details of the term you want to create.

    **Remember: The term should be an abbreviated semester name like: `s24` . The start and end date must be formatted in mm/dd/yyyy format. 

3. Run the playbook using the following command:

    ```
    ansible-playbook -i inventory/submitty playbooks/submitty_course_creation.yml
    ```

    This command will start the term creation process. Ansible will display the progress in the terminal.

4. Once the process is complete, your new term should be available in Submitty.

    **For a more detailed step-by-step guide on creating a course, you
      can refer to the [Term Creation](term_creation) instructions.

    **If you wish to understand the individual tasks that are performed during the course creation process, you can examine the tasks defined under the `submitty_term_creation` role.


See also:  
[Ansible Course Creation](/sysadmin/configuration/ansible_course_creation)