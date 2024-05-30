---
title: Course Creation
category: System Administrator > Configuration & Administration
redirect_from:
  - /sysadmin/ansible_course_creation
---

# Course Creation using Ansible

Ansible is a powerful automation tool that can be used to manage configurations and automate the course creation process in Submitty.

## Prerequisites

Before you begin, ensure that you have installed Ansible on your machine. If not, you can install it using the following command:

```bash
sudo apt-get install ansible
```

## Steps to Create a Course

1. Navigate to the ansible directory in your Submitty installation:

    ```
    cd /.setup/ansible
    ```

2. There is a playbook available named create_course.yml. This playbook contains the necessary tasks to create a new course in Submitty. You can edit this file to specify the details of the course you want to create.

3. Run the playbook using the following command:

    ```
    ansible-playbook -i inventory/submitty playbooks/create_course.yml
    ```

4. Once the process is complete, your new course should be available in Submitty.
