const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host:"localhost",
    user:"root",
    database:"bat",
    password:"147258",
}).promise()

module.exports = pool