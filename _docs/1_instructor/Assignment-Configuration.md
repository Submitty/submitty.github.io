---
title: Assignment Configuration
category: Instructor
order: 5
---


We will present a range of “case study” assignment configurations,
from simple through complex, using a variety of different automated
grading methods including per-character and per-line output difference
checkers, external unit testing frameworks (such as JUnit), memory
debugging tools (Valgrind and DrMemory), code coverage (e.g., Emma),
static analysis tools, and custom graders. Submitty can be customized
per test case as appropriate to apply resource limits (running time,
number of processes, output file size, etc.) and to display or hide
from students the program output, autograding results, and testing
logs.


### Where to Store your Assignment Configurations

To allow backups and re-use of assignment configurations, we recommend
that assignment configurations be prepared in a separate version
controlled repository (e.g, GIT).

The assignment configuration may contain hidden input examples,
solution output, and/or solution code that should not be publicly
available to students.  Thus, this repository should be private or
shared only with other instructors or teaching assistants.

For example, we suggest storing these per course private repositories
on the server, with controlled permissions.  For example:

```
/var/local/submitty/private_course_repositories/computer_science_1/
/var/local/submitty/private_course_repositories/data_structures/
etc.
```


### Overall Structure of an Assignment Configuration


You can study the provided sample assignment configurations here:
[sample_files/sample_assignment_config][sample_files/sample_assignment_config]

Each assignment configuration will have a top level directory with a
```config.json``` file.  Here is the general structure of a homework
configuration directory:
   
   ```
   computer_science_1
   └── my_python_homework
       ├── config.json                   [ REQUIRED ]
       ├── test_input                    [ OPTIONAL ]
       │   └── input_1.txt
       │   └── input_2.txt
       │   └── input_3.txt
       ├── test_output                   [ OPTIONAL ]
       │   └── output_1.txt
       │   └── output_2.txt
       │   └── output_3.txt
       └── test_code                     [ OPTIONAL ]
           └── instructor_code_1.cpp
           └── instructor_code.h
   ```



### Phases of Autograding


#### First Phase:  Compilation

1. Create a temporary compilation directory and copy all of the
   students submitted files into the temporary directory.

2. Copy the files from the ```test_code``` directory into the
   temporary directory.

3. Scan through the testcases in the ```config.json``` for all
   testcases with type = "compilation".

4. Execute the "command"(s) for the compilation testcases.

5. Copy the named executables from the temporary directory to the
   temporary execution directory.  Also rename and copy the `STDOUT.txt`
   and `STDERR.txt` files from each compilation command (prefix with
   test case number).


#### Second Phase: Execution 

1. Copy the files from the ```test_input``` directory into the
   temporary execution directory.

2. Scan through the testcases in the ```config.json``` for all
   testcases with type = "execution".
   
3. Execute the "command"(s) for the execution testcases.

4. Rename the `STDOUT.txt`, `STDERR.txt`, execution logfiles, and
   specified output files that are to have been created by the program
   execution (prefix with test case number).


#### Third Phase: Validation

1. Copy the files from the ```test_output``` directory into the
   temporary execution directory.  

2. Scan through the test cases in the ```config.json``` and perform
   the validation checks indicated within each check.

3. Calculate the score for each test case, and determine what messages
   and files should be displayed for each test case.

4. Write the ```results.json``` and ```results_grade.txt``` files.



### Overall Specification of a ``config.json`` file

You are allowed to have C/C++ style comments in a `config.json` file.
These will be removed before compilation of the autograding
executables.  


* **field:** ``"testcases"``  
  **type:** _array of testcase objects_ (defined below)  
  **REQUIRED**


* **field:** ``"assignment_message"``  
  **type:** _string_  
  **default value:** ``""`` 


* **field:** ``"grading_parameters"``  
  **type:** _associative array / mapping from string to integer_ 

   _NOTE: These fields are only used as helper checks summing the
   total of the test case points._

   * **field:** ``"AUTO_POINTS"``  
     **type:** _integer_

   * **field:** ``"EXTRA_CREDIT_POINTS"``  
     **type:** _integer_



* **field:** ``"part_names"``  
  **type:** _array of strings_
  **default value:** empty array



