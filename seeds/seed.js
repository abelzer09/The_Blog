const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userInfo = require('./userData.json');
const postInfo = require('./postData.json');

const seedUsers = () => User.bulkCreate(userInfo, {
    individualHooks: true,
    returning: true,
  });

const seedPosts = () => Post.bulkCreate(postInfo, {
    individualHooks: true,
    returning: true,
  });



const seedAllData = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();
    
  process.exit(0);
};

seedAllData();