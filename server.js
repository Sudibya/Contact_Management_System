const express = require('express');

// Now we can use the process module to use the data from the .env file.
const dotenv= require("dotenv").config();


const app = express();

const port = process.env.PORT || 5000;


app.use("/api/contacts", require("./routes/contactRoutes") );

app.listen(port, () => {
    console.log('Server running on port ' + port);
});// This is a callback function because  we pass it as an argument inside another function.