* **field:** ``"resource_limits"``  
  **type:** _associative array / mapping from string to integer_

  The instructor can override / customize various resource limitations
  for the testing process.  The default values for these resource
  limits are specified here: [grading/default_config.h][grading/default_config.h]


  _FIXME: UPDATE & DOCUMENT_

  These resources can be for the overall assignment configuration, or
  per test case.



* **field:** ``"allow_system_calls"``  
  **type:** _array of strings_  

  The instructor can also override / customize the default
  restrictions on use of system call within the student code by
  whitelisting additional categories of system calls:
  [grading/system_call_categories.h][grading/system_call_categories.h]
  [grading/seccomp_functions.cpp][grading/seccomp_functions.cpp]

  _FIXME: UPDATE & DOCUMENT_



### Specification of a Testcase


* **field:** ``"type"``  
  **type:** _string_   
  **value:** ``"compilation"``, ``"file_check"``, or ``"execution"``  
  **default value:** ``"execution"``  

  _Each test case has a type, the type dictates whether actions are
  necessary for that test case during the different phases of
  autograding (compilation, execution, and validation)._


* **field:** ``"title"``  
  **type:** _string_  
  **REQUIRED** for all testcases


* **field:** ``"details"``  
  **type:** _string_  
  **default value:** ``""`` 


* **field:** ``"points"``  
  **type:** _integer_  
  **default value:** ``0``    


* **field:** ``"hidden"``  
  **type:** _boolean_  
  **default value:** ``false``  


* **field:** ``"extra_credit"``  
  **type:** _boolean_  
  **default value:** false


* **field:** ``"filename"``  
  **type:** _string_ or _array of strings_  
  **REQUIRED** for ``"file_check"`` and ``"execution"`` types


* **field:** ``"executable_name"``  
  **type:** _string_ or _array of strings_  
  **REQUIRED** for ``"compilation"`` testcases

  _FIXME:  Should we rename/collapse this field to to filename??_


* **field:** ``"command"``  
  **type:** _string_ -or- _array of strings_  
  **REQUIRED** for ``"compilation"`` and ``"execution"`` testcases.  Not
    allowed for ``"file_check"`` testcases.

  _NOTE: simple wildcards allowed._

  _NOTE: Each string command should be a LINUX command line that will
  be executed during either the compilation or executation phases of
  automated grading._


* **field:** ``"resource_limits"``  
  **type:** _associative array / mapping from string to integer_

  _NOTE: See details for assignment level description above.



* **field:** ``"validation"``  
  **type:** _array of validation objects_ (described below)   
  **default value:**  automatic checks added for `STDOUT.txt`,
     STDERR.txt, and the execution logfile.



* AUTOMATICALLY GENERATED TEST CASE (IF NOT SPECIFIED... )

  Limit on # of submissions, small point penalty applied after this limit.

  FIXME: after implementation, document this!



### Specification of a Validation Object


* **field:** ``"method"``  
  **type:** _string_   
  **REQUIRED**  (details below)  



* **field:** ``"description"``  
  **type:** _string_  
  **default value:** ``""`` 


* **field:** ``"actual_file"``  
  **type:** _string_ or _array of strings_  
  **REQUIRED**

  _NOTE: simple wildcards allowed_


* **field:** ``"expected_file"``  
  **type:** _string_ or _array of strings_   
  **default value:**  NULL

  _NOTE: simple wildcards allowed_


* **field:** ``"deduction"``  
  **type:** _floating point_, in range [ 0.0, 1.0 ]  
  **default value:** 1 / number of non-default validation objects in the ``"validation"`` array

  _NOTE: except certain the warning tests default to 0_


* **field:** ``"show_message"``  
  **type:** _string_  
  **value:** ``"always"``, ``"never"``, ``"on_success"``, or ``"on_failure"``  
  **default value:** ``"always"`` (if message non-empty)


* **field:** ``"show_actual"``  
  **type:** _string_  
  **value:** ``"always"``, ``"never"``, ``"on_success"``, or ``"on_failure"``  
  **default value:** ``"always"`` (if filename specified and file exists)

  _NOTE: except certain the warning tests default to ``"on_failure"``_


* **field:** ``"show_expected"``  
  **type:** _string_  
  **value:** ``"always"``, ``"never"``, ``"on_success"``, or ``"on_failure"``  
  **default value:** ``"always"`` (if filename specified and file exists)


