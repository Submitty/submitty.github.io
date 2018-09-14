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

```
docker create -i -t -v source_code_directory:source_code_directory -w source_code_directory --name container# container_image full_executable_path
```  

-i boots the container in interactive mode, allowing submitty to pipe standard
input to the containers.  

-t Allocates a pseudo-TTY so that you can interact with your container.  

-v mounts a directory on the host machine so that output persists after the
docker exits. source_code_directory:source_code_directory specifies first
the path to the mounted directory on the host machine, then the path to which
it will be mapped in the docker container.  

-w Specifies the working directory within the container.  

--name container# is a unique name by which you can address your
container.  

container_image is the image with which the container will be built
(e.g. submitty/python:3.6 or submitty/java:8)  

full_executable_path is the path to the executable that you want to run on the
container.  

## Networking Containers  

Once you have created a few containers, you can create a network with this command:

```
docker network create --driver bridge network_name
```
Where you can specify your own network_name.

Then, you can connect your containers to the network as follows:
```
docker network connect network_name container_name
```

## Starting Containers  

A created container can be started using the command:
```
docker start -i --attach container_name
```

## Cleaning Up  

When the run is finished, it is important to stop and remove the containers and network we have created:  
```
docker stop container_name
docker rm container_name
docker network rm network_name
```

Note that these steps can be dropped into a bash script and customized.  
