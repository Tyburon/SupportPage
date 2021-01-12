const Employes = require("../infra/sequelize/entities/Employes");
const authConfig = require('@config/auth');
const { sign } = require('jsonwebtoken');
const Error = require('@shared/errors/Error');


module.exports = {
  async CreateEmployeSession( email ) {

    const employe = await Employes.findOne({
      where: {
        email
      }
    });

    if (!employe) {
      throw new Error({
        status: 404,
        message: 'Funcionário não encontrado. :(',
      });
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: employe.id,
      expiresIn,
    });

    return (employe, token);

  },
};
