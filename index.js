const dotenv = require("dotenv");
dotenv.config();
const studentRouter = require("./Router/studentsRouter");
const PORT = process.env.PORT || 8080;
const db = require("./DB/index");
const express = require("express");
const cors = require("cors");
// const mongodbClient = require("mongodb").mongoClient;
const connections = require("./DB");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
db.on("error", () => {
  console.log("connection error");
});

app.listen(PORT, () => {
  console.log(`server live on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("succes");
});

app.use("/Students", studentRouter);
