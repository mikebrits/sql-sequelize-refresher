const Posts = require('../models/Posts');
const notify = require('../realtime/io');
const {NEW_POST} = require('../realtime/eventConstants');

const get = async ({ id }) => {
    return await Posts.get(id);
};

const getAll = async () => {
    return await Posts.getAll();
};

const createPost = async ({ author_id, title, content }) => {
    const post = await Posts.createPost({ author_id, title, content });
    notify(NEW_POST, post);
    return post;
};

module.exports = {
    get,
    getAll,
    createPost
};
