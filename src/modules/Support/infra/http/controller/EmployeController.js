const Employes = require('../../sequelize/entities/Employes');
const CreateEmployeSessionService = require('../../../services/CreateEmployeSessionService');
const CreateEmployeService = require('../../../services/CreateEmployeService');

module.exports = {
  async index(req, res) {
    const employes = await Employes.findAll();

    return res.json(employes);
  },

  async create(req, res) {
    const { name, email } = req.body;

    // const employe = await Employes.create({ name, email });

    const employe = await CreateEmployeService.CreateEmploye(name,email);


    return res.status(201).json(employe);
  },

  async session(req, res) {
    const { email } = req.body;

    const {employe, token} = await CreateEmployeSessionService.CreateEmployeSession(email);

    return res.status(200).json({employe,token});
  },
};
