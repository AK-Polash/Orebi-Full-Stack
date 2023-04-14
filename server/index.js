const express = require("express");
const cors = require("cors");
const app = express();
const dbConnection = require("./config/dbConfig.js");
const _ = require("./routes");

// Database Connection:
dbConnection();

// Middleware:
app.use(cors());
app.use(express.json());
app.use(_);
app.listen(8000);
