const express = require('express');

const router= express.Router();
const {getContacts, createContacts}= require("../controllers/contactController");

 router.route("/").get(getContacts);

router.route('/').post(createContacts);


router.route('/:id').put( (req, res) =>{
    // res.send("Get all the consul contacts");
    res.status(269).json({message:`Update contact for ${req.params.id}`});

});

router.route('/:id').delete( (req, res) =>{
    // res.send("Get all the consul contacts");
    res.status(269).json({ message: `Delete contact for ${req.params.id}` });


});


router.route('/:id').get( (req, res) =>{
    // res.send("Get all the consul contacts");
    res.status(269).json({message:`Get contact for ${req.params.id}`});

});
module.exports = router;