---
title: Features
category: Submitty
redirect_from:
  - /features
---

_Note: Click on the <u>links</u> and <i class="fas fa-info-circle" style="font-size:25px;color:#316498;"></i> for more information._

&nbsp;

{% assign feature_counter = 0 %}

* **Assignment collection**   
  * individual or [team](/student/submission/team_assignments)
  * [drag & drop](/student/submission), zip file, or [version control (GIT)](/student/submission/version_control)
  * [resubmission](/student/submission/managing_versions) w/ optional penalty for excessive submissions
  * due date & time 
    * [customizable late day policy](/student/submission/late_days)
        {% include feature_text.html
           text="A consistent and firm assignment deadline policy is crucial in large courses.  
                 Allow students to make limited adjustments to deadlines." %}
    * [excused absence extensions](/student/submission/late_days#excused-absence-extensions)
        {% include feature_text.html
           text="Organized and transparent system for tracking deadlines 
                 and verified student emergencies." %}
  * [bulk upload of scanned-to-pdf paper worksheets/exams](/instructor/bulk_pdf_upload)
    * [assigned seating for exams](/instructor/course_settings/rainbow_grades/room_templates)
        {% include feature_text.html
           text="Randomized, assigned seating to combat cheating during written examinations." %}
    * [personalized exams with QR codes](/instructor/personalized_exams) to automate upload process
    * custom student crib sheets

&nbsp;


* **Manual grading interface**
  * simple grading: [checkpoint grading](/grader/checkpoint_grading) and [numeric / text grading](/grader/numeric_text_grading) {% include feature_text.html text="<em>Remote Learning:</em> Can be used to score participation during synchronous video lectures and/or discussion forums." %}
  * [detailed rubric grading](/grader/rubric_grading) of submitted materials
  * web interface for file access or bulk download
  * [assign sections of grading to different TAs](/instructor/assignment_preparation/index#grader-assignment-method)
  * [digital PDF annotation](/grader/rubric_grading/pdf_annotation)
  * grading progress indicator and [grade statistics & histogram](/grader/rubric_grading/statistics)
  * [retroactive rubric and point adjustment](/grader/rubric_grading/common_marks)
  * [grade inquiries](/student/grades/grade_inquiry) (clarifications/corrections of manual grading)
  * [grade override](/instructor/grade_override) (makeup exams & other special cases)

&nbsp;


* **[Notebooks -- Online tutorial/quiz/exams](/instructor/assignment_configuration/notebook)**
    {% include feature_text.html
        text="Student answers will be collected electronically. <br> 
              Typed answers eliminate grader struggles to read poor handwriting." %}
  * markdown formatting and/or images {% include feature_text.html text="For figures, tables, math equations, or complex text formatting: take screenshots of your exam problems typeset with Word, LaTeX, Google Docs, etc." %}
  * multiple choice or short answer
  * timed (first page access & last submission timestamps) {% include feature_text.html text="<em>Remote Learning:</em> Accommodate students in different timezones." %}
  * option to randomize order of multiple choice answers
  * random selection of problems from pool
    {% include feature_text.html
    text="<em>Remote Learning:</em> It is impossible to prevent communication and collaboration during remote examinations.  If feasible, the creation of multiple problems or variants of problems to assess each skill can allow construction of a personalized exam for each student." %}
  * automatic and/or manual grading
  * *coming soon:* auto save & (optional) submit
    {% include feature_text.html
       text="Instructor specifies auto-submit interval (e.g., every 10 minutes).<br>Prevent accidental data loss and missed submission deadlines." %}

&nbsp;


* **[Integrated discussion forum](/student/communication/forum)**
    {% include feature_text.html
        text="Students prefer a single website and login for all course activities." %}
  * Supports a variety of course learning activities <button style="background-color:transparent;border:none;outline:none;" onclick='return toggle_display("myforumtag");' href="#"><i class="fas fa-info-circle" style="font-size:25px;color:#316498;"></i></button>
    <div markdown="0" id="myforumtag" style="display: none; background-color:#31649822;">
    <ul>
    <li><em>General and Remote Learning Suggestions:</em></li>
    <ul>
    <li>Discuss assigned reading: "Write a 100-200 word response to the assigned reading, asking a question, or commenting on a classmate's post."</li>
    <li>Project status report: "Post a screenshot of your collected data, describe one challenge you have overcome, and describe one problem you have not yet resolved."</li>
    <li>Forum participation can be graded by the checkpoint or numeric/text gradable interfaces, or made available as a panel within the  interface for a rubric gradeable.</li>
    </ul>
    </ul>
    </div>
  * students can post anonymously to their peers
    {% include feature_text.html
       text="TAs and instructors can click to view the author's name & email." %}
  * student question threads labeled as *unresolved* or *resolved*
    * students can answer each other's questions
    * all posts by instructional staff are highlighted with a yellow border
  * customizable email/notification alerts
    * Instructor email announcements
  * all threads tagged with one or more course-specific categories
  * threads can be globally *pinned* by the instructor/TA
  * students can *bookmark* threads for later reference

&nbsp;


* **[Office hours queue](/grader/queue)**
  * for large courses with busy TA office hours {% include feature_text.html text="<em>Remote Learning:</em> Students post their WebEx (or other) contact information, and a member of the instructional staff contacts the student when they are available.  <em>Students should not attempt to directly contact TAs or mentors outside of scheduled office hours.</em>" %}
  * [prioritize students asking for help for the first time today/this week](/grader/queue#helping-students-in-the-office-hours-queue)
  * *coming soon*: daily usage statistics {% include feature_text.html text="<em>Remote Learning:</em> Re-distribute TA/mentor office hour time slots and coverage based on demand." %}
  * *coming soon*: per student usage statistics {% include feature_text.html text="<em>Remote Learning:</em> Identify struggling students who are not seeking help." %}

&nbsp;


* **[Peer grading](/instructor/peer_grading)** <button style="background-color:transparent;border:none;outline:none;" onclick='return toggle_display("mypeertag");' href="#"><i class="fas fa-info-circle" style="font-size:25px;color:#316498;"></i></button>
    <div markdown="0" id="mypeertag" style="display: none; background-color:#31649822;"><ul>
    <li><em>General and Remote Learning Suggestions:</em></li>
    <ul>
    <li>Collect written feedback from classmates during synchronous video presentations.</li>
    <li>Review intermediate phase of assignment or project.  Students can share and reviewing sample output, graphs,
    and screenshots of the current progress, and give each other references or specific suggestions for what to try next to overcome these challenges or debug their implementation.</li>
    <li>Detailed peer grading of mathematical proofs for correctness.  Similar to rigorous academic paper review.</li>
    <li>Opt-in for extra credit or mandatory participation for a course grade.</li>
    <li>Evaluate for consistency with other peer marks.</li>
    </ul>
    </ul></div>
  * uses [rubric grading interface](/grader/rubric_grading)
  * instructor uploads matrix of peer-to-peer grading assignments
  * *coming soon*: double-blind peer grading

&nbsp;


* **[Semester grade summary -- *Rainbow Grades*](/instructor/course_settings/rainbow_grades/index)** {% include feature_text.html text="In large courses, it is important to have a centralized database of grades and allow students to inspect their current grades, and facilitate corrections in the case of data entry errors.  <br>Frequent updates to the database and transparency about the grade calculation process can significantly reduce student confusion and reduce or eliminate student-TA-instructor communications in verifying and/or correcting term grades." %}
  * implement grade formulas from the syllabus
    * options: curve, extra credit, drop lowest quiz, etc.
  * student can compare themself to hypothetical *average* student, *lowest A-* student, *lowest B-* student, etc.
  * view incremental progress towards end-of-term overall grade
  * instructor can visually identify trends and outlier scores for further inspection

&nbsp;


* **[Distribute course materials](/instructor/course_materials)**
  * e.g., syllabus, lecture slides, assignment problems/sample solutions, test review material {% include feature_text.html text="<em>Remote Learning:</em> links to large files hosted on other sites (e.g., lecture videos on WebEx, Mediasite, YouTube)." %}
  * specify release date/time
  * restrict access to selected registration sections {% include feature_text.html text="<em>Remote Learning:</em> Different versions of the materials released at the start time for each recitation or laboratory section." %}

&nbsp;


* **Accounts / course registration**
  * university username & password (RPI RCS)
  * daily synchronization with registration data (SIS)
  * [student photo page](/instructor/student_photos) {% include feature_text.html text="A yearbook style layout of student faces is helpful to both TAs and instructors of large courses with lecture and recitation or lab, allowing instructors and TAs to identify students who may be struggling, but rarely ask for help." %}
    * [ID photos downloaded from SIS](/instructor/student_photos)
      {% include feature_text.html text="Coming soon: Students can upload their own passport-style photo." %}
  * [multiple levels of access](/sysadmin/troubleshooting/user_access_level)
    * instructors {% include feature_text.html text="<em>Note:</em> Supports multiple instructors, and can designate a <em>head TA</em> with instructor access." %}
    * full access graders (graduate TAs)
    * limited access graders (mentors)
    * students

&nbsp;


* **Plagiarism detection (Work in Progress)**
  * extract text from PDF documents
  * search for matching phrases / paragraphs used by a subset of students
  * uses history of each student's multiple submissions
  * programming language-specific tokenization

&nbsp;


* **Automated testing & grading of student software**
  * available languages: Python, C/C++, Java, Scheme, Prolog, Haskell, SQL, MATLAB, OpenGL, etc.
  * docker containerization for security & customization
  * hidden test cases (defeat *hard-coding*)
  * static analysis, JUnit, code coverage, memory debuggers
  * networked & distributed assignments
  * screenshots & animated gifs of graphics assignments
  * database assignments

&nbsp;


* **Web Accessibility**
  * significant recent improvements
  * W3C html validation
  * mobile-friendly (phone and tablet compatibility)
