const CreateUserService = require('../../../services/CreateUserService');
const User = require('../../sequelize/entities/Users');


module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async create(req, res) {
    const { name, email } = req.body;

    // const user = await User.create({ name, email });

    const user = await CreateUserService.CreateUser(name,email);

    return res.json(user);
  },
};
