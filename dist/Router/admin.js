"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("../db");
const token_1 = require("../token");
exports.AdminRouter = (0, express_1.Router)();
exports.AdminRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    yield db_1.admin.create({
        username: username,
        password: password
    });
    res.json({
        message: "you are signed in"
    });
}));
exports.AdminRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const verifiedUser = yield db_1.admin.findOne({
        username: username,
        password: password
    });
    if (verifiedUser) {
        const token = jsonwebtoken_1.default.sign({
            id: verifiedUser._id
        }, token_1.JWT_SECRET);
        res.json({
            token: token
        });
    }
    else
        (res.json({
            message: "Invalid Credentials!"
        }));
}));
exports.AdminRouter.post("/courses", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body.title;
    const image = req.body.image;
    const price = req.body.price;
    yield db_1.course.create({
        title: title,
        image: image,
        price: price
    });
    res.json({
        message: "course added"
    });
}));
