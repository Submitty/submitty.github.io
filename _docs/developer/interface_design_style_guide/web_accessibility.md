---
title: Web Accessibility
category: Developer
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

In actuality, a VPAT is a report that explains how an information and/or
communications technology conforms to accessibility standards under [Section 508 of the Rehabilitation Act of 1973](https://en.wikipedia.org/wiki/Section_508_Amendment_to_the_Rehabilitation_Act_of_1973).
Within the United States, web accessibility is also compelled by the [Americans with Disabilities Act of 1990](https://en.wikipedia.org/wiki/Americans_with_Disabilities_Act_of_1990).

As such, many United States universities have policies requiring web
accessibility, which makes this important to Submitty.

## Beginning Guidelines
This is not a complete list of web accessibility standards, but rather a
selection of guidelines to help you get started.  Please refer to articles at
[WebAIM.org](https://webaim.org/intro/) and [The A11y Project](https://a11yproject.com/)
for greater detail on web accessibility.

1. [Examine your interface design with WAVE](#examine-your-interface-design-with-wave)
2. [The Most Important Concept](#the-most-important-concept)
3. [HTML and CSS](#html-and-css)
4. [All interactive controls must be usable by the keyboard](#all-interactive-controls-must-be-usable-by-the-keyboard)
5. [All interactive controls require a textual description](#all-interactive-controls-require-a-textual-description)
6. [Layout tables versus data tables](#layout-tables-versus-data-tables)
7. [All visual elements need to adhere to a minimum contrast ratio](#all-visual-elements-need-to-adhere-to-a-minimum-contrast-ratio)

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
* Do correct *all* errors (red icons) and *all* warnings (yellow icons) issued
by WAVE.

#### DO NOT
* Do not automatically assume there are no accessibility problems when no errors
or warnings are given.  WAVE analysis is the beginning of web accessable design,
not the end.
    * Purple icons note that an accessibility related element has been
    identified.  WAVE cannot say if these elements are implemented correctly or
    not, so it is up to the developer to understand web accessibility and use
    their best judgment.

### The Most Important Concept
When the most important concept of web accessibility is summarized to a single
word, that word is *"context"*.

#### DO:
* Do ensure every interactive element has a clear and concise textual description.
* Do wrap a form element's label within a `<label>` tag with associated `for` and
`id` properties.
    * [w3schools.com article on `<label>`](https://www.w3schools.com/tags/tag_label.asp).
* Do provide an `aria-label` property on any hyperlink, control, or other
interactive element that has no textual label or description.  This includes
hyperlinks anchored on a font-awesome icon.
    * [WebAIM.org article on using `aria` labeling](https://webaim.org/techniques/forms/advanced).

#### DO NOT:
* Do not describe interactive elements ambiguously.
    * For example, hyperlinks labeled "Go here", "Link", "Click this", etc.
    do not describe what the link is for.
* Do not use the `aria-hidden` property on any hyperlink, control, or form
element.
    * There are many Internet code examples that show `aria-hidden="true"`
    attached to font-awesome icon hyperlinks.  These examples are incorrect.

### HTML and CSS


#### DO:
* Do use CSS for styling.

#### DO NOT:
* Do not use HTML for styling.
    * For Example: *Never* use a header tag just to make text larger.  Header
    tags should be used for outlining.

### All Interactive Controls Must Be Usable By The Keyboard
Keyboard users navigate forward through a website with `TAB` and backwards with
`SHIFT+TAB`.

#### DO
* Do ensure all interactive controls can be reached using the keyboard.
    * Control elements should flow in a natural order in your code.
* Do ensure that control focus is always visible.

#### DO NOT
* Do not use the `tabindex` property to alter the tab ordering from the natural
flow.
    * (using `tabindex='0'` to permit an element to receive focus is OK).
* Do not rely solely on the `onclick()` javascript event handler.
* Do not reprogram `TAB` without defining a different key that can be used to navigate
to the next control.
    * Within `site/public/js/server.js` is a function, `enableTabsInTextArea()`,
    that reprograms `TAB` to indent text within a `textarea` control while
    adopting `ESC` to navigate forward.  `SHIFT+TAB` is not changed, and
    therefore still provides backwards page navigation.

### Layout Tables Versus Data Tables
Tables are supposed to be used to display tabulated data, but they are also
useful to easily layout other elements, such as a user interface.

Tables whose primary purpose is to display tabulated data are called "data
tables".  Those tables used to primarily layout other elements are "layout
tables".  When tables have a mixture of data and other elements, the developer
should use their best judgment as to which has a higher precedence within the
table.

#### DO
* Do provide a proper table caption and header with data tables.
    * *All*  columns must have a header.
    * A `<caption>` tag is always expected, so use `<caption />` when you do not
    want to display a caption.

#### DO NOT
* Do not provide a header, footer, or caption in layout tables.
* For both data and layout tables, there should be no internal nesting of any
kind.

### All Visual Elements Need To Adhere To A Minimum Contrast Ratio
A minimum amount of contrast should exist between the text and background, known
as "contrast ratio".

#### DO
* Do use WAVE to examine the contrast ratio of visible elements, especially
text.
    * You can also use this [contrast ratio check website](https://webaim.org/resources/contrastchecker/) provided by WebAIM.org.<br>
* Do attain a contrast ratio of at least 4.5:1.  This is an acceptable minimum
target in most cases.  Achieving a contrast ratio of 7.1:1 would be ideal.

#### DO NOT
* Do not ignore contrast ratio in favor of aesthetic appeal.
