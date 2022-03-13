---
title: Xiao Han
category: Developer > Google Summer of Code 2019
---

# REST API for Submitty

The project aims to establish a REST API for Submitty. The API provides an alternative way of interacting with Submitty, which helps system administrators write scripts to automate database operations, enables developers to work out their front-ends and facilitates tests for methods that previously only return fully rendered pages.

The project mainly consists of two parts: replacing the original router of Submitty and implementing API endpoints.

The project is carried out by [XIAO Han](https://github.com/zjxiaohan), an undergraduate student from [Zhejiang University](http://www.zju.edu.cn/english/), as part of [Google Summer of Code](https://summerofcode.withgoogle.com/).

### Contributions

Contributions are outlined as follows:

- [Over 100 commits](https://github.com/Submitty/Submitty/commits?author=zjxiaohan) are made to the main repository of Submitty.
- [Several commits](https://github.com/Submitty/submitty.github.io/commits?author=zjxiaohan) including new documents along with some other minor modifications are made in the repository of Submitty documentation. 
- [Home for the documentation for the Submitty API](https://github.com/Submitty/api.submitty.org) is created with the help of the mentors.

#### a. Router Replacement

The routing mechanism of Submitty was simple. It makes use of the query string attached to the URL to determine which page to return, which unfortunately produces lengthy and unreadable URLs. While that routing approach worked in the past, the need of API calls for a more clear URL structure.

During the summer, a new router is used and all URLs of Submitty are replaced with new ones. The task is fairly demanding considering the sometimes heterogeneous coding style across Submitty, the extensive nature of critical methods (which entails painful merge conflicts and urgent bug fixes) as well as the constant need to refactor the router as unanticipated problems arise.

The continuous improvements and extension of the router being many, it would be trivial to include a list of pull requests in the report. Please refer to the [router documentation](/developer/router) for more information.

#### b. API Implementation

Basic API framework for Submitty has been set up. It is simple for developers to set up API endpoints without writing redundant code. Currently, an API token [can be obtained](https://api.submitty.org/#get-token) by users, which is later used for getting a list of [courses](https://api.submitty.org/#get-courses), [students](https://api.submitty.org/#get-users) or [graders](https://api.submitty.org/#get-graders). Please read the [API documentation](https://api.submitty.org/) for more information.

It is also worth to mention that the API is proved useful for making [a working-in-progress tool for nightly run of generating grade reports](https://github.com/Submitty/Submitty/issues/3711). More creative usages of API are to be explored by future developers.

### Future Work

An API opens a world of possibilities. Here is a list for future developers. Feel free to come up with new ideas yourself. 

- Help implement more API endpoints to enrich Submitty API. After carefully reading [suggestions for new developers](/developer/getting_started/index#suggestions-for-new-developers), you can start writing new endpoints hosted at Submitty that can direct your robot to wash the dishes and fold the laundry.
- Develop plugins for text editors so that you can autograde your work without switching between windows.
- Build *your* Submitty application. While sharing data with Submitty, you can rebrand it with your name (like Shailmitty), repaint and reshape everything with your genius aesthetic tastes without fighting with picky people, and even, develop an Android or iOS application that makes everyone forget the web version and keeps Barb on vacation every day.

### Acknowledgments

I would like to express my gratitude to Matt Peveler for his patient guidance and valuable insights. I would also like to thank Barb Cutler for her effective organization and essential perspectives and contexts she provides.

Thanks should also be given to Preston Carman for his constructive suggestions and warm encouragements throughout this summer.

Furthermore, my thanks are extended to RCOS students and other GSoC students I am working with during the summer. It has been a great experience working at Submitty!