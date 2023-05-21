const router = require('express').Router();
const Post = require('../../models/Posts');

// route to create/add a dish
router.post('/', async (req, res) => {
  try { 
    const postData = await Post.create({
    title: req.body.title,
    post_content: req.body.post-content,
    user_name: req.body.user_name,
    createdOn: req.body.createdOn,
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

module.exports = router;
