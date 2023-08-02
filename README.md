# Submitty.org

This is the documentation website for [Submitty](http://submitty.org),
an open source course management, assignment submission, exam, and grading system.


To report issues for this repository, please file them under the
[Submitty/Submitty](https://github.com/Submitty/Submitty) repository.

## Local Development

### Prerequisites

To develop the site locally, you will need to get the following dependencies:

* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](https://bundler.io/) (`gem install bundler`)

For Bundler, depending on your system, you may need to also install the
Ruby development headers (e.g. `ruby-dev`). On Ubuntu/Debian,
for example, this would be accomplished by doing `sudo apt-get install ruby-dev`.

### Setup

1. Clone the respository on your local machine, e.g.,

   ```
   git clone https://github.com/Submitty/submitty.github.io.git
   ```

   * _NOTE: We recommend placing the code in a directory/folder on your
     machine without spaces, because some developers have experienced
     errors with bundler when the full path contained spaces._


2. Use Bundler to install the dependencies. This can be accomplished
by running:

   ```bash
   bundle install
   ```

   * _NOTE: During the install, it may hang up when installing the
     dependency ``nokogiri``.  Don't worry: continue waiting. If it still is stalling
     here, press enter and it should continue._


   * _NOTE: If an error is thrown during the installation process you
     may need to downgrade from 3.0 to use Ruby-2.7 and make sure this
     is indeed the version that the Bundler is using and not another
     one in a different directory._


### Running the Site

* To view the site locally, and the results of any changes you make,
   you will want to use the `jekyll` commands through Bundler, namely
   the `serve` sub-command, as shown below:

   ```bash
   bundle exec jekyll serve
   ```

* NOTE: If you have an error running on the default port (4000), you can specify an
   alternate port, e.g.

   ```bash
   bundle exec jekyll serve --port 4001
   ```

* If you wish to build the site locally instead of running it, you can do:

   ```bash
   bundle exec jekyll build
   ```

   which will leave the results in a `_site` directory.


### Running the link checker

GitHub Actions checks each pull request for broken links using the
[`htmlproofer`](https://github.com/gjtorikian/html-proofer)
package.  If you wish to run `htmlproofer` locally, `cd` into the `submitty.github.io`
repository and run the command:
```
bundle exec htmlproofer ./_site --assume-extension --empty-alt-ignore --disable_external
```


## Editing Content

The site's content is defined with markdown files under the
[`docs/`](https://github.com/Submitty/submitty.github.io/blob/main/_docs) folder, where
then it's separated by a couple of high-level sections (student, instructor,
sysadmin, developer).  For any new page, a new entry must be added to the
navigation manually (see below). The rendered markdown uses a variant of
[Github Flavored Markdown](https://github.github.com/gfm/). For every page,
it should have a front-matter block at the top of the file that has minimally:

```
---
title: Page Title
---
```

where this is used as the main header title on the page, as well as for the title
of the page in the browser. You should then not include a `# Page Title`
in the file, rather just start your content immediately after the front-matter block.

### Navigation

Editing the links on the navigation is done by editing
[`navtreedata.js`](https://github.com/Submitty/submitty.github.io/blob/main/navtreedata.js).
The structure of the file is that each level is a list of objects, where the object can have the following parts:

* name __(required)__
* link
* children

Where if link is omitted, then name will be used where it will be lowercased
and spaced replaced with `_`. Children is then a list of objects of the
above structure. Currently, the site only supports three levels of nesting (sub-sub-children).

### Search

* Add `excluded_in_search: true` to any documentation page's front matter to exclude that page in the search results.

## Forked from [Edition](https://github.com/CloudCannon/edition-jekyll-template)

This repository was created via a fork of Edition, which is a product documentation theme for Jekyll created
by by [CloudCannon](http://cloudcannon.com/), the Cloud CMS for Jekyll.
