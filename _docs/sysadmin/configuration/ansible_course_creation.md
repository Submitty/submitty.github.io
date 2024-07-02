---
title: Course Creation using Ansible
category: System Administrator > Configuration & Administration
---

NOTE: This guide assumes that you have first created a Submitty server
using Ansible following the
[Installation using Ansible](/sysadmin/installation/ansible) instructions.

## Steps to Create a Course

1. Navigate to the ansible directory in your Submitty installation:

    ```
    cd .setup/ansible
    ```

2. There is a playbook available named `submitty_course_creation.yml`. This playbook contains the necessary roles to create a new course in Submitty. You can edit this file to specify the details of the course you want to create.

3. Run the playbook using the following command:

    ```
    ansible-playbook -i inventory/submitty playbooks/submitty_course_creation.yml
    ```

4. Once the process is complete, your new course should be available in Submitty.

    **For a more detailed step-by-step guide on creating a course, you
      can refer to the [Course Creation](course_creation)
      instructions.

    **If you wish to understand the individual tasks that are performed during the course creation process, you can examine the tasks defined under the `submitty_course_creation` role.

See also:  
[Ansible Term Creation](/sysadmin/configuration/ansible_term_creation)