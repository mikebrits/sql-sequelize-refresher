const Sequelize = require('sequelize');
const sequelize = require('../orm').sequelize;
const { Author } = require('../Authors');

class Comment extends Sequelize.Model {}

Comment.init(
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        modelName: 'comment',
        sequelize,
        underscored: true,
    },
);

Comment.belongsTo(Author);

module.exports = Comment;
