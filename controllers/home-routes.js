const router = require('express').Router();
const { Post, Comment, User} = require('../models');
const withAuth = require('../utils/auth');


// route to get all posts for homepage
router.get('/', async (req, res) => {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    }).catch((err) => { 
        res.json(err);
      });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts, logged_in: req.session.logged_in });
      });
  
  // route to get one post
  router.get('/post/:id', withAuth, async (req, res) => {
    try{ 
        const postData = await Post.findByPk(req.params.id, {
          include: [
            {
              model: User,
              attributes: ['username']
            },
          ],
        });

        const commentData = await Comment.findAll({
          where: {
            post_id: req.params.id
          },
          attributes: ['id', 'comment_text', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        });
        
        if(!postData) {
            res.status(404).json({message: 'No post with this id!'});
            return;
        }
        const post = postData.get({ plain: true });
        const commentPost = commentData.map(comment => comment.get({ plain: true }));
        post.comments = commentPost;
        res.render('post', { post, logged_in: req.session.logged_in });
      } catch (err) {
          res.status(500).json(err);
      };     
  });
  // get user dashboard with posts and comments
  router.get('/dashboard', withAuth, async (req, res) => {
    try {
      const dashData = await Post.findAll({
        attributes: ['id', 'user_id', 'title', 'post_content'],
        include: [
          {
          model: User,
          attributes: ['username']
        }
      ],
        where: {
          user_id: req.session.user_id
        }
        
      });

     

      const userPosts = dashData.map(post => post.get({ plain: true }));

      res.render('dashboard', {
        userPosts,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;
