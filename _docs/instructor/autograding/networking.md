---
title: Distributed / Networked Applications
category: Instructor > Autograding
redirect_from:
  - /instructor/assignment_configuration/networking
---




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
  all messages flow. See the router provided in [Submitty Tutorial 16](https://github.com/Submitty/Tutorial/tree/main/examples/16_docker_network_python)
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
