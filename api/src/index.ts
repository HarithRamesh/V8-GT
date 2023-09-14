import express from "express";
const PORT = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the world of express");
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
