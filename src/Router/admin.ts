import { Router } from "express";
import  jwt  from "jsonwebtoken";
import { admin, course } from "../db";
import { JWT_SECRET } from "../token";
export const AdminRouter=Router();
AdminRouter.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    await admin.create({
        username:username,
        password:password
    })
    res.json({
        message:"you are signed in"
    })
})
AdminRouter.post("/signin",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const verifiedUser=await admin.findOne({
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
AdminRouter.post("/courses",async(req,res)=>{
    const title =req.body.title;
    const image=req.body.image;
    const price=req.body.price;
    await course.create({
        title:title,
        image:image,
        price:price
    })
    res.json({
        message:"course added"
    })
})