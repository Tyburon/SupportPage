const Report = require('../../sequelize/entities/Reports');

module.exports = {
  async index(req, res) {
    const reports = await Report.findAll();

    return res.json(reports);
  },

  async create(req, res) {
    const { problem_id, user_id, employe_id, description, status } = req.body;

    const report = await Report.create({ problem_id, user_id, employe_id, description, status });

    return res.json(report);
  },

  async update(req, res) {
    const { report_id ,problem_id, user_id, employe_id, description, status } = req.body;

    const verifyIfExist = await Report.findOne({
      where: {
        id: report_id
      }
    });

    if (!verifyIfExist){
      return res.json({"Error": "Chamado não encontrado. :("});
    }

    const reportUpdated = await Report.update(
      { problem_id, user_id, employe_id, description, status }, {
        where: {
          id: report_id
        }
      });

      if (!reportUpdated){
        return res.json({"Error": "Algo de errado ocorreu, por favor tente mais tarde. :("});
      }

      return res.json({"Sucesso": "Chamado atualizado com Sucesso!!"});
  },

  async delete(req, res) {
    const { report_id } = req.body;

    const verifyIfExist = await Report.findOne({
      where: {
        id: report_id
      }
    });

    if (!verifyIfExist){
      return res.json({"Error": "Chamado não encontrado. :("});
    }

    const reportUpdated = await Report.destroy({
        where: {
          id: report_id
        }
      });

      if (!reportUpdated){
        return res.json({"Error": "Algo de errado ocorreu, por favor tente mais tarde. :("});
      }

      return res.json({"Sucesso": "Chamado deletado com Sucesso!!"});
  },
};
