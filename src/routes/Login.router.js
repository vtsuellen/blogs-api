const express = require('express');
const loginController = require('../controllers/login.controllers');
const { loginMiddleware } = require('../middlewares/login.middlewares');

const loginRouter = express.Router();

loginRouter.post('/login', loginMiddleware, loginController.loginController);

module.exports = loginRouter;
