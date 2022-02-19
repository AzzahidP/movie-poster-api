'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Favorite_Movies, {
        foreignKey: 'user_id'
      })
    }
  };
  User.init({
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(async (user) => {
    if (user.password){
      const salt = await bcrypt.genSaltSync(15);
      user.password = bcrypt.hashSync(user.password, salt)
    }
  })
  User.beforeUpdate(async (user) => {
    if (user.password){
      const salt = await bcrypt.genSaltSync(15);
      user.password = bcrypt.hashSync(user.password, salt)
    }
  })
  return User;
};