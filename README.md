# **SG's foodie guide Pesto**

#### **Video demo:** https://youtu.be/SZZ6lfT3b7Q

#### **Description:**
    This project is a webpage where anyone can write in reviews for restaurants based in Singapore. 
    I wanted to create such a project as Singapore has a culture which is heavily influenced by food
    and we tend to judge a restaurant's quality based on the crowd instead of reviews. By creating a 
    restaurant review website, I hope to encourage people within my community to broaden their horizons
    and give hidden gems in the food industry the opportunity to shine instead of the prominent restaurants. 

#### **Technologies used:**
- Node JS
- mysql 
- bycrypt

#### **How does the review webpage work?**
    Users can create an account by registering themselves.
    During registration, the following fields have to be entered:
    - Username
    - Password
    - First and last names
    - Email address
    - Contact number (Contact numbers are unique to each account)
    - Address
    - Gender

    Once registered, you are allowed to enter reviews of restaurants featured 
    on the webpage. Reviews will be uploaded for the public to view and you can
    view other users' reviews as well. 
    Reviews include star ratings ranging from 1 star to 5 stars and a written review
    where users have the freedom to type in their opinions without length restrictions 
    or close-ended questions. 

#### **How could I have improved my project?**
    I could have implemented more restrictions within the open review section. For instance,
    I could ban expletives or cyberbullying on the webpage to prevent such incidents from
    occuring and promote a safe space for everyone to share their views. 

#### **How the code files work?**
- Controllers: Calls the function to create, read, update and delete. It allows the restful API to perform 
CRUD functions for restaurant accounts and reviews.
- CRUD: implements a persistent storage application to create, read, update and delete.
- Model: With .db, it stores data within sql. Without .db, it creates data.
- Node modules: It is an easy server tool that allows for the creation of dynamic wesbites and helps retrieve 
and send data from the wesbite.
- Public: Whatever the public eye can see. CSS here contains the frontend of the website. JS contains the functions
and variables that allows me to call the backend. Login helps create tokens which auto remembers data entered. Logout
will remove these tokens.
- Dbconnections: connects backend of website to frontend
- Server.js: Route that frontend will take to perform actions at the backend
