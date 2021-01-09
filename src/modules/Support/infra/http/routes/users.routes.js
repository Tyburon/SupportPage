const express = require('express');

const UserController = require('../controller/UserController');

const usersRouter = express();

usersRouter.get('/', UserController.index);
usersRouter.post('/', UserController.create);

module.exports = usersRouter;
