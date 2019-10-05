---
title: Updating Dependencies
category: Developer
---

Within Submitty, we have a number of third-party dependencies to help augment the system. These
can be broken down largely into a couple of categories:
1. Other Submitty Repositories
2. Third-Party Repositories
3. Third-Party Distributions
4. Front-End Libraries

## Other Submitty Repositories
While much of the code that makes up Submitty resides within the primary
[Submitty/Submitty](https://github.com/Submitty/Submitty) repository, there are some components
that reside outside of it. These include:
1. [Submitty/AnalysisTools](https://github.com/Submitty/AnalysisTools)
1. [Submitty/Lichen](https://github.com/Submitty/Lichen)
1. [Submitty/RainbowGrades](https://github.com/Submitty/RainbowGrades)
1. [Submitty/Tutorial](https://github.com/Submitty/Tutorial)

Each of these dependencies are installed/updated as part of the process of running install_submitty.sh,
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
1. [Emma](https://github.com/Submitty/emma)
1. [Jacoco](https://www.eclemma.org/jacoco/)

The versions that we install of these is defined in `.setup/bin/versions.sh`. These are only
installed at initial system installation as part of `.setup/install_system.sh`. For
each of these, we download the compiled versions of the tool and then install into the
appropriate directory (e.g. `${SUBMITTY_INSTALL_DIR}/java_tools` for Java stuff,
`${SUBMITTY_INSTALL_DIR}/drmemory`).

## Front-End Libraries
Submitty relies on a number of front-end JS/CSS libraries to help make it look and
feel the way it does. Each of these are checked-in and available in the
Submitty/Submitty repository. One of the overarching goals is that Submitty should
not make any calls to outside servers for running the UI.

The dependencies that fall udner this cateogry include:
1. jQuery
1. jQuery.are-you-sure
1. jQuery-UI
1. jQuery-UI-Timepicker-Addon
1. fontawesome
1. google fonts
1. PDF.js
1. Submitty/pdf-annotate.js
1. flatpickr
1. Twig.js
1. CodeMirror

How these are managed/installed can be broken down as follows:

#### CodeMirror
This one is installed to `site/public/js/iframe`. Installation of new versions of CodeMirror
is handled by running `.setup/bin/update_codemirror.sh` which will grab the latest version
of CodeMirror from their website and copy the appropriate minified files into the right
place in the Submitty hierarchy, as well as write the version that is installed to the top
of the main CodeMirror JS file.

#### FontAwesome
FontAwesome is installed to `site/public/vendor/fontawesome`. Updating these files is handled
by running `.setup/bin/update_fontawesome.sh`. You will have to change the `VERSION` variable
in that file to adjust what version of FontAwesome to install.

#### Google Fonts
Google Fonts is installed to `site/public/vendor/google`. Updating these files is handled
by running `.setup/bin/update_googlefonts.sh`. You should not need to often run this file
as the fonts themselves are relatively stable and don't change that much, and they are
meaningfully versioned beyond being committed into this repository.

#### Submitty/pdf-annotate.js

The version of [Submitty/pdf-annotate.js](https://github.com/Submitty/pdf-annotate.js) that
is installed to the server is handled by `.setup/bin/version.sh` where the minified
copy of the sourcecode is gotten via HTTP and installed to `site/public/js/pdf`. This gets
updated/installed as part of running `INSTALL_SUBMITTY.sh` to update the rest of Submitty.

#### PDF.js

This is a dependency of using Submitty/pdf-annotate.js, and it is currently manually
handled for updating. The JS files reside under `site/public/js/pdf` while the CSS files
reside under `site/public/css/pdf`.

#### Everything Else

All other files are manually handled in updating and managing them. All of their JS files
reside under `site/public/js` while their CSS files reside under `site/public/css`. You will
have to open the file to look at the header to determine what version is installed.
