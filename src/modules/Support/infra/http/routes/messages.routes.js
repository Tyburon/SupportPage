const express = require('express');

const MessageController = require('../controller/MessageController');

const messagesRouter = express();

messagesRouter.get('/', MessageController.index);
messagesRouter.post('/', MessageController.create);

module.exports = messagesRouter;
