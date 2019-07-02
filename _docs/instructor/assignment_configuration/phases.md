---
title: Phases of Autograding
category: Instructor -- Autograding Configuration
---


### First Phase:  Compilation

1. Create a temporary directory for autograding this student's submission.

2. Create a temporary subdirectory for compilation.

3. Copy the student's submitted source code (for compiled languages) to this temporary directory.
   Note:  The copied files can be controlled with the
   ```submission_to_compilation``` variable in ```config.json```.   

4. Copy the files from the ```provided_code``` directory
   into the temporary compilation subdirectory.

5. Scan through the testcases in the ```config.json``` for all
   testcases with type = "compilation".

6. Execute the "command"(s) for the compilation testcases.

7. Rename the `STDOUT.txt`, `STDERR.txt`, execution logfiles, and
   specified output files that are to have been created by the program
   execution (prefix with test case number).

![](/images/files_for_compilation.png)

### Second Phase: Execution

1. Create a temporary subdirectory for runner and validation work.

2. Copy the student's submitted source code (for interpreted
   languages) to the ```tmp_work``` subdirectory.
   Note:  The copied files can be controlled with the
   ```submission_to_runner``` variable in ```config.json```.   

3. Copy the test input files to the ```tmp_work``` subdirectory.

4. Copy the compiled executables from the ```tmp_compilation``` subdirectory
   to the ```tmp_work``` subdirectory.
   Note:  The copied files can be controlled with the
   ```compilation_to_runner``` variable in ```config.json```.

5. Scan through the testcases in the ```config.json``` for all
   testcases with type = "execution".

6. Execute the "command"(s) for the execution testcases.

7. Rename the `STDOUT.txt`, `STDERR.txt`, execution logfiles, and
   specified output files that are to have been created by the program
   execution (prefix with test case number).

![](/images/files_for_runner.png)

### Third Phase: Validation

1. Copy specific files as needed from the student's submission
   languages to the ```tmp_work``` subdirectory.
   Note: These files are specified with the ```submission_to_validation``` variable
   in ```config.json```.

2. Copy the custom validation code into the ```tmp_work``` subdirectory.

3. Copy the expected test output into the ```tmp_work``` subdirectory.

5. Copy output files from compilation from the ```tmp_compilation``` subdirectory
   to the ```tmp_work``` subdirectory.
   Note:  The copied files can be controlled with the
   ```compilation_to_validation``` variable in ```config.json```.

5. Scan through the test cases in the ```config.json``` and perform
   the validation checks indicated within each check.

6. Calculate the score for each test case, and determine what messages
   and files should be displayed for each test case.

7. Write the ```results.json``` and ```grade.txt``` files.

8. Copy files as needed from the ```tmp_work``` directory for archive
   to the details subfolder of the student's results directory for
   this assignment and submission version.
   Note:  The copied files can be controlled with the
   ```work_to_details``` variable in ```config.json```.

![](/images/files_for_validation.png)






### Variables to move files

As outlined in the above sections & diagrams, there are 6 different
configuration settings in the `config.json` to control the movement of
files.  Some of them have reasonable defaults for assignments that are
compiling and running Python, C++, and Java programs (we may update
these defaults in future revisions to Submitty).  Each setting should
be a list of one or more strings to match against files.  You may use
wildcards.  Example of syntax:  

```
    "autograding" : {
        "submission_to_compilation" : [ "part1/*.pdf" ],
        "submission_to_runner" : [ "part2/*.pdf", "special.xlsx" ],
        "compilation_to_runner" : [ "**/*.pdf" ],
        "submission_to_validation" : [ "part3/*.png" ],
        "compilation_to_validation" : [ "*/*.pdf" ],
        "work_to_details" : [ "*.pdf" ]
    },
```

These file match patterns will be appended to the
Submitty defaults, defined here:
[grading/load_config_json.cpp](https://github.com/Submitty/Submitty/blob/master/grading/load_config_json.cpp)

