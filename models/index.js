let models = {};

models.Authors = require('./Authors/Authors.model');
models.Posts = require('./Posts/Posts.model');
models.Comments = require('./Comments/Comments.model');

// Relationships
// index.Comments.belongsTo(index.Posts);
// index.Posts.hasMany(index.Comments);
// index.Posts.belongsTo(index.Authors);
// index.Authors.hasMany(index.Posts);

module.exports = models;