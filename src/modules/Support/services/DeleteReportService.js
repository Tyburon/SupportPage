const Report = require("../infra/sequelize/entities/Reports");


module.exports = {
  async DeleteReport(report_id) {

    const verifyIfExist = await Report.findOne({
      where: {
        id: report_id
      }
    });

    if (!verifyIfExist){
      throw new Error({
        status: 404,
        message: 'Chamado não encontrado. :(',
      });
    }

    const reportDeleted = await Report.destroy({
        where: {
          id: report_id
        }
      });

      if (!reportDeleted){
        throw new Error({
          status: 404,
          message: 'Algo de errado ocorreu, por favor tente mais tarde. :(',
        });
      }

    return reportDeleted;
  },
};
