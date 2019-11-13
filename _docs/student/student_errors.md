---
category: Student
title: Debugging Submitty Output
---


### Common user errors

Your code is not tested locally first, Submitty should be used as the
final submission server, not as a debugger. Before submitting anything
make sure that your able to run your code locally without error.
In addition the instructor may deciede to use hidden tests which still
reveal the grade. Often these tests corner cases and exactly what those
could be vary by your program but common cases to consider are positive, 
negative, zero, and floating point values and how your code performs give
unexpected but valid input.

Often times there may be a missing punctuation or small typo in the output
If you see that your not getting full cedit carefully read over the student
and expected output to be sure you didnt miss a red highlighting mark

![](/images/typo.png)

Invisible typos are hard to see but with the visualize whitespace button
next to the output that can make it easier to catch pesky spaces and new lines

One of the most common errors that can occur happen because Submitty runs on
Ubuntu, a version on Linux, and many students use Windows. If your running into
an issue with new lines. That is probably due to "\r\n" vs "\n". Windows uses
"\r\n" and if your output uses that for new lines your output wont match Submitty. 

### Kill Signal

Kill signals exist to prevent a piece of code from running to long and using
up reasources. Sometimes a kill signal will be sent due to an infinte loop
in your code. If you do not get an infinte loop during local testing it is
possible the the inputs being used on submitty are causing your code to loop.
Even if you did not experiance this during testing

The most common reason for a kill signal is the instructor set a timeout.
As a result it is possible that the set timeout is too low and your code
works correctly. However, before jumping to that conclusion timeouts are
the most common way to test runtime. Certain data structures such as lists
perform operations slower than hashmaps or trees-like structures. If your code
gets a kill signal and you are using specific data structures be sure you are
using them correctly

If you are using python, ineffeicant use of dictionaries, and sets can cause this error to occur.

![](/images/killSignal.png)

### Segmentation Fault

For anyone who has ever programmed in a language with explicit memory managment such as C/C++
you are probably familiar with the infamous and seemingly unhelpful error know as Segmentation Fault.
In short however a SegFault is the result of a memory access violation.

This can occur for a number of reasons, first case we will look at is going out of bounds. 
If while iterating over a list your index is out of the range of the list this can 
result in a memory SegFault.

Another possibily is when using pointers, if a pointer on the stack is initialzied to NULL
or never intialized in the first place but you try to dereference it this is the same thing 
as a NUllPointerException in Java and is a very common issue when dealing with pointers 
which are commonly found when dealing with Tree structures and and linked lists.

Another possible memory error which can occur is if the runtime stack 
gets too large. this can happen as the result of very complex computations 
but since submitty is a teaching tool lets assume the problems given are 
not so large that you run out of memory trying to solve it.  A common example 
of this is infinite recursion. Make sure the base case is eventually called.

There are other reasosn for SegFaults but these are very common examples.
However what ever the reason DrMemory/Valgrind and gdb are exellent tools to 
help with more advanced errors if print debugging isnt cutting it. 