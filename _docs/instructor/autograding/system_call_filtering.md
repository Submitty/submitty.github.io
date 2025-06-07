---
category: Instructor > Autograding
title: System Call Filtering
---



We use the GNU/Linux [seccomp](https://en.wikipedia.org/wiki/Seccomp)
"Secure Computing" library to monitor and limit the Linux system calls
that are allowed within untrusted student code.  This feature helps
provide server security, manage compute resources, and ensure
adherence to programming assignment requirements.


### What are GNU/Linux system calls?  What are the Submitty categories of system calls?

Computer programs access resources from the operating system (e.g.,
memory, disks, files, processes, networks, etc.) through
[system calls](https://en.wikipedia.org/wiki/System_call).

Submitty has organized all available Linux system calls into
categories by purpose.  The list of available system calls changes
over time with new versions of the operating system kernel.  New
system calls are added *and* the system calls used by
publicly-available programs and libraries may also change accordingly
with new releases.

The current categories and lists of calls within each category can be
inspected in the Submitty source code:  
[grading/system_call_categories.cpp](https://github.com/Submitty/Submitty/blob/main/grading/system_call_categories.cpp)


### What system calls are used by a specific program?

The GNU/Linux [strace](https://strace.io/) utility can be used to
collect all system calls made in a run of a program.  First, install
strace on your machine.

```
sudo apt-get install strace
```
*NOTE:* `strace` is already installed on the
Submitty server and many of our sample docker container images for autograding - 
hosted on [Dockerhub](https://hub.docker.com/u/submitty) 
and created with these
[dockerfiles](https://github.com/Submitty/DockerImages).


Then, if this is how you usually run your program:

```
my_program.exe argument1 argument2
```

Then you will just prepend `strace` to the command line and capture
the STDERR output stream to a file.

```
strace  my_program.exe argument1 argument2  2> strace_output.txt
```

The captured output is a chronological listing of every system
call.  It will look something like this:

```
execve("/usr/bin/gcc", ["gcc", "buggy.c"], 0xffffd49434a8 /* 39 vars */) = 0
brk(NULL)                               = 0x15d41000
mmap(NULL, 8192, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) = 0xffff99261000
faccessat(AT_FDCWD, "/etc/ld.so.preload", R_OK) = -1 ENOENT (No such file or directory)
openat(AT_FDCWD, "/etc/ld.so.cache", O_RDONLY|O_CLOEXEC) = 3
newfstatat(3, "", {st_mode=S_IFREG|0644, st_size=42636, ...}, AT_EMPTY_PATH) = 0
mmap(NULL, 42636, PROT_READ, MAP_PRIVATE, 3, 0) = 0xffff99221000
close(3)                                = 0
openat(AT_FDCWD, "/lib/aarch64-linux-gnu/libc.so.6", O_RDONLY|O_CLOEXEC) = 3
read(3, "\177ELF\2\1\1\3\0\0\0\0\0\0\0\0\3\0\267\0\1\0\0\0\340u\2\0\0\0\0\0"..., 832) = 832
newfstatat(3, "", {st_mode=S_IFREG|0755, st_size=1637400, ...}, AT_EMPTY_PATH) = 0
...
<snip>
```

Once you have the file, you can use the Submitty
`system_call_check.out` utility on a Submitty production installation
or development machine to scan that file and compare it to our current
sytem call categories and generate the set of categories necessary to
allow that program to run within a Submitty autograding configuration.

```
/usr/local/submitty/bin/system_call_check.out strace_output.txt
```


### Specifying system calls allowed by student code

Within the analysis output of the `system_call_checkout.out` utility,
will be the config.json syntax to enable all system calls used by your
program.  For example:

```
"allow_system_calls" : [
    "COMMUNICATIONS_AND_NETWORKING_INTERPROCESS_COMMUNICATION",
    "COMMUNICATIONS_AND_NETWORKING_SIGNALS",
    "FILE_MANAGEMENT_MOVE_DELETE_RENAME_FILE_DIRECTORY",
    "PROCESS_CONTROL_ADVANCED",
    "PROCESS_CONTROL_NEW_PROCESS_THREAD"
]
```

You can just copy paste that into your `config.json` either at the
global level, or per test case.

Alternately, you can simply enable all system calls that are in
*restricted* category:

```
"allow_system_calls" : [ "ALLOW_ALL_RESTRICTED_SYSTEM_CALLS" ],
```

Again, this can be set at the global level or per-test case.


An example autograding configuration using the `"allow_system_calls"`
syntax is here:

[more_autograding_examples/c_system_call_filtering/config/config.json](https://github.com/Submitty/Submitty/blob/main/more_autograding_examples/c_system_call_filtering/config/config.json)


### Attempted use of disallowed system call

If the execution of student code attempts to use a system call that is
not allowed, the program will be terminated.  The error message below
will be placed in the `execute_logfile.txt` for that autograding test
case.  This `execute_logfile.txt` will be displayed to the student --
*unless the autograding configuration specifies that this file should
be hidden from the student*.

```
********************************************************************
* DETECTED USE OF DISALLOWED SYSTEM CALL                           *
* http://submitty.org/instructor/autograding/system_call_filtering *
********************************************************************

Program Terminated 
```

IMPORTANT NOTE: Unfortunately, the `seccomp` library does not report
*which* disallowed system call was used.

Students who see this message should first review the programming
assignment instructions and confirm they have followed detailed
instructions about resources and techniques that are allowed.  Only
the instructor for the course can modify the list of system calls that
are allowed for autograding that assignment.