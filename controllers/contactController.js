const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');

// @desc Get all the contacts
// @route GET /api/contacts
// @access public

const getContacts =asyncHandler( async (req, res) =>{
    // res.send("Get all the consul contacts");
    const getContacts =await Contact.find();


    res.status(200).json(getContacts);

});   /// IN THE ABOVE WE NEED TO RESOLVE THE PROMISE THAT WE GET FROM MONGODB FOR THAT ONLY WE NEED TO USE THE ASYNC.   

// @desc Create new contacts
// @route Post /api/contacts
// @access p.getAContact



const createContacts = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const contact = await Contact.create({ name, email, phone });
        res.status(201).json({ message: "Contact created successfully", contact });
    } catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// @desc Create new contacts
// @route Post /api/contacts
// @access public

const updateContact =asyncHandler( async (req, res) =>{
    // res.send("Get all the consul contacts");
    res.status(202).json({message:`Update the contact for ${req.params.id}`});

});

const deleteContact =asyncHandler( async (req, res) =>{
    // res.send("Get all the consul contacts");
    res.status(203).json({message: `Delete contact for ${req.params.id}` });

});

const getAContact =asyncHandler( async (req, res) =>{
    // res.send("Get all the consul contacts");
    console.log(req.params.id);
    try {
            const contact = await Contact.findById((req.params.id).toString());

            if(!contact){
                res.status(404).json({message:"Contact not found"});
            }else{
                res.status(200).json({contact});
            }

    }
    catch (err) {
            console.error(err);
            res.status(500).json({message:"Internal Server Error"});
    }

});

module.exports = {getContacts,createContacts,updateContact,deleteContact,getAContact};