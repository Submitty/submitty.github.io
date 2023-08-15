---
title: Localization / Language Support
category: Developer > Development Instructions
redirect_from:
  - /developer/migrations
---


The goals of localization or internationalization include the
translation of the website into multiple languages, to increase the
accessibility of Submitty to users in all locales or regions.

To contribute to Submitty's localization and translation efforts,
follow these steps to update Twig templated files and provide
translations for various text elements on the website.

---

## Server Language Specification

By default, all Submitty pages will display in English based on the
`en_US` locale.  To modify the server default setting, the system
administrator should edit the
`/usr/local/submitty/config/submitty.json` file and add this line, e.g.:

```
    "default_locale": "fr_FR",
```

to specify an alternate locale.
See also [Php Locale class](https://www.php.net/manual/en/class.locale.php).

---

## Individual Language Specification

Each individual user can specify their own preferred locale if they do
not wish to use the server default.  Navigate to "My Profile" and
choose the desired language and region settings.

![](/images/student/user_profile_specify_locale.png) 

The dropdown menu will include all locales for which any translation
is available in the
[Localization](https://github.com/Submitty/Localization/tree/main/lang)
repository.  Where translation to the requested language is
incomplete, the `en_US` locale will be used.

---

## Prepare a Website Page for Translation

Submitty uses the Twig template engine to manage html source code with
Php.  Checkout the [Submitty source
code](https://github.com/Submitty/Submitty) and locate the specific
`.twig` template file(s) associated with the webpage that you would
like to update.


Identify an untranslated English plain text string in the Twig source
code, for example:

```
<p>Text in the page I will translate</p>
```


And replace that text string with the following syntax:

```
<p> { { localize("Page_Description.Text_To_Translate", "Text in the page I will translate") } } </p>
```

The `localize` function requires two arguments:

* The first argument is the hierarchical tag or label, separated by
  one or more dots.  The hierarchy should begin with the name of the
  page, and intuitively name and organize/group all phrases that
  appear on that page.  The first part represents the role or purpose
  of the page, while the second (and later) parts describes the text
  you're translating. Use underscores to replace spaces in this part.
  Avoid using apostrophes, quotes, accents, and other special
  characters.

* The second argument is the original English text that will be
  displayed on the website if a translation in the user's language is
  not available.


Make a [pull request](/developer/getting_started/make_a_pull_request)
with your proposed changes.

---

## Updating the en_US.json Phrase File

When Twig files are edited to prepare or update one or more pages for
translation, these pages will be reviewed and merged.

When a new release/version of the Submitty source code is published
with changes to one or more `.twig` files, **[TODO]** the
[`en_US.json` file in the Localization repository](https://github.com/Submitty/Localization/blob/main/lang/en_US.json)
will be automatically updated.

---

## Adding Translations to the Localization Repository

Once the pull request is merged and a new version of Submitty is
released, checkout the [Localization](https://github.com/Submitty/Localization/tree/main/lang)
repository and navigate to the `Localization/lang` directory.

If a JSON file for the language you're translating to isn't available,
create one. The file name format is as follows:
```
<language_code>_<country_code>.json
```

Copy the content of the en_US.json file and paste it into the newly
created or existing JSON file.

Edit the JSON file by translating the "Text in the page I will
translate" text within the "Page_Description" section.  The JSON file
format should resemble the following:

```
  {
    "Page_Description": {
      "Text_To_Translate": "Translated text for the page"
    }
  }
```

You should test your translation by following the
[Development Instructions](/developer/development_instructions/index#incremental-development-updates).

When you are finished, submit a pull request to the Localization
repository with your new and/or modified JSON files. 

