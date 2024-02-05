const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const validateToken= asyncHandler (async(req,res,next)=>{

    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader && authHeader.startsWith('Bearer ')){

        console.log(11);
        token = authHeader.split("")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User is not authorized");
            }
            req.user= decoded.user;
            next();
        });
        if(!token){

            console.log(22);
            res.status(403);
            throw new Error("User is not authorized or token is missing in the request");
        }
    }
});


module.exports = validateToken;