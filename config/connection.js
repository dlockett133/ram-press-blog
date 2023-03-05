const { Sequelize } = require("sequelize");
const sequelize = require("sequelize");
require('dotenv').config()

let sequelize

if (process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        poocess.env.DB_NAME,
        poocess.env.DB_USER,
        poocess.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    )
}

module.exports = sequelize;