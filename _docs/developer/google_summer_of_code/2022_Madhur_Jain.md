---
title: Madhur Jain
category: Developer > Google Summer of Code 2022
---



## About the Project :

### PWA : Progressive Web APP
PWAs are great solutions to applications that want great capabilities like platform specific apps and wide reach like web apps , as it provides best of both worlds .
They are built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device with a single codebase.


### Aim of the Project
The main aim of the Project was to develop a installlable  PWA  for the Submitty application that could be installed on any platform and offer all the functionalities (even more) that a web app has to offer.
Additionally milestones included adding the support for push notifications , offline cache]ing  and betterment of frontend user experience for the  various platforms.


### Major Work on the installation of PWA :
- [[Feature:System] Installable PWA for Submitty](https://github.com/Submitty/Submitty/pull/8121)


### Pull requests related to work done on UserInterface/User Experience enhancements and fixing up Bugs  :
- [[Feature:TAGrading] Fixed Columns for easy grading)](https://github.com/Submitty/Submitty/pull/8173 )
- [[Bugfix:InstructorUI] Fixed Hard Coded colors](https://github.com/Submitty/Submitty/pull/7888)
- [[Bugfix:InstructorUI] Dark mode rubric table background](https://github.com/Submitty/Submitty/pull/7964)
- [[Bugfix:InstructorUI] Fixed Textbox not displaying](https://github.com/Submitty/Submitty/pull/7994)
- [[Bugfix:InstructorUI] Fixed PDF Annotation Toolbar](https://github.com/Submitty/Submitty/pull/8000)
- [[Bugfix:InstructorUI] Fixed Edit Gradeables page](https://github.com/Submitty/Submitty/pull/7984)
- [[Bugfix:Forum] Forum Title now Display Current Thread](https://github.com/Submitty/Submitty/pull/8062)
- [[Bugfix:Forum] Fixed Settings layout in New thread](https://github.com/Submitty/Submitty/pull/8104)
- [[Bugfix:CourseMaterials] Overlapping Buttons in UI](https://github.com/Submitty/Submitty/pull/8274)


### Work on additional features of PWA:
This work is a good reference to the implementation of the mentioned features and was aimed at developing a prototype of what path could be followed for the best integration for these features.

#### Work on Push Notifications :
- [Branch : pushnoti](https://github.com/Submitty/Submitty/tree/pushnoti)
##### What it does currently:
User is provided with an button to enable push notifications for the application, which  upon clicking asks the user  permissions for push notifications.
If user allows it , a push subscription is generated (if not generated already) using a secure public key and this subscription is routed to the port 3000 at which the backend node server is listening to requests , the backend server receives the push subscription and saves it in the main submitty database.
This node server is continuously running and it fetches the notifications that are to be send form the database , these notifications are then sent to push subciptions for the users stored in the database earlier using the web-push library.
On the frontend, these notifications are received by the user’s active service worker and upon listening to the push event it formats the information received into user readable push notifications and sends to the browser to display to the user.
##### Future Scope: 
The code is currently being written using Javacript and node , much of the code could be re-written in php along with the use of pre-existing code available in the codebase in php.
A separate table could be created to manage and send push notifications which could be included with several functionalities to improve the user experience.
There are a couple of options of how push  notifications could be formatted with in a service worker and could be used to show interactive push notifications.


#### Work on Offline caching using Workbox:
- [Branch : example_wb](https://github.com/Submitty/Submitty/tree/example_wb)
##### What has been done:
This was a basic example for how offline cache could be implemented using workbox , the following branch contains initialization and setting of the workbox:
##### Future Scope :
Decide and implement the caching strategies for various pages depending upon how often they get updated , the information on those pages etc.


## Overall Experience and Learnings :

My GSoC journey at Submitty was one of the best experince that I had as a developer and as a learner.I was able to explore and dive into a lot of awesome codes and concepts. The organisation mentored me to a lot of awesome coding and development practices and methods. There was a lot of exposure. Principally it was leanring about how you plan out and lay the base of what you want to achieve as a developer and even more what is the best path forward with all the options  and techs available.
Constant trying out things and..
The Submittyb developers team has been awesome , they created a great environment for productive discussions and resolutions of doubts and queries


## Acknowledgement : 


