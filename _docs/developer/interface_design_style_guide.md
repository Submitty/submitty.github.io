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
## Web Accessibility
Some Submitty users may be physically impaired in such a way that common UI
design models could inhibit their use of Submitty.  Some users may be incapable
of using a mouse perhaps due to injury or recent surgery.  Other users may be
visually impaired and may require an assistive screen reader application or
device.  Also users who may not have any physical restrictions can still be
impeded by temporary environmental circumstances — such as bright sunlight, on a
gorgeous day, washing out the text of a laptop display.

Web accessibility in interface design is very important for Submitty.  Please
familiarize yourself with web accessibility and implement these standards into
your interface design.  [The A11Y Project](https://a11yproject.com/) provides
some very easy to read tips, and [WebAIM.org](https://webaim.org/intro/) is a
leading, thorough, and comprehensive resource for learning about web
accessibility standards.

Please also read [Submitty.org's page on web accessibility](https://submitty.org/developer/interface_design_style_guide/web_accessibility).

If you have any questions about web accessibility for Submitty, please post
your question in Submitty's slack channel and be sure to tag `@pbailie`.
