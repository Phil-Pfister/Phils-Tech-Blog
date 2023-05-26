const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try{ 
        const editData = await Post.findByPk(req.params.id, {
          include: [
            {
              model: User,
              attributes: ['username']
            },
          ],
        });
        
        
        if(!editData) {
            res.status(404).json({message: 'No post with this id!'});
            return;
        }
        const post = editData.get({ plain: true });
        
       
        res.render('edit', { post, logged_in: req.session.logged_in });
      } catch (err) {
          res.status(500).json(err);
      };     
  });

  router.put('/:id', withAuth, async (req, res) => {
    const title = req.body.editTitle;
    const post_content = req.body.editContent;
    console.log(title, post_content);
    try {
        const editedPost = await Post.update(
            { title, post_content},
            { where: {
                id: req.params.id
            }
        }
        )
        console.log(editedPost);
        res.status(200).json(editedPost);
    } catch(err) {
        res.status(500).json(err)
    }
  })

  module.exports = router;