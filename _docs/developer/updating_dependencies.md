---
title: Updating Dependencies
category: Developer
---

Within Submitty, we have a number of third-party dependencies to help augment the system. These
can be broken down largely into a couple of categories:

1. Other Submitty Repositories
2. Third-Party Repositories
3. Third-Party Distributions
4. Third-Party Dependencies

## Other Submitty Repositories

While much of the code that makes up Submitty resides within the primary 
[Submitty/Submitty](https://github.com/Submitty/Submitty) repository, there are some components
that reside outside of it. These include:

1. [Submitty/AnalysisTools](https://github.com/Submitty/AnalysisTools)
1. [Submitty/Lichen](https://github.com/Submitty/Lichen)
1. [Submitty/RainbowGrades](https://github.com/Submitty/RainbowGrades)
1. [Submitty/Tutorial](https://github.com/Submitty/Tutorial)

Each of these dependencies are installed/updated as part of the process of running INSTALL_SUBMITTY.sh,
which in-turn calls `.setup/bin/update_repos.sh` to either clone or update the repo as necessary. The
version that gets installed for each of these is defined in `.setup/bin/versions.sh`. Each of these
are cloned into `${SUBMITTY_INSTALL_DIR}/GIT_CHECKOUT/`. Additionally, we do download the
generated binaries for the appropriate version of Submitty/AnalysisTools into 
`${SUBMITTY_INSTALL_DIR}/SubmittyAnalysisTools` to avoid the expensive process of getting the
whole stack toolchain to compile it on the spot.

## Third-Party Repositories

While the `GIT_CHECKOUT` folder mostly holds Submitty related repos, it does also contain these
third-party repos:

1. [nlohmann/json](https://github.com/nlohmann/json)

These repos are cloned under `${SUBMITTY_INSTALL_DIR}/GIT_CHECKOUT/vendor/`. Currently they are
not versioned.

## Third-Party Distributions

For autograding, Submitty relies on a handful of third-party tools to handle stuff like memory
analysis and test runners for some languages. These are:

1. [DrMemory](https://drmemory.org/)
1. [Junit 4](https://junit.org/junit4/)
1. [JaCoCo](https://www.eclemma.org/jacoco/)

The versions that we install of these is defined in `.setup/bin/versions.sh`. These are only
installed at initial system installation as part of `.setup/install_system.sh`. For
each of these, we download the compiled versions of the tool and then install into the
appropriate directory (e.g. `${SUBMITTY_INSTALL_DIR}/java_tools` for Java stuff, 
`${SUBMITTY_INSTALL_DIR}/drmemory`).

## Third-Party Dependencies

To manage PHP dependencies, we use [composer](https://getcomposer.org/), and the packages it installs
can be found in [site/composer.json](https://github.com/Submitty/Submitty/blob/master/site/composer.json).

To manage JS/CSS dependencies, we use [npm](https://npmjs.com), and the packages it installs can be found
in [site/package.json](https://github.com/Submitty/Submitty/blob/master/site/package.json).

As Submitty is an application, not a library, each dependency in both of those files are pinned to a specific
version, and should not be set to use a range (e.g. use `1.0.0` over `^1.0.0`).

For python dependencies, we use [pip](https://pip.pypa.io/en/stable/). These are installed currently only at
installation time, and not managed by Submitty currently. The current list of packages can be found in
[.setup/install_system](https://github.com/Submitty/Submitty/blob/master/.setup/install_system.sh). You should
search for "pip3 install" to find all things that pip installs.
