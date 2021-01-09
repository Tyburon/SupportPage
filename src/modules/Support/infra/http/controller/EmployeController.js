const Employes = require('../../sequelize/entities/Employes');

module.exports = {
  async index(req, res) {
    const employes = await Employes.findAll();

    return res.json(employes);
  },

  async create(req, res) {
    const { name, email } = req.body;

    const employe = await Employes.create({ name, email });

    return res.json(employe);
  }
};
