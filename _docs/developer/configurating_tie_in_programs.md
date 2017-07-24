---
title: Configuring Tie In Programs
category: Developer
order: 12
---

It is possible to configure Submitty to use various third party programs to run student code. This page details any special configuration steps necessary to set up such programs.

### Matlab
Executing Matlab scripts necessitates one or more Matlab installation keys (one per Matlab assignment you want to grade in parallel.)

#### RPI Developers  
1. Install matlab to the untrusted user(s) of your choice. **NOTE:** requires licenses equal to number of desired users.
2. Give untrusted users access to the MATLAB directory (/usr/local/MATLAB) and the .matlab preference directory located in their home. (currently temp).
3. Matlab applications should be treated as Java programs and the associated RLIMITS should be set. Ex.
```
"resource_limits" : {
      "RLIMIT_NOFILE" :     1000000, //number of file descriptors
      "RLIMIT_LOCKS" :      1000000,  //number of files open
      "RLIMIT_CPU" : 60,
      "RLIMIT_NPROC" : 100,
      "RLIMIT_AS" : "RLIM_INFINITY"
  },
  "autograding" : {
      "submission_to_runner" : [ "*.m"],
      "work_to_details" : ["*.png"]
  },
  "allow_system_calls" : [
        "ALLOW_SYSTEM_CALL_CATEGORY_COMMUNICATIONS_AND_NETWORKING_INTERPROCESS_COMMUNICATION",
        "ALLOW_SYSTEM_CALL_CATEGORY_COMMUNICATIONS_AND_NETWORKING_SIGNALS",
        "ALLOW_SYSTEM_CALL_CATEGORY_FILE_MANAGEMENT_MOVE_DELETE_RENAME_FILE_DIRECTORY",
        "ALLOW_SYSTEM_CALL_CATEGORY_FILE_MANAGEMENT_RARE",
        "ALLOW_SYSTEM_CALL_CATEGORY_PROCESS_CONTROL_NEW_PROCESS_THREAD",
        "ALLOW_SYSTEM_CALL_CATEGORY_PROCESS_CONTROL_SCHEDULING",
        "ALLOW_SYSTEM_CALL_CATEGORY_UNKNOWN"
    ],
```
