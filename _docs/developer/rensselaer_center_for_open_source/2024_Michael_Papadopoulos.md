---
title: Michael Papadopoulos
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2024
---

This summer, my primary goal was to get Submitty to a state where it could be used for courses on Quantum Computing. I also did substantial work on Autograding.

### Quantum Computing

- Built a qiskit-capable docker image for use with Submitty
- Created various autograding examples and learning materials for professor and course use. Here are the publicly available ones:
    - [Qiskit Circuit Draw Diff](https://github.com/Submitty/Submitty/tree/main/more_autograding_examples/qiskit_circuit_draw_diff)
    - [Qiskit Tolerance Diff](https://github.com/Submitty/Submitty/tree/main/more_autograding_examples/qiskit_tolerance_diff)
- Worked on Submitty's ability to connect to the internet during grading so it can contact IBMQ cloud services. Added an autograding example for this.
    - [Networking](https://github.com/Submitty/Submitty/tree/main/more_autograding_examples/networking)
- Developed a lab for an ongoing quantum computing course which was graded through Submitty.

### Autograding

- Added buildtime errors when a required capability doesn't exist or an image isn't on the required capability.
- Fixed tolerance grading to work with various nonstandard formattings.
- Heavily updated documentation on the `config.json` file
- Reworked various old autograding examples to use Docker for security.

### Miscellaneous & Future

- Upgraded Grade Overrides such that an instructor can override a whole team at once.
- Improved student management to allow students to rejoin courses they dropped and notify instructors of students who dropped.
- Improved the notebook interface to work well with "short-response" answers.
- Changed the forum search feature to be more accurate and useful, especially in regards to filenames.
- Improved various end-to-end Cypress tests by removing flaky code.
- Updated the `pdf-annotate.js` library to use a more secure version of `pdf.js`.
- Allow students to select their preferred name order in the Profile page.
- Various fixes to typos, spacing, and CSS across the site.
