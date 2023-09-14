"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Welcome to the world of express");
});
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
