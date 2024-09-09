const express = require("express");
const app = express();
const port = 3500;
const cors = require("cors");
const path = require("path");

app.use(cors());
require("./src/db/conn");

const filePath = path.join(__dirname, "index.html");

const foodItem = require("./src/model/schema");
app.get("/", (req, res) => {
  // res.send("<h1>Welcome!</h1>");
  res.sendFile(filePath);
});

app.listen(port, (req, res) => {
  console.log(`server listening at port ${port}`);
});
