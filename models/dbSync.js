const Post = require('./Posts/Posts.model');
const Author = require('./Authors/Authors.model');
const Comment = require('./Comments/Comments.model');

const force = false;

module.exports = () => {
    Author.sync({ force });
    Post.sync({ force });
    Comment.sync({ force });

};
