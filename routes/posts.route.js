const posts = require('express').Router();
const postsController = require('../controllers/posts.controller');

posts.get('/', async (req, res) => {
    const data = await postsController.getAll();
    res.send(data);
});

posts.get('/:id', async (req, res) => {
    const data = await postsController.get({ id: req.params.id });
    res.send(data);
});

posts.post('/', async (req, res) => {
    const { author_id, title, content } = req.body;
    const data = await postsController.createPost({ author_id, title, content });
    res.send(data);
});

module.exports = posts;
