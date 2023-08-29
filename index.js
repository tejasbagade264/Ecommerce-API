const express= require('express');
const app=express();
const port = 8000;
const mongoose = require('mongoose');
const Product = require('./models/productModel')

app.use(express.json());


app.get('/', (req, res) =>{

    res.send('hello,  Ecommerce API  ');
});


app.use('/', require('./routes'));

mongoose.connect('mongodb+srv://tejasbagade1512:tejas123@devdatabase.u2cpw0f.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to the database');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        });
    })
    .catch((error) => {
        console.log('Error in connecting to the database:', error);
    });
