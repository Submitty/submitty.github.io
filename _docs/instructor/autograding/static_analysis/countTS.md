---
title: Count TS
category: Instructor > Autograding > Static Analysis
---

The command `submitty_count_ts` can be used to count and verify that student submissions for a
programming course contain specific static language features.

To use ``submitty_count_ts``, simply invoke it as a command within the ``config.json`` file for a
given assignment, supplying the type of feature to count, the feature itself and
any number of source files.

Usage of the command:
```
submitty_count_ts -l <language> <countable> <feature> <files>...
```

`Python` as`python` or `py`, `C` as `c` and `C++` as `cpp` are accepted as languages.
`Countable` could be `node`, `call`, `function` or `identifier`. The uses of each countable is described
in the below sections.

Example: 
```
submitt_count_ts -l py call print *.py
```
This example will output the number of calls to the function ``print`` in all
of the Python source files in the current directory.

_Note: `submitty_count_ts` is an alias for a program installed on the
submitty server.  You can directly run the command to see how it works.
Here's the same example:_

```
/usr/local/submitty/SubmittyAnalysisToolsTS/build/submitty_count_ts -l python call print *.py
```

Another example:
```
submitty_count_ts -l cpp node goto main.cpp
```

This second example will output the number of occurrences of the node ``goto`` in the
C/C++ source file ``main.cpp``.

___

## Countable Features
Currently, four feature types can be counted: nodes, function definitions, identifiers, and function calls.

### Nodes

The `submitty_count_ts` command translates the textual student submission into a tree structure. Each node in this tree has a type and this type can be passed as the feature that needs to be counted to the `submitty_count_ts` command.

The nodes contained in the tree generated from a student submission can be viewed using ``submitty_diagnostics_ts`` command.
Usage of the command is as follows
```
submitty_diagnostics_ts -l <language> <files>...
```

This tool outputs JSON data containing the type of each node in the tree and respective portion of the student submission corresponding to each the node.

For example, if you would like to count additions, but are unsure of which node type to count, you could use a test file like:

```
# file.py
print(1 + 1)
```

Running `submitty_diagnostics_ts -l python file.py` on this file will produce the following output:

```
{
    "test.py": [
        {
            "end_col": 13,
            "end_line": 1,
            "node": "call",
            "start_col": 1,
            "start_line": 1
        },
        {
            "end_col": 6,
            "end_line": 1,
            "node": "identifier",
            "start_col": 1,
            "start_line": 1
        },
        {
            "end_col": 13,
            "end_line": 1,
            "node": "argument_list",
            "start_col": 6,
            "start_line": 1
        },
        {
            "end_col": 7,
            "end_line": 1,
            "node": "(",
            "start_col": 6,
            "start_line": 1
        },
        {
            "end_col": 12,
            "end_line": 1,
            "node": "binary_operator",
            "start_col": 7,
            "start_line": 1
        },
        {
            "end_col": 8,
            "end_line": 1,
            "node": "integer",
            "start_col": 7,
            "start_line": 1
        },
        {
            "end_col": 10,
            "end_line": 1,
            "node": "+",
            "start_col": 9,
            "start_line": 1
        },
        {
            "end_col": 12,
            "end_line": 1,
            "node": "integer",
            "start_col": 11,
            "start_line": 1
        },
        {
            "end_col": 13,
            "end_line": 1,
            "node": ")",
            "start_col": 12,
            "start_line": 1
        }
    ]
}

```

The ``node`` attribute in an JSON object corresponds to the node type and could be used to identify the type of the node that needs to be specified as the feature to the ``submitty_count_ts`` command.

Notice that a node ``+`` is present between two ``integer`` nodes.
You could verify that this is the right node by looking at the ``start_line``, ``end_line``, ``start_col``, and ``end_col`` fields, which indicate on what row and column the nodes begin and end within the file.
Once you are sure that the node is correct, you could count it within student submissions with ``submitty_count_ts``:

```
submitty_count_ts -l python node + *.py
```

_Note: `submitty_diagnostics_ts` is an alias for a program installed on the
submitty server.  You can directly run the command to see how it works.
Here's the same example:_

```
/usr/local/submitty/SubmittyAnalysisToolsTS/build/submitty_diagnostics_ts -l python *.py
```

### Function Calls

This method could be used to count calls to a function with a particular name.
For example to count function calls to `print` function in a Python program:

```
submitty_count_ts -l py call print *.py
```

This method could be used to count function calls to functions within a particular library, class or namespace.
For example to count calls to `vector.erase()` function in C++ standard template library:

```
submitty_count_ts -l cpp call erase *.cpp
```

But this may give false positives if the user has a defined function called `erase` and this 
function is called within the submitted code.

### Function Definitions

This method can be used to count definitions of a function with a particular name.
For example to count definitions of a function named `sum` in a C program:

```
submitty_count_ts -l c function sum *.c
```

### Identifiers

This method can be used to count the uses of an identifier with a particular name in student code.
For example to count uses of identifier named `height` in a C++ program:

```
submitty_count_ts -l cpp identifier height *.cpp
```
