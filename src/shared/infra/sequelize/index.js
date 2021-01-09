const Sequelize = require('sequelize');
const dbConfig = require('../../../config/database');

const Users = require('../../../modules/Support/infra/sequelize/entities/Users');
const Employes = require('../../../modules/Support/infra/sequelize/entities/Employes');
const Problems = require('../../../modules/Support/infra/sequelize/entities/Problems');
const ReportMessages = require('../../../modules/Support/infra/sequelize/entities/ReportMessages');
const Reports = require('../../../modules/Support/infra/sequelize/entities/Reports');

const connection = new Sequelize(dbConfig);

Users.init(connection);
Employes.init(connection);
Problems.init(connection);
ReportMessages.init(connection);
Reports.init(connection);


Employes.associate(connection.models);
ReportMessages.associate(connection.models);
Reports.associate(connection.models);

module.exports = connection;
