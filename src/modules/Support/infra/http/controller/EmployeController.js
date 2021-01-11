const Employes = require('../../sequelize/entities/Employes');
const { sign } = require('jsonwebtoken');
const authConfig = require('@config/auth');

module.exports = {
  async index(req, res) {
    const employes = await Employes.findAll();

    return res.json(employes);
  },

  async create(req, res) {
    const { name, email } = req.body;

    const employe = await Employes.create({ name, email });

    return res.json(employe);
  },

  async session(req, res) {
    const { email } = req.body;

    const employe = await Employes.findOne({
      where: {
        email
      }
    });

    if (!employe) {
      return res.status(404).json({"Error": "Funcionário não encontrado. :("});
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: employe.id,
      expiresIn,
    });

    return res.status(200).json({employe,token});
  },
};
