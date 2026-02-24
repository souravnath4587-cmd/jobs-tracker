# A simple Job Application dashboard build with HTML, CSS, TAILWIND(DaisyUI) and JAVASCRIPT.

## Features 
-> all jobs listing.
-> mark a job as interview
-> mark a job as rejected
-> toggle between interview and rejected button
-> making three tab --> all --> interview --> rejected

## Technologies Used
1. HTML5
2. CSS
3. DaisyUI
4. Javascript(ES6)

## How it works
1. Each job is stored as an object inside an array.
    {
      id: 1,
      company: "Company Name",
      title: "Job Title",
      salary: "$100,000",
      details: "Job description here...",
      interview: false,
      rejected: false
    }
2. Interview Button
   -> Bydefault interview is false
   -> When button is clicked interview is true
   -> Moves interview tab updates interview counted
3. Rejected Button
   -> Bydefault rejected is false
   -> When button is clicked rejected is true
   -> Moves rejected tab updates rejected counted
4. Filter system
   Buttons:
     1. all
     2. interview
     3. rejected
   filtering is handle using by javascript filter() method.
5. Dashboard Counts
   The dashboard automatically updates:
   1. Total jobs counted`
   2. Interview Jobs counted
   3. Rejected Jobs counted
6. Delete button
   When Delete button click delete this object in the jobs element.
   We are using splice() method for delete item of jobs.
   
