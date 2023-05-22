

const seedPost = require('./postData');
const seedComment = require('./commentData');
const seedUser = require('./userData');

const sequelize = require('../config/connection');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  

  process.exit(0);
};

seedDatabase();