const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateUser } = require('../middlewares/user.middlewares');

const UserRouter = express.Router();

UserRouter.post('/user', validateUser, userController.userController);

module.exports = UserRouter;