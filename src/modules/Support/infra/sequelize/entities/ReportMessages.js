const { Model, DataTypes, Sequelize } = require('sequelize');

class ReportMessages extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      report_id: DataTypes.UUID,
      message: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Reports, { foreignKey: 'report_id', as: 'messages' });

  }
}

module.exports = ReportMessages;
