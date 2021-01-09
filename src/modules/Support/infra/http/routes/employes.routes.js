const express = require('express');

const EmployeController = require('../controller/EmployeController');

const employesRouter = express();

employesRouter.get('/', EmployeController.index);
employesRouter.post('/', EmployeController.create);

module.exports = employesRouter;
