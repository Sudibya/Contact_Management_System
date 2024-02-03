const asyncHandler = require('express-async-handler');
const Users = require('../models/userModel');
const bcrypt = require('bcrypt');

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
// PUT method api/users/register
// @access public
const loginUser = asyncHandler(async(req, res)=>{
    res.json({message: "User is logged in. TA DA"});

    const {username, password}= req.body;

    const checkUser = await Users.findOne(username);



    if(!username && !password) {
            res.status(404).json({message: "All fields are required."});
    }else if(!checkUser){
            res.status(404).json({message: "User not found"});
    }else if(checkUser && (await bcrypt.compare(password,checkUser.password))){
            
    }
}
);


// Register the user with this controller
// PUT method api/users/register
// @access public
const currentUsers = asyncHandler(async(req, res)=>{
    res.json({message: "Current users that are registered."});
});


module.exports = {registerUser, loginUser, currentUsers};