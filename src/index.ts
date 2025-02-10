import express from "express";

import mongoose from "mongoose";
import { UserRouter } from "./Router/user";
import { AdminRouter } from "./Router/admin";

const app = express();
app.use(express.json())

app.use("/user",UserRouter);
app.use("/admin",AdminRouter)
mongoose.connect("mongodb+srv://parashardeb:isawunaked3@cluster0.pjcdc.mongodb.net/coursera")



app.listen(3000);

