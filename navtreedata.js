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
                [ "Rubric Components and Marks", "/grader/rubric_grading/rubric_components_and_marks", null ],
                [ "Silent Editing", "/grader/rubric_grading/silent_editing", null ],
                [ "PDF Annotation", "/grader/rubric_grading/pdf_annotation", null ],
                [ "Sorting and Navigation", "/grader/rubric_grading/sorting_and_navigation", null ],
                [ "Resolving a Grade Inquiry", "/grader/rubric_grading/grade_inquiry", null ],
                [ "Statistics", "/grader/rubric_grading/statistics", null ]
            ] ],
            [ "Managing Office Hours", "/grader/queue", null ]
        ] ],
        [ "Instructor", "/instructor", [
            [ "Overview", "/instructor", null ],
            [ "Course Settings", "/instructor/course_settings/index", [
                [ "Overview", "/instructor/course_settings/index", null ],
                [ "Discussion Forum", "/instructor/course_settings/forum", null ],
                [ "Submini Polling", "/instructor/course_settings/submini_polls", null ],
                [ "Office Hours Queue", "/instructor/course_settings/queue", null ],
                [ "Grade Inquiries", "/instructor/course_settings/grade_inquiries", null ],
                [ "Rainbow Grades", "/instructor/course_settings/rainbow_grades/index", [
                    [ "Overview", "/instructor/course_settings/rainbow_grades/index", null ],
                    [ "Automatic Setup", "/instructor/course_settings/rainbow_grades/automatic_setup", null ],
                    [ "Manual Setup", "/instructor/course_settings/rainbow_grades/manual_setup", null ],
                    [ "Customization Basics", "/instructor/course_settings/rainbow_grades/customization_basics", null ],
                    [ "Exam Seating", "/instructor/course_settings/rainbow_grades/exam_seating", null ],
                    [ "Room Templates", "/instructor/course_settings/rainbow_grades/room_templates", null ],
                    [ "RPI VPN on WSL Instructions", "/instructor/course_settings/rainbow_grades/wsl_vpn", null ]
                ] ],
                [ "Website Customization", "/instructor/course_settings/website_customization", null ]
            ] ],
            [ "Course Management", "/instructor/course_management/managing_enrollment", [
                [ "Managing Enrollment", "/instructor/course_management/managing_enrollment", null ],
                [ "Course Materials", "/instructor/course_management/course_materials", null ],
                [ "Late Days", "/instructor/course_management/late_days", null ],
                [ "Grade Override", "/instructor/course_management/grade_override", null ],
                [ "Peer Grading", "/instructor/course_management/peer_grading", null ],
                [ "Lichen Plagiarism Detection", "/instructor/course_management/plagiarism", null ],
                [ "SQL Toolbox", "/instructor/course_management/sql_toolbox", null ]
            ] ],
            [ "Assignment Preparation", "/instructor/assignment_preparation/index", [
                [ "Overview", "/instructor/assignment_preparation/index", null ],
                [ "Facilitating Submission via GIT", "/instructor/assignment_preparation/submission_version_control", null ],
                [ "Team Assignments", "/instructor/assignment_preparation/team_assignments", null ],
                [ "Bulk PDF Upload", "/instructor/assignment_preparation/bulk_pdf_upload", null ],
                [ "Personalized Exam", "/instructor/assignment_preparation/personalized_exams", null ],
            ] ],
            [ "Assignment Configuration", "/instructor/assignment_configuration/configuration_path", [
                [ "Configuration Path","/instructor/assignment_configuration/configuration_path", null],
                [ "Notebook", "/instructor/assignment_configuration/notebook", null ]
            ] ],
            [ "Autograding", "/instructor/autograding/directory_structure", [
                [ "Directory Structure", "/instructor/autograding/directory_structure", null ],
                [ "Autograding Configuration Structure", "/instructor/autograding/structure", null ],
                [ "Phases of Autograding", "/instructor/autograding/phases", null ],
                [ "Autograding Specification", "/instructor/autograding/specification", null ],
                [ "Distributed / Networked Applications", "/instructor/autograding/networking", null ],
                [ "Graphics Applications", "/instructor/autograding/graphics", null ],
                [ "Validation", "/instructor/autograding/validation", null ],
                [ "Batch Regrade Submissions", "/instructor/autograding/batch_regrade", null ],
                [ "Sample Assignments", "/instructor/autograding/sample_assignments", null ],
                [ "Docker UI", "/instructor/autograding/docker_ui", null ],
                [ "Static Analysis", "/instructor/autograding/static_analysis", [
                    [ "Overview", "/instructor/autograding/static_analysis", null ],
                    [ "Tree Tool", "/instructor/autograding/static_analysis/tree_tool", null ],
                    [ "Common AST", "/instructor/autograding/static_analysis/commonAST", null ],
                    [ "CPP Union Tool", "/instructor/autograding/static_analysis/cppUnionTool", null ],
                    [ "Graph Comparison", "/instructor/autograding/static_analysis/graphComparison", null ],
                ] ],
            ] ],
        ] ],
        [ "System Administrator", "/sysadmin", [
            [ "Server OS", "/sysadmin", null ],
            [ "Installation", "/sysadmin/installation", null ],
            [ "Update Submitty", "/sysadmin/update", null ],
            [ "Installation Version Notes", "/sysadmin/version_notes", [
                [ "Overview", "/sysadmin/version_notes", null],
                [ "v22.03.00", "/sysadmin/version_notes/v22.03.00", null ],
                [ "v21.11.01", "/sysadmin/version_notes/v21.11.01", null ],
                [ "v21.06.04", "/sysadmin/version_notes/v21.06.04", null ],
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
            [ "Rainbow Grades", "/sysadmin/rainbow_grades", null ],
            [ "Log Files", "/instructor/log_files", null ],
            [ "Photo Scraper", "/instructor/student_photos", null ]
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
            [ "Xdebug Setup Instructions", "/developer/xdebug", null ],
            [ "Database Design", "/developer/database_design", null ],
            [ "PGAdmin Setup Instructions", "/developer/pgadmin", null ],
            [ "Migrations", "/developer/migrations", null ],
            [ "Automated Grading", "/developer/automated_grading", null ],
            [ "JSON Configuration Files", "/developer/json_configuration_files", null ],
            [ "JSON Responses", "/developer/json_responses", null ],
            [ "Lichen Plagiarism Detection", "/developer/plagiarism", null ],
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
                [ "WebSocket", "/developer/developing_the_php_site/websocket", null ],
                [ "Frontend JavaScript", "/developer/developing_the_php_site/javascript", null]
            ] ],
            [ "Updating Dependencies", "/developer/updating_dependencies", null ],
            [ "Configuring Tie In Programs", "/developer/configuring_tie_in_programs", null ],
            [ "Router", "/developer/router", null ],
            [ "API", "https://api.submitty.org", null ],
            [ "MS/PhD Students", "/developer/ms_phd_students", [
                [ "John Hulton MS 2020", "/developer/ms_phd_students/MS_2020_John_Hulton", null ],
                [ "Héctor Rodríguez Figueroa MS 2021", "/developer/ms_phd_students/MS_2021_Hector_Rodriguez", null ],
            ] ],
            [ "RPI Summer RCOS", "/developer/rpi_summer_rcos", [
                [ "2021 William Allen",    "/developer/rpi_summer_rcos/2021_William_Allen", null ],
                [ "2021 Shelly Belsky",    "/developer/rpi_summer_rcos/2021_Shelly_Belsky", null ],
                [ "2021 Miles Ednie",      "/developer/rpi_summer_rcos/2021_Miles_Ednie", null ],
                [ "2021 Eddie Krystowski", "/developer/rpi_summer_rcos/2021_Eddie_Krystowski", null ],
                [ "2021 Henrik Lam",       "/developer/rpi_summer_rcos/2021_Henrik_Lam", null ],
                [ "2021 Chris Reed",       "/developer/rpi_summer_rcos/2021_Chris_Reed", null ]
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
