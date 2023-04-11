const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello World..!" });
});

app.listen(8000);
