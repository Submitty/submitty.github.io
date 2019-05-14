---
title: Interface Design Style Guide
category: Developer
order: 6
---

## Preliminary Design Notes

* *blue buttons*: say "please click me", this is an action you should
   take.  Examples: Click here to form a team.  Click here to submit
   your homework.  Click here to participate in the discussion form.
   Click here to see your semester grades.

* *red buttons*: indicate "you’re in trouble", something is overdue.
   Examples: The homework deadline has passed and you did not submit
   or you have a low grade on your submission.  You have missed the
   deadline for completing your assigned grading.

* *green buttons*: let the student know something new is available.
   Example: The homework grades have been released and you have not
   yet viewed the detailed grade.

* *white/grey buttons*: are infrequently-used optional actions.
   Examples: Cancel an assignment submission.  Request a TA regrade.


An example is the design for the navigation page

[Issue #1045](https://github.com/Submitty/Submitty/issues/1045)

![](https://i.imgur.com/TVk9qpy.jpg)

[Issue #2153](https://github.com/Submitty/Submitty/issues/2153)

![](https://i.imgur.com/suqhXhi.png)

---
## Voluntary Product Accessibility Template

Web accessibility in interface design is very important for Submitty.  Please
familiarize yourself with web accessibility and incorporate these standards
into your interface design.  [WebAIM](https://webaim.org/) is a thorough and
comprehensive resource for learning and utilizing web accessibility standards.

Please also read Submitty.org's [page on VPAT](vpat)

### Summary

1. [All interactive controls must be usable by the keyboard](#all-interactive-controls-must-be-usable-by-the-keyboard)
2. All interactive controls require a textual description
3. Layout tables versus data tables
4. All visual elements need to adhere to a minimum contrast ratio.
5. Examine Your Interface Design with WAVE

### All Interactive Controls Must Be Usable By The Keyboard

Users with motor impairments may not be using a mouse.  Also, there are
unimpaired users who also prefer the use of keyboard navigation for its
speed and efficiency.

#### DO
* All interactive controls can be reached via the `tab` key.
    * Controls defined should be in a natural order in your code.
* Control focus is always visible.

#### DO NOT
* Use the `tab-index` property.
* Use the `aria-hidden` property.
* Rely solely on the `onclick` javascript event handler.









