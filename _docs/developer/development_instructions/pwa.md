---
title: Progressive Web App (PWA)
category: Developer > Development Instructions
permalink: /developer/development_instructions/pwa
redirect_from:
  - /developer/pwa
---

Submitty includes support for **Progressive Web App (PWA)** features, enabling an installable, app-like experience across desktop and mobile platforms.

This page provides an overview of how PWA functionality is structured in Submitty and how developers can extend or maintain it.

For general PWA concepts, see: [PWA overview (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

&nbsp;

## Overview

A Progressive Web App (PWA) is a web application that can:

* Be installed on a device (desktop or mobile)
* Run in a standalone window
* Provide an app-like user experience

In Submitty, PWA support focuses on:

* Installability via browser prompts
* Standalone display mode
* Cross-platform compatibility

&nbsp;

## Core Components

### Web App Manifest

Submitty includes a **web app manifest** that defines how the application appears when installed.

Typical responsibilities include:

* App name and short name
* Icons for different device sizes
* Start URL
* Display mode (`standalone`)

For more details, see: [Web App Manifest reference (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest)

<!-- TODO: Add link to manifest location in Submitty codebase -->

&nbsp;

### Display Mode

Submitty uses a **standalone display mode** so that the app opens without standard browser UI (tabs, address bar).

This creates a more focused, app-like experience for users.

For more details, see: [Display modes (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest/display)

&nbsp;

### Installability

Modern browsers automatically detect when Submitty meets PWA requirements and may prompt users to install it.

Basic requirements include:

* Valid manifest file
* Served over HTTPS (or localhost for development)

For more details, see: [PWA installability guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)

<!-- TODO: Add link to installation trigger logic if implemented -->

&nbsp;

## Current Scope in Submitty

At present, Submitty’s PWA support is intentionally minimal and focuses on:

* Installable interface
* Consistent experience across devices

The following are **not fully implemented** (or are planned improvements):

* Offline functionality
* Background sync
* Push notifications

&nbsp;

## Development Considerations

When working on PWA-related features in Submitty:

* Ensure compatibility across major browsers (Chrome, Edge, Safari)
* Avoid breaking standard browser usage (Submitty must still function normally without installation)
* Keep performance and responsiveness in mind
* Test both installed and non-installed experiences

&nbsp;

## Possible Extensions

Future improvements to PWA support may include:

* Offline access to selected pages using service workers  
* Push notifications for deadlines and announcements  
* Improved caching strategies for faster load times  

For background concepts, see: [Offline and caching (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation)

&nbsp;

## Testing

To test PWA behavior:

1. Run Submitty in a secure environment (HTTPS or localhost).
2. Open the application in a supported browser.
3. Check for install prompts or manually install the app.
4. Verify:
   * App launches in standalone mode
   * Icons and branding appear correctly
   * Navigation works as expected

&nbsp;

## Additional Resources

* [PWA overview (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
* [Making PWAs installable (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable)
* [Web App Manifest (MDN)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest)