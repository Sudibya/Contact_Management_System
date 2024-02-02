const asyncHandler = require('express-async-handler');
const Users = require('../models');

// Register the user with this controller
// PUT method api/users/register
// @access public
const registerUser = asyncHandler(async(req, res)=>{
    res.json({message: "User is already registered."});
});


// Register the user with this controller
// PUT method api/users/register
// @access public
const loginUser = asyncHandler(async(req, res)=>{
    res.json({message: "User is logged in. TA DA"});
});


// Register the user with this controller
// PUT method api/users/register
// @access public
const currentUsers = asyncHandler(async(req, res)=>{
    res.json({message: "Current users that are registered."});
});


module.exports = {registerUser, loginUser, currentUsers};