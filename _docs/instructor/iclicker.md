---
title: iClicker Configuration
category: Instructor
order: 12
---


NOTE: iClicker ID extraction is currently being reworked. The following
instructions simply assume that you have a CSV file mapping iClicker IDs 
to student IDs, an example row might read:

```
#123ABC,"smithj"
```

The leading ``#``, the letters in the iClicker ID being capitalized, and
the student ID being wrapped in quotation marks are all important.

NOTE: iClicker support is based on iClicker software version 6, and may not
work with newer versions.

In `customization.json` there are only two additional entries needed to
make iClickers work.

* **field:** ``"iclicker_ids":``  
  **type:** _string_  
  **REQUIRED** for iClickers

  The string is a relative path (it can just be a name if it is in the
  `grades_summary` directory).

* **field:** ``"iclicker":``  
  **type:** _associative array of string to array_  
  **REQUIRED** for iClickers

  This array maps lecture numbers (e.g. ``"2":`` for lecture 2) to an array
  of associative arrays, where each of the inner associative arrays corresponds
  to one iClicker question.

  The inner array format is:

  * **field:** ``"file":``  
    **type:** _string_  
    **REQUIRED**

    A relative path to the iClicker session file (should look something like LYYMMDDHHII.csv,
    where YY is the 2-digit year 00-99, MM is the 2-digit month 01-12, DD is the 2-digit day 01-31,
    HH is the two digit hour 00-23, and II is the 2-digit minute 00-59). Multiple files can
    be used for one lecture.

  * **field:** ``"column":``  
    **type:** _integer_  
    **REQUIRED**

    This field specifies which question in the iClicker session to read student responses from.
    Each question is one column, so to get the third question you would use ``"column": 3``.

  * **field:** ``"answer":``  
    **type:** _string_  
    **REQUIRED**

    The correct answer(s) should be in this string. Multiple answers can be counted as correct,
    simply use multiple letters with no spaces. If all five letters are used (``"answer": "ABCDE"``),
    the question is considered a poll question and Rainbow Grades will highlight student responses in
    yellow. For any other question, student responses will be highlighted in green if they are correct
    (1.0 points towards iClicker score) and red if they are incorrect (0.5 points towards iClicker score).


Below is a short example which gets questions 2.1 (a poll) and 2.2 (two right answers) from one file,
and 2.3 from another file which also contains 3.1 (a poll).


```     
"iclicker_ids": "clicker_data/RemoteID.csv",
"iclicker": {
"2": [
  {"file": "clicker_data/L1701201013.csv", "column": 1, "answer": "ABCDE"},
  {"file": "clicker_data/L1701201013.csv", "column": 2, "answer": "AE"},
  {"file": "clicker_data/L1701220958.csv", "column": 1, "answer": "D"},
  ],     
  "3": [
  {"file": "clicker_data/L1701220958.csv", "column": 2, "answer": "ABCDE"},           
  ]
}
```

