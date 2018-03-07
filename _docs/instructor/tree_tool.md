---
title: Tree Tool
category: Instructor
order: 9
---

make_tree.js and make_tree_interactive.py are tools to visualize the json output from [commonAST](/intstructor/commonAST.md) and [static analysis](/instructor/static_analysis.md) as trees.

### make_tree.js

```
node make_tree.js ./filename
```

This will output the tree in a .svg format. Make sure to include the ```./``` before ```filename``` in order for node.js to read the file.


### make_tree_interactive.py

```
python make_tree_interactive.py filename
```

This will output the tree in a .html format. Unlike make_tree.js, the trees produced by this tool are collapsible.

### Example Calls

```
node make_tree.js ./ex1a.json
```
Outputs an uninteractive .svg tree from the data of ex1a.json

```
python make_tree_interactive ex1a.json
```
Outputs an interactive .html tree from the data of ex1a.json

### Example Output

![](/images/ex_tree.png)

### Additional Install Steps
make_tree.js requires the additional install of node.js in order to run. In order to install node.js on the VM, follow these steps:
1. Call ```sudo apt-get update```
2. Call ```sudo apt-get install build-essential libssl-dev```
3. Install nvm with ```curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh```
4. Update session with ```source ~/.profile```
5. Use ```nvm ls-remote``` to list the versions of node.js
6. Install node.js with ```nvm install version#``` with the most up-to-date version
