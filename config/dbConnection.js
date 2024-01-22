const mongoose = require('mongoose');

const connectDb= async () =>
{
    try{
        const connect  = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database connection established: ", 
        connect.connection.host,
        connect.connection.name,
        connect.connection.port 
        );


    }catch(err){
            console.log(err);
            console.log("Couldn't connect to Mongo");

            process.exit(1);
    }
};

module.exports = connectDb;