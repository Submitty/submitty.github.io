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
                [ "Authentication Tokens", "/student/account/authentication_tokens", null ],
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
                [ "Silent Regrade", "/grader/rubric_grading/silent_regrade", null ],
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
                    [ "Gradeables Customization", "/instructor/course_settings/rainbow_grades/gradeables", null ],
                    [ "Exam Seating", "/instructor/course_settings/rainbow_grades/exam_seating", null ],
                    [ "Room Templates", "/instructor/course_settings/rainbow_grades/room_templates", null ],
                    [ "RPI VPN on WSL Instructions", "/instructor/course_settings/rainbow_grades/wsl_vpn", null ]
                ] ],
                [ "Customize Website Theme", "/instructor/course_settings/website_customization", null ]
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
                [ "Submissions via Version Control", "/instructor/assignment_preparation/submission_version_control", null ],
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
                [ "Static Analysis", "/instructor/autograding/static_analysis/index", [
                    [ "Overview", "/instructor/autograding/static_analysis/index", null ],
                    [ "Count", "/instructor/autograding/static_analysis/count", null ],
                    [ "Tree Tool", "/instructor/autograding/static_analysis/tree_tool", null ],
                    [ "Common AST", "/instructor/autograding/static_analysis/commonAST", null ],
                    [ "CPP Union Tool", "/instructor/autograding/static_analysis/cppUnionTool", null ],
                    [ "Graph Comparison", "/instructor/autograding/static_analysis/graphComparison", null ],
                ] ],
            ] ],
        ] ],
        [ "System Administrator", "/sysadmin/installation/index", [
            [ "Installation", "/sysadmin/installation/index", [
                [ "Overview", "/sysadmin/installation/index", null ],
                [ "Server OS", "/sysadmin/installation/server_os", null ],
                [ "Update GNU/Linux Server", "/sysadmin/installation/update_server", null ],
                [ "Update Submitty", "/sysadmin/installation/update_submitty", null ],
                [ "Version Notes", "/sysadmin/installation/version_notes/index", [
                    [ "Overview", "/sysadmin/installation/version_notes/index", null],
                    [ "v23.12.02", "/sysadmin/installation/version_notes/v23.12.02", null ],
                    [ "v23.07.00", "/sysadmin/installation/version_notes/v23.07.00", null ],
                    [ "v23.03.01", "/sysadmin/installation/version_notes/v23.03.01", null ],
                    [ "v22.06.00", "/sysadmin/installation/version_notes/v22.06.00", null ],
                    [ "v22.05.00", "/sysadmin/installation/version_notes/v22.05.00", null ],
                    [ "v22.03.00", "/sysadmin/installation/version_notes/v22.03.00", null ],
                    [ "v21.11.01", "/sysadmin/installation/version_notes/v21.11.01", null ],
                    [ "v21.06.04", "/sysadmin/installation/version_notes/v21.06.04", null ],
                    [ "v21.01.01", "/sysadmin/installation/version_notes/v21.01.01", null ],
                    [ "v20.09.00", "/sysadmin/installation/version_notes/v20.09.00", null ],
                    [ "v20.08.00", "/sysadmin/installation/version_notes/v20.08.00", null ],
                    [ "v19.08.03", "/sysadmin/installation/version_notes/v19.08.03", null ],
                    [ "v19.06.02", "/sysadmin/installation/version_notes/v19.06.02", null ],
                    [ "v.19.06.01", "/sysadmin/installation/version_notes/v.19.06.01", null ]
                ] ],
                [ "Worker Installation", "/sysadmin/installation/worker_installation", null ],
                [ "System Customization", "/sysadmin/installation/system_customization", null ],
            ] ],
            [ "Configuration & Administration", "/sysadmin/configuration/course_creation", [
                [ "Course Creation", "/sysadmin/configuration/course_creation", null ],
                [ "Setting up Version Control", "/sysadmin/configuration/version_control", null ],
                [ "SAML Authentication", "/sysadmin/configuration/saml_authentication", null ],
                [ "Email Configuration", "/sysadmin/configuration/email_configuration", null ],
                [ "Registration Feed", "/sysadmin/configuration/registration_feed", null ],
                [ "Course Archiving", "/sysadmin/configuration/course_archiving", null ],
                [ "Rainbow Grades", "/sysadmin/configuration/rainbow_grades", null ],
                [ "Student Photos", "/sysadmin/configuration/student_photos", null ]
            ] ],
            [ "SysAdmin Troubleshooting, etc.", "/sysadmin/troubleshooting/database_overview", [
                [ "Database Overview", "/sysadmin/troubleshooting/database_overview", null ],
                [ "User Access Level", "/sysadmin/troubleshooting/user_access_level", null ],
                [ "Log Files", "/sysadmin/troubleshooting/log_files", null ],
                [ "System Debugging", "/sysadmin/troubleshooting/system_debugging", null ],
            ] ],
        ] ],
        [ "Developer", "/developer/getting_started/index", [
            [ "Getting Started", "/developer/getting_started/index", [
                [ "Overview", "/developer/getting_started/index", null ],
                [ "Project Ideas", "/developer/getting_started/project_ideas", null ],
                [ "Review a Pull Request", "/developer/getting_started/review_a_pull_request", null ],
                [ "Make a Pull Request", "/developer/getting_started/make_a_pull_request", null ],
                [ "Edit Submitty Documentation", "/developer/getting_started/edit_submitty_documentation", null ],
                [ "VM Install using Vagrant", "/developer/getting_started/vm_install_using_vagrant", [
                    [ "Vagrant QEMU on Apple Silicon", "/developer/getting_started/vm_install_using_vagrant_apple_silicon", null ]
                ] ],
                [ "Advanced Setup", "/developer/getting_started/phpstorm", [
                    [ "PhpStorm Setup Instructions", "/developer/getting_started/phpstorm", null ],
                    [ "Xdebug Setup Instructions", "/developer/getting_started/xdebug", null ],
                    [ "PGAdmin Setup Instructions", "/developer/getting_started/pgadmin", null ],
                    [ "Worker VM Setup", "/developer/getting_started/worker_vm", null ],
                ] ],
            ] ],
            [ "Development Instructions", "/developer/development_instructions/index", [
                [ "Overview", "/developer/development_instructions/index", null ],
                [ "Sample Courses Data", "/developer/development_instructions/sample_data", null ],
                [ "Migrations", "/developer/development_instructions/migrations", [
                    [ "Trigger Functions", "/developer/development_instructions/trigger_functions", null ]
                ] ],
                [ "Resolving Merge Conflicts", "/developer/development_instructions/merge_conflicts", null ],
                [ "Localization / Language Support", "/developer/development_instructions/localization", null ],
                [ "Continuous Integration Testing", "/developer/testing/index", [
                    [ "Overview", "/developer/testing/index", null ],
                    [ "Installing PHP", "/developer/testing/install_php", null ],
                    [ "Linting / Static Analysis", "/developer/testing/linting_static_analysis", null ],
                    [ "Python Unit Tests", "/developer/testing/python_unit_tests", null ],
                    [ "PHP Unit Tests", "/developer/testing/php_unit_tests", null ],
                    [ "Cypress End-to-End Tests", "/developer/testing/cypress", null ],
                    [ "Autograding Integration Tests", "/developer/testing/autograding_integration_tests", null ],
                    [ "GitHub Actions", "/developer/testing/github_actions", null ]
                ] ],
                [ "Vagrant Email Configuration", "/developer/development_instructions/vagrant_email_configuration", null ],
                [ "Miscellaneous", "/developer/development_instructions/miscellaneous", null ],
                [ "Advanced Development", "/developer/development_instructions/automated_grading", [
                    [ "Automated Grading", "/developer/development_instructions/automated_grading", null ],
                    [ "Jobs Daemon", "/developer/development_instructions/jobs_daemon", null ],
                    [ "Lichen Plagiarism Detection", "/developer/development_instructions/plagiarism", null ],
                    [ "Updating Dependencies", "/developer/development_instructions/updating_dependencies", null ],
                    [ "Configuring Tie In Programs", "/developer/development_instructions/configuring_tie_in_programs", null ],
                    [ "Performance Testing", "/developer/development_instructions/performance_testing", null ]
                ] ],
                [ "Developing the PHP Site", "/developer/developing_the_php_site", [
                    [ "Model", "/developer/developing_the_php_site/model", null ],
                    [ "View", "/developer/developing_the_php_site/view", null ],
                    [ "Controller", "/developer/developing_the_php_site/controller", null ],
                    [ "Feature Flags", "/developer/developing_the_php_site/feature_flags", null ],
                    [ "WebSocket", "/developer/developing_the_php_site/websocket", null ],
                    [ "Frontend JavaScript", "/developer/developing_the_php_site/javascript", null]
                ] ],
            ] ],
            [ "Development Troubleshooting", "/developer/troubleshooting/installation_troubleshooting", [
                [ "Installation Troubleshooting", "/developer/troubleshooting/installation_troubleshooting", null ],
                [ "System Clock Troubleshooting", "/developer/troubleshooting/system_clock_testing_troubleshooting", null ],
            ] ],
            [ "Software and System Design", "/developer/software_and_system_design/interface_design_style_guide", [
                [ "Interface Design", "/developer/software_and_system_design/interface_design_style_guide", null ],
                [ "Web Accessibility", "/developer/software_and_system_design/web_accessibility", null ],
                [ "Database Design", "/developer/software_and_system_design/database_design", null ],
                [ "Coding Style Guide", "/developer/software_and_system_design/coding_style_guide/index", [
                    [ "Overview", "/developer/software_and_system_design/coding_style_guide/index", null ],
                    [ "Python", "/developer/software_and_system_design/coding_style_guide/python", null ],
                    [ "C++", "/developer/software_and_system_design/coding_style_guide/c++", null ],
                    [ "PHP", "/developer/software_and_system_design/coding_style_guide/php", null ],
                    [ "JavaScript", "/developer/software_and_system_design/coding_style_guide/javascript", null ],
                    [ "CSS", "/developer/software_and_system_design/coding_style_guide/css", null ]
                ] ],
                [ "JSON Configuration Files", "/developer/software_and_system_design/json_configuration_files", null ],
                [ "JSON Responses", "/developer/software_and_system_design/json_responses", null ],
                [ "Router Response", "/developer/software_and_system_design/router_response", null ],
                [ "Router", "/developer/software_and_system_design/router", null ],
                [ "API", "https://api.submitty.org", null ],
            ] ],
            [ "MS/PhD Students", "/developer/ms_phd_students/index", [
                [ "Overview", "/developer/ms_phd_students/index", null],
                [ "John Hulton MS 2020", "/developer/ms_phd_students/MS_2020_John_Hulton", null ],
                [ "Héctor Rodríguez Figueroa MS 2021", "/developer/ms_phd_students/MS_2021_Hector_Rodriguez", null ],
            ] ],
            [ "Rensselaer Center for Open Source", "/developer/rensselaer_center_for_open_source/moorthy", [
                [ "Moorthy", "/developer/rensselaer_center_for_open_source/moorthy", null ],
                [ "2023 Jaeseok Kang",    "/developer/rensselaer_center_for_open_source/2023_Jaeseok_Kang", null ],
                [ "2023 Mahi Pasarkar",    "/developer/rensselaer_center_for_open_source/2023_Mahi_Pasarkar", null ],
                [ "2023 Nia Heermance",    "/developer/rensselaer_center_for_open_source/2023_Nia_Heermance", null ],
                [ "2023 Sátvik Karanam",    "/developer/rensselaer_center_for_open_source/2023_Satvik_Karanam", null ],
                [ "2023 Viane Matsibekker",    "/developer/rensselaer_center_for_open_source/2023_Viane_Matsibekker", null ],
                [ "2023 Youssef Hassan",    "/developer/rensselaer_center_for_open_source/2023_Youssef_Hassan", null ],
                [ "2022 Evan Bowen Shi",    "/developer/rensselaer_center_for_open_source/2022_Evan_Bowen_Shi", null ],
                [ "2022 Jerry Jiarui Lu",    "/developer/rensselaer_center_for_open_source/2022_Jerry_Jiarui_Lu", null ],
                [ "2022 Thomas Kozlowski",    "/developer/rensselaer_center_for_open_source/2022_Thomas_Kozlowski", null ],
                [ "2022 Matthew Bonnecaze",    "/developer/rensselaer_center_for_open_source/2022_Matthew_Bonnecaze", null ],
                [ "2021 William Allen",    "/developer/rensselaer_center_for_open_source/2021_William_Allen", null ],
                [ "2021 Shelly Belsky",    "/developer/rensselaer_center_for_open_source/2021_Shelly_Belsky", null ],
                [ "2021 Miles Ednie",      "/developer/rensselaer_center_for_open_source/2021_Miles_Ednie", null ],
                [ "2021 Eddie Krystowski", "/developer/rensselaer_center_for_open_source/2021_Eddie_Krystowski", null ],
                [ "2021 Henrik Lam",       "/developer/rensselaer_center_for_open_source/2021_Henrik_Lam", null ],
                [ "2021 Chris Reed",       "/developer/rensselaer_center_for_open_source/2021_Chris_Reed", null ]
            ] ],
            [ "Google Summer of Code", "/developer/google_summer_of_code/index", [
                [ "Overview","/developer/google_summer_of_code/index", null ],
                [ "2023 Cameron Peterson", "/developer/google_summer_of_code/2023_Cameron_Peterson", null ],
                [ "2023 Musaab Imran", "/developer/google_summer_of_code/2023_Musaab_Imran", null ],
                [ "2023 Saumya Borwankar", "/developer/google_summer_of_code/2023_Saumya_Borwankar", null ],
                [ "2022 Akshat Batra", "/developer/google_summer_of_code/2022_Akshat_Batra", null ],
                [ "2022 Madhur Jain", "/developer/google_summer_of_code/2022_Madhur_Jain", null ],
                [ "2022 Poorna Gunathilaka", "/developer/google_summer_of_code/2022_Poorna_Gunathilaka", null ],
                [ "2020 Harsh Joshi", "/developer/google_summer_of_code/2020_Harsh_Joshi", null ],
                [ "2020 Marwan Atef", "/developer/google_summer_of_code/2020_Marwan_Atef", null ],
                [ "2020 Mukul Kumar Jha", "/developer/google_summer_of_code/2020_Mukul_Kumar_Jha", null ],
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
