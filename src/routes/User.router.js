const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateUser } = require('../middlewares/user.middlewares');
const { allUserMiddlewares } = require('../middlewares/allUser.middlewares');

const UserRouter = express.Router();

UserRouter.post('/user', validateUser, userController.userController);
UserRouter.get('/user', allUserMiddlewares, userController.allUserController);

module.exports = UserRouter;