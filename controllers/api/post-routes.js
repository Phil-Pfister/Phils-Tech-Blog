const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// route to create/add a post
router.post('/', withAuth, async (req, res) => {
  try { 
    const postData = await Post.create({
    ...req.body,
    user_id: req.session.user_id,
    
  });
  
  res.status(200).json(postData)
} catch (err) {
  res.status(400).json(err);
}
});


router.put('/:id', async (req, res) => {
 
  try {
    const post = await Post.update(
    {
      title: req.body.title,
      post_content: req.body.post-content,
      user_name: req.body.user_name,
      createdOn: req.body.createdOn,
    },
    {
      where: {
        id: req.params.id,
      },
    });
   
    res.status(200).json(post);
  } catch (err) {
      res.status(500).json(err);
    };
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    
    if (!postData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/comment', withAuth, async (req, res) => {
  try { 
    const user_id = req.session.user_id;
    const {post_id, comment_text} = req.body;
    console.log(comment_text);
    const commentData = await Comment.create({
      comment_text,
      user_id,
      post_id
    
  });
 
  res.status(200).json(commentData)
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;
