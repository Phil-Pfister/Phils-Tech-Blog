const router = require('express').Router();
const { Post, Comment} = require('../models');


// route to get all posts
router.get('/', async (req, res) => {
    const postData = await Post.findAll().catch((err) => { 
        res.json(err);
      });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts });
      });
  
  // route to get one post
  router.get('/post/:id', async (req, res) => {
    try{ 
        const postData = await Post.findByPk(req.params.id, {
          include: [{ model: Comment }]
        });
        if(!postData) {
            res.status(404).json({message: 'No post with this id!'});
            return;
        }
        const post = postData.get({ plain: true });
        res.render('post', post);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;
