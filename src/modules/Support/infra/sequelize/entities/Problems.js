const { Model, DataTypes, Sequelize } = require('sequelize');

class Problems extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

}

module.exports = Problems;
