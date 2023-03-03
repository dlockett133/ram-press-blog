const express = require("express");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
// const routes = require("./controllers");
// const helpers = require("./utils/helpers");
// const sequelize  = require("./config/connection.js");


const PORT = process.env.PORT || 3001
const app = express();

app.listen(PORT => console.log("connected to server!"));