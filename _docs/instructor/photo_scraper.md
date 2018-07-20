---
title: Photo Scraper
category: Instructor
order: 9
---

This tool scrapes student photos from Rensselear's Student Information System
(SIS) portal that allows instructors to access the current and past
course registration and information (including photos) for the
students in these courses.

Unfortunately, the RPI SIS portal does not allow the instructor to
bulk download all student photos.  Thus we have created the following
command line tool to do so.

This tool will download the photos of students in the selected
terms/courses/sections into folders and name the photos with their
usernames/RCS IDs.

We welcome others to adapt or generalize this tool for use at other
institutions.


### Installation

1.  [Install Python 3](https://www.python.org/downloads/)


2.  [Install PIP](https://pip.pypa.io/en/stable/installing/), the Python package manager

    Windows 10: [step-by-step instructions](https://matthewhorne.me/how-to-install-python-and-pip-on-windows-10/)


3.  [Install Selenium](http://selenium-python.readthedocs.io/installation.html) (in terminal/command prompt)

    _Note: On Windows, make sure to run cmd as administrator._

    ```
    pip3 install selenium
    ```

4.  Install Chromedriver

    On Windows:
    [Download chromedriver.exe](https://sites.google.com/a/chromium.org/chromedriver/downloads)
    and put it in C:\Windows

    On MacOS:  (in terminal/command prompt)
    ```
    brew install chromedriver
    ```

    _Note: Make sure Chrome browser, Chromedriver, and Selenium are all up-to-date._


4.  Install requests  (in terminal/command prompt)

    ```
    pip3 install requests
    ```

    If you're using an older version of Python 3 (< Python 3.4), you may need to install requests[security].
    ```
    pip3 install requests[security]
    ```

### PhotoScraper/RPI_SIS_Photo_Scraper.py

[Download PhotoScraper/RPI_SIS_Photo_Scraper.py](https://github.com/Submitty/InstructorTools)

Save the file in a convenient location.  Then Double-click or run the
python file in terminal/command prompt in the directory the file is
located:

```
python3 RPI_SIS_Photo_Scraper.py
```

This will prompt the user to type in responses on the command-line.


### Example Photo Scraping

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
    * If Y, then it will start scraping the photos from SIS.
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
    For Y, all the photos will be downloaded to their respective session/course_section
    folders in the current directory the RPI_SIS_Photo_Scraper.py file is located. In this example,
    the folders the photos would be downloaded to is Fall-2017/CSCI-1200-02.
