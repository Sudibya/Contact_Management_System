const asyncHandler = require('express-async-handler');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register the user with this controller
// PUT method api/users/register
// @access public
const registerUser = asyncHandler(async(req, res)=>{
    // res.json({message: "User is already registered."});
    const {userName, email, password} = req.body;
    userAvailable  = await Users.findOne({email});
   try {
    if(!userName || !email || !password){
        res.status(404).json({message: "All fields are mandatory."});
    }else if(userAvailable){
        res.status(404).json({message:"User is already registered."});
    }else{

        // Hashed password
        const hashedPassword  = await bcrypt.hash(password,10);

        const newUser= await Users.create({userName, email, password: hashedPassword});
        res.status(200).json({message:"User got successfully registered."});
    }
   } catch (err) {
        console.error(err);
        res.status(500).json({message: "Internal Server Error"});
   }

});


// Register the user with this controller
// PUT method api/users/loginUser
// @access public
const loginUser = asyncHandler(async(req, res)=>{
    

    const {email, password}= req.body;

    const checkUser = await Users.findOne({email});

    console.log(checkUser);

    if(!email && !password) { 
        console.log(1);
    
        res.status(404).json({message: "All fields are required."});
    }else if(!checkUser){
        console.log(checkUser);
   
        res.status(404).json({message: "User not found"});
    }else if(checkUser && (await bcrypt.compare(password,checkUser.password))){
        console.log(3);
   
        const accessToken = jwt.sign({
                user:{
                    email: checkUser.email,
                    password: checkUser.password,
                    id: checkUser.id
                }, 
            },process.env.ACCESS_TOKEN,
            {expiresIn:"1m"}
            );
            res.status(200).json({accessToken, message:"User is successfully logged in"});
    }else{
        console.log(4);

        res.status(400).json({message: "Invalid username or password"});
        console.log(checkUser.email);
    }
}
);


// Register the user with this controller
// PUT method api/users/register
// @access public
const currentUsers = asyncHandler(async(req, res)=>{
    res.json({message: "The current use is logged in"});
});


module.exports = {registerUser, loginUser, currentUsers};