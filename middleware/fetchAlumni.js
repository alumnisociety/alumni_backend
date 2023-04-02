const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')

dotenv.config({path: "./config.env"})
const JWT_SECRET = process.env.JWT_SECRET;
// const JWT_SECRET = "123";

const fetchAlumni=(req, res, next)=>{
    req.accontAccess= false;

    // Get the user form the jwt token and id to req the object
    try {
    
    const token=req.header('authToken')
    
    if(token===undefined){
        next()
    }else{

        const data= jwt.verify(token, JWT_SECRET)
        req.userId= data.alumni.id;
        next()
    }

    } catch (error) {
        return res
          .status(400)
          .json(error);
    }
}

module.exports= fetchAlumni