---
title: William Allen
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2021
redirect_from:
  - /developer/rpi_summer_rcos/2021_William_Allen.md
---

### Summary
I spent the majority of the summer working with Shelly Belsky to give Lichen a
complete overhaul, turning it into a mostly-functioning plagiarism detection tool
with the ability to detect code plagiarism in C++, Python, Java, and MIPS.  At
the start of the summer, there was little which worked and even the most basic
functionality was broken.  By the end of the first week in June, I had managed
to get Lichen working in a primitive state, just as long as you didn't try to do
basic things like edit a configuration after it was created, provide any invalid
input values, or attempt to use anything other than the plaintext or C++ tokenizers.
Shelly joined the effort in the middle of June when we decided to completely
rewrite the main hash comparison algorithm for Lichen to occupy ourselves over
the course of a weekend.  We then went on to fix the remaining issues with lichen
and the plagiarism interface, before implementing almost all of the features on
the original outline and resolving most of the open issues for Lichen.  
By the end of the summer, nearly every line of code in Lichen and in the
Plagiarism Interface had been overhauled.

As of now, all of the initial implementation of Lichen is complete and future work
should largely iterate upon the existing code.  Lichen is currently capable of
detecting similar code in C++, Python, Java, and MIPS, as well as identifying
regions of code common to many users and code which is similar to instructor-provided
code files.  It is also possible to compare code against submissions from prior terms.

I also spent a quantity of time fixing bugs across the codebase and improving
Cypress end-to-end tests.

### Future Work
As of now, there are a few key parts of Lichen which need to be refined.  All
of the current code is believed to work as intended, but a handful of wishlist
features have yet to be implemented and some portions of the system still require
refinement.  In particular, future work is needed on the following general areas:

1. Improvements to the ranking system to make it comparable to MOSS in effectiveness
2. Automatic re-run abilities
3. Plagiarism interface color scheme
4. Migration of the plagiarism interface to CodeMirror 6
5. Overhaul of the tokenization system to use tree-sitter parsers
6. Containerization of Lichen and ability to deploy Lichen to worker machines
