"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send({
        data: "Hi Harith, Welcome to GoTrip",
    });
});
app.get("/Bengaluru", (req, res) => {
    res.send({
        data: "Welcome to Bengaluru",
    });
});
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
