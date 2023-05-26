const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./userRoutes');
const editPost = require('./edit-post');

router.use('/post', postRoutes);
router.use('/users', userRoutes);
router.use('/edit', editPost);

module.exports = router;