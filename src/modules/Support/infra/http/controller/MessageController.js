const ReportMessages = require('../../sequelize/entities/ReportMessages');

module.exports = {
  async index(req, res) {
    const messages = await ReportMessages.findAll();

    return res.json(messages);
  },

  async create(req, res) {
  const {report_id, message} = req.body;

    const messageResponse = await ReportMessages.create({report_id, message});

    return res.json(messageResponse);
  }
};
