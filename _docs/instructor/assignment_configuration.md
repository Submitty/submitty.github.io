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


You can study the [Tutorial](/tutorial) sample assignment configurations here:  
[Tutorial Example Configurations](https://github.com/Submitty/Tutorial/tree/master/examples)

And [additional configuration examples](https://github.com/Submitty/Submitty/tree/master/more_autograding_examples) are available.


Each assignment configuration will have a top level directory with a
```config.json``` file.  Here is the general structure of a homework
configuration directory:

   ```
   computer_science_1
   └── my_python_homework
       ├── config.json                   [ REQUIRED ]
       ├── provided_code                 [ OPTIONAL ]
       |   └── instructor_code.cpp
       |   └── instructor_code.h
       ├── test_input                    [ OPTIONAL ]
       │   └── input_1.txt
       │   └── input_2.txt
       │   └── input_3.txt
       ├── test_output                   [ OPTIONAL ]
       │   └── output_1.txt
       │   └── output_2.txt
       │   └── output_3.txt
       ├── instructor_CMakeLists.txt     [ OPTIONAL ]
       └── custom_validation_code        [ OPTIONAL ]
           └── grader.cpp
           └── grader.h
           └── another_file.cpp

   ```



### Phases of Autograding


#### First Phase:  Compilation

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

#### Second Phase: Execution

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

#### Third Phase: Validation

1. Copy specific files as needed from the student's submission
   languages) to the ```tmp_work``` subdirectory.
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

8. Copy files as needed form the ```tmp_work``` directory for archive
   to the details subfolder of the student's results directory for
   this assignment and submission version.
   Note:  The copied files can be controlled with the
   ```work_to_details``` variable in ```config.json```.

![](/images/files_for_validation.png)


#### Variables to move files

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

* **field:** ``"actions"``   
  **type:** _array of action strings_ (described below)   
  **default value:** empty.

* **field:** ``"textboxes"``  
  **type:** _array of textbox objects_  (Described below)  
  **default value:** ``empty``  

### Specification of a Networked Gradeable

* **field:** ``"container_name"``  
  **type:** _string_  
  **default value** ``"container0"``, ``"container1"``, etc.  
  **USE:** Used to refer to a container when specifying a network. Student output
  per testcase is stored in the <container_name>/ directory.  
  **RESERVED VALUES:** The name _"router"_ specifies a docker node through which
  all messages flow. See the router provided in Submitty Tutorial 16 as an
  example.


* **field:** ``"commands"``  
  **type:** _string_ -or- _array of strings_  
  **default value:** ``""``  
  **USE:** The commands executed by this docker image. Executed sequentially.


* **field:** ``"outgoing_connections"``  
  **type:** _array of strings_  
  **default value:** ``[]``  
  **USE:** Specifies which containers a container can connect to. __NOTE:__ The
  router automatically places itself to intercept all communications without
  additional specification.


* **field:** ``"container_image"``  
  **type:** _string_  
  **default value:** ``ubuntu:custom``  
  **USE:** If the specified docker_image is present on the submitty system, the
  container will be built using it.

#### Example Specification:


```
"containers" : [
                {
                    "container_name" : "server",
                    "commands" : ["python3 server.py server"],
                    "outgoing_connections" : ["client"]
                    "container_image" : "ubuntu:custom"
                },
                {
                    "container_name" : "client",
                    "commands" : ["sleep 1", "python3 client.py client 0"],
                    "outgoing_connections" : ["server"]
                },
                {
                    "container_name" : "router",
                    "commands" : ["python3 router.py"]
                }
```

#### Notes:

1. All networks are specified such that a _"router"_ node intercepts and relays
student messages. This allows an instructor to log all messages sent within the
system, as well as to add rules in regards to message delay and loss. A router
must be hand specified by the instructor per testcase. See Submitty Tutorial 16
for an example router.

2. It can be important to ensure your container's start in the correct order.
In the example above, a sleep is used on the client to ensure that the server
starts before it.

3. A known bug is causing standard out to fail to flush its buffer in networked
gradeables (confirmed in python). As such all professor and student code should either
explicitly flush their stdout or write to a file.

### Types of Action
* **Action:** ``"Delay"``   
  **Command:** "delay (number of seconds)"   
  **Description:** Delays a number of seconds before the next action is taken. Useful if the results of the previous action may take some time to render.
  **_NOTE:_** _It is recommended that the first action be a delay of some sort to provide additional time for window initialization._


* **Action:** ``"Screenshot"``   
  **Command:** "screenshot"      
  **Description:** Takes a screenshot of the display. Screenshots are stored as .png files, are labeled sequentially per test case (e.g. 0.png), and should be treated as such. Internally, files are prepended with the number of the test case (e.g. test01_0.png), but this title should not be used for validation.   
  **Validation:**  Per screenshot, include a variation of the following in your config.json    

```
{   
  "actual_file": "0.png",   
  "description": "This description will be shown to the student",    
  "method": "fileExists",    
  "show_actual": "always",   
  "show_message": "always"   
}  
```

* **Action:** ``"Type"``   
  **Command:** "type 'sequence to type' (optional number of repetitions) (optional delay between repetitions)"      
  **Description:** Types a sequence one or more times with a delay between each repetition. By default, the sequence is typed once with a .1 second delay. Buttons within the sequence are pressed sequentially without delay.   
  **Example:** The command “type 'asdf' 2 3” types the characters asdf, pauses for three seconds, and then types them a second time.


* **Action:** ``"Click and Drag"``   
  * **Click and Drag (standard)**   
    * **Command:** "click and drag (optional mouse_button) (optional start_x) (optional start_y) end_x end_y"   
    * **Description:** The standard version of click and drag starts either at the mouse’s current position or at a position specified by the user. If a mouse button has been specified, that button is pressed down at that position, otherwise, the left mouse button is pressed. The mouse is then moved to coordinates specified by the end position, and the held button is released.   
  * **Click and Drag Delta**   
    * **Command:** "click and drag delta <optional mouse_button> end_x end_y"   
    * **Description:** The delta version of click and drag starts at the current mouse position, clicks the desired mouse button (or left if one isn’t provided) and then moves a specified number of pixels  before releasing. The function is wrapping, so it will repeatedly click and drag until the desired distance has been moved.   
  * **_NOTE:_**
    * _The mouse is clamped within the student’s window with a one pixel inner boundary to avoid accidental resizing._
    * _The valid mouse buttons are "left", "right", and "middle"_.


* **Action:** ``"Click"``   
  **Command:** "click (optional ‘left’ ‘right’ or ‘middle’)"      
  **Description:** Processes a mousedown and a mouseup of the specified mouse button. Defaults to left click.   


* **Action:** ``"Mouse Move"``   
  **Command:** "mouse move (x_position) (y_position)"      
  **Description:** Moves the mouse from its current position to the x and y provided, clamped to the screen. Note that the x and y position provided are specified in relative (window) coordinates.   


* **Action:** ``"Center Mouse"``   
  **Command:** "center"      
  **Description:** Moves the mouse to the center of the student’s window.   


* **Action:** ``"Move Mouse to Origin"``   
  **Command:** "origin"      
  **Description:** Moves the mouse to the origin of the student’s window.


### Automatically Generated Submission Limit Test Case

  Students are allowed to resubmit if they discover an error.  And
  students should be able to submit partial work early and verify they
  are on the right track.

  However, we assume that students will do the bulk of their
  development, testing, and debugging on a local machine.  To prevent
  overuse of limited resources, Submitty adds a test case that adds a
  small 1/10th of a point penalty for each submission over 20
  submissions.
  _Note that autograding totals round down to the nearest integer._


  ```
        {
            "title": "Submission Limit",
            "type": "FileCheck",
            "max_submissions": 20,
            "penalty": -0.1,
            "points": -5
        }
   ```

   You may adjust this limit by pasting this syntax into your
   config.json and adjusting the parameters.  The student is allowed
   `max_submissions` penalty-free submissions.  After that, they will
   be charged `penalty` points per additional submission.  The maximum
   penalty is set with the `points` parameter.  For example:

   [Hidden Test Case configuration with customized Submission Limit](https://github.com/Submitty/Submitty/blob/master/more_autograding_examples/cpp_hidden_tests/config/config.json)


   Note, you can view the defaults added to your config file by
   viewing:

   ```
   /var/local/submitty/courses/<SEMESTER>/<COURSE>/config/complete_config/complete_config_<GRADEABLE>.json
   ```


### Specification of a Textbox


* **field:** ``"label"``  
  **type:** _string_   
  **value:** String description of what to write in the textbox.
  **default value:** ``""``


* **field:** ``"rows"``  
  **type:** _int_   
  **value:** Numeric height of the textbox in rows.
  **default value:** ``1``


* **field:** ``"filename"``  
  **type:** _string_   
  **value:** String name of the text file generated by submission of the textbox. (ex. input1.txt)
  **default value:** ``""``


* **field:** ``"images"``  
  **type:** _array of image objects_ (Described below)  
  **value:** list of the images to be displayed.
  **default value:** ``empty``

#### Specification of an Image Object


* **field:** ``"image_name"``  
  **type:** _string_   
  **value:** Name of the image file to be displayed.
  **default value:** ``""``


* **field:** ``"image_height"``  
  **type:** _int_   
  **value:** Numeric height in pixels to display the image at.
  **default value:** ``0`` _(displays at native image height)_


* **field:** ``"image_width"``  
  **type:** _int_   
  **value:** Numeric width in pixels to display the image at.
  **default value:** ``0`` _(displays at native image width)_


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
          **value:** ``"ge"``, ``"lt"``, FIXME FINISH LIST  
          **REQUIRED**  


        * **field:** ``"term"``  
          **type:** _floating point_  
          **REQUIRED**


  * You can also write your own custom test cases!

     See:
     [cpp custom test case example][cpp_custom]

     _FIXME: Document this!_


[grading/default_config.h]: https://github.com/Submitty/Submitty/blob/master/grading/default_config.h
[grading/system_call_categories.h]: https://github.com/Submitty/Submitty/blob/master/grading/system_call_categories.h
[grading/seccomp_functions.cpp]: https://github.com/Submitty/Submitty/blob/master/grading/seccomp_functions.cpp
[cpp_custom]: https://github.com/Submitty/Submitty/tree/master/more_autograding_examples/cpp_custom
