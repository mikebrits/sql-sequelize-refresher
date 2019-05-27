const Sequelize = require('sequelize');
const { DB, USERNAME, PASSWORD, HOST } = process.env;

const sequelize = new Sequelize(DB, USERNAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
});

const init = () => {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            // sequelize.query("set FOREIGN_KEY_CHECKS=0");
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
};

module.exports = {
    sequelize,
    init,
};
