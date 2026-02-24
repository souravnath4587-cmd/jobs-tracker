# A simple Job Application dashboard build with HTML, CSS, TAILWIND(DaisyUI) and JAVASCRIPT.

## Features 
1. all jobs listing.
2. mark a job as interview
3. mark a job as rejected
4. toggle between interview and rejected button
5. making three tab --> all --> interview --> rejected

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

3. Interview Button
   1. Bydefault interview is false
   2. When button is clicked interview is true
   3. Moves interview tab updates interview counted

4. Rejected Button
   1. Bydefault rejected is false
   2. When button is clicked rejected is true
   3. Moves rejected tab updates rejected counted

5. Filter system
   Buttons:
     1. all
     2. interview
     3. rejected
   filtering is handle using by javascript filter() method.

6. Dashboard Counts
   The dashboard automatically updates:
   1. Total jobs counted`
   2. Interview Jobs counted
   3. Rejected Jobs counted


### 1. What is the difference between getElementByld, getElementsByClassName, anc query Selector / query SelectorAll? The main difference between is (getElementByld is an id selector), (getElementByld is a class selector) and (query Selector / query SelectorAll are any kind of css selector) give a style anc working functionality
### 2. How do you create and insert a new element into the DOM? To create and insert a new element into the DOM using JavaScript, you need to follow a two-step process: create a new element by(document.create("div) and initialize id name using append method into new element
### 3 What is Event Bubblina? And how does it work? Event bubbling is a javascript event propagation mechanism where an event triggered on a chilc elemnent handling In order, from the <body> and document root This default behaviour "is perent
to children by bubling
###4 What is Event Delegation in JavaScript? Why is it useful? Event delegation is a design pattern in javascript where a single event listener is attached to a parent elemet to manage all its individual children element
###5 What is the difference between preventDefault() and stopPropagation() methods? The difference is that event preventDefault() stops the browser's default action for an event and stopPropagation() method stops event from travelling up or down the dom tree
7. Delete button
   
   When Delete button click delete this object in the jobs element.
   We are using splice() method for delete item of jobs.
   
