---
title: Web Accessibility
category: Developer > Software and System Design
redirect_from:
  - /developer/web_accessibility
  - /developer/interface_design_style_guide/web_accessibility
---

## Purpose
Website accessibility is a design concept for permitting computer users with
physical limitations to use and enjoy a website's entire services.  Often,
web accessibility is associated with disability, but disability does not have to
be understood to be a strictly chronic state (e.g. blindness).  Accessibility
also helps people with conditional disabilities, such as those recovering from
surgery.

Disabilities do not have to be medically related.  Someone accessing a website
under direct sunlight (which washes out colors of an LCD display), or maybe
someone is using a lab terminal that happens to have a malfunctioning mouse,
also benefit from web accessibility.  And finally, even users who have no
limitations can also benefit as keyboard navigation can be much faster than
mouse navigation.

## What is "VPAT"?

At times, you may come across the phrase "Voluntary Product Accessibility
Template" or "VPAT".  For the purposes of Submitty development, VPAT refers to
website accessibility.

In actuality, a VPAT is a report that explains how an information or
communications technology conforms to accessibility standards under [Section 508 of the Rehabilitation Act of 1973](https://en.wikipedia.org/wiki/Section_508_Amendment_to_the_Rehabilitation_Act_of_1973).
Within the United States, web accessibility is also compelled by the [Americans with Disabilities Act of 1990](https://en.wikipedia.org/wiki/Americans_with_Disabilities_Act_of_1990).

As such, many United States universities have policies requiring web
accessibility, which makes this important to Submitty.

## Beginning Guidelines
This is not a complete list of web accessibility standards, but rather a
selection of guidelines to help you get started.

1. [Examine your interface design with WAVE](#examine-your-interface-design-with-wave)
2. [The Most Important Concept](#the-most-important-concept)
3. [HTML, CSS, and Javascript](#html-css-and-javascript)
4. [All interactive controls must be usable by the keyboard](#all-interactive-controls-must-be-usable-by-the-keyboard)
5. All interactive controls require a textual description
6. [Data tables versus layout tables](#data-tables-versus-layout-tables)
7. [All visual elements need to adhere to a minimum contrast ratio](#all-visual-elements-need-to-adhere-to-a-minimum-contrast-ratio)

Articles at [WebAIM.org](https://webaim.org/intro/) and [The A11y Project](https://a11yproject.com/)
provide additional guidance.  The W3C has authored a series of in-depth industry
recommendations called [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
(a.k.a. "WCAG").

If you have any questions on web accessibility, please post them in Submitty's
slack channel and tag `@pbailie`.

### Examine Your Interface Design With WAVE
The [Web Accessibility Evaluation (WAVE) tool](https://wave.webaim.org/extension/)
is a browser plugin that can analyze your UI design and point out accessibility
problems.

#### DO
* Do install the WAVE plugin for your development browser.
* Do use WAVE to test your UI as it is being developed.  It is easier to correct
issues as the UI is being developed rather than fix it after the UI is fully
built.
* Do read WAVE's suggestions on how to correct errors and warnings.  This will
help you learn more about accessibility.
    * WAVE errors and alerts provide relevant links to WCAG for further explanation.
* Do correct *all* errors (red icons).
* Do examine *all* alerts (yellow icons).  Alerts mark areas that are potentially
problematic.  They are not necessarily problematic, but often are.

#### DO NOT
* Do not automatically assume there are no accessibility problems when no errors
or alerts are given.  WAVE analysis is the beginning of web accessible design,
not the end.

#### NOTE
* Purple icons show where an accessibility related property has been identified.
WAVE cannot say if these properties are implemented correctly or not, so it is up
to the developer to understand web accessibility and use their best judgment.


### The Most Important Concept
The most important word used to summarize web accessibility is *"context"*.

#### DO:
* Do ensure every interactive element has a clear and concise textual description.
* Do ensure every page has a unique title.
* Do wrap a form element's label within a `<label>` tag with associated `for` and
`id` properties.
    * [w3schools.com article on `<label>`](https://www.w3schools.com/tags/tag_label.asp).
* Do provide an `aria-label` property on any hyperlink, control, or other
interactive element that has no textual label or description.  This includes
hyperlinks anchored on a font icon.
    * [WebAIM.org article on using `aria` labeling](https://webaim.org/techniques/forms/advanced).

#### DO NOT:
* Do not describe interactive elements ambiguously.
    * For example, hyperlinks labeled "Go here", "Link", "Click this", etc.
    do not describe what the link is for.
* Do not include `aria-hidden="true"` on any interactive element.
`aria-hidden="true"` makes an element invisible to screen readers.
    * There are many Internet code examples that show `aria-hidden="true"`
    added to font icons.  This only makes sense when a font icon
    is non-interactive.

### HTML, CSS, and Javascript

#### DO:
* Do _carefully_ adhere to HTML 5 standards.  This helps ensure your user interface
is not accidentally misrepresented by assistive technologies.
    * w3.org provides an online [HTML validator](https://validator.w3.org/#validate_by_input).
    You can run it by clicking the "Validate HTML" button in the footer of any page.
    Validating HTML 5 is marked "experimental", but it is still be a useful tool
    to provide feedback on potential problems and errors.
* Do use CSS for styling.

#### DO NOT:
* Do not use HTML for styling.
    * *Never* use a header tag just to make text larger.  Header tags should be
    used for outlining.
    * *Never* use `<br>` to separate paragraphs or to create spacing.
    * Do not use `<div>` in place of `<button>`.
* Do not use `<div>` when you could use something more descriptive —
see [semantic HTML elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
* Do not place `<script>` _between_ `<head>` and `<body>`.
* Do not use javascript to mimic a link.

### All Interactive Controls Must Be Usable By The Keyboard
Keyboard users navigate forward through a form with `[TAB]` and backwards with
`[SHIFT]+[TAB]`.

#### DO
* Do ensure all interactive controls can be reached using the keyboard.
    * Control elements should flow in a natural order in your code.
* Do ensure that control focus is always visible.

#### DO NOT
* Do not use the `tabindex` property to alter the tab ordering from the natural
flow.
    * (using `tabindex='0'` to permit an element to receive focus is OK).
* Do not rely solely on the `onclick()` javascript event handler.
    * `onclick()` is OK when an equivalent `onkeypress()` handler or similar logic
    exists.
* Do not reprogram `[TAB]` without defining a different key that can be used to
navigate to the next control.
    * Within `site/public/js/server.js` is a function, `enableTabsInTextArea()`,
    that reprograms `[TAB]` to indent text within a `<textarea>` control while
    adopting `[ESC]` to navigate forward.  `[SHIFT]+[TAB]` is not changed, and
    therefore still provides backwards navigation.

### Data Tables Versus Layout Tables
Tables are supposed to be used to display tabulated data, but have also been
used as a guide to layout other elements, such as a user interface.  Tables whose
primary purpose is to display tabulated data are called "data tables".  Those
tables used to primarily layout other elements are "layout tables".  

Layout tables should be discouraged as some assistive technologies do not represent
the layout particularly well.  Please use CSS to layout your user interface.

#### DO
* Data tables must have a header for every column.

#### DO NOT
* Do not nest tables within tables.

#### UPDATE
* It is no longer recommended to use `<caption />` when a table should not have
a caption.  According to W3C's validator, this is an HTML 5 error.  Please omit the
`<caption>` tag when a caption is not needed.

### All Visual Elements Need To Adhere To A Minimum Contrast Ratio
A minimum amount of contrast should exist between the text and background, known
as "contrast ratio".

#### DO
* Do use WAVE to examine the contrast ratio of visible elements, especially
text.
    * You can also use this [contrast ratio check website](https://webaim.org/resources/contrastchecker/)
    provided by WebAIM.org.
* Do attain a contrast ratio of at least 4.5:1.  This is an acceptable minimum
target in most cases.  Although achieving a contrast ratio of 7:1 or better is
ideal.
* Do ensure that all text is specifically assigned a color in CSS, including
black text.

#### DO NOT
* Do not ignore contrast ratio in favor of aesthetic appeal.
* Do not rely on users' browser settings to render black text by default.
