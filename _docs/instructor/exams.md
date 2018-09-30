---
title: Exam / Quiz / Assignment PDF Uploads
category: Instructor
order: 11
---

Submitty supports instructor upload of bulk PDF files to then be divided into individual assignment PDFs and assigned to students.

If there is TA grading, questions can also be assigned page numbers by either instructor or student. In the TA grading interface, clicking on a question will open the corresponding page in the PDF.



### Preparing the Exams for Scanning

* If you notice a student has extra pages or missing pages, or the
  exam is rather crumpled, set them to the side for individual
  scanning at the end.

* Scanning ~100-150 pages at a time works well, so for example if your
  exam is 14 pages (7 sheets of paper, front & back), separating the
  paper exams into stacks of 7-10 works well.

* Make most stacks the exact same count, and make sure the person
  working the scanner knows how many pages to expect per pack (e.g. 98
  pages or 140 pages).  The scanner person should check the page count
  after each scan and try to catch problems early.

* Use scissors to cut the staple corner off the exams.  Tap the exam
  papers on a table to align the sheets and make it less likely to jam
  or crumble in the feeder when scanning.

* Put a post-it note on the cover of the first exam of each page
  (remove the postit for the actual scan), and give a letter/name to
  each exam pile.  Have that name match the scanned file name (either
  change the file name or write the scanner-generated name on the
  postit after scanning).  This will help tracking down the pile if it
  needs to be re-scanned because of stuck pages or scan quality
  settings.

* Optional: Re-Staple the exams after scanning.  Note: This is less
  necessary if you've pre-printed exams with each students name on
  every page.


### Tips for Scanning

Explore the options / settings on your scanner.  Things to check:

* 150-300 dpi works well for most exams (300 dpi might be necessary
  for students with small cramped handwriting).

* Choose gray scale scanning (not black & white).

* You may want to adjust the brightness / contrast to be sure to pick
  up light handwriting.

* Choose duplex mode (double sided scanning).  Even if your exam is
  single sided, the students might write on the back.

* Specify "Do not rotate".  Some scanners will attempt to detect
  rotated pages and make errors rather than correct actual rotated pages.

* Make sure "Blank page removal" is not selected.  This will only
  throw off the page count!

* Choose a new directory to save your scans.  Scans should hopefully
  be sequentially numbered, or named with the timestamp to facilitate
  orderly upload to Submitty.




#### Scanning with the ScanSnap iX500 on Linux

We use the ScanSnap iX500 for scanning our exams. This works with
[SANE](http://www.sane-project.org/) out of the box; a variety of of
front-ends for SANE exist that work well with this
printer. [Simple-scan](https://github.com/GNOME/simple-scan) works
fairly well - you will need to make sure to select the scanner in its
preferences and set it to scan 'Both' sides of each page; you can then
'scan all pages from feeder' and then export multiple exams into one
PDF, for bulk uploading.

Scanning with 150DPI for text _and_ photos generates reasonably sized
files - most PDFs generated are between 25 and 35MB for 140 pages.

Additionally, simple-scan dumps a lot of autosaved files into
`~/.cache/simple-scan/` (roughly 6.5GB of temporary files were
generated in one night, with about 650MB of outputted files). This
balloons pretty quickly and required clearing that out every few times
a PDF was exported.

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

* _"Should students be able to make submissions?"_ controls whether students can make submissions. If this is for an exam/quiz/any instructor uploaded PDF, select __No__. 

* _"Should students be able to download files?"_ controls whether students can download submission files. If this is for an exam/quiz/any instructor uploaded PDF, select __Yes__ if you want to allow students to see their uploaded exams. 

* _"Should students be able to view/download any version or just the active version?"_ controls whether students can view/download any or all versions. If this is for an exam/quiz/any instructor uploaded PDF, select __Active version only__.

In summary,

| Setting        | Student View                           | Student Submit  | Student Download | Student Version     |
| -------------- | -------------------------------------- | --------------- | ---------------- | ------------------- |
| Default        | Yes                                    | Yes             | No               | Any version         | 
| Exam/quiz/etc. | No until grades are released, then Yes | No              | Yes              | Active version only |

#### Pages assigned to components:

For _"Is this a PDF with a page assigned to each component?"_, select __Yes__ if this is a PDF upload where each component has an assigned page.

If yes, the question _"Who will assign pages to components?"_ appears. The two options are either instructor (such as an exam/quiz/any instructor uploaded PDF) or student (any student uploaded PDF).

If the instructor assigns pages, then for each component there is input for the page number the component corresponds to. If it spans multiple pages, input the first page the component appears on.

If the student assigns pages, then on homework submission page students will have input boxes for each component, and those will be saved to a json called `student_pages.json` within their submissions folder.


### TA grading

In the TA grading interface, if any pages are assigned to a component, clicking on a component will bring you to the assigned page.

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
