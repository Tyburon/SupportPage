const express = require('express');
const UserRoutes = require('@modules/Support/infra/http/routes/users.routes');
const EmployeRoutes = require('@modules/Support/infra/http/routes/employes.routes');
const ProblemRoutes = require('@modules/Support/infra/http/routes/problems.routes');
const ReportRoutes = require('@modules/Support/infra/http/routes/reports.routes');
const MessageRoutes = require('@modules/Support/infra/http/routes/messages.routes');

const routes = express();

routes.use('/users', UserRoutes);
routes.use('/employes', EmployeRoutes);
routes.use('/problems', ProblemRoutes);
routes.use('/reports', ReportRoutes);
routes.use('/messages', MessageRoutes);


module.exports = routes;
