const Problems = require('../../sequelize/entities/Problems');

module.exports = {
  async index(req, res) {
    const problems = await Problems.findAll();

    return res.json(problems);
  },

  async create(req, res) {
    const  name  = req.body;

    const problem = await Problems.create(name);

    return res.json(problem);
  }
};
