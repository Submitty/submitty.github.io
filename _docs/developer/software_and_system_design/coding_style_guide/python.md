---
title: Python
category: Developer > Software and System Design > Coding Style Guide
redirect_from:
  - /developer/coding_style_guide/python
---

__Minimum Version__: 3.8

For Python, we use [flake8](http://flake8.pycqa.org/en/latest/) to check Python code such that it follows things laid out in
[PEP-8](https://www.python.org/dev/peps/pep-0008/), [PEP-257](https://www.python.org/dev/peps/pep-0257/), etc. The code is
linted as part of our automated Travis-CI testsuite to ensure compliance. To locally lint the code, you will need to
install three modules:

    pip3 install flake8 flake8-bugbear

and then you can just run `flake8` at the root to check all files or pass it an individual file to check just that.
To see all files that are currently checked as part of Travis-CI, please look at the `.flake8` config file.
