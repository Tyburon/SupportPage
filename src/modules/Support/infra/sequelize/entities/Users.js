const { Model, DataTypes, Sequelize } = require('sequelize');

class Users extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize
    })
  }

}

module.exports = Users;
