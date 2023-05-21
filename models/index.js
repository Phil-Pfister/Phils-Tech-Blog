const Post = require('./Posts');
const Comment = require('./User-comments');

Comment.belongsTo(Post, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
    foreignKey: 'comment_id',
    onDelete: 'CASCADE',
});

module.exports = {
    Post, 
    Comment,
};