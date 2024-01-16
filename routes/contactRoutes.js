const express = require('express');

const router= express.Router();
const {getContacts, createContacts,updateContact, deleteContact,getAContact}= require("../controllers/contactController");

 router.route("/").get(getContacts).post(createContacts);

// We can also make multiple http calls from same route. Just like the above example.

// router.route('/').post(createContacts);


router.route('/:id').put(updateContact).delete(deleteContact).get(getAContact);

// router.route('/:id').delete(deleteContact);


// router.route('/:id').get(getAContact);


module.exports = router;