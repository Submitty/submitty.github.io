---
title: Gradeables Customization
category: Instructor
order: 13
---

7. **Add In Gradeables**
     Gradeables are complex enough to warrant their own ``"gradeables":`` array.
     For each syllabus bucket you want included, this array must have one associative 
     array. Each associative array has the following fields:

   * **field:** ``"type":``  
     **type:** _string_  
     **REQUIRED**

     This is where the name of the bucket goes, e.g. ``"lab"`` or ``"homework"``.

   * **field:** ``"count":``  
     **type:** _integer_  
     **REQUIRED**

     The number of expected gradeables in the bucket at the end of the semester. This is used
     to figure out how much of a contribution each assignment has towards the total bucket's score.

   * **field:** ``"percent":``  
     **type:** _float_  
     **REQUIRED**

     A number between 0.0 and 1.0 that represents the fraction of the overall semester grade that
     is accounted for by this particular syllabus bucket. The sum of ``"percent"`` fields across all
     buckets should add up to at least 1.0 .

   * **field:** ``"ids":``  
     **type:** _array of associative arrays_  

     Each entry inside this array represents one gradeable. The fields inside the associative array are:

     * **field:** ``"id":``  
       **type:** _string_  
       **REQUIRED**

       The id of the gradeable. This should match the id you provided on Submitty's Create/Edit Gradeable form.

     * **field:** ``"max":``  
       **type:** _integer_  
       **REQUIRED**

       The maximum score (before extra credit) that a student can receive for this gradeable.

     * **field:** ``"curve":``  
       **type:** _array of floats_  

       An optional array with 4 numbers that correspond to the minimum score required for an A-, B-, C-, and D respectively.

     * **field:** ``"percent":``  
       **type:** _float_  

       An optional number that specifies the percentage of the bucket accounted for by this gradeable. If this is omitted, Rainbow
       Grades will attempt to distribute the percentage points in the bucket equally among gradeables.
