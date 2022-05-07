const { Model, DataTypes } = require('sequelize');
const secret = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(password) {
      return secret.compareSync(password, this.password);
    }
  }
  
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6],
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (addUser) => {
          addUser.password = await secret.hash(addUser.password, 8);
          return addUser;
        },
        beforeUpdate: async (updateUser) => {
          updateUser.password = await secret.hash(updateUser.password, 8);
          return updateUser;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user',
    }
  );
  
  module.exports = User;