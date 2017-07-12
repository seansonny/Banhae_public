const Sequelize = require('sequelize');
const config = require("./mysqlConfig.json");
const sequelize = new Sequelize(config.database,config.username,config.password, {
    dialect: config.dialect,
    host:config.host,
    port:config.port,
    pool:config.pool,
});

module.exports = sequelize;