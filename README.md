Phone Book Application

Application help to track the details of contacts including name, email Id ,address and contact numbers.

Technologies Used

Node.js and MongoDB

How to Start

Start Mongo db

Open Command propmt and go to the application root

run npm install

run npm start

open browser and check the url

              localhost:3000/api/ping
              
   if you are able to see a message lik "Route working fine" then you are ready to start



How to run API(s)

1)Register User
  
    url: localhost:3000/users/register
    type: POST
    payload : {
            emailId:'id',
            password:'pasword',
            fname:'fname',
            lname:'lname'
            }
    Note: all parameters in payload are required parameters
   
 2)Login User
 
    url: localhost:3000/users/login
    type: POST
    payload : {
            emailId:'id',
            password:'pasword',
            }
    Note: all parameters in payload are required parameters
   
   AccessToken: once your login got success, use the token object from the response for further api calls, and it will get expire in 1hour time.
   
 3)Get All User
 
    url: localhost:3000/users
    type: GET
    Note: add x-access-toke : token from the login response in headers
    
 4)Get All Contacts
  
    url: localhost:3000/contacts
    type: GET
    Note: add x-access-toke : token from the login response in headers
    
  5)Add Contact for Logged In user
    
    url: localhost:3000/contacts
    type: POST
    payload : {
            emailId:'id',
            fname:'fname',
            lname:'lname',
            address:'address',
            contactnumbers:[{number:'12'},{number:'34"}]
            }
    Note: add x-access-toke : token from the login response in headers & all parameters in payload are required parameters
    
   6)Get Contacts of Logged in user
   
     url: localhost:3000/contacts/getcontact
     type: GET
     Note: add x-access-toke : token from the login response in headers
    
   7)Update specific contact for Logged in User
   
     url: localhost:3000/contacts/:id(objectid from db)
     type: PUT
     payload : {
            emailId:'new id',
            fname:'new fname',
            lname:'new lname',
            address:'new address',
            contactnumbers:[{number:'12'},{number:'34"}]
            }
    Note: add x-access-toke : token from the login response in headers
      
