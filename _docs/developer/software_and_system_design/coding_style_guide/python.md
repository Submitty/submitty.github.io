---
title: Python
category: Developer > Software and System Design > Coding Style Guide
redirect_from:
  - /developer/coding_style_guide/python
---

__Minimum Version__: 3.8

For Python, we use [ruff](https://docs.astral.sh/ruff/)
to check Python code such that it follows things laid out in [PEP-8](https://www.python.org/dev/peps/pep-0008/), 
[PEP-257](https://www.python.org/dev/peps/pep-0257/), etc. The code is linted as part of our automated GitHub CI
testsuite to ensure compliance. To locally lint the code, you will need to install ruff:
```bash
pip install ruff
```
and then you can just run `ruff check` at the root to check all files or pass it an individual file to check just that.
To see all files that are currently checked as part of GitHub CI, please look at the `pyproject.toml` config file.

For formatting, you can run `ruff format --check` to see formatting fixes, and `ruff format` to automatically apply them.
