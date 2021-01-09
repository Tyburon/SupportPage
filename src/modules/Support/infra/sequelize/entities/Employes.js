const { Model, DataTypes, Sequelize } = require('sequelize');

class Employes extends Model {
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

  static associate(models) {
    this.hasMany(models.Reports, { foreignKey: 'employe_id', as: 'reports' });
  }
}

module.exports = Employes;
