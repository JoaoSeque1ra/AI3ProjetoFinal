var Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'AI3',
    'postgres',
    'R7220810',
    {
        host: 'localhost',
        port: "5432",
        dialect: "postgres",
        logging: false
    }
);

module.exports = sequelize;