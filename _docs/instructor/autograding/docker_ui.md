---
title: Docker UI
category: Instructor > Autograding
---

Depending on your assignment, you may need to install new docker
images on the system to perform autograding. You can do this via the
Docker UI page available to instructors with the role `Faculty`.  To
check if you have access, click on "My Profile" from the left sidebar.
If you don't see "Access Level: Faculty", ask your sysadmin to give you
this access.

From the Docker UI page, you can see what capabilities are
available to each machine. You can also see what images
each capability contains. The list of images also allows for
filtering based on capability. If the machine row is red within
the worker machines table, this could mean either the worker is
disabled or there was an error associated with the updating of
said machine. In the case of an error, there will be an area with
the error within the System Wide Information section.

### Adding Images

To add an image to a capability, you must first select the
capability to add to. Next you must provide a valid Docker
tag that is associated with your desired docker image.
The tag must follow the format of ``organization/repository:tag``

To see more on what is allowed in each part, visit
[Docker Tag](https://docs.docker.com/engine/reference/commandline/tag/).

Once the submit button is hit, the server will check if there is a
docker image associated with the provided image field and add it to
the specified capability if so. Note that installation of the image
might take a while, and the page might not reflect the changes
immediately. Note this will automatically update the system as well.

### Updating the system
If you wish to check and update the machines, you can also do so using
the Update dockers and machines button. This is useful for when a new
version of the image is released or if there was an error previously
when updating.
