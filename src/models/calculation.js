const { DataTypes } = require('sequelize');

const defineCalculationModel = (sequelize) => {
  const Calculation = sequelize.define('Calculation', {
    expression: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    result: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return Calculation;
};

module.exports = defineCalculationModel;
