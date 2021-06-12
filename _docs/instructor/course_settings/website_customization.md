---
title: Customize Website Theme
category: Instructor
redirect_from:
  - /instructor/website_customization
---

From the "Course Settings" link on the left sidebar, you can access
the "Customize Website Theme" page (button in the upper right corner).


### Per Course Custom CSS

To modify the CSS for your course, simply create a file named
``override.css`` file and upload it under "Custom CSS" on this page.
This file will be stored in the ``site`` directory for your course.
For example:

```
/var/local/submitty/courses/f18/sample/site/override.css
```

In this file you can change the background colors, fonts, etc.
If you edit the file directly, make sure that the ``submitty_php`` user has read/write access to this file.

[A sample override.css file](https://github.com/Submitty/Submitty/blob/master/sample_files/site_theme/override.css)



### Adding Top, Left, Right, and/or Bottom Bars to Submitty

As illustrated on the "Customize Website Theme" page, you can
customize a frame around your Submitty course.  Prepare ``.html``
files for each panel of the frame you want to specify and upload these
files to the website.  They will be stored here:

```
/var/local/submitty/courses/f18/sample/site/top_bar.html
/var/local/submitty/courses/f18/sample/site/left_sidebar.html
/var/local/submitty/courses/f18/sample/site/right_sidebar.html
/var/local/submitty/courses/f18/sample/site/bottom_bar.html
```

Make sure that the ``submitty_php`` user has read access to this files.
If you edit these files directly, make sure that the ``submitty_php`` user has read/write access to these files.

[A sample top_bar.html file](https://github.com/Submitty/Submitty/blob/master/sample_files/site_theme/top_bar.html)  
[A sample left_sidebar.html file](https://github.com/Submitty/Submitty/blob/master/sample_files/site_theme/left_sidebar.html)



### Specifying Custom links in the Submitty Sidebar

Alternatively, you can specify additional links to appear in the
Submitty sidebar for all users in your course.  Create and save this a
file with an ordered array of the additional links.  For each link
provide a [Font Awesome icon](https://fontawesome.com/v4.7.0/icons/),
a URL (link), and title.  Store the file within your course directory,
for example:

```
/var/local/submitty/courses/f18/sample/site/sidebar.json
```

[A sample sidebar.json file](https://github.com/Submitty/Submitty/blob/master/sample_files/site_theme/sidebar.json)