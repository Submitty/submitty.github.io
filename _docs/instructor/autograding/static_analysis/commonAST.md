---
title: commonAST
category: Instructor
---

commonast.py is a static analysis tool to count different programming language constructs. 
The tool functions in two modes: **count mode** and **print mode**

### Count Mode

```
python commonast.py lang nodeType arg filename1 filename2 .... filenamen 
```
will output the number of ```nodeType```s under the argument ```arg``` in the source file ```filename``` which is written in language ```lang```. It will also output valuable information about the AST depending on the outputOption. 

Supported ```lang```s: 
* -py 
* -cpp 


Supported ```nodeType```s: 
* -For counts the number of for loops
    * Supported args:  
        * -Void 
        
* -While counts the number of while loops
    * Supported args:  
        * -Void 
        
* -Call counts the number of calls (of a certain name or just calls in general)
    * Supported args:  
        * -Void 
        * Specific call name that we want to count (example: only count the number of calls to print) 

(The infrastructure is there to count many more nodes. I'm only adding them to this once they've been tested against Sam's tool to make sure they're correct) 

You can count nodes on any number of filenames. The number returned will be the sum number of nodeTypes in all of the filenames. 

### Print Mode

```
python commonast.py outputOption filename lang
```

Supported ```outputOption```s: 
* -json or -JSON 

### Example Calls: 

```Python commonast.py -py –For -Void hw1.py ```
Counts the number of for loops in hw1.py 

```Python commonast.py -py –Call check1 hw1.py ```
Counts the number of calls to the function "check1" in hw1.py. Function "check1" may or may not exist in hw1.py 

```Python commonast.py -json -cpp hw1.cpp  ```
Prints a json representation of the AST of hw1.cpp  


