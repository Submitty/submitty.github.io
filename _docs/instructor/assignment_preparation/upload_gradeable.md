---
category: Instructor > Assignment Preparation
title: Upload Gradeable
redirect_from:
  - /instructor/assignment_preparation/upload_gradeable
---
To create a gradeable by uploading a JSON file, click the "Upload Gradeable Json" file in the top right. 

Upload and submit the JSON file to the popup window. If the JSON file contains all of the correct information, you will be
redirected to the gradeable edit screen. 
## Variables
#### __Required__
* title -- Gradeable title 
* type -- "Checkpoints", "Numeric", or "Electronic File"
* id -- Gradeable ID (Must be unique)

#### Electronic File
__VCS__
* repository_type -- "submitty-hosted", "submitty-hosted-url", "public-github", "self-hosted", "private-github" (Required)
* vcs_path -- Path to VCS repositories (Can be URL, Required)
* vcs_subdirectory -- Path to files within the repository (Optional, leave out if not using subdirectories)

```json
"vcs": {
  "repository_type": "submitty-hosted",
  "vcs_path": "http://localhost:1511/path/to/repository",
  "vcs_subdirectory": "subdirectory"
}
```

__Other Electronic Types__
* bulk_upload -- If the TA will bilk upload assignments online (Default false)
* normal -- Do not include bulk_upload or vcs to have a normal student upload gradeable.

#### Other Variables

#### Team assignments
 * team_size_max: Maximum team size
 * inherit_from: Gradeable ID to inherit teams from (Default none)

```json
"team_gradeable": {
    "team_size_max": 3,
    "inherit_from": "gradeable_id",
}
```
#### Grade inquiries
```json
"grading_inquiries": false,
"grade_inquiries_per_component": false,
```
### Dates
All dates should be formatted as "yyyy-m-dd hh:ii:ss". 

Four digit year, one or two digit month, two digit day, two digit hour, minute, and second. 

* ta_view_start_date -- The date and time that the TA can view the gradeable
* submission_open_date -- The date and time that submissions open
* submission_due_date -- The date and time that submissions are due
* grade_start_date -- The date that TAs can start grading
* grade_due_date -- The date that TAs grades are due
* team_lock_date -- The date that students can no longer join/change teams
* grade_released_date -- The date that grades are released to students (only applicable if has_release_date is true)
* grade_inquiry_start_date -- The date that grade inquiries can start to be submitted if grade inquiries are allowed
* grade_inquiry_due_date -- The final day for grade inquiries if they are allowed.
* has_due_date -- (true/false) If the gradeable has a due date,
* has_release_date -- (true/false) If the gradeable has a grade_released_date
* late_days_allowed -- (true/false) If students are allowed to use late days on the assignment
* late_days -- The amount of late days students can use on the assignment 3
```json
"dates": {
    "ta_view_start_date": "2024-1-10 23:59:59.00",
    "submission_open_date": "2024-1-10 23:59:59.00",
    "submission_due_date": "2024-2-10 23:59:59.00",
    "grade_start_date": "2024-2-10 23:59:59.00",
    "grade_due_date": "2024-3-10 23:59:59.00",
    "team_lock_date": "2024-1-10 23:59:59.00",
    "grade_released_date": "2024-3-10 23:59:59.00",
    "grade_inquiry_start_date": "2024-3-10 23:59:59.00",
    "grade_inquiry_due_date": "2024-3-10 23:59:59.00",
    "has_due_date": false,
    "has_release_date": false,
    "late_days_allowed": false,
    "late_days": 3
}
```

#### Other
* ta_grading -- If the TA will grade any/all of the assignments (Default false)
* discussion_thread_id -- The thread ID if using forums (Default none)
* syllabus_bucket -- (Default "Homework")
#### All variables
```json
{
  "title": "Example Json",
  "instructions_url": "",
  "id": "hw-1",
  "type": "Electronic File",
  "vcs": {
    "repository_type": "submitty-hosted",
    "vcs_path": "http://localhost:1511/path/to/repository",
    "vcs_subdirectory": "subdirectory"
  },
  "team_gradeable": {
    "team_size_max": 3,
    "inherit_from": "gradeable_id",
  },
  "bulk_upload": false,
  "grading_inquiries": false,
  "grade_inquiry_per_component_allowed": false,
  "ta_grading": false,
  "discussion_thread_id": "thread_id",
  "syllabus_bucket": "Homework",
  "dates": {
    "ta_view_start_date": "2024-1-10 23:59:59",
    "submission_open_date": "2024-1-10 23:59:59",
    "submission_due_date": "2024-2-10 23:59:59",
    "grade_start_date": "2024-2-10 23:59:59",
    "grade_due_date": "2024-3-10 23:59:59",
    "team_lock_date": "2024-1-10 23:59:59",
    "grade_released_date": "2024-3-10 23:59:59",
    "grade_inquiry_start_date": "2024-3-10 23:59:59",
    "grade_inquiry_due_date": "2024-3-10 23:59:59",
    "has_due_date": false,
    "has_release_date": false,
    "late_days_allowed": false,
    "late_days": 3
  }
}
```
#### Sample Bulk Upload Template
```json
{
  "title": "Testing Json",
  "id": "hw-bulk-upload",
  "type": "Electronic File",
  "bulk_upload": true,
  "syllabus_bucket": "Homework"
}
```
#### Sample Checkpoints Template
```json
{
  "title": "Checkpoints Gradeable",
  "id": "hw-checkpoints",
  "type": "Checkpoints",
  "syllabus_bucket": "Homework"
}
```
#### Sample VCS Template
```json
{
  "title": "VCS Gradeable",
  "id": "hw-vcs",
  "type": "Electronic File",
  "syllabus_bucket": "Homework",
  "vcs": {
    "repository_type": "submitty-hosted",
    "vcs_path": "http://localhost:1511/path/to/repository",
    "vcs_subdirectory": "subdirectory"
  },
}
