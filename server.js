const express = require("express");
const path = require("path");

const session = require("express-session");

const exphbs = require("express-handlebars");
const routes = require("./controllers");

// const helpers = require("./utils/helpers");
// const sequelize  = require("./config/connection.js");


const app = express();
const PORT = process.env.PORT || 3001;

// imports helper tool/functions to our handblebars
// const hbs = exphbs.create({helpers});
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes);

app.listen(PORT,() => console.log(`connected to server! ${PORT}`));