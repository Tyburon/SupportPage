const ReportMessages = require('../../sequelize/entities/ReportMessages');

module.exports = {
  async index(req, res) {
    const {report_id} = req.query;

    const messages = await ReportMessages.findAll({
      where: {
        report_id
      }
    });

    return res.json(messages);
  },

  async create(req, res) {
  const {report_id, message} = req.body;

    const messageResponse = await ReportMessages.create({report_id, message});

    return res.json(messageResponse);
  }
};
