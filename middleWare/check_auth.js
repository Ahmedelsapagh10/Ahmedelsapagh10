
const jwt=require('jsonwebtoken');

require("dotenv").config();
const mongoose=require('mongoose')
module.exports=(req,res,next)=>{
    try{ 
        const token=req.headers.authorization;
        //console.log(token);
        const decoded=jwt.verify(token,process.env.JWT_KEY);
      req.userData=decoded;
    next()}
catch{
    res.status(404).json({
        message:"User have Dont have Auth"
    })
}

}