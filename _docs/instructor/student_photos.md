---
title: Student Photos
category: Instructor
order: 9
---

In a large class, it can be difficult for instructors, full-access graders, and
limited-access graders to learn the names of their students.  The Student Photos page is accessed from
a blue button at the top of the course main page.  Instructors can upload .png photos of
their students and view all uploaded students’ photos. Full-access graders and
limited-access graders also have access to this page. Full-access graders can
see photos of all students in the course, while limited-access graders can only see the photos of
the students in their assigned registration sections.  

* Prior to photo upload:
  ![](/images/student_photos_empty_pic.png)  

* After photo upload:
  ![](/images/student_photos_uploaded_pic.png)  


### How to Upload Photos

  * _Note: Please use Google Chrome to upload images._

  * Photos must be .png file format and must be named with the
    students username (lowercase), e.g., `smithj.png`

  * Click the "Upload Student Photos" button on the top right hand side
    of the page.  This option is only available to instructors.

    ![](/images/student_photos_upload_button.png)  

  * You may drag and drop or click to launch a file browser.  Select
    one or more .png files, and/or one or more zip files of .png files.
  
    ![](/images/student_photos_upload_form.png)

    The total file size per upload should not exceed 10mb or 10240 kb.
    
  * After hitting submit, if it does not automatically refresh after a
    couple seconds, please refresh the page.



### Photo Scraper

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

    On Linux:
    If you are using Chromium and see `FileNotFoundError: [Errno 2] No such file or directory: 'chromedriver'`, you may need to add it to your path, by adding the following to your ~/.bashrc:
    ```
    PATH=$PATH:/usr/lib/chromium-browser
    ```

    For WSL users you will want to first do the following, then follow the advice above for Linux:
    ```
    sudo apt install chromium-browser chromium-chromedriver
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

### PhotoScraper/RPI_SIS_PhotoScraper.py

[Download PhotoScraper/RPI_SIS_PhotoScraper.py](https://github.com/Submitty/InstructorTools)

Save the file in a convenient location.  Then Double-click or run the
python file in terminal/command prompt in the directory the file is
located:

```
python3 RPI_SIS_PhotoScraper.py
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
    folders in the current directory the RPI_SIS_PhotoScraper.py file is located. In this example,
    the folders the photos would be downloaded to is Fall-2017/CSCI-1200-02.
