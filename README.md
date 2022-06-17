# AKPsi Member Management Project Proposal


## Problem & Solution
Chapter attendance, absence approval, and member management are manually recorded on the excel sheet which is very unorganized and difficult to track. This is a very tedious process as the secretary has to manually mark each member’s attendance at every chapter-related event. A new web app will provide HR management-like tools, hoping to make the manual processes more automatic and painless process.

## User Interviews 
### On Choi (Former Secretary)
- How the system works
    * Go through the Absence request for the week and mark them on the attendance sheet before the chapter
    * Manually go through individuals who attended chapter and mark them on the attendance sheet
    * There is also no systematic process for getting a roster, especially the NIBS. Secretary will manually add them to the attendance sheet
- What challenges did you face while working as a secretary?
    * Last-minute requests
        - Usually on messenger or text
        - This is often overwhelming as 20+ messages will flood in
    * No point system
        - This is the ultimate decision-maker to decide member status
        - However, nobody knows about the point system
- What are the most important tasks you or other people need to perform as a secretary? 
    * Rush is the most important time as it is the biggest event everyone needs to be there
        - Attendance is checked through a check-in form which the secretary will post the link to every rush event
        - There was a web hub centralizing all relevant links. What happened to it??
- What took the most time while working as a secretary?
    * Checking the Absence request and manually responding to each person
- What devices do you typically use when performing your role?
    * Laptop
- Do you or did you in the past use other websites and resources for the same purpose?
    * nope, mainly google sheets, google forms, and Gmail
- As a former secretary, what are some features you would like to see in the new web app?
    * Mobile friendly
        - Notifications when forms are submitted

## Methodology & Project Scope
### The project will consist of three components and will be built using the following resources:
1. Front-End (Client-side)
   * React.js, HTML, and CSS
2. Backend (Server-side)
   * JavaScript (JS)
3. Database
   * AWS or Firebase

## Goals & Features
1. Differentiate members based on their status & easily able to change member status
   * Actives / LOAs
   * Suspended
   * Alumni

2. Keep track of member information on a table
    * Actives
      - First & Last Name
      - Role / committee
      - Pledge Class
      - Email
      - Year
      - Grade
      - Major
      - Points?
    * Alumni
       - First & Last Name
       - Preferred Name
       - Birthday
       - Major
       - non-UW Email
       - Phone Number
       - Company working at
       - Position
       - Location
3. Able to filter members based on the values mentioned in Goal #2
4. Member search bar
5. Email Response Tool - for the absence request
    * ex. Send a premade email template with click of a button

