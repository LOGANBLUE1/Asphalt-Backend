const jwt = require("jsonwebtoken");
const User = require('../model/UserModel')

const authenticate = async (req, res, next) => {
    try{
        console.log(req.headers.authorization);
        const token = req?.headers?.authorization;
       
        if(!token)
            console.log("token not found", token); 
        
        const verifytoken = jwt.verify(token, "JagguSecretKey");

        const rootUser = await User.findOne({_id:verifytoken._id});

        if(!rootUser)
            return res.status(401).send("User Not Found");

        req.token = token;
        req.rootUser = rootUser;
        req.name = rootUser.name;
        req.userid = rootUser._id; 

        next();

    } catch (err) {
        res.status(401).send("Unauthorised : No Token Provided");
        console.log(err);
    }
}

module.exports = authenticate;