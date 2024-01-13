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
    res.status(201).json({message:"Create a new contact"});

};

module.exports = {getContacts,createContacts};