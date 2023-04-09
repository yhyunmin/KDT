const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.json")["development"];
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Model = require("./Model")(sequelize, Sequelize);
module.exports = db;
