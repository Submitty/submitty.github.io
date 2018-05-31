---
title: SIS Image Scraper
category: Instructor
order: 9
---

This tool scrapes images from SIS of students in a course by sections to a folder
(term/course_section) with their RCS IDs as the names of the images.

### Installation
1.  [Install Python 3](https://www.python.org/downloads/)

2.  [Install Selenium](http://selenium-python.readthedocs.io/installation.html)
    ```
    pip install Selenium
    ```
    For Windows Users Example:
    ```
    C:\Python35\Scripts\pip.exe install selenium
    ```

3.  [Download    Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/downloads)

4.  Install Chromedriver
    [MacOS](https://www.kenst.com/2015/03/installing-chromedriver-on-mac-osx/)
    ```
    brew install chromedriver
    ```
    Windows:
    ```
    Download and put chromedriver.exe in C:\Windows
    ```

### SIS_Images_Scraper.py

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
