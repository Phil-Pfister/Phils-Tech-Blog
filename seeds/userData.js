const { User } = require('../models');

const userdata = [
    {
        username: 'AnonEMouse',
        email: 'Anon@mymail.com',
        password: 'g00dPassworD',
    },
    {
        username: 'IMcoding',
        email: 'charlie@good.com',
        password: 'badpassword',
    },
    {
        username: 'testtest',
        email: 'joecool@hot.com',
        password: '$uP3rG0oDpa$sword',
    },
];

const seedUser = () => User.bulkCreate(userdata);
module.exports = seedUser;