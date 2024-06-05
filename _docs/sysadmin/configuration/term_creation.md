---
title: Term Creation
category: System Administrator > Configuration & Administration
redirect_from:
  - /sysadmin/course_creation
---

**Note**: If you are using Ansible for managing Submitty, 
you can follow these [instructions](/_docs/sysadmin/configuration/ansible_term_creation.md) to create a term using Ansible.

### Creating a term
To create a term, you should use the script 
```
/usr/local/submitty/sbin/create_term.sh
```
Follow these usage guidelines: 
```
Usage: create_term.sh  [-a|--amend] <term>  '<name of term>'  <start date>  <end date>
```

The term should be an abbreviated semester name like:
```
s24
```
While name of term would be a more descriptive name like "Spring 2024".

The start and end date must be formatted in mm/dd/yyyy format.

Use -a or --amend to amend an existing term.
An example valid usage of this command would be:

```
create_term.sh s24 'Spring 2024' 01/09/2024 05/01/2024
```
