---
title: Notebook
category: Assignment Configuration
order: 2
---

Instructors may create special gradeable submissions called notebooks.  Notebooks are different from standard file
submissions in that a notebook may contain several different types of inputs or outputs. 

### Short Answer Input

  | Filename |
  | ----- |
  | field | filename |
  | required | true |
  | type | string |
  | value | Filename where results of submission will be saved. |
  
  | Initial Value |
  | ----- |
  | field | initial_value |
  | required | false |
  | type | string |
  | value | A value to pre-populate into short answer box. |
  
  | Programming Language |
  | ----- |
  | field | programming_language |
  | required | false |
  | type | string |
  | value | Programming language that will be entered into the short answer box and will be used for syntax highlighting. |
  | Notes | [CodeMirror](https://codemirror.net/) is used to generate codebox inputs.  Therefore when selecting a value for this field you may select one from their [list of languages](https://codemirror.net/mode/index.html). |
  
  | Rows |
  | ----- |
  | field | rows |
  | required | false |
  | type | int |
  | value | Height of the short answer box in rows. |
  
### Multiple Choice Input

  | Filename |
  | ----- |
  | field | filename |
  | required | true |
  | type | string |
  | value | Filename where results of submission will be saved. |
  
  | Choices |
  | ----- |
  | field | choices |
  | required | true |
  | type | array |
  | value | An array of javascript objects which describe a value and description for each choice. |
  | notes | Each choice should take the form of ``{"value": "1", "description: "Choice 1"}`` |
  
###### Choices Example

"choices" :  
[  
{"value": "a", "description": "the plant will be short"},  
{"value": "b", "description": "the plant will grow normally"},  
{"value": "c", "description": "the plant will be tall"}  
]

  | Allow multiple choices |
  | ----- |
  | field | allow_multiple |
  | required | false |
  | default | false |
  | type | bool |
  | value | true or false |
  | notes | If true allows multiple values to be selected, if false only one value may be selected. |
  
### Markdown

  | Markdown |
  | ----- |
  | field | markdown_string |
  | required | true |
  | type | string |
  | value | A markdown string to be displayed. |
  
### Images

  | Image |
  | ----- |
  | field | image |
  | required | true |
  | type | string |
  | value | The filename of the image to display. |
  
  | Image Height |
  | ----- |
  | field | height |
  | required | false |
  | default | native |
  | type | int |
  | value | The height in pixels the image should be displayed at. |
  
  | Image Width |
  | ----- |
  | field | width |
  | required | false |
  | default | native |
  | type | int |
  | value | The width in pixels the image should be displayed at. |
  
  | Accessibility Text |
  | ----- |
  | field | alt_text |
  | required | false |
  | default | "Instructor provided image" |
  | type | string |
  | value | The image's alt text |
  | notes | When displaying an image you should use this field to describe the contents of the image.  Such a description is useful to visually impaired users who may be using screen reading software.