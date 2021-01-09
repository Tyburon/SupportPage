const express = require('express');

const ReportController = require('../controller/ReportController');

const reportsRouter = express();

reportsRouter.get('/', ReportController.index);
reportsRouter.post('/', ReportController.create);
reportsRouter.put('/', ReportController.update);
reportsRouter.delete('/', ReportController.delete);

module.exports = reportsRouter;
