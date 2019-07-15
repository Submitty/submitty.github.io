---
title: Autograding Validation
category: Instructor -- Autograding Configuration
---


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

* **field:** ``"show_difference_image"``  
  **type:** _string_  
  **value:** ``"always"``, ``"never"``, ``"on_success"``, or ``"on_failure"``  
  **default value:** ``"always"`` (if filename specified and file exists)  

* **field:** ``"acceptable_threshold"``  
  **type:** _float_  
  **value:** Range between 0 and 1, specifying the amount of allowable deviation between the actual and expected images being compared.   
  **default value:** ``"0"`` (if imageDiff specified and file exists)  


* **field:** ``"failure_message"``  
  **type:** _string_  
  **default value:** FIXME: depends on testcase type and method (?)


* Additional fields are required/optional for specific validation
  methods (detailed below).



### Validation Methods

  * These methods only require an ``"actual_file"``:

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
     * ``"ImageDiff"`` - Runs a diff on two images (actual_file and expected_file)   


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



  * Static Analysis Tools (See also:  [Documentation of submitty_count, etc.](static_analysis) )

     Example assignment configuration command line:  
     ```
     "submitty_count token While part4/*.py"
     ```

     * ``"intComparison"``


        * **field:** ``"comparison"``  
          **type:** _string_  
          **value:** ``"gt"``, ``"ge"``, ``"lt"``, ``"le"``, FIXME FINISH LIST  
          **REQUIRED**  


        * **field:** ``"term"``  
          **type:** _floating point_  
          **REQUIRED**


  * You can also write your own custom test cases!

     See:
     [cpp custom test case example][cpp_custom]

### Python Custom Validation

In cases in which an assignment cannot be properly validated using one of
the default validation methods, it is possible to write a custom python script
to validate student output.

At a high level, the structure of such a validator is simple:

As input, a python custom validator can take:
1. Any files produced by a student during a testcase.
2. A json file, entitled ```custom_validator_input.json```. This json file
     is the validation object within the config.json that invokes this
     custom validator.
3. Command line arguments provided to this validator.

On standard output, a python custom validator _must_ output a json of the following form:

```
{
  'status' : "success"
  'data': {
            # Score is on a range from zero (no credit) to 1 (full credit)
            "score" : score,
            # A message to the student
            "message" : message,
            # The status of the submission (indicates if the
            # student succeeded at the testcase).
            # Values can be "information", "failure", "warning", or "success".
            "status": status
          }
}


OR

{
  'status' : "failure"
  'message' : 'A failure message to help you debug the error'
}
```

A python custom validator must use the method ```custom_validator``` and should
provide a the command that will be used to execute the custom script. This script must be housed in a ```custom_validation_code``` directory within
the configuration directory for the assignment.

#### Example Testcase Using a Python Custom Validator:
```
{
    "title" : "Sum of 5 random numbers",
    "command" : "./a.out 5",
    "points" : 8,
    "validation" : [
        {
            "method" : "custom_validator",
            "command" : "python3 grader.py --numbers 5",
            "actual_file" : "STDOUT.txt"
        }
    ]
}
```

In the above example, the custom validator ```grader.py``` will be executed,
and will be given the following json as ```custom_validator_input.json```:

```
{
    "method" : "custom_validator",
    "command" : "python3 grader.py --numbers 5",
    "actual_file" : "STDOUT.txt"
}
```

For more information, please view the [python custom test case example][python_custom], and especially the ```grader.py``` file within.

[grading/default_config.h]: https://github.com/Submitty/Submitty/blob/master/grading/default_config.h
[grading/system_call_categories.cpp]: https://github.com/Submitty/Submitty/blob/master/grading/system_call_categories.cpp
[grading/seccomp_functions.cpp]: https://github.com/Submitty/Submitty/blob/master/grading/seccomp_functions.cpp
[cpp_custom]: https://github.com/Submitty/Submitty/tree/master/more_autograding_examples/cpp_custom
[python_custom]: https://github.com/Submitty/Submitty/tree/master/more_autograding_examples/python_custom_validation
