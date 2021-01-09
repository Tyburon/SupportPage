const express = require('express');

const ProblemController = require('../controller/ProblemController');

const problemsRouter = express();

problemsRouter.get('/', ProblemController.index);
problemsRouter.post('/', ProblemController.create);

module.exports = problemsRouter;
