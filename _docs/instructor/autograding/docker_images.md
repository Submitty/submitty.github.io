---
title: Custom Docker Images
category: Instructor > Autograding
---

Some assignments may require specific languages, packages, libraries, etc.
We can't install all of these different requirements on the base system.
We offer the ability to use custom Docker images for autograding.
We pull images from Dockerhub and allow you to run any command inside
that container. Below are steps to make your own or edit an image:

1. Create a Dockerfile or fetch an existing one

    If this is a new Dockerfile, choose a base image.
    We recommend you choose the same base image as your system OS (i.e. ubuntu:22.04)
    but you could, in theory, pick any base image you want.

2. Add any packages, libraries, languages, etc that you need

3. Build your image locally

    Run the following in the directory containing the Dockerfile.
    Replace `NAME` with a tag name you would like for your Docker image.
    ```
    docker build -t NAME .
    ```

4. Test your image locally

    Run the following to enter a bash shell inside your container:
    ```
    docker run --rm -it NAME bash
    ```

    Verify that you can call any specific commands you want to on Submitty.

5. Push your tag to Dockerhub

    First you need to tag your image in the proper format for Dockerhub.
    An example would be `submitty/autograding-default:latest`.
    ```
    docker image tag NAME USERNAME/REPONAME:TAGNAME
    ```

    Next you need to push it to Dockerhub. If you have not logged into Docker on your CLI then run:
    ```
    docker login
    ```

    Finally, push the image:
    ```
    docker push USERNAME/REPONAME:TAGNAME
    ```

    _NOTE: At RPI, we maintain a [GitHub repo](https://github.com/Submitty/DockerImagesRPI)
    to automate this process when Dockerfiles are updated in the correct location in the repo._

6. Add the Docker image to Submitty via the Docker UI

    Click [here](/instructor/autograding/docker_ui) to learn more about how to do this.

7. In your autograding `config.json`, specify this new image.

    In the root level of your JSON object, add:
    ```
    "autograding_method": "docker",
    ```

    You also need to choose your specific image which there are 2 ways to do this.

    You can specify an image at the root level which will apply to all test cases.
    Add the following to the root level of your JSON object:
    ```
    "container_options": {
        "container_image": "IMAGE_NAME"
    },
    ```
    Replace `IMAGE_NAME` with your full image tag you added to the Docker UI.
    Once this is complete, you can specify the command you want to be run.

    Another way this can be done is by specifying the image at each test case.
    See [Networked Containers](/instructor/autograding/networking) for more on this.

