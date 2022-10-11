---
title: Akshat Batra
category: Developer > Google Summer of Code 2022
---
# Website Security and Penetration Testing

Security of any website is very crucial but in case of Submitty, writing secure code becomes all the more essential because of the nature of this software. Grades of students depend on the security of the website; just one loophole is enough to give a student an academic advantage over others. Dealing with student data comes with legal implications that require particular security standards. It must be ensured that proper access control and authorization practices are in place. Keeping all this in mind, the following work was done by me during the summer:

[See commits](https://github.com/Submitty/Submitty/commits/main?author=akshatbatra)

[See pull requests](https://github.com/Submitty/Submitty/pulls?q=is%3Apr+author%3Aakshatbatra)

---

## Session Management

[PR #8284](https://github.com/Submitty/Submitty/pull/8284)

I developed a session management page using which a user can view his/her active login sessions and terminate any dangling sessions. As part of this, another unique feature of enforcing single session was added. A user can set this secure session setting and then he/she will only be able to have one active session at any given time.
Whenever a user logs in, the following information is recorded:
1.	Platform (e.g. Win10)
2.	Browser name (e.g. Chrome)
3.	Browser version (e.g. 104.0)

**Use case:** Let's assume that by some way (phishing attack, key logging etc.), a bad actor gets hold of the credentials of a high privilege user e.g. instructor. Now, before the addition of this page, that bad actor could log-in and access all the time-sensitive academic information (gradeables, unreleased exam solutions in course materials etc.) undetected. But now, as all the sessions are visible on the interface, a smart user can identify if their account has been compromised by looking at the login timestamp, platform and browser information. He/she can then take necessary actions such as immediately terminating all other sessions by just clicking a button and then changing the password.

**Future Scope:** This doesn't completely eliminate the possibility of account hijacking, but is still a good step towards early identification in a number of cases. When using SAML authentication, identity provider may already have some suspicious login detection mechanism in place, there can be discussion on whether Submitty should have its own such mechanism or not.

---

## Unmasking the identity

[PR #8002](https://github.com/Submitty/Submitty/pull/8002)

**Context:** Submitty already had a concept of anonymous ids. Submission of every student can be identified by a unique anonymous id tied to him/her. This is useful to eliminate partiality while grading. This is a must have for peer grading so that students don't grade each other based on their perceptions and personal conflicts but instead grade every submission with a neutral mindset. This feature is useful to counter any subconscious preference when limited access graders are concerned. If the grading is blinded, students can be assured that the chances of their grades being biased have drastically decreased.

**Problem:** Until now, everything sounds good. But here comes the issue: anonymous ids are generated one time and used for all gradeables within the course, so if a user somehow gets to know the anonymous id of another user then they can identify that user forever (including past and future gradeables) while grading. Consequently, the purpose of anonymous id is defeated and grading doesn't remain fully anonymous anymore as the identity of the submitter gets compromised.

**Solution:** New anonymous ids are generated for each gradeable, if an anonymous id is compromised for one gradeable, the impact is much less as the future gradeables will have different randomly generated anonymous ids for all the course users. It sounds simple, but anonymous ids are deeply embedded into Submitty. A number of issues unearthed themselves as part of this work; they were handled with sword in one hand and armor in the other. **The bottom line is that this work diluted the side effects of unintended disclosure of personally identifiable information.**

---

## Achilles' heels

Following vulnerabilities were patched (get ready for some peculiar titles):

#### Release it NOW

[PR #8188](https://github.com/Submitty/Submitty/pull/8188)

Instructors may use course materials functionality to release homework solutions or assignment solutions that have weightage in the term grades. Broken access control allowed any user (including any student) to release all the course materials and then view the solutions.

#### Hide & Seek

[PR #8150](https://github.com/Submitty/Submitty/pull/8150)

Course materials have a "Hide material" feature. Using this feature doesn't actually prevent the students from accessing the materials. During the assessment, I learned that students can access the hidden files leveraging insecure direct object reference. But, this feature never intended to protect the materials from being accessed. Only release date of the material should be used for the purpose of setting the access status. As this can be confusing for the instructors, a proper warning is issued now whenever "hide material" feature is used.

#### Grading mania

[PR #8383](https://github.com/Submitty/Submitty/pull/8383)

Feeling bored? Let's grade all the students in the class!
This vulnerability is related to peer grading assignments, it was discovered and brought up by Matt B., if the anonymous id of a submitter is known then any peer could grade them even if he/she was not assigned to grade that submitter, a student could also possibly grade their own submission.

#### I was there before you!

[PR #8229](https://github.com/Submitty/Submitty/pull/8229)

Have you ever been in a dispute about your position in a queue? A vulnerability was discovered leveraging which a student could remove another student from an office hours queue, then the former could be present in two queues at the same time.

#### Keep it coming - I

[PR #8054](https://github.com/Submitty/Submitty/pull/8054)

A student could upload unlimited number of profile photos. Without other protection measures in place, even a low privilege user could fill up the server's storage. A limit has been imposed now.

#### Keep it coming - II

[PR #8051](https://github.com/Submitty/Submitty/pull/8051)

There was no file format restriction for profile photos; this left the doors wide open for several unexpected behaviors/vulnerabilities (such as those related to SVG files). A profile photo is supposed to be small in size, but there was no limit (other than in PHP configuration) on the size of profile photo that the server would accept for processing. Now only some select image formats are allowed and a limit has been imposed on the file size.

#### There's a limit to everything

[PR #8230](https://github.com/Submitty/Submitty/pull/8230)

Max nesting level wasn't enforced for Markdown. Due to this, max recursion depth was reached when provided with particular Markdown input to render, causing the pages with rendered Markdown to be totally inaccessible in the worst scenario. A student could trigger this behavior in discussion forum.

#### A peek inside

[PR #8231](https://github.com/Submitty/Submitty/pull/8231)

Students and limited access graders could view the details about the progress of bulk grading job, in addition to that, they could access the statistics/forensics related to bulk grading.

## Side business:

[PR #8216](https://github.com/Submitty/Submitty/pull/8216)

I felt the necessity of being able to view the common settings (if any) for a folder i.e. common release date, common section(s) and common "hide materials" setting. To accomplish this I developed a client side solution to recursively traverse the folder structure of course materials page to determine the settings that were common in all files/folders within each folder.

I also reviewed pull requests by other developers; it was a very pleasant experience.

## Acknowledgements

This has been one of the best experiences of my life. I would like to thank Dr. Barb Cutler and Chris Reed for supporting me at every step. Dr. Barb is an exceptional thinker, academician and leader; she possesses a rare combination of highly coveted qualities including humility. She made everything easy from the very beginning. Chris was always available to offer help and guide me in the right direction. I would also like to thank Dr. Matthew Peveler for being a pillar of support. I am grateful to Shail Patel and William Allen for providing suggestions backed by their experience. Finally, I would like to thank RPI students and fellow GSoC contributors to review my PRs and to make this journey even more fruitful and fulfilling, I learned something from everyone.


Get in touch with me at [akshatbatra25@gmail.com](mailto:akshatbatra25@gmail.com) if you have any freelance/full-time work opportunities. Working on challenging stuff is my priority.
