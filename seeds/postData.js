const { Post } = require('../models');


const postdata = [
  {
    title: "Why MVC is so important",
    post_content: "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design and the controller layer for application logic.",
    user_id: 1,
    
  },
  {
    title: "Authentication vs. Authorization",
    post_content:
      "There is a difference between authentication and authorization. Authentication means confirming your identity, whereas authorization means being allowed access to the system.",
    user_id: 2,
    
  },
  {
    title: "Object Relational Mapping",
    post_content:
      "I have really loved learing about ORMs. It's really simplified the way I create queries in SQL!",
    user_id: 3,
   
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;

