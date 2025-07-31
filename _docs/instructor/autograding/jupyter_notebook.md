---
title: Jupyter Notebooks
category: Instructor > Autograding
---

### Example Configuration

The following configuration can be found on the [Submitty GitHub](https://github.com/Submitty/Submitty/tree/main/more_autograding_examples/jupyter_notebook_autograding).

```json
{
  "autograding" : {
        "submission_to_runner" : [  "*.ipynb", "*.png" ],
        "work_to_details" : [ "**/*.ipynb", "**/*.png", "**/*.txt", "**/*.err" ]
    },
  "autograding_method": "docker",
  "resource_limits" : {
    "RLIMIT_NPROC" : 32,
    "RLIMIT_FSIZE": 20971520 // 20 MB
  },
  "max_submission_size": 10485760, // 10 MB
  "container_options": {
    "container_image": "submitty/jupyter:latest"
  },
  "allow_system_calls": [
    "COMMUNICATIONS_AND_NETWORKING_INTERPROCESS_COMMUNICATION",
    "COMMUNICATIONS_AND_NETWORKING_KILL",
    "COMMUNICATIONS_AND_NETWORKING_SIGNALS",
    "COMMUNICATIONS_AND_NETWORKING_SOCKETS",
    "COMMUNICATIONS_AND_NETWORKING_SOCKETS_MINIMAL",
    "FILE_MANAGEMENT_MOVE_DELETE_RENAME_FILE_DIRECTORY",
    "FILE_MANAGEMENT_RARE",
    "PROCESS_CONTROL_ADVANCED",
    "PROCESS_CONTROL_NEW_PROCESS_THREAD",
    "PROCESS_CONTROL_MEMORY_ADVANCED",
    "PROCESS_CONTROL_SYNCHRONIZATION",
    "PROCESS_CONTROL_SCHEDULING",
    "FILE_MANAGEMENT_PERMISSIONS",
    "UNKNOWN"
  ],
  "testcases": [
    {
      "title": "Executes successfully",
      // Although wildcard is used, the grader will only expect one notebook file. Use if filename cannot be determined.
      "command": "jupyter_notebook_grader -i *.ipynb -o executed.ipynb",
      "points": 1,
      "validation": [
        {
          "method": "fileExists",
          "actual_file": "executed.ipynb",
          "show_actual" : "always",
          "show_message" : "always"
        }
      ]
    },
    {
      "pre_commands" : [
        {
          "command" : "cp",
          "testcase" : "test01",
          "source" : "cell1*.*",
          "destination" : "./"
        }
      ], 
      "title": "STDOUT",
      "points": 1,
      "validation": [
        {
          "method": "diff",
          "actual_file": "cell1_stdout.txt",
          "expected_string" : "hello world!"
        },
        {
          "method" : "warnIfEmpty",
		      "actual_file" : "cell1_stderr.txt",
		      "show_actual" : "always",
          "deduction" : 0.0
        },
        {
          "method" : "warnIfEmpty",
		      "actual_file" : "cell1_source.txt",
		      "show_actual" : "always",
          "deduction" : 0.0
        },
        {
          "method" : "errorIfNotEmpty",
		      "actual_file" : "cell1.err",
		      "show_actual" : "always",
          "deduction" : 0.0
        }
      ]
    },
    {
      "pre_commands" : [
        {
          "command" : "cp",
          "testcase" : "test01",
          "source" : "cell2*.*",
          "destination" : "./"
        }
      ], 
      "title": "Markdown",
      "points": 1,
      "validation": [
        {
          "method": "diff",
          "actual_file": "cell2.txt",
          "expected_string" : "## 2. Create IPython images with the given \"one.png\" and \"two.png\".\nUse `from IPython.display import Image`"
        },
        {
          "method" : "errorIfNotEmpty",
		      "actual_file" : "cell2.err",
		      "show_actual" : "always",
          "deduction" : 0.0
        }
      ]
    }
}
```
### Required Fields

For autograding Jupyter Notebooks, the following fields must be included in your autograding configuration.

```json
{
  "autograding" : {
        "submission_to_runner" : [  "*.ipynb", "*.png" ],
        "work_to_details" : [ "**/*.ipynb", "**/*.png", "**/*.txt", "**/*.err" ]
    },
  "autograding_method": "docker",
  "container_options": {
    "container_image": "submitty/jupyter:latest"
  },
  "allow_system_calls": [
    "COMMUNICATIONS_AND_NETWORKING_INTERPROCESS_COMMUNICATION",
    "COMMUNICATIONS_AND_NETWORKING_KILL",
    "COMMUNICATIONS_AND_NETWORKING_SIGNALS",
    "COMMUNICATIONS_AND_NETWORKING_SOCKETS",
    "COMMUNICATIONS_AND_NETWORKING_SOCKETS_MINIMAL",
    "FILE_MANAGEMENT_MOVE_DELETE_RENAME_FILE_DIRECTORY",
    "FILE_MANAGEMENT_RARE",
    "PROCESS_CONTROL_ADVANCED",
    "PROCESS_CONTROL_NEW_PROCESS_THREAD",
    "PROCESS_CONTROL_MEMORY_ADVANCED",
    "PROCESS_CONTROL_SYNCHRONIZATION",
    "PROCESS_CONTROL_SCHEDULING",
    "FILE_MANAGEMENT_PERMISSIONS",
    "UNKNOWN"
  ]
}
```

You may also need to pass in resource limit values or a max submission size.

```json
"resource_limits" : {
    "RLIMIT_NPROC" : 32, // 
    "RLIMIT_FSIZE": 20971520 // 20 MB
  },
"max_submission_size": 10485760, // 10 MB
```

`RLIMIT_NPROC` will allow the necessary resources for the script to execute a submitted Jupyter Notebook.

`RLIMIT_FSIZE` allows the script to save the notebook in Submitty. In this case, it allows at most a 20 MB file to be executed and saved.

### Precommands

Because of the saved outputs, you will need to apply precommands to each testcase that requires files generated from the validation
method.

```json
{
      "pre_commands" : [
        {
          "command" : "cp",
          // Assuming the first testcase is the case where the validation method was run
          "testcase" : "test01",
          "source" : "{filename}*.*",
          "destination" : "./"
        }
      ], 
      ...
    },
```

### Validation Method

We offer a validation method that parses the cells in Jupyter Notebooks for autograding. The script requires a single specified 
input notebook (the student's submission) and outputs an executed version of the notebook. If the student has no restrictions on 
the naming convention for their submitted notebook, you can use a wildcard to expect any input.

```
"command": "jupyter_notebook_grader -i *.ipynb -o executed.ipynb"
```

The possible saved files based on parsed output are highlighted below.

| Cell Type |       File Pattern      |                     Description                     |
| --------- | ----------------------- | --------------------------------------------------- |
|  Markdown |     {filename}.txt      |        Contains raw markdown source from cell       |
|   Code    |  {filename}_source.txt  |        Contains Python source code from cell        |
|           |    {filename}_err.txt   | Contains traceback if error occurs, otherwise empty |
|           |  {filename}_stdout.txt  | Captures standard output (e.g., print() statements) |
|           |  {filename}_stderr.txt  |           Captures standard error streams           |
|           |  {filename}_result.txt  |         Text representation of cell's result        |
|           |      {filename}.png     |               Generated image outputs               |

By default, the filenames are generated based on the index of the cell in the notebook, starting from 1.

### Submitty IDs

Instructors can add Submitty IDs to mark specific cells in Jupyter Notebooks to grade. These specified IDs will replace the 
default filename of the saved output (e.g. cell1.txt --> {submitty_id}.txt). If students modify their provided Jupyter Notebook
to be out of order, this method will correctly find the cell to grade. Note that your autograding configuration will also need
to match the name of the saved file.

```json
{
  "pre_commands" : [
    {
      "command" : "cp",
      "testcase" : "test01",
      "source" : "{submitty_id}*.*",
      "destination" : "./"
    }
  ], 
  "title": "STDOUT",
  "points": 1,
  "validation": [
    {
      "method": "diff",
      "actual_file": "{submitty_id}_stdout.txt",
      "expected_string" : "hello world!"
    }
  ]
}
```

Jupyter Notebook provides an option to easily edit cell metadata, introduced in [7.1.0](https://jupyter-notebook.readthedocs.io/en/stable/changelog.html#id116). In the `Edit` dropdown, you can find
`Edit Notebook Metadata`. An editor panel will open on the right side of your screen to easily type in the metadata.

![](/images/jupyter_metadata.png)

An alternative option would be to manually edit the Jupyter Notebook JSON itself to include the `submitty_id` property in a cell's metadata.