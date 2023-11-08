const express = require('express');
const categoryController = require('../controllers/category.controllers');
const { categoryMiddleware } = require('../middlewares/category.middlewares');
const { allUserMiddlewares } = require('../middlewares/allUser.middlewares');

const categoryRouter = express.Router();

categoryRouter.post(
  '/categories',
  categoryMiddleware,

  allUserMiddlewares,

  categoryController.categoryController,
);

module.exports = categoryRouter;
