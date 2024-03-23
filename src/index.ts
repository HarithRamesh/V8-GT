import express from "express";
import cors from "cors";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send({
    data: "Hi Harith, Welcome to GoTrip",
  });
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
