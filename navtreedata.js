/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
    [
        [ "Welcome", "/index/overview", [
            [ "Overview", "/index/overview", null ],
            [ "Features", "/index/features", null ],
            [ "Publications", "/index/publications", null ],
            [ "People", "/index/people", null ],
            [ "Contact Us", "/index/contact", null ]
        ] ],
        [ "Student", "/student/account/index", [
            [ "Courses & Profile", "/student/account/index", [
                [ "Overview", "/student/account/index", null ],
                [ "Course Navigation", "/student/account/course_navigation", null ],
                [ "Preferred Name", "/student/account/preferred_name", null ],
                [ "Email Address(es)", "/student/account/email_addresses", null ],
                [ "Password", "/student/account/password", null ],
                [ "Photo", "/student/account/photo", null ],
                [ "Local Timezone", "/student/account/local_timezone", null ],
                [ "Theme", "/student/account/theme", null ],
                [ "Notifications & Email", "/student/account/notifications", null ]
            ] ],
            [ "Submission", "/student/submission/index", [
                [ "Overview", "/student/submission/index", null ],
                [ "Version Control / GIT", "/student/submission/version_control", null ],
                [ "Automated Testing", "/student/submission/automated_testing", null ],
                [ "Late Days & Extensions", "/student/submission/late_days", null ],
                [ "Managing Versions", "/student/submission/managing_versions", null ],
                [ "Team Assignments", "/student/submission/team_assignments", null ]
            ] ],
            [ "Grades", "/student/grades/index", [
                [ "Overview", "/student/grades/index", null ],
                [ "Opening a Grade Inquiry", "/student/grades/grade_inquiry", null ],
                [ "Rainbow Grades", "/student/grades/rainbow_grades", null ]
            ] ],
            [ "Communication", "/student/communication/forum", [
                [ "Discussion Forum", "/student/communication/forum", null ],
                [ "Office Hours Queue", "/student/communication/office_hours_queue", null ],
                [ "Writing Markdown", "/student/communication/markdown", null ]
            ] ]
        ] ],
        [ "TA or Grader", "/grader/index", [
            [ "Overview", "/grader/index", null ],
            [ "Checkpoint Grading", "/grader/checkpoint_grading", null ],
            [ "Numeric / Text Grading", "/grader/numeric_text_grading", null ],
            [ "Rubric Grading", "/grader/rubric_grading/index", [
                [ "Overview", "/grader/rubric_grading/index", null ],
                [ "Common Marks", "/grader/rubric_grading/common_marks", null ],
                [ "PDF Annotation", "/grader/rubric_grading/pdf_annotation", null ],
                [ "Sorting and Navigation", "/grader/rubric_grading/sorting_and_navigation", null ],
                [ "Resolving a Grade Inquiry", "/grader/rubric_grading/grade_inquiry", null ],
                [ "Statistics", "/grader/rubric_grading/statistics", null ]
            ] ],
            [ "Managing Office Hours", "/grader/queue", null ]
        ] ],
        [ "Instructor", "", [
        ] ],
        [ "System Administrator", "", [
        ] ],
        [ "Developer", "", [
        ] ]
    ];

        
//[ "", "", null ]


var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
