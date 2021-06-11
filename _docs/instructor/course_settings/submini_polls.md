---
category: Instructor
title: Submini Polling
redirect_from:
  - /instructor/submini_polls
---

### Overview 

Submitty has a lecture polling system for instructors that can be enabled to gather quick information or quiz students on lecture material. Submitty stores the questions and student responses and allows you to use the data how you see fit.

### Enabling Submini Polls

By default, the polling system is disabled. To enable it, the instructor user navigates to Course Settings and scroll down you see the "Online Polling" header. Check the box to enable polls. Refreshing the page should show a tab labelled "Polls" in the sidebar.


### Creating a Poll

To create a poll, navigate to the polls page via the sidebar and click the "New Poll" button at the top. On this page, enter in the name of the poll, the question asked to the students, and a release date. The release date is used to sort the polls into three categories: Today, Old, and Future. This date is also used in rainbow grades to group polls together to give students a summary for the day. Next, click the + sign to add a new response to the poll. Enter the text for the response and use the check mark on the left to indicate whether the response is correct or not. On the right, there is a trash icon to delete a response and arrows which can be used to reorder the responses. When you've finished, click the "Add Poll" button.

### Opening and Closing Polls

Back on the main poll page, you should see your new poll in one of the three sections depending on release date.  Note: Students can always see the existence and title of all polls in the "Today" and "Old" categories.  

Instructors control two additional settings for each poll. First is "Visible", which indicates whether students are able to see the contents (questions and answer choices).  Second is "Accepting Responses", which indicates whether students are able to submit new responses to the poll. Simply check or uncheck these boxes to change the state of the poll.

### Viewing the Results and Data

To view the results for a specific poll, go to the main poll page and click the "View Results" button to see a histogram of the responses. Keep in mind that if you might need to refresh to view new results if students are still responding while you are on the page. To view the individual data, first go the "Grade Reports" page in the sidebar and click "Generate Grade Summaries". This will update Rainbow Grades to have a summary of all polls that are visible to students, as well as generate two JSON files in the `/var/local/submitty/courses/<SEMESTER>/<COURSE>/reports/polls` directory in your course. `poll_questions.json` contains all the data for each poll, including its ID, name, question, responses, and a list of which responses are correct. `poll_responses.json` contains all the response data for each poll. Each element contains a poll ID as well as an associative array that maps student IDs to the response ID they selected for that poll.

### Exporting and Importing Polls

If you run a course multiple times and want to migrate your created polls to a new semester, simply visit the main polls page and click the "Export" button. This will download the `poll_questions.json` file mentioned earlier. Then, in your new course click "Import" and upload the file. This will create a new poll in your current course for each poll in the file. Keep in mind that this NOT edit or override existing polls, so you might need to delete duplicate polls if you previously created some. Additionally, when migrating to a new semester, all the release dates are likely to be wrong, so you will need to edit the dates by either editing the JSON file before upload, or by editing the polls one-by-one through the web interface after upload.
