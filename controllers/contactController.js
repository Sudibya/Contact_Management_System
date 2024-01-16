// @desc Get all the contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) =>{
    // res.send("Get all the consul contacts");
    res.status(200).json({message:"Get all the contacts"});

};

// @desc Create new contacts
// @route Post /api/contacts
// @access public

const createContacts = (req, res) =>{
    // res.send("Get all the consul contacts");
    console.log("The request body is:", req.body);

    const {name, email, phone} = req.body;

    if(!name || !email|| !phone){
        res.status(400);
        throw new Error("All fields are required");
    }

    res.status(201).json({message:"Create a new contact"});

};


// @desc Create new contacts
// @route Post /api/contacts
// @access public

const updateContact = (req, res) =>{
    // res.send("Get all the consul contacts");
    res.status(202).json({message:`Update the contact for ${req.params.id}`});

};

const deleteContact = (req, res) =>{
    // res.send("Get all the consul contacts");
    res.status(203).json({message: `Delete contact for ${req.params.id}` });

};

const getAContact = (req, res) =>{
    // res.send("Get all the consul contacts");
    res.status(204).json({message: `The contact is ${req.params.id}` });

};

module.exports = {getContacts,createContacts,updateContact,deleteContact,getAContact};