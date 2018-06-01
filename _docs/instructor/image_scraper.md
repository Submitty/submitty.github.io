---
title: SIS Image Scraper
category: Instructor
order: 9
---

This tool scrapes images from SIS of students in a course by sections to a folder
(term/course_section) with their RCS IDs as the names of the images.

### Installation
1.  [Install Python 3](https://www.python.org/downloads/)

2.  [Install Selenium](http://selenium-python.readthedocs.io/installation.html) (in terminal/command prompt)
    ```
    pip install selenium
    ```

3.  Install Chromedriver (in terminal/command prompt)
    [Windows:](https://sites.google.com/a/chromium.org/chromedriver/downloads)
    ```
    Download and put chromedriver.exe in C:\Windows
    ```
    MacOS:
    ```
    brew install chromedriver
    ```
    Note: Make sure Chrome browser, Chromedriver, and Selenium are all up-to-date.


### SIS_Images_Scraper.py
[Download the python file](https://github.com/Submitty/InstructorTools)
```
python SIS_Images_Scraper.py
```
This will run the program in terminal/console which will prompt the user to type in responses on the command-line.

### Example Image Scraping

1.  Login to SIS

    ```
    RIN: 666555444
    PIN: Submitty
    ```

2.  Select a Semester or Summer Session

    ```
    Here are the following Semester/Summer Sessions:
    Fall 2018
    Summer 2018
    Spring 2018
    Fall 2017
    Summer 2017
    Spring 2017
    Select a term( or Exit to terminate ): Fall 2017
    ```
    Exit will terminate the program. Invalid sessions would prompt user again.

3.  Asks user if they want pictures from certain course section (not case-sensitive)
    * If Y, then it will start scraping the images from SIS.
    * If N, then it will move to next course and ask if user wants pictures.
    * If Exit, then it will terminate the program.
    * The program will end if there are no more courses.
    ```
    Do you want pictures from CSCI 1200 01: DATA STRUCTURES, 45909 (32)?
    Y/N/Exit
    N
    Do you want pictures from CSCI 1200 02: DATA STRUCTURES, 43234 (30)?
    Y/N/Exit
    Y
    Do you want pictures from CSCI 1200 03: DATA STRUCTURES, 45374 (34)?
    Y/N/Exit
    Exit
    ```
    For Y, all the images will be downloaded to their respective session/course_section
    folders in the current directory the SIS_Images_Scraper.py file is located. In this example,
    the folders the images would be downloaded to is Fall 2017/CSCI 1200 02: DATA STRUCTURES, 43234 (30).
