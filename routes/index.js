const posts = require('./posts.route');
const routes = require('express').Router();

routes.use('/posts', posts);
routes.get('/', posts);

module.exports = routes;