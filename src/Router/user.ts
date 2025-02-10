import { Router } from "express";
import  jwt  from "jsonwebtoken";
import { user } from "../db";
import { JWT_SECRET } from "../token";
export const UserRouter=Router();
UserRouter.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    await user.create({
        username:username,
        password:password
    })
    res.json({
        message:"you are signed in"
    })
})
UserRouter.post("/signin",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const verifiedUser=await user.findOne({
        username:username,
        password:password
    })
    if(verifiedUser){
        const token=jwt.sign({
            id:verifiedUser._id
        },JWT_SECRET)
        res.json({
            token:token
        })
    }
    else (res.json({
        message:"Invalid Credentials!"
    }))
})
UserRouter.get("/purchase",async(req,res)=>{
    
})