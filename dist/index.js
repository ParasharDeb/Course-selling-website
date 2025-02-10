"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("./Router/user");
const admin_1 = require("./Router/admin");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", user_1.UserRouter);
app.use("/admin", admin_1.AdminRouter);
mongoose_1.default.connect("mongodb+srv://parashardeb:isawunaked3@cluster0.pjcdc.mongodb.net/coursera");
app.listen(3000);
