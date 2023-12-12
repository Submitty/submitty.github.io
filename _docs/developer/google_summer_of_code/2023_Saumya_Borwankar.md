---
title: Saumya Borwankar
category: Developer > Google Summer of Code 2023
---

My project for the Google Summer of Code 2023 was to improve already exisiting docker pipelines and streamline them to better support previous assignments and tutorials. I was also responsible to update all the previous dockerfiles and autograding examples to support docker execution. Docker provides an isolated environment for execution of student submitted code ensuring security and constraints. This is an important need for Submitty to ensure no malicious code submitted by students affect the underlying hardware or software.

## Submitty and dockers

Submitty uses config files to build gradeables and I had to familiarize how these config files are used to build gradeables. I was responsible for extensive testing and recreating autograding examples and convert the already existing config files to use docker instead of running on a bare metal machine. I got a chance to interact with the Submitty WebUI to build these gradeables and test out all the autograding examples.

Submitty also has a dockerhub account where they store all their docker images. An admin has to manually push docker images to this dockerhub account when a new docker image is created by an instructor. I was responsible for automating this pipeline and building a github action workflow for automatic build and pushing of dockerfile to submitty's dockerhub account. Any new dockerfile that was pushed to the Dockerfile repository was automatically build and pushed to the dockerhub account with customizable tags using a config file present in the repository.

I also had the opportunity to streamline and work on the Dockerfiles repo maintained by Submitty that holds all their dockerfiles and docker related information. I rebuilt all the dockerfiles that were outdated and broken. I was also responsible to setup a new standard on how the dockerfiles in the repository were stored and handled which led to a more structured repository which in turn would help new contributors to maintain the repository and contribute.

Overall, my journey during this program allowed me to bolster Submitty's Docker pipelines, facilitating secure and efficient code execution for student submissions, while also fostering a more organized and collaborative repository ecosystem.

### Pull Requests in Submitty

- [Bugfix: Broken links](https://github.com/Submitty/Submitty/pull/9319)
- [Fix button texts](https://github.com/Submitty/Submitty/pull/9019)
- [Remove logging errors](https://github.com/Submitty/Submitty/pull/8952)
- [Replace outdated methods](https://github.com/Submitty/Submitty/pull/8856)
- [Update sort type for "Autograding" field](https://github.com/Submitty/Submitty/pull/8855)
- [Better error debugging for errors](https://github.com/Submitty/Submitty/pull/9710)
- [Dockerize existing autograding examples](https://github.com/Submitty/Submitty/pull/9445)

### Pull Requests in Dockerfiles

- [Broken Sym links](https://github.com/Submitty/DockerImages/pull/30)
- [Matrix based github action for docker hub](https://github.com/Submitty/DockerImages/pull/19)
- [Fixing broken Dockerfiles](https://github.com/Submitty/DockerImages/pull/20)
- [Cleanup and Structure Dockerfile repository](https://github.com/Submitty/DockerImages/pull/21)
- [Updating latest.json](https://github.com/Submitty/DockerImages/pull/22)
- [Structure change for verilog](https://github.com/Submitty/DockerImages/pull/24)
- [Bugfix: Variable name](https://github.com/Submitty/DockerImages/pull/25)
- [Bugfix: Rerun workflow trigger](https://github.com/Submitty/DockerImages/pull/26)
- [Bugfix: Seperate verilog rerun](https://github.com/Submitty/DockerImages/pull/27)

## Pull Requests in submitty.github.io

- [Removed duplicate installation steps](https://github.com/Submitty/submitty.github.io/pull/501)

While working with Submitty I got to work with bash, python, PHP and dockerfiles. I also got the chance to review Pull requests. This was my first experience with reviewing pull requests.

## Acknowledgement:

I deeply appreciate the invaluable guidance and advice generously provided by my mentors, Barbara Cutler and Chris Reed. Their prompt responses to my queries and their consistent provision of essential resources have been instrumental to my progress. Expressing my gratitude extends to the dedicated RPI students and fellow GSOC-contributors who collaborated on enhancing Submitty throughout the summer. The journey of working on this project has been truly enriching, allowing me to acquire meaningful experience. I wish to continue to contribute to Submitty in the future.

For any inquiries, feedback, or additional information, please feel free to contact me at **[sborwankar@hawk.iit.edu](mailto:sborwankar@hawk.iit.edu)**.

Thank you,

**[Saumya Borwankar](https://www.linkedin.com/in/saumyaborwankar)**.
