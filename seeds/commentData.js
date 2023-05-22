const { Comment } = require('../models');
const commentdata = [
    {
      comment_text: "You are soo right!",
      user_id: 2,
      post_id: 1,  
    },
    {
      comment_text: "Among other things",
      user_id: 3,
      post_id: 2,

    },
    {
      comment_text: "Me too!",
      user_id: 1,
      post_id: 3,
    },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;