const mysql = require("mysql");

const connection = mysql.createConnection({
host: "localhost",
user: "user",
password: process.env.MYSQL_ROOT_PASSWORD,
database: process.env.MYSQL_DATABASE,
});

connection.connect((err) => {
if (err) {
console.log(err);
return;
}
console.log("Connected to MySQL!");
});

module.exports = connection;
