---
title: Anubhav Singh
category: Developer - Google Summer of Code 2019
---

# Discussion Forum Refactor, VPAT & WebSocket Integration

The project was an upgrade to the Discussion Forum module of the Submitty web application. The Discussion Forum allows students in a course to discuss their coursework, allowing image upload, links and code embed. My work over the summer made the Discussion Forum more user friendly in terms of accesibility and speed of using the Forum

I am [Anubhav Singh](https://github.com/xprilion), an undergraduate student from [NSEC](https://nsec.ac.in), [Kolkata](https://en.wikipedia.org/wiki/Kolkata), as part of [Google Summer of Code](https://summerofcode.withgoogle.com/). 

This project was mentored by - [Barb Cutler](https://github.com/bmcutler), [Andrew Aikens](https://github.com/andrewaikens87) and [Shail](https://github.com/shailpatels). The project had constant guidance from [Matt Peveler
](https://github.com/MasterOdin). 

## Contributions

[33 commits](https://github.com/Submitty/Submitty/commits?author=xprilion) ![Commits](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAPCAMAAAAVg4veAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURf///9VHUt7y4+J+hXHGhfro6ZTUo1a8brjjwvPN0O2tsj2yWdylaL4AAAHGSURBVDjLzVXRcgIxCLyQQEjy///bhZCo56nTjg9lpnaJmoVlOY/jPwTRDenEpGfwIbg33klbSQBuFnz9TR1lsddahwDICKB2op/Jc0L0nWRP5mk7OKUJLnuvm75UQjGKP2EWAKpCJOVZJ3osqafOIONIQGRJTo1byqDPjLiuXEqJ+8n7RKYSmVTjo7vPLsXKI31ftIcxm+xI/BR18NLlSvpKi14HufAUmaIUEtHjmV7K80393P0qBvQwwQvp5Vj0k9iLIBW8cdQKadwErjwKxYsByEInS5rMizHvSWMseMci86X0xyV9qU5veMkhcCEsWTagE3vc33LuOWrp04KduccJuw3CC2rDvRSfTfxatiWse5ZiPTMAuudH5Xd3rntLc/C3qcc4uq2I6WHVlGGbNWYjQV/D4OAu9Y7+jfVml7F3frHbLccI+I7engHM8RggVdVa1XfKfOAvLgBhH70gHfTJem3vPG/n970K/p+3Nc7h4hu1DsFcrY4KAFZYQGRc7f2j7zBqi+buxxw6JGZO89SAHbRXu+fr7g+5UsQ3Xe7B50duzkFv627eAykcN8NRyu3tDSrf+PngzH/7otA36Fv/xYd/AEwUDSaVo1GeAAAAAElFTkSuQmCC)

#### 1. Forum Refactor Templates

In this task, I was responsible for utilising the Twig template engine all over the Forum, in sync with the rest of Submitty code. 

- [#3768](https://github.com/Submitty/Submitty/pull/3768) ForumThreadView - CreateThread and SearchResult refactor to use Twig
- [#3771](https://github.com/Submitty/Submitty/pull/3771) Forum displayThreadList use Twig 
- [#3774](https://github.com/Submitty/Submitty/pull/3774) CreatePost and GeneratePostList use Twig engine
- [#3807](https://github.com/Submitty/Submitty/pull/3807) Stats page uses Twig
- [#3870](https://github.com/Submitty/Submitty/pull/3870) ShowForumThread uses Twig

Besides bringing in the Twig template engine, I also separated out the Forum specific CSS and JS from the other files, and moved all (nearly) inline CSS and JS to separate files. 

- [#3905](https://github.com/Submitty/Submitty/pull/3905) Inline CSS and JS shift to external files

During working on the above task, I got into discussion with Barb and Andrew about using Markdown on the Forum posts. It was decided to replace the previous formatting system for the posts and I introduced Markdown rendering for posts in [#3774](https://github.com/Submitty/Submitty/pull/3774). However, we soon ran into alerts from several users who were suddenly having their posts rendered as Markdown. Hence we came up with the following change -

- [#4149](https://github.com/Submitty/Submitty/pull/4149) Choice of plaintext vs markdown for post


#### 2. Solving VPAT issues

A very exciting part of working on Submitty for me was to discover the depth of making websites accessible. Working on the VPAT introduced me to tools I had not known to exist such as the WAVE and ChromeVox (<b>don't install it during a meeting</b>). I made the following commits for the VPAT issues - 

- [#3859](https://github.com/Submitty/Submitty/pull/3859) Sequential Forum Tabs Navigation
- [#4129](https://github.com/Submitty/Submitty/pull/4129) Missing label warnings in WAVE 

Some of the fixes to VPAT were covered in [#3905](https://github.com/Submitty/Submitty/pull/3905). 

#### 3. AJAXify Forum & WebSocket Integration

Probably one of the most exciting part of my GSoC proposal for Submitty, and one task I absolutely loved working. AJAXifying the Forum fell into place slowly and steadily. It was for a simple and sort of old issue that I first worked on bringing in AJAX - 

- [#4019](https://github.com/Submitty/Submitty/pull/4019) Maintain Forum thread list scroll state

This made the Forum threads navigation much faster, and lightweight now that we were no longer loading the entire page for every change in thread, hence it became possible to quickly click around on thread list and view all the interesting ones. 

The next step came in the form of - 

- [#4082](https://github.com/Submitty/Submitty/pull/4082) Show applied filters in Forum bar

In this task, instead of just showing the applied Filters in the Forum bar, we went a step ahead and removed the Filter pop-up entirely, and created a sub-bar in the Forum which gets active only when any Filter has been applied. The motivation was to replicate the filter systems used in shopping websites like Amazon! 

The above changes made it very desirable to have an entire no-reloads experience of the Forum, which would allow for real-time fetching of updates to the threads (and possibly pave way for push notifications). Late in July, when Barb and Andrew asked me to work on something which I was interested in, I came up with a few ideas and it was decided to introduce a WebSocket to the Discussion Forum! 

- [#4329](https://github.com/Submitty/Submitty/pull/4329) Create Socket Server script and Push threads/posts to users

The above PR when merged would enable a WebSocket server on Submitty (not limited to Forum, course-wide available). This socket server would allow real-time updates and notifications to be pushed to the users. I am expecting a large benefit that can be drawn from having a WebSocket push server in future for Submitty.

#### 4. Miscellaneous

Apart from the above three major parts, I solved a few bugs here and there. the one bug I found most interesting and typical to solve was - 

- [#4250](https://github.com/Submitty/Submitty/pull/4250) JSON display thread posts javascript fail 

What was interesting about this bug was that it was about failing to display an error message when there was an error. The bug was evasive and it took a nearly a week to figure out how to replicate it reliably. Solving this bug was more of a help to the developers on the Forum than to the regular user.


I was also found complaining about the Hide/Show Replies feature on the Forum which resulted in - 

- [#4360](https://github.com/Submitty/Submitty/pull/4360) Remove HidePosts feature in Forum


And the sad side of it all, I could not get the following completed despite spending a good couple of days on it and reading up so much about JavaScript time that I gallantly preached about it to my juniors at college - 

- [#3508](https://github.com/Submitty/Submitty/pull/3508) Show current system time on submission page

Alas, the students will keep making excuses about different Timezones. 

Working with e2e tests using Selenium was new to me, and with continuous support from Andrew I was able to learn about it enough to update the tests as I made changes to the way the Forum was interacted with. 

## Future Scope of Work

I believe my work on the WebSocket opens up new avenues for not just the Discussion Forum but also for the rest of Submitty. It allows the possiblity of making a lot of existing features use the benefit of real time and to make new features which take benefit of it. I would look forward to seeing the following in Submitty in future - 

- Forum Search working as an extended filter, generating results on the same page instead of going to a new page.
- Push Notifications to users
- Create thread working via AJAX
- History of Post Attachments on Forum
- Sem-wide Push Notifications (currently Course-wide)
- Reflect updates to Forum Posts/Threads via WebSockets
- A Lite interface for Submitty using the [API](https://api.submitty.org/) built by [Han](https://submitty.org/developer/google_summer_of_code/2019_XiaoHan)

## Acknowledgments

I had an enriching and exciting summer of 2019, working on Submitty under the [Google Summer of Code](https://summerofcode.withgoogle.com/) program. I was glad to be mentored by Barb, Andrew (thanks for going through all my PRs!) and Shail (who was an important source of issues regarding the Forum throughout). I express my sincere thanks to all students who worked on Submitty as part of RCOS, and my peers working as part of GSoC. 

I extended gratitude to [Saketh](https://github.com/sak6lab), Han and [Drumil](https://github.com/drumilpatel2000) whose comments/reviews helped me in a number of my PRs. 

GSoC with Submitty was a warm and unforgettable experience for me. Everytime I talk of Open Source, Submitty will be remembered fondly.