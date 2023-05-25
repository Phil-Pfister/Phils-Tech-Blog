const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./userRoutes');

router.use('/post', postRoutes);
router.use('/users', userRoutes);

module.exports = router;