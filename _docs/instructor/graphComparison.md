---
title: graph comparison
category: Instructor
order: 9
---

Graph Comparison is a set of tools used to visualize differences between two ASTs. It is intended to be used to visualize differences in the commonAST of a file and the full AST of the same file. 


### One File

Given a file of source code, the following steps can be used to create a HTML file visualizing the differences and a report text file providing some data.


0. Ensure that you have compeleted the additional installation steps for the [tree visualization tool](http://submitty.org/instructor/tree_tool "Tree Visualization Documentation")
1. Create JSON output of the full AST
   ⋅⋅* If the file is a python file, "filename.py" use the [Diagnostics](http://submitty.org/instructor/static_analysis "Diagnostics Documentation") tool. 
  ..* If the file is a C++ file, "filename.cpp" use the [C++ Union Tool](http://submitty.org/instructor/cppUnionTool "C++ Union Tool Documentation")
  Save the JSON output in "filenameUnion.txt"
 2. Create JSON output of the common AST using the [common AST Tool](http://submitty.org/instructor/commonAST "Common AST Tool Documentation"). Save this JSON output in "filenameIntersect.txt"
 3. Run python jsonDiffRunner.py to create the HTML visualization and data report in reportFile.txt. If the source language is python, use "py" for the lang. If the source language is C++ use "cpp" for the lang.
   '''
   python jsonDiffRunner.py filenameUnion.txt filenameIntersect.txt reportFile.txt lang
   '''
A data report should be created in reportFile.txt. The HTML should be created in filenameUnionfilenameIntersect.html
