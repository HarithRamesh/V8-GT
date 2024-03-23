import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.get("/trial", (req, res) => {
  res.send({
    data: "Hi Harith, Welcome to GoTrip",
  });
});

app.get("/Bengaluru", (req, res) => {
  res.status(200).json({ data: "Welcome to namma Bengaluru" });
});

app.get("*", (req, res) => {
  res.status(404).json({ data: "ERROR 404 Page not found" });
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
