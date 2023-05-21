const sequelize = require('../config/connection');
const Post = require('../models/Posts');
const Comment = require('../models/User-comments');
const postData = require('./blog-seeds.json');
const commentData = require('./comment-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();