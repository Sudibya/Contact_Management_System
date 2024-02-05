const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

// Now we can use the process module to use the data from the .env file.
const dotenv= require("dotenv").config();

connectDb();

const app = express();

const port = process.env.PORT || 5000;//Here process is a global keyword by Node.js that gives information about the current node.js process running.

app.use(express.json());//This is to parse the incoming JSON data from the client and change it to JS objects.

app.use("/api/contacts", require("./routes/contactRoutes") );
app.use("/api/users", require("./routes/userRoutes") );

app.use(errorHandler);


app.listen(port, () => {
    console.log('Server running on port ' + port);
});// This is a callback function because  we pass it as an argument inside another function.

