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



  * Static Analysis Tools (See also:  [Documentation of submitty_count, etc.](/instructor/static_analysis) )

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

#### Overview
A python custom validator may take student and instructor files and axillary information as its input.
It then uses performs analysis on this input to produce a results object. This results object
is composed of a score for the associated testcase, as well as any messages that should be passed on to the
student.

#### Configuring a Python Custom Validator
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


In order to configure a validation object in a ```config.json``` which
uses a python custom validator, the following fields must be set
* __method:__ The method of the validation object must be set to ```"custom_validator"```.
* __command:__ A ```command``` must be specified which describes how to invoke the custom validator.

Many of the other customization parameters discussed in the [section above](#specification-of-a-validation-object)
can also be applied to a python custom validator. Furthermore, other axillary information can be added to
a python custom validator's validation object to be made available via a ```custom_validator_input.json```, discussed
in a [later section.](#the-custom-validator-input-json-file)

#### Storing a Python Custom Validator
```
   config
   ├── config.json                   
   ├── provided_code                 
   ├── test_input                    
   ├── test_output                   
   └── custom_validation_code        
       └── grader.py
```

Python custom validation code must be stored in a directory named ```custom_validation_code``` within
an assignment's configuration directory.

#### The Python Custom Validator's Execution Environment
```
 tmp_work
 ├── grader.py
 ├── test01      
 |   └── student_submission.cpp
 |   └── a.out
 |   └── STDOUT.txt
 |   └── STDERR.txt             
 ├── test_input  
 |   └── provided_file.txt                                  
 ├── test_output           
 |   └── expected_output_1.txt        
 └── custom_validation_code        
```

Python custom validation code is copied to and executed within the ```tmp_work``` directory rather than
within the directory associated with a specific testcase. As a result, all student and expected output
is housed in subdirectories available to a python custom validator.


#### Providing Input to a Python Custom Validator
As input, a python custom validator can take:
1. A json file, entitled ```custom_validator_input.json```. This json file
     is the validation object within the config.json that invokes this
     custom validator.
2. Any ```actual file``` produced by a student during a testcase.
3. Any ```expected file``` uploaded by the instructor as part of their assignment configuration.
4. Command line arguments provided to this validator.

##### The Custom Validator Input JSON File
```
{
    "title" : "Sum of 5 random numbers",
    "command" : "./a.out 5",
    "points" : 8,
    "validation" : [
        {
            "method" : "custom_validator",
            "command" : "python3 grader.py",
            "actual_file" : "STDOUT.txt",
            "expected_file" : "expected_output_1.txt",
            "foo" : 7,
            "bar" : 2
        }
    ]
}
```

When a python custom validator is run, it's associated validation object in the assignment's
```config.json``` is provided to it as a ```custom_validator_input.json```. This file is inflated
with additional information that may be relevant to validation. In the above testcase,
the following ```custom_validator_input.json``` might be created:

```
{
    "method" : "custom_validator",
    "command" : "python3 grader.py",
    "actual_file" : "STDOUT.txt",
    "expected_file" : "expected_output_1.txt",
    "testcase_prefix" : "test01/",
    "username": "submitter_id"
    "foo" : 7,
    "bar" : 2
}
```

This file can be read in by ```grader.py``` to load the information necessary to perform
the required validation. While the ```custom_validator_input.json``` can provide information
about what actual and expected files are required for validation, it may also be leveraged
to provide tuning parameters to the grader. In the above example, the variables ```foo```
and ```bar``` might have a special meaning to ```grader.py```. The ```custom_validator_input.json```
is further furnished with a ```testcase_prefix``` which corresponds to the current testcase and
the ```username``` of the current submitter.


##### Opening Actual Files
The actual file object within a ```custom_validator_input.json``` may be either a string or an array of strings.
To open an actual file, the provided filename or filenames should be prepended with the ```testcase_prefix```
provided in the ```custom_validator_input.json```. So if the ```actual_file``` is ```STDOUT.txt``` and the ```testcase_prefix```
is ```test01/```, the file ```test01/STDOUT.txt``` should be opened.


##### Opening Expected Files
The expected file object within a ```custom_validator_input.json``` may be either a string or an array of strings.
Instructor provided expected files are housed in the ```test_output``` directory. So if an 
expected file is ```expected_output_1.txt```, the file ```test_output/expected_output_1.txt``` should be opened.

#### Python Custom Validator Output
Results from a python custom validator should be written to ```validation_results.json```, which should contain either
a [failure](#failure) or [success](#success) object. 

___Deprecated:___ Output written to ```stdout``` is automatically
copied to ```validation_results.json``` if no ```validation_results.json``` exists. This functionality will be removed
in a future release, so that ```stdout``` may instead be used for debug output.

##### Success
A single response message:
```
{
    "status" : "success",
    "data": {
        "score" : 1,
        "message" : "A success message",
        "status" : "success"
    }
}
```

Multiple messages:
```
    "status" : "success",
    "data": {
        "score" : 1,
        "message" : [
            {
                "message" : "A success message",
                "status" : "success"
            },
            {
                "message" : "Second message",
                "status" : "information"
            }
        ]
    }
}
```

In most cases, a python custom validator should terminate successfully, and provide a score and additional messages
to the student. The response should be made up of the following fields:
* __status:__ The status field should contain the string ```"success"``` on a successful run.
* __data:__
  *  __score:__ A score between 0 and 1, representing the fraction of points a student received for this autocheck.
  *  __message:__ Message may represent either a string or a list of message objects. In the case where it is a string,
                  the message is the message to be displayed to the student. In the case that it is a list of message
                  objects, it must contain an array of one or more messages and their corresponding status.
  *  __status:__ Status influences both the color of a message and when it will be displayed to the student. Valid statuses are
                 ```information```, ```failure```, ```warning``` and ```success```, which correspond to blue, red, yellow, and green respectively.
Messages are displayed to the student in their testcase results.

##### Failure
```
{
  'status' : "failure"
  'message' : 'A failure message to help you debug the error'
}
```

It is possible that a python custom validator might crash. In these cases, it should be configured to return a failure
response object. Such an object should contain the following fields.
* __status:__ The status field should contain the string ```"failure"``` on a failed run.
* __message:__ The message field represents a debug string for use by the instructor.
The message specified appears within the ```logs/validator_log.txt``` for a submission.

##### Debugging a Python Custom Validator
While writing a python custom validator, it can be quite useful to write debug statements to a log file.
For this reason, any output written to ```validation_logfile.txt``` or ```stderr``` is stored for later review by the instructor.

__Note:__ ```stdout``` should not be used for debug information, as any ```stdout``` is treated as a ```validation_results.json```.
This will change in a future release.

All results, logs, and stderr output for a run of a python custom validator are stored in the ```results/custom_validator_output```
for a submission.



For more information, please view the [python custom test case example][python_custom], and especially the ```grader.py``` file.

[grading/default_config.h]: https://github.com/Submitty/Submitty/blob/master/grading/default_config.h
[grading/system_call_categories.cpp]: https://github.com/Submitty/Submitty/blob/master/grading/system_call_categories.cpp
[grading/seccomp_functions.cpp]: https://github.com/Submitty/Submitty/blob/master/grading/seccomp_functions.cpp
[cpp_custom]: https://github.com/Submitty/Submitty/tree/master/more_autograding_examples/cpp_custom
[python_custom]: https://github.com/Submitty/Submitty/tree/master/more_autograding_examples/python_custom_validation
