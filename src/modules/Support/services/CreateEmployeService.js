const Employes = require("../infra/sequelize/entities/Employes");


module.exports = {
  async CreateEmploye(name, email) {
    const employe = await Employes.create({ name, email });

    return employe;
  },
};
