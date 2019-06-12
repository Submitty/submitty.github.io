---
title: Python
category: Developer
order: 6
---

__Minimum Version__: 3.4

For Python, we use [flake8](http://flake8.pycqa.org/en/latest/) to check Python code such that it follows things laid out in
[PEP-8](https://www.python.org/dev/peps/pep-0008/), [PEP-257](https://www.python.org/dev/peps/pep-0257/), etc. The code is
linted as part of our automated Travis-CI testsuite to ensure compliance. To locally lint the code, you will need to
install three modules:

    pip3 install flake8 flake8-bugbear flake8-docstrings

and then you can just run `flake8` at the root to check all files or pass it an individual file to check just that.
To see all files that are currently checked as part of Travis-CI, please look at the `.flake8` config file.

For version of Python that code should support, you must support the minimum version of Python3 that comes by default
with our supported distros, which at this time is Python 3.4 in Debian 7.