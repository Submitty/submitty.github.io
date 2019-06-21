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
  **type:** _array of testcase objects_ ([defined below](#specification-of-a-testcase))  
  **REQUIRED**
  
* **field:** ``"notebook"``  
  **type:** _array of notebook objects_ ([defined below](#specification-of-a-notebook))  


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
  limits are specified here: [grading/default_config.h][grading/default_config.h].
  
  Depending on the testcase type, there is a minimum RLIMIT value that will be used,
  regardless if the limit it set lower in the configuration file.
  
  If the Testcase is for compliation, it will use the following minimum RLIMIT values:
  * RLIMIT_CPU: 60
  * RLIMIT_FSIZE: 10MB
  * RLIMIT_RSS: 1GB
  
  If the Testcase is using the submitty_count utility, it will have the following minimum RLIMIT values:
  * RLIMIT_NPROC: 1000
  * RLIMIT_NOFILE: 1000
  * RLIMIT_CPU: 60
  * RLIMIT_AS: RLIM_INFINITY
  * RLIMIT_SIGPENDING: 100

  _FIXME: UPDATE & DOCUMENT_

  These resources can be for the overall assignment configuration, or
  per test case.



* **field:** ``"allow_system_calls"``  
  **type:** _array of strings_  

  The instructor can also override / customize the default
  restrictions on use of system calls within the student code by
  whitelisting additional categories of system calls:
  [grading/system_call_categories.cpp][grading/system_call_categories.cpp]
  [grading/seccomp_functions.cpp][grading/seccomp_functions.cpp]

  _FIXME: UPDATE & DOCUMENT_



### Specification of a Testcase


* **field:** ``"type"``  
  **type:** _string_   
  **value:** ``"Compilation"``, ``"FileCheck"``, or ``"Execution"``  
  **default value:** ``"Execution"``  

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
  **default value:** ``false``


* **field:** ``"filename"``  
  **type:** _string_ or _array of strings_  
  **REQUIRED** for ``"file_check"`` and ``"execution"`` types


* **field:** ``"executable_name"``  
  **type:** _string_ or _array of strings_  
  **REQUIRED** for ``"compilation"`` testcases

  _FIXME:  Should we rename/collapse this field to filename??_


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
  **default value:** ``empty``

* **field:** ``"textboxes"``  
  **type:** _array of textbox objects_  (Described below)  
  **default value:** ``empty``  
  
  
### Specification of a Notebook


* **field:** ``"title"``  
  **type:** _string_  
  **value:** Title of the item (ex. Question 1)  

* **field:** ``"description"``  
  **type:** _string_  

* **field:** ``"images"``  
  **type:** _array of image objects_  
  
* **field:** ``"input"``  
  **type:** _array of input objects_   
  
  
### Specification of an Image Object


* **field:** ``"image_name"``  
  **type:** _string_   
  **value:** Name of the image file to be displayed.  
  **default value:** ``""``
  
* **field:** ``"alt"``  
  **type:** _string_   
  **value:** Specify alternate text that describes the image, for use with accessibility screen readers.  

* **field:** ``"image_height"``  
  **type:** _int_   
  **value:** Numeric height in pixels to display the image at.  
  **default value:** ``0`` _(displays at native image height)_  


* **field:** ``"image_width"``  
  **type:** _int_   
  **value:** Numeric width in pixels to display the image at.  
  **default value:** ``0`` _(displays at native image width)_

  
### Specification of Notebook Input Objects


* **field:** ``"type"``  
  **type:** _string_  
  **value:** ``"short_answer"``, ``"codebox"``, or ``"multiplechoice"``  
  **description:** Specifies the type of input to display
  
  
### Specification of a Short Answer box (short_answer)


* **field:** ``"label"``  
  **type:** _string_   
  **value:** String description of what to write in the short answer box.  
  **default value:** ``""``
  
  
* **field:** ``"starter_value_string"``  
  **type:** _string_   
  **value:** The text to be prepopulated into the input box  


* **field:** ``"rows"``  
  **type:** _int_   
  **value:** Numeric height of the textbox in rows.  
  **default value:** ``1``


* **field:** ``"filename"``  
  **type:** _string_  
  **value:** Specify a filename that the captured input data will be written to


* **field:** ``"images"``  
  **type:** _array of image objects_   
  **value:** list of the images to be displayed.  
  **default value:** ``empty``



### Specification of a Networked Gradeable
* **field** ``"use_router"``  
  **type:** _boolean_  
  **default value** ``true``  
  **USE:** Used to determine whether a router will be injected into the network.  
  **NOTE:** ``use_router`` can be specified at the global level.  


* **field:** ``"container_name"``  
  **type:** _string_  
  **default value** ``"container0"``, ``"container1"``, etc.  
  **USE:** Used to refer to a container when specifying a network. Student output
  per testcase is stored in the container_name/ subdirectory.    
  **RESERVED VALUES:** The name _"router"_ specifies a docker node through which
  all messages flow. See the router provided in [Submitty Tutorial 16](https://github.com/Submitty/Tutorial/tree/master/examples/16_docker_network_python)
   as an example.


* **field:** ``"commands"``  
  **type:** _string_ -or- _array of strings_  
  **default value:** ``""``  
  **USE:** The commands executed by this docker image. Executed sequentially.


* **field:** ``"outgoing_connections"``  
  **type:** _array of strings_  
  **default value:** ``[]``  
  **USE:** Specifies which containers a container can connect to.    
   __NOTE:__ The router automatically places itself between all nodes to intercept, log, and relay all communications without
  additional specification. To stop this, specify ``use_router = false``


* **field:** ``"container_image"``  
  **type:** _string_  
  **default value:** ``ubuntu:custom``  
  **USE:** If the specified docker_image is present on the submitty system, the
  container will be built using it.

#### Example Specification:


```
//use_router can be specified at the testcase level.
"use_router" : true,
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

1. In networks specified with ``use_router = true``, a _"router"_ node intercepts and relays
student messages. This allows an instructor to log all messages sent within the
system, as well as to add rules in regards to message delay and loss. A router
must be hand specified by the instructor per testcase. See Submitty Tutorial 16
for an example router.

2. It can be important to ensure your containers start in the correct order.
In the example above, a sleep is used on the client to ensure that the server
starts before it.

3. A known bug is causing standard out to fail to flush its buffer in networked
gradeables (confirmed in Python).  As such all professor and student code should either
explicitly flush their stdout or write to a file.

### Dispatcher Actions (Standard Input)

It is possible to communicate with an assignment running in docker via standard input.

```
"dispatcher_actions" :
[
  {
    "action" : "delay",
    "seconds" : 2
  },
  {
    "containers" : ["container0"],
    "action" : "stdin",
    "string" : "Hi there! I'm container0\n"
  },
  {
    "containers" : ["container1"],
    "action" : "stdin",
    "string" : "Hi there! I'm container1\n"
  }
],
```

Dispatcher actions are specified at the testcase level and are delivered
sequentially to student containers.  There are two types of actions, ``stdin`` and ``delay``. Delays specify a
floating point number of seconds delay before the next action is
processed. Standard Input Actions deliver a string to any containers
whose names are specified in the "containers" array. Please note that
many languages require a newline at the end of an input expected on
stdin.

### Interfacing With Graphics Applications

It is possible to provide keyboard and mouse input to running student graphics applications.

#### Delay
Delays a number of seconds before the next action is taken. Useful if the results of the previous action may take some time to render.  

**Fields:**
*  **action:** ``"delay"``   
*  **seconds:** An integer or floating point number greater than 0.

```
{
  "action" : "delay",
  "seconds" : 1
}
```

#### Screenshot
Takes a screenshot of the display. Screenshots are stored as .png files. By default, screenshots
are labeled sequentially per test case (e.g. screenshot_0.png), but they may be given custom
names using the ```name``` field.  

**Fields:**
* **action:** ```screenshot```   
* **name:** *(optional)* A unique name for the image. **NOTE: Do not include file extensions**  

```
{
  "action" : "screenshot",
  "name" : "custom_screenshot_name"
}
```

#### GIF
Creates an animated gif of the display. By default, gifs
are labeled sequentially per test case (e.g. gif_0.gif), but they may be given custom
names using the ```name``` field.  

**Fields:**  
* **action:** ```gif```   
* **seconds:**  The duration of the gif in seconds. An integer or floating point number greater than 0.
* **frames_per_second:**  *(optional)* The integer number of frames to be captured per second. Defaults to 10. Max value is 30.
* **preserve_individual_frames:** *(optional)* Boolean. If true, all individual frames are archived as png files. Defaults to false.
* **name:** *(optional)* A unique name for the gif. **NOTE: Do not include file extensions**  

```
{
  "action" : "gif",
  "seconds" : 5,
  "frames_per_second" : 15,
  "preserve_individual_frames" : false,
  "name" : "custom_gif_name"
}
```

#### Type  
Types a sequence of keys one or more times with a delay between each repetition.
By default, the sequence is typed once with a .1 second delay. Keys within
the sequence are pressed sequentially without delay.

**Fields:**
* **action:** ```type```
* **string:** The string to be typed. Note that each character is entered one after the other. To press all keys together, see the ```key``` command.
* **delay_in_seconds:** *(optional)* An integer or floating point number greater than 0. Specifies the delay between repetitions.
* **presses:** *(optional)* An integer greater than zero. Specifies the number of repetitions.

```
{
  "action" : "type",
  "delay_in_seconds" : 1,
  "presses" : 5
}
```

#### Key  
Presses one or more keys. This action may be done over delayed repetitions.  

**Fields:**
* **action:** ```key```
* **key_combination:**  The key combination to be pressed. Keys can be chained together using the character ```+``` (e.g. ```a+b``` presses  ```a``` and ```b``` at the same time). For a list of keys, see the ```xdotool``` key list.  To press keys one after the other, see the ```type``` command.
* **delay_in_seconds:** *(optional)* An integer or floating point number greater than 0. Specifies the delay between repetitions.
* **presses:** *(optional)* An integer greater than zero. Specifies the number of repetitions.

```
{
  "action" : "type",
  "delay_in_seconds" : 1,
  "presses" : 5
}
```


#### Click and Drag  
The standard version of click and drag starts either at the mouse’s current position or at a position specified by the user. If a mouse button has been specified, that button is pressed down at that position, otherwise, the left mouse button is pressed. The mouse is then moved to coordinates specified by the end position, and the held button is released.  

**Fields:**
* **action:** ```click and drag```
* **start_x:** *(optional)* An integer starting x position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **start_y:** *(optional)* An integer starting y position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **end_x:** *(optional)* An integer ending x position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **end_y:** *(optional)* An integer ending y position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **mouse_button:** *(optional)* ```left```, ```middle```, or ```right```. The mouse button to be clicked. Defaults to ```left```.

```
{
  "action" : "click and drag",
  "start_x" : 0,
  "start_y" : 0,
  "end_x" : 100,
  "end_y" : 100,
  "mouse_button" : "left"
}
```

#### Click and Drag Delta
The delta version of click and drag starts at the current mouse position, clicks the desired mouse button (or left if one isn’t provided) and then moves a specified number of pixels  before releasing. The mouse may not leave the window bounds. However, the function is wrapping, so it will repeatedly click and drag until the desired distance has been moved.   

**Fields:**
* **action:** ```click and drag```
* **end_x:** *(optional)* The amount of x distance over which the click and drag will move. Defaults to zero.
* **end_y:** *(optional)* The amount of y distance over which the click and drag will move. Defaults to zero.
* **mouse_button:** *(optional)* ```left```, ```middle```, or ```right```. The mouse button to be clicked. Defaults to ```left```.

```
{
  "action" : "click and drag delta",
  "end_x" : 1000,
  "end_y" : 1000,
  "mouse_button" : "left"
}
```

####  Click  
Processes a mousedown and a mouseup of the specified mouse button. Defaults to left click.  

**Fields:**
* **action:** ```click```
* **mouse_button:** *(optional)* ```left```, ```middle```, or ```right```. The mouse button to be clicked. Defaults to ```left```.

```
{
  "action" : "click",
  "mouse_button" : "left"
}
```

#### Mouse Move   
Moves the mouse from its current position to the x and y provided, clamped to the screen. Values are provided in screen coordinates.  

**Fields:**
* **action:** ```mouse move``` or ```move mouse``` or ```move```
* **end_x:** *(optional)* An integer ending x position for the mouse in window coordinates. Values will be clamped to within the window's size. Defaults to zero.
* **end_y:** *(optional)* An integer ending y position for the mouse in window coordinates.Values will be clamped to within the window's size. Defaults to zero.

```
{
  "action" : "move",
  "end_x" : 100,
  "end_y" : 100
}
```

#### Center Mouse   
Moves the mouse to the center of the student’s window.     

**Fields:**
* **action:** ```center```

```
{
  "action" : "center"
}
```

#### Move Mouse to Origin
Moves the mouse to the origin (upper left) of the student’s window.  

**Fields:**
* **action:** ```origin```

```
{
  "action" : "origin"
}
```

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

     _FIXME: Document this!_


[grading/default_config.h]: https://github.com/Submitty/Submitty/blob/master/grading/default_config.h
[grading/system_call_categories.cpp]: https://github.com/Submitty/Submitty/blob/master/grading/system_call_categories.cpp
[grading/seccomp_functions.cpp]: https://github.com/Submitty/Submitty/blob/master/grading/seccomp_functions.cpp
[cpp_custom]: https://github.com/Submitty/Submitty/tree/master/more_autograding_examples/cpp_custom
