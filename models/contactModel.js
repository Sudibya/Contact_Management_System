const mongoose = require('mongoose');


const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact person name"]
    },
    email: {
        type: String,
        required: [true, "Please add the contact person's email"],
        unique: true // Ensures email is unique
    },
    phone: {
        type: String,
        required: [true, "Please add the contact person's phone number"]
    },
    
}, {timestamp: true}
//When the { timestamps: true } option is included as the second argument to mongoose.Schema, Mongoose automatically adds two fields to each document:
// createdAt: This field stores the timestamp of when the document was created.
// updatedAt: This field stores the timestamp of when the document was last updated.
);

module.exports = mongoose.model("Contact", contactSchema);

// mongoose.model will create a mongoose model that represents a collection in mongoose.sdfsdf