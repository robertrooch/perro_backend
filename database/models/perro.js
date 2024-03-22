'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Perro.init({
    id_perro: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    raza: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Perro',
  });
  return Perro;
};