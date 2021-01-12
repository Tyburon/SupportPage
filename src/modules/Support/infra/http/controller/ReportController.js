const Report = require('../../sequelize/entities/Reports');
const CreateReportService = require('../../../services/CreateReportService');
const UpdateReportService = require('../../../services/UpdateReportService');
const DeleteReportService = require('../../../services/DeleteReportService');

module.exports = {
  async index(req, res) {
    const { employe_id } = req.query;

    const reports = await Report.findAll({
      where: {
        employe_id
      },
      include:[
      {
        association: 'userReports',
        attributes: ['name'],
      },
      {
        association: 'reportMessages',
        attributes: ['message'],
      },
      {
        association: 'reportProblem',
        attributes: ['name'],
      },
    ],
    });

    return res.json(reports);
  },

  async create(req, res) {
    const { problem_id, user_id, employe_id, description, status } = req.body;

    const report = await CreateReportService.CreateReport( problem_id, user_id, employe_id, description, status );

    return res.json(report);
  },

  async update(req, res) {
    const { report_id ,problem_id, user_id, employe_id, description, status } = req.body;

    await UpdateReportService.UpdateReport(report_id ,problem_id, user_id, employe_id, description, status);

    return res.json({"Sucesso": "Chamado atualizado com Sucesso!!"});
  },

  async delete(req, res) {
    const { report_id } = req.body;

    await DeleteReportService.DeleteReport(report_id);

    return res.json({"Sucesso": "Chamado deletado com Sucesso!!"});
  },

  async findOne(req, res) {
    const { report_id } = req.query;

    const report = await Report.findOne({
      where: {
        id: report_id
      },
      include:[
      {
        association: 'userReports',
        attributes: ['name'],
      },
      {
        association: 'reportMessages',
        attributes: ['message'],
      },
      {
        association: 'reportProblem',
        attributes: ['name'],
      },
    ],
    });

    return res.json(report);
  },
};
