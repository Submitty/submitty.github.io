---
category: Student > Communication
title: Writing Markdown
---


## Formatting using Markdown

Markdown has become a common standard for formatting online text.
Submitty allows simple formatting using markdown in
[Discussion Forum](/student/communication/forum) posts
(and also on several other Submitty webpages).

To begin, click the markdown symbol to enable formatting of your post using markdown.
Then use the standard markdown syntax show below:

* **Headings**  
    Adding a number of `#` and a space before text will make it a heading:

    ```
    # h1
    ## h2
    ### h3
    #### h4
    ##### h5
    ###### h6
    ```

    You can alternatively create heading like this:

    ```
    Alt h1
    =====

    Alt h2
    -----
    ```

*  **Links**  
   To add a hyperlink to `url` labeled with `display text`:

   ```
   [display text](url)
   ```


*  **Italics**  
    Adding `_` (one underscore) or `*` (one asterisk) before and after text will _italicize_ that text. Opening
    and closing symbols need to match.


*  **Bold**  
    Adding `__` (two underscores) `**` (two asterisks) before and after text will make that text __bold__. Opening
    and closing symbols need to match.


*  **Bold and Italics**  
    Adding `___` (three underscores) `***` (three asterisks) before and after text will make that text ___bold and italic___.
    Opening and closing symbols need to match.


*  **Inline Code**  
    Adding `` ` `` (a single backtick) before and after text will render that text in
    teletype / fixed-width type.  This is useful for short, inlined code.


*  **Code Blocks**  
    Adding ```` ``` ```` (a triple backtick) on blank lines above and below
    text will turn it into a code block.  You can also specify a language for syntax highlighting. For example:

    ````
    ```c++
    int main() {
        printf("hello world\n");
    }
    ```
    ````
    yields:

    ```c++
    int main() {
        printf("hello world\n");
    }
    ```

*  **Lists**  
   Adding `*` or numbers (ex. `1.`, `2.`, `3.`) followed by a space before text
   will create a bulleted or numbered list. You can indent further for sub-items in the list. For example:  

   ``` 
   * Item 1
    * Sub-Item 1
    * Sub-Item 2
   * Item 2
   
   1. Item 1
   2. Item 2
    1. Sub-Item 1
    2. Sub-Item 2
   3. Item 3
   ```

* **Table**

    To add a table, use three or more hyphens `(---)` to create each column’s header, and use pipes `(|)` to separate each column. For compatibility, you should also add a pipe on either end of the row.

    ```
    | Syntax      | Description |
    | ----------- | ----------- |
    | Header      | Title       |
    | Paragraph   | Text        |

    ```

* **Equations**  
    To add an equation, use dollar signs or `\(` and `\)` to enclose the equation. For example:

    ```
    $E = mc^2$
    \(E = mc^2\)
    ```

For more information, see also: [Markdown Guide](https://www.markdownguide.org/)
