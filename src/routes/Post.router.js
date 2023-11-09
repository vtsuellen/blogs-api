const express = require('express');
const { allUserMiddlewares } = require('../middlewares/allUser.middlewares');
const { allPostController } = require('../controllers/post.controllers');

const PostRouter = express.Router();

PostRouter.get('/post', allUserMiddlewares, allPostController);
module.exports = PostRouter;