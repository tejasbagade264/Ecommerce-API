// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const passport=require('passport');
const passportJWT = require('./config/passport-jwt-strategy');



// Create an Express application
const app = express();

// Start the server on a specific port 
const port = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// parse application/json
app.use(bodyParser.json())

app.use('/', require('./routes'));
  
app.listen(port, (err) => {
    if(err){

console.log(`Server is giving an error : ${err} `);
    }
    else{
  console.log(`Server is running on port : ${port}`);
    }
});

