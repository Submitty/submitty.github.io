---
title: Autograding Specification
category: Instructor > Autograding
redirect_from:
  - /instructor/assignment_configuration/specification
---


### Overall Specification of a ``config.json`` file

You are allowed to have C/C++ style comments in a `config.json` file.
These will be removed before compilation of the autograding
executables.  


* **field:** ``"testcases"``  
  **type:** _array of testcase objects_ ([defined below](#specification-of-a-testcase))  
  **REQUIRED**
  
* **field:** ``"notebook"``  
  **type:** _array of notebook objects_ ([notebook docs](/instructor/assignment_configuration/notebook))


* **field:** ``"assignment_message"``  
  **type:** _string_  
  **default value:** ``""``

* **field** ``"max_submission_size"``  
  **type:** _integer_  
  **default value:** 100000

  This is the max size in bytes of all files combined for a website submission.


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
  
  If the Testcase is for compilation, it will use the following minimum RLIMIT values:
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

* **field:** ``"required_capabilities"``  
  **type:** _string_
  **default value:** ``"default"``

  _Helps define what machine this gradeable should run on. Each machine has a certain set of capabilities, so defining this properly will improve grading speed and reduce errors._

* **field:** ``"autograding_method"``  
  **type:** _string_
  **default value:** ``"jailed_sandbox"``

  _Defines how Submitty will grade this gradeable. Most commonly changed to ``"docker"`` for grading through Docker._


* **field:** ``"container options"``  
  **type:** _string_
  **default value:** ``"jailed_sandbox"``

  _Defines how Submitty will grade this gradeable. Most commonly changed to ``"docker"`` for grading through Docker._

* **field:** ``"autograding"``  
  **type:** _associative array / mapping from string to array_
  
   _These fields define how files are moved through the autograding process._

   * **field:** ``"compilation_to_runner"``  
     **type:** _array of strings_

   * **field:** ``"compilation_to_validation"``  
     **type:** _array of strings_

   * **field:** ``"submission_to_compilation"``  
     **type:** _array of strings_

   * **field:** ``"submission_to_runner"``  
     **type:** _array of strings_

   * **field:** ``"submission_to_validation"``  
     **type:** _array of strings_

   * **field:** ``"work_to_details"``  
     **type:** _array of strings_

   * **field:** ``"use_checkout_subdirectory"``  
     **type:** _string_

* **field:** ``"container_options"``  
  **type:** _associative array / mapping from string to object_

   * **field:** ``"container_image"``  
     **type:** _string_

     _Set this field when using Docker grading to specify which image you would like to use for all testcases by default._

   * **field:** ``"number_of_ports"``  
     **type:** _integer_

   * **field:** ``"single_port_per_container"``  
     **type:** _boolean_

   * **field:** ``"use_router"``  
     **type:** _boolean_

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
  be executed during either the compilation or execution phases of
  automated grading._

* **field:** ``"containers"``  
  **type:** _array of objects_  
  **REQUIRED** for ``"compilation"`` and ``"execution"`` testcases
  if not using ``"command"``

  _Specifies Docker containers for this testcase and what will be run in each of them. Each container is specified by an object with no key that contains the following fields._

   * **field:** ``"commands"``  
     **type:** _string_ -or- _array of strings_

   * **field:** ``"container_name"``  
     **type:** _string_

   * **field:** ``"container_image"``  
     **type:** _string_

     _Set this field when using Docker grading to specify which image you would like to use for a single test case._

   * **field:** ``"number_of_ports"``  
     **type:** _integer_

   * **field:** ``"outgoing_connections"``  
     **type:** _array_

   * **field:** ``"server"``  
     **type:** _boolean_


* **field:** ``"resource_limits"``  
  **type:** _associative array / mapping from string to integer_

  _NOTE: See details for assignment level description above._


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

