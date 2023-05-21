const router = require('express').Router();
const Post = require('../models/Posts');

// route to get all dishes
router.get('/', async (req, res) => {
    const postData = await Post.findAll().catch((err) => { 
        res.json(err);
      });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all', { posts });
      });
  
  // route to get one dish
  router.get('/post/:id', async (req, res) => {
    try{ 
        const postData = await Post.findByPk(req.params.id);
        if(!postData) {
            res.status(404).json({message: 'No post with this id!'});
            return;
        }
        const dish = postData.get({ plain: true });
        res.render('post', posts);
      } catch (err) {
          res.status(500).json(err);
      };     
  });

module.exports = router;