* **field:** ``"failure_message"``  
  **type:** _string_  
  **default value:** FIXME: depends on testcase type and method (?)


* Additional fields are required/optional for specific validation
  methods (detailed below).



### Validation Methods

  * These methods only require only an ``"actual_file"``:

     * ``"warnIfNotEmpty"`` - Will throw a warning, but not cause the test to
       fail if the specified file is not empty
     * ``"errorIfNotEmpty"`` - Will cause the test to fail if the specified
       file is not empty
     * ``"warnIfEmpty"`` - Will throw a warning, but not cause the test to fail
       if the specified file is empty
     * ``"errorIfEmpty"`` - Will cause the test to fail if the specified file
       is empty
   
   
  * These methods require an ``"actual_file"`` and an ``"expected_file"``:
     * ``"myersDiffbyLinebyWord"`` - Runs the diff on a line by line basis
       focusing only on whole words being different
     * ``"myersDiffbyLineNoWhite"`` - Runs the diff ignoring white space?
     * ``"myersDiffbyLine"`` - Runs the diff on a line by line basis marking
       only the lines as different, not the exact contents that are
       different
     * ``"myersDiffbyLinebyChar"`` - Runs the diff on a line by line basis
       marking the exact characters that differ
     * ``"myersDiffbyLinebyCharExtraStudentOutputOk"`` - Same as the above
       diff, but ignores extra lines that are in the student's output
       that aren't in the expected output
     * ``"diffLineSwapOk"`` - Runs the diff, but allows the order of lines to
       be different between expected and the actual
   
   
  * These methods are for Java programs, and require only an ``"actual_file"``:
     * ``"EmmaCoverageReportGrader"`` - This uses the additional field
       ```coverage_threshold``` to compare against for test success
     * ``"EmmaInstrumentationGrader"``
     * ``"JUnitTestGrader"`` - This is for when running a test file directly
       through JUnit. The ```num_tests``` field should be defined as the
       expected number of JUnit tests to be run.
     * ``"MultipleJUnitTestGrader"`` - This should used when using the provided
       TestRunner command which when passed a folder scans through and
       runs JUnit programmatically on files


       FIXME:  required field for some of these Java validators...  

       * **field:** ``"num_tests"``  
         **type:** _integer_  
         **REQUIRED**

   
   
  * Static Analysis Tools  
    Example:
    [python static analysis example][python_static_analysis]


     [Documentation for ``submitty_count_token``][submitty_count_token]  
     Example assignment configuration command line:  
     ```
     "submitty_count_token while part4/*.py"
     ```

     
     [Documentation for ``submitty_count_node``][submitty_count_node]  
     Example assignment configuration command line:  
     ```
     "submitty_count_node -l python2 print part1/*.py"
     ```



     * ``"intComparison"``


        * **field:** ``"comparison"``  
          **type:** _string_  
          **value:** ``"ge"``, ``"lt"``, FIXME FINISH LIST  
          **REQUIRED**  


        * **field:** ``"term"``  
          **type:** _floating point_  
          **REQUIRED**


  * You can also write your own custom test cases!
   
     See:
     [cpp custom test case example][cpp_custom]
   
     _FIXME: Document this!_


[sample_files/sample_assignment_config]: https://github.com/Submitty/Submitty/tree/master/sample_files/sample_assignment_config
[grading/default_config.h]: https://github.com/Submitty/Submitty/blob/master/grading/default_config.h
[grading/system_call_categories.h]: https://github.com/Submitty/Submitty/blob/master/grading/system_call_categories.h
[grading/seccomp_functions.cpp]: https://github.com/Submitty/Submitty/blob/master/grading/seccomp_functions.cpp
[python_static_analysis]: https://github.com/Submitty/Submitty/tree/master/sample_files/sample_assignment_config/python_static_analysis
[submitty_count_token]: https://github.com/Submitty/AnalysisTools/blob/master/docs/TOKENS.md
[submitty_count_node]: https://github.com/Submitty/AnalysisTools/blob/master/docs/NODES.md
[cpp_custom]: https://github.com/Submitty/Submitty/tree/master/sample_files/sample_assignment_config/cpp_custom