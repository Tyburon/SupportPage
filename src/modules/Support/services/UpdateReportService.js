const Report = require("../infra/sequelize/entities/Reports");


module.exports = {
  async UpdateReport(report_id ,problem_id, user_id, employe_id, description, status) {

    const verifyIfExist = await Report.findOne({
      where: {
        id: report_id
      }
    });

    if (!verifyIfExist){
      // return res.json({"Error": "Chamado não encontrado. :("});
      throw new Error({
        status: 404,
        message: 'Chamado não encontrado. :(',
      });
    }

    const reportUpdated = await Report.update(
      { problem_id, user_id, employe_id, description, status }, {
        where: {
          id: report_id
        }
      });

      if (!reportUpdated){
        // return res.json({"Error": "Algo de errado ocorreu, por favor tente mais tarde. :("});
        throw new Error({
          status: 404,
          message: 'Algo de errado ocorreu, por favor tente mais tarde. :(',
        });
      }

    return reportUpdated;
  },
};
