
commonast.py is a static analysis tool to count different programming language constructs.

```
python commonast.py lang nodeType arg filename outputOption 
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

Supported ```outputOption```s: 
* -json or -JSON 

Example Calls: 

```Python commonast.py -py –For -Void hw1.py ```
Counts the number of for loops in hw1.py 

```Python commonast.py -py –Call check1 hw1.py ```
Counts the number of calls to the function "check1" in hw1.py. Function "check1" may or may not exist in hw1.py 

```Python commonast.py -cpp –While -Void hw1.cpp -json ```
Counts the number of while loops in hw1.cpp and prints a json representation of the AST.  
