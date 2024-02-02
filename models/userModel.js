const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please enter the User-Name"]

    },
    email: {
        type: String,
        required: [true, "Please enter the user's email"],
        unique: [true, "Email already exists try a different email address"]
    },
    password:{
        type: String,
        required: [true, "Please enter the user's password"]
    },

},
    {
        timestamps: true
    }
);


module.exports = mongoose.model('Users',userSchema);