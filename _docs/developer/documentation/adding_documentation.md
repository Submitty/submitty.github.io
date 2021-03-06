---
title: Adding Documentation
category: developer
---

## Cloning the Repository
The documentation for the Submitty Project is stored in a repository outside of the Submitty repository itself. The repository for documentation is called Submitty/submitty.github.io

In order to clone the repository to your local machine to begin working on it, use the following command in your terminal:


```bash
git clone https://github.com/Submitty/submitty.github.io.git
```

Once your terminal finishes cloning the repository, navigate your IDE to the following path:


```bash
{Your Documentation Repository}/Documentation/developer
```
Once you are in the developer folder you can make a markdown page in the folder corresponding to the category for which you are making documentation.

## Making the Markdown File
For each markdown file you should begin with the following 4 lines of code:

```
---
title: {Title of your Documentation Page}
category: {See Below for Options}
---
```

For the category field, you should enter the name of the highest level folder on submitty.org that your documentation page belongs to. The options for this are listed below:

* Welcome
* Student
* TA or Grader
* Instructor
* System Administrator
* Developer

After setting the title and the category of your markdown page, then you can move on to adding the information to the page.

After you're done editing your markdown page, create a Pull Request on the github page for this repository and then it will be reviewed and either accepted or rejected.
