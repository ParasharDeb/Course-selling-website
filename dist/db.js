"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.course = exports.admin = exports.user = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const UserSchema = new mongoose_2.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
exports.user = (0, mongoose_1.model)("User", UserSchema);
const AdminSchema = new mongoose_2.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
exports.admin = (0, mongoose_1.model)("Admin", AdminSchema);
const CourseSchema = new mongoose_2.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true }
});
exports.course = (0, mongoose_1.model)("Course", CourseSchema);
