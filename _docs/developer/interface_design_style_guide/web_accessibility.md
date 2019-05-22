---
title: Web Accessibility
category: Developer
---

## Purpose
Website accessibility is a design concept for permitting computer users with
physical limitations to use and enjoy a website's entire services.  Often,
web accessibility is associated with disability, but disability does not have to
be understood to be a strictly chronic state (e.g. blindness).  Accessibility
also helps people with a conditional disabilities, such as those recovering from
surgery.  And the needs do not have to be medically related.  Someone accessing
a website under direct sunlight (which washes out the device's display), or
maybe someone is using a lab terminal that happens to have a malfunctioning
mouse also benefit from web accessibility.  And finally, even users who have no
limitations can also benefit as keyboard navigation can be much faster than
mouse navigation.

## What is "VPAT"?

At times, you may come across the phrase "Voluntary Product Accessibility
Template" or "VPAT".  For the purposes of Submitty development, VPAT refers to
website accessibility.

Technically, VPAT is a report of accessibility implementations in information
and communications technology that is required of any institute receiving United
States federal grants under [Section 508 of the Rehabilitation Act of 1973](https://en.wikipedia.org/wiki/Section_508_Amendment_to_the_Rehabilitation_Act_of_1973).
Within the Unites States, web accessibility is also compelled by the [Americans with Disabilities Act of 1990](https://en.wikipedia.org/wiki/Americans_with_Disabilities_Act_of_1990).

As such, many United States universities have policies requiring web
accessibility implementation in their web services.  If you have any questions
about web accessibility for Submitty, please post your question in Submitty's
slack channel and be sure to tag `@pbailie`.

## Guidelines

This is not an all-comprehensive list of web accessibility issues, but rather
a select summary of issues to be mindful of.  Following these guidelines will
help you develop a web accessible UI.  But remember, this is not a complete
guide.

Please refer to articles at [WebAIM.org](https://webaim.org/intro/) and (The
A11y Project)[https://a11yproject.com/] for greater detail on web accessibility.

1. [Most Important Concept](#most-important-concept)
2. [Examine your interface design with WAVE](#examine-your-interface-design-with-wave)
3. [All interactive controls must be usable by the keyboard](#all-interactive-controls-must-be-usable-by-the-keyboard)
4. [All interactive controls require a textual description](#all-interactive-controls-require-a-textual-description)
5. [Layout tables versus data tables](#layout-tables-versus-data-tables)
6. [All visual elements need to adhere to a minimum contrast ratio](#all-visual-elements-need-to-adhere-to-a-minimum-contrast-ratio)

### Most Important Concept

If the most important concept of web accessibility could be summarized to a
single word, that would would be *context*.



### Examine Your Interface Design With WAVE

The Web Accessibility Evaluation (WAVE) tool is a browser plugin that can
analyze your UI design and point out accessibility problems.

Please correct all errors and warnings shown.  WAVE will provide advice on what
you can do.  However, the absence of any errors and warnings does not mean your
UI is properly web accessible.  WAVE is *not* the final analysis of web
accessibility, but rather it is the first.

There are times when WAVE cannot provide an exact right or wrong judgment.
At these times, developers need to understand web accessibility principles
and apply their own judgment.

#### DO
* Install the [WAVE plugin](https://wave.webaim.org/extension/) for your
development browser.
* Use WAVE to test your UI as it is being developed.  It is easier to correct
issues as the UI is being developed rather than fix it after the UI is fully
built.
* Read WAVE's suggestions on how to correct errors and warnings.  This will help
you learn more about accessibility.

#### DO NOT
* Automatically assume there are no accessibility problems when no errors or
warnings are given.  WAVE analysis is a productive beginning of good web
accessibility design, not the end.

### All Interactive Controls Must Be Usable By The Keyboard

Users with motor impairments may not be using a mouse.  Also, there are
unimpaired users who also prefer the use of keyboard navigation for its
speed and efficiency.

#### DO
* Ensure all interactive controls can be reached using the keyboard
    * Controls defined should be in a natural order in your code.
* Ensure that control focus is always visible.

#### DO NOT
* Use the `tabindex` property to change the tab ordering from the natural flow.
    * (using `tabindex='0'` to permit an element to receive focus is OK).
* Rely solely on the `onclick` javascript event handler.
* Reprogram `TAB` without defining a different key that can be used to navigate
to the next control.
    * Within `site/public/js/server.js` is a function, `enableTabsInTextArea()`, that
    reprograms `TAB` to indent text within a `textarea` control while also
    permitting `ESC` to navigate forward and `SHIFT+TAB` to navigate backwards.

### All Interactive Controls Require A Textual Description

Some controls can be associated with icons or images instead of text.  However,
without a textual description, sight impaired users with screen readers cannot
use these controls.

#### DO
* Wrap a form element's label within a `<label>` tag with associated `for` and
`id` properties.
    * [w3schools.com article](https://www.w3schools.com/tags/tag_label.asp) on
    `<label>`.
* Provide an `aria-label` property on any hyperlink, control, or other
interactive element that has no textual label or description.  This includes
hyperlinks anchored on a font-awesome icon.
    * [WebAIM.org article](https://webaim.org/techniques/forms/advanced) on
    using `aria` labeling.

#### DO NOT
* Use the `aria-hidden` property on any hyperlink, control, or form element.
    * There are many code examples of attaching `aria-hidden="true"` to
    font-awesome icon hyperlinks.  This is often incorrect.

### Layout Tables Versus Data Tables

TO DO: SUMMARY

#### DO
* Provide a proper table caption and header with data tables.
    * If you do not want to provide a caption for a data table, include an
    empty `<caption />` tag.

#### DO NOT
* Provide a header, footer, or caption in layout tables.
* Nest tables within tables (data and layout).

### All Visual Elements Need To Adhere To A Minimum Contrast Ratio

TO DO: SUMMARY

#### DO
* Use WAVE to examine the contrast ratio of visible elements, especially text.
    * You can also use this [contrast ratio check website](https://webaim.org/resources/contrastchecker/) provided by WebAIM.org.
* A contrast ratio of at least 4.5:1 is generally a good minimum target in most cases.  Achieving at least 7.1:1 is better.

#### DO NOT
* Ignore contrast ratio in favor of aesthetic appeal.
