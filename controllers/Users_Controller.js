const User=require("../models/User");
//var Patient = require('../models/patient');
const jwt=require('jsonwebtoken');

module.exports.createUser=async function(req,res)
{
    try {
    
        let user = await User.findOne({username:req.body.username});

        if(user)
        {
            return res.status(409).json(
                {
                    message: 'User Already Exists',
                    data: doctor
                })

        }

      
        user = await User.create(req.body);
        console.log(user);

        return res.status(201).json(
            {
                message: 'User registered successfully',
                data: user
            })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }
    

}




module.exports.login = async function (req, res) {

    try {
        
        let user = await User.findOne({ username: req.body.username });
        

        if (!user || user.password != req.body.password) {
                        
            return res.status(422).json(
                {
                    message: "Invalid UserName or Password"
                }
            )
        }

        return res.status(200).json(
            {
                message: "Sign in successful. Here is your token, please keep it safe",
                data:
                {
                    token: jwt.sign(user.toJSON(),'secretkey',{expiresIn:'100000000'})
                }
            }
        )


    } catch (error) {

        console.log(error);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }

}