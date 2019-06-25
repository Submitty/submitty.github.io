---
title: Coding Style Guide
category: Developer
order: 6
---

To maintain a concise and consistent code base, we'll be trying to adopt a coding style that is loose to allow easy contribution, but also tidy. To do this, we use a combination of style guides per language. Generally, you should be following the style guide for that language closely, though you can potentially deviate within reason. 

The main languages that undergo style critiques on code contributions are C++, PHP, Python, and JavaScript. At some point in the future, for all languages, an appropriate linter (CodeSniffer for PHP, flake8 for Python, etc.) may be added to ensure proper style on contributions.

### Minimum Supported Versions
Each of the core languages that Submitty uses must be one that is installable from the package manager of any
support version of Ubuntu. Other support distros may require the use of third-party sources 
(e.g. https://packages.sury.org/php/ for PHP for Debian). This may mean that we support a version of a language
that has been officially deprecated, but that the distro still supports.

### General Notes
Code should mainly be "self-commenting" in that keeping code paths simple (breaking complex interactions into functions) and then commenting the functions as necessary. At a minimum, all functions should have comments that give a short description of function usage, parameter details and return details (giving expected types if it's a dynamic language).
