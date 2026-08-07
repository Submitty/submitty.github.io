---
title: D'Andre Collins
category: Developer > Rensselaer Center for Open Source (RCOS) > Summer 2026
---

Spending Summer 2026 as part of the Submitty team was an incredible experience that helped me grow both as a developer and as a collaborator. 
Here are a few highlights from my summer:

**38 pull requests reviewed**  
**15 pull requests created**


## Custom Grading Sort

**Pull Request:** [#13123](https://github.com/Submitty/Submitty/pull/13123)

Peer grading continues to expand and grow through Submitty, planning to be used much more in the future. I wanted to be able to aid in such a big feature, via adding a custom grading sort.

My contributions included:

I implemented a complete custom grading workflow for instructors. This feature included:

- Added a database migration to store custom grading order.
- Implemented backend support for saving and retrieving custom sort order.
- Added instructor UI for enabling custom sorting.
- Implemented CSV download and upload support.
- Added validation and default behavior.
- Tested both individual and team gradeables.

The feature supports both individual and team gradeables.

![alt text](image-1.png) ![alt text](image-3.png)
![alt text](image-4.png)

## Numeric Gradeable CSV Import and Export
**Pull Requests:** [#12995](https://github.com/Submitty/Submitty/pull/12995), [#12998](https://github.com/Submitty/Submitty/pull/12998)

Managing grades for large courses often requires instructors to work with spreadsheets. Before these changes, instructors would only be able to upload a CSV but they could not download one. I was assigned to revamp the upload to match more modern format, along with add the download feature.


The completed workflow allows instructors to download grading data, edit it in a spreadsheet, and upload the updated information back into Submitty. This reduces repetitive manual edits and makes managing large numeric gradeables more efficient.
![alt text](image-9.png) ![alt text](image-8.png)
## Registration Date
**Pull Request:** [#13101](https://github.com/Submitty/Submitty/pull/13101)

Instructors previously had no way to see when a student registered for a course. This made it more difficult to verify when students joined a course or investigate enrollment related questions. I implemented support for storing and displaying each student's registration date within the instructor interface.
![alt text](image-10.png)