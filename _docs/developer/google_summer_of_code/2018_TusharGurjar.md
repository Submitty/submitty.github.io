---
title: Tushar Gurjar
category: Developer - Google Summer of Code 2018
---

# Instructor Interface for Plagiarism Detection

[Submitty](http://submitty.org) is an open source programming
assignment submission system from the 
[Rensselaer Center for Open Source Software (RCOS)](https://rcos.io/), 
launched by the
[Department of Computer Science](http://www.cs.rpi.edu/) at
[Rensselaer Polytechnic Institute](http://www.rpi.edu/).

My GSoC project involved working on the Plagiarism Detector (also called "Lichen") of Submitty Organization.
Along with my GSoC project, I also worked on implementing some crucial features and fixing bugs.
Working on various features and bugs throughout Submitty helped me learn even more about Software Development.

Throughout my GSoC journey, I learnt about Working of Plagiarism Detector, Web Technologies, Servers, Travis Testing.





### Tasks done as part of my GSoC project

1.  **Made Java, Python, C++ tokenizer for the core plagiarism module.**
	
	Initially I was assigned to make tokenizers using Microsoft Language Servers.
	Microsoft Language Servers are used by various text editors like Sublime, Atom, etc and it provide the text editor with the features like AutoComplete Suggestion, References, etc. We aimed at sending a file and getting its tokens from the server, but due to no direct client request method for tokens, couldn't integrate Microsoft Language Server.
	So finally made tokenizers similar to how language server do tokenization internally. This involved exploring codebase of [Cquery language server](https://github.com/cquery-project/cquery), [Palantir Language Server](https://github.com/palantir/python-language-server), and [Java Language Server](https://github.com/georgewfraser/vscode-javac).

	**Link to commits (merged)**-


	[Python and CPP tokenizers (#3)](https://github.com/Submitty/Lichen/commit/00348500a1fbd01f6a14d54d399f6e8f73034e9b)
	
	[Java tokenizers (#8)](https://github.com/Submitty/Lichen/commit/5dbf12720fcc41315e396ea4121bb52d3ea13e7f)

2.  **Worked on Visualization tools for Plagiarism Interface**
	
	Work on the new interface of Plagiarism Detector to let instructor see plagiarism results on the interface. Worked on visualization tool to make plagiarism result more intuitive to differentiate between  plagiarism vs. coincidental matching. 

	Implement various visualization tools like- 

	There can be different kind of matches like common code, suspicious, match with instructor provided code.

	a)  Used colors in code boxes where code is is displayed to differentiate between various type of matches. Also add various color click events to display with whom that colored section matches with.
	
	![](/images/lichen_interface.png)

	![](/images/lichen_color_click.png)	

	**Link to commits (merged)**-

	[Lichen first draft (#2239)](https://github.com/Submitty/Submitty/commit/2b6d91b0ac34df21d2991cb935656c90bb5cd9d7)

	[Lichen color click events (#2343)](https://github.com/Submitty/Submitty/commit/e90f935fa3fe082e762323ed569ccb915f9d7391)

	[Lichen minor modifications (#2592)](https://github.com/Submitty/Submitty/commit/b46f35a7a55f4c1636dc3e6981328d2bd440d764)

	[Lichen main page modifications (#2626)](https://github.com/Submitty/Submitty/commit/c75ade7210fc4e7794892c19417edc031f74259e)

	
3.	**Implemented backend for New Plagiarism Detector**
	
	**Link to commits (merged)**-

	[Lichen first draft (#2239)](https://github.com/Submitty/Submitty/commit/2b6d91b0ac34df21d2991cb935656c90bb5cd9d7)	

4.  **Automated the new Plagiarism Interface by integrating to Submitty Daemon**

	Automated the plagiarism detector to do various jobs from interface itself. This includes creating configuration file for gradeable for which the plagiarism is to be run, editing configuration, rerunning plagiarism detector for a gradeable, delete plagiarism results for a gradeable.

	**Link to commits (merged)**-

	[Run lichen plagiarism as submitty daemon job (#2423)](https://github.com/Submitty/Submitty/commit/fe7128093e69b809e53b93ae97c33dbee8c14612)


### Ongoing task 

1.  **Initial Test Suite for Plagiarism Detector (no pull request yet)**


	I am currently working on testing and debugging of Plagiarism Detector. This involves creating regression test for plagiarism detector. This Regression test will check whether the tokenization, hashing of token sequence and matching of hashes is done correctly. This regression test then will be integrated to travis.



### New Features implemented and Bug fixed along with GSoC Project

1.	**Extended Registration section from numeric to alphanumeric**
	
	**Link to commits (merged)-**

	[Alphanumeric registration section (#2069)](https://github.com/Submitty/Submitty/commit/3423da9ff01f7ff2f82c237d144b22a1d84b076f)

2.	**Implemented Delete Gradeable Feature**

	This feature can be used instructor to delete a gradeable provided some constraints are matched.

	**Link to commits (merged)-**

	[Delete gradeable feature  (#2031)](https://github.com/Submitty/Submitty/commit/09a2c9247980238763d3e3d71d46fe3796d9068a)

3. 	**Implemented Team Export & Import Feature from one gradeable to other**

	This feature help instructor transport the teams from one gradeable to another. This can be used in cases where instructor wants same teams across many gradeables in course.

	**Link to commits (merged)-**

	[Team member export and import feature (#1982)](https://github.com/Submitty/Submitty/commit/deafde544c23725880eb2a36887f4a8a812af518)

4.	**Implemented Rebuild Assignment feature**

	This feature allows instructor to rebuild a gradeable from interface itself rather than going to server and running rebuild script there.

	**Link to commits (merged)-**

	[Assignments can be rebuild from interface (#2105)](https://github.com/Submitty/Submitty/commit/33e60f59905e4f12888663448ad3411f7fc5a4f7)

### Commit History (including all commits which got merged)
	

[Commits in Submitty/Submitty repo](https://github.com/Submitty/Submitty/commits?author=tushargr)

[Commits in Submitty/Lichen repo](https://github.com/Submitty/Lichen/commits?author=tushargr)


### Building the project

For building the project, it will require to build complete Submitty System.

1.	Instructions for building Submitty- [Developer/VM Install using Vagrant](/developer/vm_install_using_vagrant)

2.	For using Submitty and its Plagiarism Detector, follow instructions at [Developer/Installation](/developer/vm_install_using_vagrant) and [Instructor/Plagiarism Detection](/instructor/plagiarism)

