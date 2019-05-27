const Sequelize = require('sequelize');
const sequelize = require('../orm').sequelize;
const { Author } = require('../Authors');
const { Comment } = require('../Comments');

class Post extends Sequelize.Model {}

Post.init(
    {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        modelName: 'post',
        sequelize,
        underscored: true,
    },
);

Post.hasMany(Comment);
Post.belongsTo(Author);

module.exports = Post;
