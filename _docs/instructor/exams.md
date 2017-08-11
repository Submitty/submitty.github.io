---
title: Exam / Quiz / Assignment PDF Uploads
category: Instructor
order: 11
---

Submitty supports instructor upload of bulk PDF files to then be divided into individual assignment PDFs and assigned to students.

If there is TA grading, questions can also be assigned page numbers by either instructor or student. In the TA grading interface, clicking on a question will open the corresponding page in the PDF.

### Creating PDF assignments

#### Config:

For exams/quizzes/assignments where the instructor will bulk upload large multiple exam/assignment PDFS, use
```
/usr/local/submitty/more_autograding_examples/pdf_exam/config
```
This makes sure the file size is adequate. Otherwise, using 
```
/usr/local/submitty/more_autograding_examples/upload_only/config
```
will suffice.

#### View/submit/download/version settings:

* _"Should students be able to view submissions?"_ controls whether students can see the gradeable. If this is for an exam/quiz/any instructor uploaded PDF, the recommended process is selecting __No__ to start with then changing to __Yes__ once grades have been released. 

* _"Should students be able to make submissions?"_ controls whether students can make submissions. If this is for an exam/quiz/any instructor uploaded PDF, you select __No__. 

* _"Should students be able to download files?"_ controls whether students can download submission files. If this is for an exam/quiz/any instructor uploaded PDF, you select __Yes__ if you want to allow students to see their uploaded exams. 

* _"Should students be able to view/download any version or just the active version?"_ controls whether students can view/download any or all versions. If this is for an exam/quiz/any instructor uploaded PDF, select __Active version only__.

In summary,

| Setting        | Student View                           | Student Submit  | Student Download | Student Version     |
| -------------- | -------------------------------------- | --------------- | ---------------- | ------------------- |
| Default        | Yes                                    | Yes             | No               | Any version         | 
| Exam/quiz/etc. | No until grades are released, then Yes | No              | Yes              | Active version only |


### Pages assigned to components:

For _"Is this a PDF with a page assigned to each component?"_, select __Yes__ if this is a PDF upload where each component has an assigned page.

If yes, the question _"Who will assign pages to components?"_ appears. The two options are either instructor assigns (such as an exam/quiz/any instructor uploaded PDF) or student (any student uploaded PDF).

If the instructor assigns pages, then for each component there is input for the page number the component corresponds to. If it spans multiple pages, input the first page the component appears on.

If the student assigns pages, then on the student submission page they will have input boxes for each component, and those will be saved to a json called `student_pages.json` within their submission folder for the version.

If any pages are assigned to a PDF, in the TA grading interface, clicking on a component will bring you to the assigned page.

### Bulk PDF Upload

On the gradeable submission page, the instructor has three options: Normal Submission, Make Submission for a Student, and Bulk Upload. For uploading bulk PDFs for exams/quizzes/assignments, select __Bulk Upload__.

Input the number of pages for each exam/quiz/assignment.

In the drag and drop box, upload the bulk exam PDF. You may submit more than one PDF at once, but the box's maximum total size is 10Mb.

On submit, the bulk PDF is uploaded to the course's `/uploads/bulk_pdf/gradeable_id` folder and the split PDF items to `/uploads/split_pdf/gradeable_id` folder.

After the page reloads, another section on the page will appear called "Unassigned PDF Uploads".

### Split item submission

The "Unassigned PDF Uploads" section contains all items within the `/uploads/split_pdf/gradeable_id` folder.

PDF preview contains the first page of the pdf. If you want to view the full PDF, click on the popout icon.
To submit for a student, enter their user ID and press enter or click submit. Autofill for user ID brings up students who do not yet have any submissions for this gradeable.

Once submitted, the split PDF item is moved from `/uploads/split_pdf/gradeable_id` to its corresponding location in the `/submissions/gradeable_id/user_id` folder. 
