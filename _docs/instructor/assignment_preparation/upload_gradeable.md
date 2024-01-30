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
"grading_inquiry": {
  "grade_inquiry_per_component_allowed": false,
}
```
  "ta_grading": true/false,
  "discussion_thread_id": "thread_id",
  "syllabus_bucket": "Homework"
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
  "grading_inquiry": {
    "grade_inquiry_per_component_allowed": false
  },
  "ta_grading": false,
  "discussion_thread_id": "thread_id",
  "syllabus_bucket": "Homework"
}
```
#### Sample Bulk Upload Template
```json
{
  "title": "Testing Json",
  "id": "hw-1-1-1222",
  "type": "Electronic File",
  "bulk_upload": true,
  "syllabus_bucket": "Homework"
}
```
#### Sample Checkpoints Template
```json
{
  "title": "Checkpoints Gradeable",
  "id": "hw-1-1-1222",
  "type": "Checkpoints",
  "syllabus_bucket": "Homework"
}
```