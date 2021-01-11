const Report = require("../infra/sequelize/entities/Reports");


module.exports = {
  async CreateReport(problem_id, user_id, employe_id, description, status) {

    const report = await Report.create({ problem_id, user_id, employe_id, description, status });

    return report;
  },
};
