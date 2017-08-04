---
title: Configuring Tie In Programs
category: Developer
order: 12
---

It is possible to configure Submitty to use various third party programs to run student code. This page details any special configuration steps necessary to set up such programs.

### Matlab
Executing Matlab scripts necessitates one or more Matlab installation keys (one per Matlab assignment you want to grade in parallel.)

#### RPI Developers
##### Getting a key from RPI
1. Navigate to the [Division of the Chief Information Officer](https://dotcio.rpi.edu/services/software-labs) webpage.
2. Launch the Software Licensing Tool.
3. Login using your RCS ID and password.
4. Select Student_Matlab
5. Request a License.  

##### Acquiring Necessary Files
1. If you don't have a MathWorks account, [create one](https://www.mathworks.com/mwaccount/).
2. After getting access to your matlab installation, [download it](https://www.mathworks.com/downloads) as a zip file.
3. Unpack the zip somewhere safe on your submitty installation.
4. Go to your [MathWorks Account](https://www.mathworks.com/mwaccount/) and login.
5. Select your license.
6. Navigate to the "Install and Activate" page.
7. On the right beneath related tasks, select "Activate to retrieve license file."
8. Next, select activate a computer, and follow the steps to activate your machine.  
_**NOTE:**_ make sure that your computer login name matches the name of the user you want to have access to matlab. (eg. at RPI, use untrusted00)
9. Select "Get License File" from the activated computers list. Answer that the software is not installed and then continue.
10. Download Your license file and put it in a safe place on your Submitty installation.
11. Copy your file installation key. You will need it in the next step.

##### Semi-Automated Install
1. Navigate to /usr/local/submitty/GIT_CHECKOUT/.setup/bin/
2. Open MatlabInstall.sh with your favorite text editor.
3. Set the ABSOLUTE_PATH_TO_INSTALLATION_FILES variable to which you moved the files in step 3 above.
4. Set the INSTALLATION_KEY variable to be equal to the key you copied in step 11 above.
5. Add the path to the license file you downloaded in step 10 above to the PATHS_TO_LICENSE_FILES array.
6. Execute the script as root.
7. To ensure that the script installed correctly, su to the user to which the license belongs (step 8 above) and execute "matlab" in the terminal.

##### Running Matlab Programs
1. Matlab applications should be treated as Java programs and the associated RLIMITS should be set. Ex.
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
