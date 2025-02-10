import { model } from "mongoose"
import { Schema } from "mongoose"
import { Types } from "mongoose";
const UserSchema=new Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
export const user=model("User",UserSchema);
const AdminSchema=new Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
export const admin=model("Admin",AdminSchema);
const CourseSchema=new Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    createrId:{type:Types.ObjectId}
})
export const course=model("Course",CourseSchema)
const PurchaseSchema=new Schema({
    userID:Types.ObjectId,
    courseID:Types.ObjectId,
})