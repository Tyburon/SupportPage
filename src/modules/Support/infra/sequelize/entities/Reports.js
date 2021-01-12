const { Model, DataTypes, Sequelize } = require('sequelize');

class Reports extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      problem_id: DataTypes.UUID,
      user_id: DataTypes.UUID,
      employe_id: DataTypes.UUID,
      description: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.ReportMessages, { foreignKey: 'report_id', as: 'reportMessages' });
    this.belongsTo(models.Problems, { foreignKey: 'problem_id',  as: 'reportProblem' });
    this.belongsTo(models.Employes, { foreignKey: 'employe_id',  as: 'employeReports' });
    this.belongsTo(models.Users, { foreignKey: 'user_id',  as: 'userReports' });

  }
}

module.exports = Reports;
