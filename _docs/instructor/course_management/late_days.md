---
category: Instructor > Course Management
title: Late Days
redirect_from:
  - /instructor/late_days
---


### Late Days Management

Use the "Late Days Allowed" option to change the number of late days
allowed per student.  These new late days may be used for any future
homeworks.  This is useful if you want to award late days as an
incentive.

Use the "Excused Absence Extensions" to grant an extension of a
specific number of days for a specific assignment.  This is useful
when the student has an excused absence.  These late days cannot be
used on other assignments.


### Late Day Usage Table

Late day usage for a particular student for a particular gradeable can
be viewed within the TA grading interface in the Student Information
panel in the Overall Late Day Usage Table.

![](/images/late_day_details.png)


### Late Day Terms

To calculate a student's late day usage we define the following terms:

* **Allowed Per Term** - How many late days a particular student is allotted per term. Each student is initially allotted a number of allowed late days equal to the number specified in Course Settings under Initial Allowed Late Days. 

 * **Changing Allowed per term** - An instructor may change the number of allowed late days for an individual student on the Late Days Allowed page. Changes to allowed late days go into effect starting on the date provided under Datestamp. Effective that date the student's allowed late days will be updated. Submissions before that date will not be affected. Datestamps may be for the past or future.

* **Allowed per assignment** - Outlines the maximum number of late days a student is allowed to use for a particular gradeable. This number is specified when creating an electronic gradeable.

* **Late days used** - Calculated by finding the ceiling of the difference between a student's submission time and a gradeable's due date.

* **Extensions** - Any additional late days a student may have been granted through Excused Absence Extensions for a particular gradeable.

* **Total late days used** -  The total number of late days a student has used due date of the current gradeable.


### Late days charged and total late day usage

To calculate how many late days a student will be charged for a particular gradeable and update the student's total late day usage we use the following pseudocode: 

```
late_days_used -= extensions  

if late_days_used > 0  
  late = true  
  status = Late  

if late_days_used > assignment_allowed  
  late = false  
  status = Bad  

if late_days_used > allowed_per_term - total_late_days_used  
  late = false  
  status = Bad  

if late  
  late_days_charged = min(0, late_days_used - extensions)  
  total_late_days_used += late_days_charged
```

_Note: A status of "Bad" will not charge the student any late
days. Instead, the grade of any gradeable with a status of Bad will be
changed to 0 in the grade summaries._


