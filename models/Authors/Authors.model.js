const Sequelize = require('sequelize');
const sequelize = require('../orm').sequelize;

class Author extends Sequelize.Model {}

Author.init(
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        modelName: 'author',
        sequelize,
        underscored: true,
    },
);

module.exports = Author;
