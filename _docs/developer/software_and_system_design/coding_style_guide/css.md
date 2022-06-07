---
title: CSS
category: Developer
category: Developer > Software and System Design > Coding Style Guide
redirect_from:
  - /developer/coding_style_guide/css
---

## Styling

Classes vs IDs:
* Classes are for repeated elements - make these as general as possible
* IDs *must* only have one associated element at any given time - this is for specifying your module

Both CSS classes and IDs should be written as dash-separated-variables. 
Example HTML:
```
<h1 id="my-header" class="my-class">Title</h1>
<p id="my-paragraph" class="my-class">Text.</p>
```

When writing CSS, Submitty uses the following guidelines:
* Use 4 space indents
* Use K&R style braces (one brace on the same line on the selector)
* For selectors which specify elements with a comma, write each element on a separate line
* Group all @media queries at the bottom, under as few breakpoints as possible

Example CSS:
```
#my-header,
.my-class {
    display: none;
}

@media (min-width: 541px) {
    #my-header {
        display: absolute;
    }

    .my-class {
        display: block;
    }
}
```

_NOTE: We will be implementing a minifier so there is no need to do things like remove the whitespace
after a colon, but there is nothing wrong with using shorthand properties._

If possible, separate classes for specific cases and general use. For example, `global.css`'s
`.system-message` class specifies the positioning / sizing of a message:
```
.system-message {
    width: 100%;
    text-align: center;
    margin: auto;
    font-size: 1.5em;
    font-weight: bold;
}
```
On the other hand `server.css`'s `.warning` and `.danger` classes keep a consistent color for other elements to use:
```
.warning {
    background: #fff3cd;
    color: #856404;
}

.danger {
    background: #f2dede;
    color: #b94a48;
}
```

Combining these, both our noscript error and our system message notifications are displayed with a consistent
image - with respect to each other and other warning/danger messages on the site. When choosing a color for 
your element, check to see what other colors are used in similar situations and choose from something that
already exists.

## Responsive Design

Responsive design is the technique of displaying a page differently to fit different devices. This can
mostly be done through CSS @media queries. These queries add additional CSS when specific conditions
about the user's device is met. We implement a "mobile first design" that does not use @media queries for
mobile devices but instead uses @media queries for additional rules on tablet / desktop devices. 

Generally, our CSS is structured like this:
```
.my-class {
    /* General CSS as well as special rules for small (mobile) devices */
}

@media (min-width: 541px) {
    .my-class {
        /* Additional special CSS for medium (tablet) and large (desktop) devices */
    }
}

@media (min-width: 768px) {
    .my-class {
        /* Additional special CSS for large (desktop) devices only */
    }
}
```

It might not always be necessary to use @media queries; some things render just fine on all devices.
When choosing your breakpoints (the pixel cutoffs), slowly decrease your screen size to find at which
widths your UI loses quality. If you are having trouble determining specific breakpoints for your module, 
the ones provided in the example above should cover most cases.

## File Architecture:

Each `.twig` file should generally have a paired `.css` file. Do not use inline CSS or `<style>` elements
on your page. When adding a new CSS file, use our internal PHP function so that we can properly serialize it:
```
$this->core->getOutput()->addInternalCss('mystyle.css');
```
Your CSS file should go in the directory:
```
/Submitty/site/public/css/
```

Further, as we are still integrating responsive design to the site, to soft "enable" mobile on
a page, you must explicitly add the following viewport tag to your HTML:
```
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
```
This tag allows us to scale @media query breakpoints based on display size, not resolution size. 
Technically, responsive display is enabled on the entire site, but it will not trigger on mobile 
devices as users do not generally change their window size on a phone.