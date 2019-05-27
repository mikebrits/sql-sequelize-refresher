const Author = require('../Authors/Authors.model');
const Comment = require('../Comments/Comments.model');
const Sequelize = require('sequelize');

const single = () => ({
    attributes: { exclude: ['updatedAt'] },
    include: [
        {
            model: Author,
            attributes: ['id', 'name'],
        },
        {
            model: Comment,
            attributes: ['id', 'content', 'createdAt'],
            order: ['createdAt', 'DESC'],
            include: [
                {
                    model: Author,
                    attributes: ['id', 'name'],
                },
            ],
        },
    ],
});

const collection = () => ({
    attributes: {
        include: [[Sequelize.fn('COUNT', Sequelize.col('comments.id')), 'comment_count']],
        exclude: ['updatedAt']
    },
    include: [
        {
            model: Author,
            attributes: {
                exclude: ['updatedAt', 'createdAt'],
            },
        },
        {
            model: Comment,
            attributes: [],
        }
    ],
});

module.exports = {
    single,
    collection,
};
