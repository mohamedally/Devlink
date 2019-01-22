# Devlink

A website for developers to meet with other developers for the purpose of collaborating in projects

Front-End: Jordan, Yooni Back-End: Mo, Rob

Concept & Purpose
The purpose of devLink is to connect developers working on large-scale projects. For example, say one developer has a brilliant idea: a disruptive and ingenious application that could transform its intended market. Say this developer has dreams of fame and riches (and contributing to the social good), and one day hopes to reach that forever coveted landmark of success among the technological community: we know what you’re thinking, and no, it’s not a million dollar valuation, but a billion dollar valuation. With devLink, developers will no longer have to let their dreams be dreams. With devLink, developers will be empowered to realize and actualize their wildest fantasies.
In broad strokes, the functionality of devLink is simple. Developers will be able to login to our application, post projects that they are (or will be) working on, and request a desired number of partners. Other developers will then be able to view these posted projects on a form of “newsfeed” and request to join the project. Developers who are interested in working together may also search for each other and view their profile pages. This profile will contain basic information about themselves and their active project posts. We will also include a field on the profile page that leverages the Google Maps API to show the proximity of each developer to each other. If interested, please view the mock wireframes for our app.

Ordered List of Basic Functionality

1. User system
   Create account
   Delete account
   Log in
   Logout
   Edit profile
2. Project functionality
   User can add project publicly
   Other users can ask to join project
   User can accept or deny
3. Main page
   See projects by other users
   User profile information
   User contacts
   User projects and his collaborators
   User skills
   User pending requests

Database Relations
Tables:

1. Users
   id
   name
   email
   password
   bio
   hashpassword
2. Projects
   id
   project leader id (many to one)
   project description
3. Collaborator
   id
   project id (from projects table, many to many)
   User id ( from users table, many to many)
   Status (interested, confirmed)
4. Skills
   id
   skill

Main components
Landing component
Login
Signup
Navbar
Wall
Projects
Profile
Edit profile component
