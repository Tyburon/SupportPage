const Users = require("../infra/sequelize/entities/Users");


module.exports = {
  async CreateUser(name, email) {
    const user = await Users.create({ name, email });

    return user;
  },
};
