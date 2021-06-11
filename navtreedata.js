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
        [ "Instructor", "/instructor", [
            [ "Overview", "/instructor", null ],
            [ "Course Settings", "/instructor/course_settings", null ],
            [ "Managing Enrollment", "/instructor/managing_enrollment", null ],
            [ "Create or Edit a Gradeable", "/instructor/create_edit_gradeable", null ],
            [ "Directory Structure", "/instructor/directory_structure", null ],
            [ "Assignment Configuration", "/instructor/assignment_configuration", [
                [ "Configuration Path", "/instructor/assignment_configuration/configuration_path", null ],
                [ "Autograding Configuration Structure", "/instructor/assignment_configuration/structure", null ],
                [ "Phases of Autograding", "/instructor/assignment_configuration/phases", null ],
                [ "Autograding Specification", "/instructor/assignment_configuration/specification", null ],
                [ "Distributed / Networked Applications", "/instructor/assignment_configuration/networking", null ],
                [ "Graphics Applications", "/instructor/assignment_configuration/graphics", null ],
                [ "Validation", "/instructor/assignment_configuration/validation", null ],
                [ "Notebook", "/instructor/assignment_configuration/notebook", null ]
            ] ],
            [ "Course Materials", "/instructor/course_materials", null ],
            [ "Enable and Configure Office Hours Queue", "/instructor/queue", null ],
            [ "Peer Grading", "/instructor/peer_grading", null ],
            [ "Facilitating Submission via GIT", "/instructor/managing_git", null ],
            [ "Static Analysis", "/instructor/static_analysis", null ],
            [ "Tree Tool", "/instructor/tree_tool", null ],
            [ "Log Files", "/instructor/log_files", null ],
            [ "Batch Regrade Submissions", "/instructor/batch_regrade_submissions", null ],
            [ "Rainbow Grades", "/instructor/rainbow_grades", [
                [ "Automatic Setup", "/instructor/rainbow_grades/automatic_setup", null ],
                [ "Manual Setup", "/instructor/rainbow_grades/manual_setup", null ],
                [ "Customization Basics", "/instructor/rainbow_grades/customization_basics", null ],
                [ "Gradeables Customization", "/instructor/rainbow_grades/gradeables", null ],
                [ "Exam Seating", "/instructor/rainbow_grades/exam_customization", null ],
                [ "Room Templates", "/instructor/rainbow_grades/room_templates", null ],
                [ "iClicker Instructions", "/instructor/rainbow_grades/iclicker_instructions", null ],
                [ "RPI VPN on WSL Instructions", "/instructor/rainbow_grades/wsl_vpn", null ]
            ] ],
            [ "Late Days", "/instructor/late_days", null ],
            [ "Team Assignments", "/instructor/team_assignments", null ],
            [ "Website Customization", "/instructor/website_customization", null ],
            [ "Plagiarism Detection", "/instructor/plagiarism", null ],
            [ "Bulk PDF Upload", "/instructor/bulk_pdf_upload", null ],
            [ "Personalized Exam", "/instructor/personalized_exams", null ],
            [ "Photo Scraper", "/instructor/student_photos", null ],
            [ "Silent Grade Editing", "/instructor/silent_editing", null ],
            [ "Enabling Grade Inquiries", "/instructor/grade_inquiry_instructor", null ],
            [ "Discussion Forum", "/instructor/forum", null ],
            [ "Grade Override", "/instructor/grade_override", null ],
            [ "Premade Assignments", "/instructor/premade_assignments", null ],
            [ "Submini Polling", "/instructor/submini_polls", null ],
            [ "SQL Toolbox", "/instructor/sql_toolbox", null ]
        ] ],
        [ "System Administrator", "/sysadmin", [
            [ "Server OS", "/sysadmin", null ],
            [ "Installation", "/sysadmin/installation", null ],
            [ "Update Submitty", "/sysadmin/update", null ],
            [ "Installation Version Notes", "/sysadmin/version_notes", [
                [ "v21.01.01", "/sysadmin/version_notes/v21.01.01", null ],
                [ "v20.09.00", "/sysadmin/version_notes/v20.09.00", null ],
                [ "v20.08.00", "/sysadmin/version_notes/v20.08.00", null ],
                [ "v19.08.03", "/sysadmin/version_notes/v19.08.03", null ],
                [ "v19.06.02", "/sysadmin/version_notes/v19.06.02", null ],
                [ "v.19.06.01", "/sysadmin/version_notes/v.19.06.01", null ]
            ] ],
            [ "System Debugging", "/sysadmin/system_debugging", null ],
            [ "Database Overview", "/sysadmin/database_overview", null ],
            [ "User Access Level", "/sysadmin/user_access_level", null ],
            [ "Course Creation", "/sysadmin/course_creation", null ],
            [ "Setting up Internal Git", "/sysadmin/git", null ],
            [ "Worker Installation", "/sysadmin/worker_installation", null ],
            [ "System Customization Checklist", "/sysadmin/system_customization", null ],
            [ "Email Configuration", "/sysadmin/email_configuration", null ],
            [ "Course Archiving", "/sysadmin/course_archiving", null ],
            [ "Rainbow Grades", "/sysadmin/rainbow_grades", null ]
        ] ],
        [ "Developer", "/developer", [
            [ "Overview", "/developer", null ],
            [ "Project Ideas", "/developer/project_ideas", null ],
            [ "How to Contribute", "/developer/how_to_contribute", null ],
            [ "VM Install using Vagrant", "/developer/vm_install_using_vagrant", null ],
            [ "Virtual Box Worker", "/developer/worker_vm", null ],
            [ "Development Instructions", "/developer/development_instructions", [
                [ "Troubleshooting", "/developer/development_instructions/troubleshooting", null ],
                [ "Email Configuration", "/developer/development_instructions/vagrant_email_configuration", null ],
                [ "Router Response", "/developer/development_instructions/router-response", null ],
                [ "Resolving Merge Conflicts", "/developer/development_instructions/merge_conflicts", null ],
                [ "Miscellaneous", "/developer/development_instructions/miscellaneous", null ]
            ]],
            [ "PhpStorm Setup Instructions", "/developer/phpstorm", null ],
            [ "Database Design", "/developer/database_design", null ],
            [ "PGAdmin Setup Instructions", "/developer/pgadmin", null ],
            [ "Migrations", "/developer/migrations", null ],
            [ "Automated Grading", "/developer/automated_grading", null ],
            [ "JSON Configuration Files", "/developer/json_configuration_files", null ],
            [ "JSON Responses", "/developer/json_responses", null ],
            [ "Coding Style Guide", "/developer/coding_style_guide", [
                [ "Python", "/developer/coding_style_guide/python", null ],
                [ "C++", "/developer/coding_style_guide/c++", null ],
                [ "PHP", "/developer/coding_style_guide/php", null ],
                [ "JavaScript", "/developer/coding_style_guide/javascript", null ],
                [ "CSS", "/developer/coding_style_guide/css", null ]
            ] ],
            [ "Testing", "/developer/testing", [
                [ "Installing PHP", "/developer/testing/install_php", null ],
                [ "Linting / Static Analysis", "/developer/testing/linting_static_analysis", null ],
                [ "Python Unit Tests", "/developer/testing/python_unit_tests", null ],
                [ "PHP Unit Tests", "/developer/testing/php_unit_tests", null ],
                [ "Selenium End-to-End Tests", "/developer/testing/site_end_to_end_tests", null ],
                [ "Cypress End-to-End Tests", "/developer/testing/cypress", null ],
                [ "Autograding Integration Tests", "/developer/testing/autograding_integration_tests", null ],
                [ "GitHub Actions", "/developer/testing/github_actions", null ]
            ] ],
            [ "Interface Design", "/developer/interface_design_style_guide", [
                [ "Web Accessibility", "/developer/interface_design_style_guide/web_accessibility", null ]
            ] ],
            [ "Developing the PHP Site", "/developer/developing_the_php_site", [
                [ "Model", "/developer/developing_the_php_site/model", null ],
                [ "View", "/developer/developing_the_php_site/view", null ],
                [ "Controller", "/developer/developing_the_php_site/controller", null ],
                [ "Feature Flags", "/developer/developing_the_php_site/feature_flags", null ],
                [ "WebSocket", "/developer/developing_the_php_site/websocket", null ]
            ] ],
            [ "Updating Dependencies", "/developer/updating_dependencies", null ],
            [ "Configuring Tie In Programs", "/developer/configuring_tie_in_programs", null ],
            [ "Router", "/developer/router", null ],
            [ "API", "https://api.submitty.org", null ],
            [ "MS/PhD Students", "/developer/ms_phd_students", [
                [ "John Hulton MS 2020", "/developer/ms_phd_students/MS_2020_John_Hulton", null ],
                [ "Héctor Rodríguez Figueroa MS 2021", "/developer/ms_phd_students/MS_2021_Hector_Rodriguez", null ],
            ] ],
            [ "Google Summer of Code", "/developer/google_summer_of_code", [
                [ "2020 Mukul Kumar Jha", "/developer/google_summer_of_code/2020_Mukul_Kumar_Jha", null ],
                [ "2020 Marwan Atef", "/developer/google_summer_of_code/2020_Marwan_Atef", null ],
                [ "2020 Harsh Joshi", "/developer/google_summer_of_code/2020_Harsh_Joshi", null ],
                [ "2019 Fon Noel", "/developer/google_summer_of_code/2019_FonNoel", null ],
                [ "2019 Drumil Patel", "/developer/google_summer_of_code/2019_DrumilPatel", null ],
                [ "2019 Anubhav Singh", "/developer/google_summer_of_code/2019_AnubhavSingh", null ],
                [ "2019 Xiao Han", "/developer/google_summer_of_code/2019_XiaoHan", null ],
                [ "2018 Tushar Gurjar", "/developer/google_summer_of_code/2018_TusharGurjar", null ],
                [ "2018 Gagan Kumar", "/developer/google_summer_of_code/2018_GaganKumar", null ]
            ] ]
        ] ]
    ];

//[ "", "", null ]


var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';
