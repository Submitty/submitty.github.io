---
title: Website Customization
category: Instructor
order: 8
---

### Per Course Custom CSS

To modify the CSS for your course, simply create a file named
``override.css`` file in the ``config`` directory for your course.
For example:

```
/var/local/submitty/courses/f16/csci1200/config/override.css
```

In this file you can change the background colors, fonts, etc.
Make sure that the ``hwphp`` user has read access to this file.


### Embedding Submitty within an IFrame

Sometimes, an instructor might wish to use Submitty as part of their course website without having students need to go to a separate Submitty url for submissions. This can be achieved easily through the use of an iFrame:

```
<iframe src="{$submitty_url}/index.php?course={$course}&semester{$semester}"></iframe>
```

Of course, we've found that going this approach raises the minor annoyance of refreshing the page (that contains the iFrame) generally takes you off the page you were viewing in the iFrame. This can be solved using some javascript (however, this does require that you are on the same domain for both the outer page and the iframe).

```html
<script type="text/javascript">
document.addEventListener('DOMContentLoaded', function(){ 
    var url = localStorage.getItem("iframe_url");
    if (url != null) {
        document.getElementById("submitty").src = url;
    }
}, false);

function saveUrl(url) {
    localStorage.setItem("iframe_url", url);
}
</script>
<iframe id="submitty" src="{$submitty_url}/index.php?course={$course}&semester{$semester}" onLoad="saveUrl('document.getElementById(\"submitty\").contentWindow.location.href');"></iframe>
```

As stated above this does require that you are on the same domain as Submitty to be able to do this (otherwise it's cross-scripting and that's not allowed for security reasons on all major browsers). You can change the url that Submitty uses on a course by course basis by changing the `config.ini` file for a particular course and adding a new field to the `[hidden_details]` section with the key `course_url`. This will override the `base_url` that is set in the `master.ini` file.

The top of the `config.ini` file would then look something like this:

```
[hidden_details]
database_name=SOME_DATABASE_NAME
course_url=SOME_ALTERNATE_URL
```

Of course, this URL must still be fully interchangeable with the regular base url from `master.ini` to ensure that Submitty still works as expected.