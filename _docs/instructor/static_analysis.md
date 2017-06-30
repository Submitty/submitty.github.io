---
title: Static Analysis
category: Instructor
order: 9
---


Submitty provides a number of utilities for analysis of student code
through the [assignment autograding configuration](assignment_configuration) interface.
Many simple use-cases can be addressed using ``submitty_count``, which
allows an instructor to count occurrences of a variety of syntactic
features within student code.


To use ``submitty_count``, simply invoke it as a command within the ``config.json`` file for a
given assignment, supplying the type of feature to count, the feature itself,
any number of source files, and optional configuration flags.  For example:

```
"submitty_count --language python function print *.py"
```

_Note: `submitty_count` is an alias for a program installed on the
submitty server.  You can directly run the command to see how it works.
Here's the same example:_

```
/usr/local/submitty/SubmittyAnalysisTools/count --language python function print *.py
```

This example will output the number of calls to the function ``print`` in all
of the Python source files in the current directory. Another example:

```
"submitty_count -l c token Goto main.cpp"
```

This second example will output the number of occurrences of the token ``goto`` in the
C/C++ source file ``main.cpp``.


Here are a couple sample configurations:  
[Tutorial Example: 04 Python Static Analysis](https://github.com/Submitty/Tutorial/blob/master/examples/04_python_static_analysis/config/config.json)  
[Tutorial Example: 05 C++ Static Analysis](https://github.com/Submitty/Tutorial/tree/master/examples/05_cpp_static_analysis/config/config.json)


___

## Countable Features
Currently, three feature types can be counted: tokens, nodes, and functions.


### Tokens

A token is a representation of a syntactic feature as a member of a set of
categories. Within Submitty, we discard almost all other data except for this
category, allowing many difficult parts of source code analysis to be
superseded. For example, imagine a scenario where an instructor would want to
count the number of uses of ``goto`` in a C program.
Take the following example of student code:

```
/* Assignment 1: Don't use goto! */
#include <stdio.h>
int main() {
    printf("I'm not using goto ");
}

```

The use (or lack thereof) of ``goto`` could certainly be detected by means of,
say, simple regular-expression based search, but it would be difficult to
handle the cases where ``goto`` is used inside a comment or string. Contrast
this to the token-based search approach. The previous code fragment tokenizes
to the following:

```
Int Identifier LeftParen RightParen LeftCurly Identifier LeftParen StringLiteral
RightParen Semicolon RightCurly
```

In this representation, it is very easy to determine that ``goto`` is not being
used.

Counting tokens handles many common automatic grading scenarios, and
should be the first tool considered when writing an assignment that
requires static analysis.  Only seek out more advanced options when
necessary.

__TODO: Insert instructions to produce the intermediate tokens so the
instructor user can experiment.__

__TODO: Insert link to list of valid tokens that can counted.__


### Nodes

The next level of analysis enables counting _nodes_ within a parse tree, which
is a translation of the textual source into a tree structure.  Within
Submitty, we assign each node in the parse tree some number of textual
tags. For example, this code fragment:

```
while True:
    1 + 1
```

parses to the following tree:

```
   Node(Tag "while", Tag "loop")
   ├── Node(Tag "literal", Tag "boolean")
   │   └── DataBool True
   └── Node(Tag "plus", Tag "add", Tag "+")
       ├── Node(Tag "literal", Tag "integer")
       │   └── DataInt 1
       └── Node(Tag "literal", Tag "integer")
           └── DataInt 1

```

Notice here that in addition to the hierarchical structure of the nodes, there is
also a generally hierarchical structure to the tags: boolean and integer literals
both share the "literal" tag, but both also have a more specific tag denoting
what kind of literal is present. This enables the counting of 
specific classes of node. For example:

```
"submitty_count -l python literal *.py"
```

which will return `3`.  In contrast:

```
"submitty_count -l python integer *.py"
```

will return `2`, as it will only count the integer literals.

Distinctions of this kind are not possible with _token_ counting, which only
cares about the actual textual form of a token. Node counting can also be used
to differentiate between different uses of the same token. For example, in
Python the ``For`` token is used for both the ``for`` loop and the list
comprehension. Since the same ``For`` token is present regardless of which of
these features is used, it is not possible to distinguish them using a token
counting approach. However, these features have different nodes in the parse
tree, so by counting nodes with certain tags it is possible to easily
distinguish them.

__TODO: Insert instructions to produce a human readable version of the
parse tree so the instructor user can experiment.__

__TODO: Insert link to valid tags (& nodes?) that can counted.__


### Functions

This method is a bit higher level: it attempts via a language-dependent method
to detect a call to a function with a particular name. This is more easily
"tricked" than the other methods, especially in languages with first-class
functions like Python, but still a useful tool. A common case using this
method at RPI is determining the number of calls to the ``print`` function
present in Python code, for example:

```
"submitty_count function print -l py *.py"
```

__TODO: Insert instructions to produce a human readable version of the
functions found in a specific program(?) so the instructor user can experiment.__

