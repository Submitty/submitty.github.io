---
title: Localization / Language Support
category: Developer > Development Instructions
redirect_from:
  - /developer/migrations
---

To contribute to the localization effort for Submitty, follow these steps to update Twig templated files and provide translations for various text elements on the website. By following these steps, you'll be ensuring that the platform is accessible to users in various languages and regions.

* **Updating Twig Templated Files**

    Begin by making a pull request in the Submitty repository. The purpose of this pull request is to update the twig template files.

    Locate the specific twig template file responsible for rendering the page you wish to translate.

    In the identified template file, replace plain text content with the following format:

    From:
    ```
    <p>Text in the page I will translate</p>
    ```
    To:
    ```
    <p> { { localize("Page_Description.Text_To_Translate", "Text in the page I will translate") } } </p>
    ```
    The localize function requires two arguments:
    The first argument is composed of two parts separated by a dot. The first part of the first argument should stay the same across the entire twig file. The first part represents the role or purpose of the page, while the second part describes the text you're translating. Use underscores to replace spaces in this part.
    The second argument is the original text that will be displayed on the website.

* **Pull Request Review and Merge**

    After creating the pull request with the twig template updates, the Submitty developer team will review and merge the changes into the repository.

*  **Handling Translations in the Localization Repository**

    Once the pull request is merged and a new version of Submitty is released, navigate to the Localization Repository and go to the Localization/lang directory.
    If a JSON file for the language you're translating to isn't available, create one. The file name format is as follows: ```<language_code>_<country_code>.json```.
    Copy the content of the en_US.json file and paste it into the newly created or existing JSON file.
    Edit the JSON file by translating the "Text in the page I will translate" text within the "Page_Description" section.
    The JSON file format should resemble the following:
    ```
      {
        "Page_Description": {
          "Text_To_Translate": "Translated text for the page"
        }
      }
    ```
    Submit a pull request with your translation changes in the JSON file.
    Await the review and merge of the pull request. Once merged, the translation will become available.

* **Viewing Translations**

    To view the newly translated content on the website, you will need to Navigate to "My Profile" and choose the desired language and region settings.
