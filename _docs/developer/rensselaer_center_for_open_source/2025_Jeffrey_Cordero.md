---
title: Jeffrey Cordero
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2025
---

During my time with Submitty, I was a key contributor to the open-source academic platform, working on full-stack development, infrastructure modernization, and system security. My core contributions included enhancements to Notifications, Rainbow Grades, WebSockets, CI/CD improvements, and various bug fixes. I also participated extensively in pull request reviews across the entire tech stack, which deepened my experience with collaborative development, engaging in design discussions, reviewing code at scale, and promoting practices that emphasize maintainability and reliability. The following sections highlight some of the most interesting features I had the opportunity to build this summer.

### Notification System Enhancements

To improve student communication, I implemented significant enhancements to Submitty’s notification system. These included automatic in-platform and email alerts when grades are released ([#10358](https://github.com/Submitty/Submitty/pull/10358)) and when new assignments become available ([#11897](https://github.com/Submitty/Submitty/pull/11897)). A reliable hourly cron job now ensures the timely delivery of these messages across all active courses.

```
[Submitty sample] Grade Released: Grading Homework PDF
Your grade is now available for Grades Released Homework in course
SAMPLE.

Click here for more info: http://localhost:1511/courses/s25/sample/gradeable/grading_homework_pdf

--
NOTE: This is an automated email notification, which is unable to receive replies.
Please refer to the course syllabus for contact information for your teaching staff.
Update your email notification settings for this course here: http://localhost:1511/courses/s25/sample/notifications/settings
```

To support these improvements, I also built dedicated Cypress test suites for email delivery ([#11878](https://github.com/Submitty/Submitty/pull/11878)) and notification preferences ([#11913](https://github.com/Submitty/Submitty/pull/11913)). These tests lay the foundation for more robust future testing of the notification system.

<div style="text-align: center; max-width: 100%; margin: auto;">
  <img src="../../../images/RCOS_report/2025_Jeffrey_Cordero/cypress-notifications-testing-example.png" alt="Cypress Notification Testing" />
</div>

### Rainbow Grades Nightly Build

Previously, the Rainbow Grades summary page could become outdated unless instructors manually triggered a rebuild. To streamline this process, I enhanced the nightly summary generation script to automatically trigger the build process before generating new summaries ([#11496](https://github.com/Submitty/Submitty/pull/11496)). As a result, students now have continuous access to up-to-date grade reports each day.

```bash
$ python3 sbin/generate_grade_summaries.py f25 sample submitty_daemon
Successfully selected the manual customization for f25.sample
Successfully submitted the Rainbow Grades build process for f25.sample
Successfully completed the Rainbow Grades build process for f25.sample
Successfully generated grade summaries for f25.sample
```

<div style="text-align: center; max-width: 100%; margin: auto;">
  <img src="../../../images/RCOS_report/2025_Jeffrey_Cordero/rainbow-grades-nightly-build.png" alt="Rainbow Grades Nightly Build" />
</div>

### WebSocket Security & Testing

I addressed a critical security flaw in the platform's WebSocket server by implementing a token-based authorization system ([#11634](https://github.com/Submitty/Submitty/pull/11634)). Previously, any user with a direct URL and valid login credentials could access any WebSocket page, posing a considerable risk for real-time student-instructor communications.

To mitigate this, I designed a JSON Web Token (JWT)–based authorization layer. The web server now generates short-lived, multi-use tokens scoped to specific pages. These tokens ensure WebSocket connections are established only by authorized users with access managed through a sliding window mechanism that gracefully handles expired pages, reducing the average WebSocket authentication time by approximately 90%.

```json
{
  "iat": 1753797357.504631,
  "iss": "https://submitty.org/",
  "sub": "instructor",
  "authorized_pages": {
    "f25-sample-defaults": 1753800957,
    "f25-sample-chatrooms-1": 1753800957,
    "f25-sample-polls-3-instructor": 1753800912
  },
  "expire_time": 1753800957
}
```

Alongside these changes, I introduced the platform’s first end-to-end WebSocket test suite in the Discussion Forum ([#11873](https://github.com/Submitty/Submitty/pull/11873)), which was part of a broader testing strategy including new PHP unit tests for backend logic and Cypress end-to-end tests to verify secure, token-based WebSocket connections.

<div style="text-align: center; max-width: 100%; margin: auto;">
  <img src="../../../images/RCOS_report/2025_Jeffrey_Cordero/cypress-websocket-testing-example.png" alt="Cypress WebSocket Testing" />
</div>
