---
title: Exams / Quiz / Assignment PDF Uploads
category: Instructor
order: 11
---

### Creating PDF assignments

Config:

For exams/quizzes/assignments where instructor/TAs will bulk upload large multiple exam/assignment PDFS, use
```
/usr/local/submitty/more_autograding_examples/pdf_exam/config
```
This makes sure the file size is adequate. Otherwise, using 
```
/usr/local/submitty/more_autograding_examples/upload_only/config
```
will suffice.


View/submit/download/version settings:

"Should students be able to view submissions?" controls whether students can see the gradeable. Its default value is "Yes". If this is for an exam/quiz/any instructor uploaded PDF, the recommended process is selecting "No" to start with then changing to "Yes" once grades have been released. 

"Should students be able to make submissions?" controls whether students can make submissions. Its default value is "Yes". If this is for an exam/quiz, you select "No". 

"Should students be able to download files?" controls whether students can download submission files. Its default value is "No". If this is for an exam, you can select "Yes" if you want to allow students to see their uploaded exams. 

"Should students be view/download any or all versions?" controls whether students can view/download any or all versions. Its default value is "Any version". If this is for an exam/quiz/any instructor uploaded PDF, select "Active version only".

In summary,
Exams/quizzes/instructor uploaded assignments should be
View: No until grades are released, then Yes. Submit: No. Download: Yes. Any/Active version: Active version only.

Student uploaded PDFs should be the default settings, or
View: Yes, Submit: Yes, Download: No, Any/Active version: Any version.


Pages assigned to components:

If this is a PDF upload where each component has an assigned page, select Yes for "Is this a PDF with a page assigned to each component?"
The two options are either instructor assigns (such as a quiz/exam) or student (any student uploaded PDF).

If the instructor assigns pages, then for each component there is input for the page number the component corresponds to. If it spans multiple pages, input the first page the component appears on.

If the student assigns pages, then on the student submission page they will have input boxes for each component, and those will be saved to a json called "student_pages.json" within their version submission for the gradeable.

If any pages are assigned to a PDF, in the TA grading interface, clicking on a component will bring you to the assigned page.


### Bulk PDF Upload

On the gradeable submission page, the instructor has three options. Normal Submission, Make Submission for a Student, and Bulk Upload.
For uploading bulk PDFs for exams/quizzes/assignments, select Bulk Upload.

Input the number of pages for each exam/quiz/assignment.

In the drag and drop box, upload the bulk exam PDF. You may submit more than one PDF at once, but its maximum total size is 10Mb.

Upon clicking submit, the bulk PDF is uploaded to the course's /uploads/bulk_pdf/gradeable_id folder and the split items to /uploads/split_pdf/gradeable_id folder.

After the page reloads, another section on the page will appear called "Unassigned PDF Uploads".

### Split item submission

The "Unassigned PDF Uploads" section contains all items within the /uploads/split_pdf/gradeable_id folder.

PDF preview contains the first page of the pdf. If you want to view the full PDF, click on the popout icon.
To submit for a student, enter their user ID and press enter or click submit. The autofill brings up students who do not yet have any submissions for this gradeable.

Once submitted, the split itme PDF is moved from /uploads/split_pdf/gradeable_id to its corresponding location in the /submissions/gradeable_id/user_id folder. 
