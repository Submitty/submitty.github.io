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
   * If the file is a python file, "filename.py" use the [Diagnostics](http://submitty.org/instructor/static_analysis "Diagnostics Documentation") tool. 
   * If the file is a C++ file, "filename.cpp" use the [C++ Union Tool](http://submitty.org/instructor/cppUnionTool "C++ Union Tool Documentation")
  Save the JSON output in "filenameUnion.txt"
 2. Create JSON output of the common AST using the [common AST Tool](/instructor/commonAST "Common AST Tool Documentation"). Save this JSON output in "filenameIntersect.txt"
 3. Run python jsonDiffRunner.py to create the HTML visualization and data report in reportFile.txt. If the source language is python, use "py" for the lang. If the source language is C++ use "cpp" for the lang.
   ```
   python jsonDiffRunner.py filenameUnion.txt filenameIntersect.txt reportFile.txt lang
   ```
A data report should be created in reportFile.txt. The HTML should be created in filenameUnionfilenameIntersect.html

### Multiple Files

In order to run this tool on many source code files, there are scripts designed to perform the above steps in batch.

0. Ensure that you have compeleted the additional installation steps for the [tree visualization tool]
1. Create JSON outputs of the full ASTs for a directory of files using createAllJSON.py
    This tool will create filenameUnion.txt and filenameIntersect.txt files for each input. They will be stored in directory/out so ensure the out/ subdirectory exists prior to running the tool.
       ```
       python createAllJSON.py directory language
       ```
   where the language options are "cpp" and "py" and the directory is absolute (not relative)
2. Run python jsonDiffRunnerRunner.py to create the html visualization and report for all files in the directory. 
      ```
      python3 jsonDiffRunnerRunner.py directory language
      ```
      Again, the language options are "cpp" and "py" and the directory must be absolute (not relative). 
      Here, the directory should be the directory used in step one, and the subdirectory out (directoryFromStep1/out/).
      Ensure that this directory only contains the output files generated above and that they are sorted in alphabetical order. 
      
      The report file will be generated in report.txt
