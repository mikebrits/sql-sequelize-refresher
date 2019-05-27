const Post = require('./Posts.model');
const { single, collection } = require('./Posts.structures');

const getAll = () => {
    return Post.findAll(collection());
};

const get = id => {
    return Post.findAll({
        where: { id },
        ...single(),
    });
};

const createPost = ({ author_id, title, content }) => {
    return Post.create({ authorId: author_id, title, content });
};

module.exports = {
    Post,
    get,
    getAll,
    createPost
};
