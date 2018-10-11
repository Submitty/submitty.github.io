---
category: Student
title: Testing Networked Applications Locally
---


## Pulling Images

We are currently hosting the docker images that will be used for grading on the
[Docker Hub](https://hub.docker.com/u/submitty/).  

You can can "pull" the most recent submitty images using the commands:  
```
docker pull submitty/python:2.7
docker pull submitty/python:3.6
docker pull submitty/java:8
```


## Creating Containers

Once you have pulled the correct image from Docker Hub, you can create some
containers. Container creation does not start a container, but rather merely
creates it and gets it ready to run.

Within Submitty, we create our containers using a command similar to this one:  

**NOTE: capitalized arguments in a command are meant to be substituted/customized.**

```
docker create -i -t -v SOURCE_CODE_DIRECTORY:SOURCE_CODE_DIRECTORY -w SOURCE_CODE_DIRECTORY --name UNIQUE_CONTAINER_NAME CONTAINER_IMAGE FULL_EXECUTABLE_PATH
```  

``-i`` boots the container in interactive mode, allowing submitty to pipe standard
input to the containers.  

``-t`` Allocates a pseudo-TTY so that you can interact with your container.  

``-v`` mounts a directory on the host machine so that output persists after the
docker exits. ``SOURCE_CODE_DIRECTORY:SOURCE_CODE_DIRECTORY`` specifies first
the path to the mounted directory on the host machine, then the path to which
it will be mapped in the docker container.  

``-w`` Specifies the working directory within the container.  

``--name UNIQUE_CONTAINER_NAME`` allows you to specify the unique name by which you
can address your container. **NOTE: This can be used as the hostname for the container when you create sockets.**

``CONTAINER_IMAGE`` is the image with which the container will be built
(e.g. submitty/python:3.6 or submitty/java:8)  

``FULL_EXECUTABLE_PATH`` is the path to the executable that you want to run on the
container.  

**NOTE: Specify ``FULL_EXECUTABLE_PATH`` to be ```/bin/bash``` to drop into a bash shell when the container is started.**

## Networking Containers  

Once you have created a few containers, you can create a network with this command:

```
docker network create --driver bridge NETWORK_NAME
```
Where you can specify your own network_name.

Then, you can connect your containers to the network as follows:
```
docker network connect NETWORK_NAME CONTAINER_NAME
```

## Starting Containers  

A created container can be started using the command:
```
docker start -i --attach CONTAINER_NAME
```

## Cleaning Up  

When the run is finished, it is important to stop and remove the containers and network we have created:  
```
docker stop CONTAINER_NAME
docker rm CONTAINER_NAME
docker network rm NETWORK_NAME
```

Note that these steps can be dropped into a bash script and customized.  
