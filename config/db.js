require("dotenv").config()
const mysql = require ("mysql");
console.log(process.env.HOST,
    process.env.USER,
    process.env.PASS,
    process.env.DBNAME,);

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASS,
    database: process.env.DBNAME,
    port:"3306"
});

module.exports = connection;