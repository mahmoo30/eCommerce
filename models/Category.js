const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Defining Columns
    id: 
    {
        type: DataTypes.INTEGER, // Set the data type to INTEGER
        allowNull: false, // Disallow NULL values
        primaryKey: true, // Set as the primary key
        autoIncrement: true, // Automatically increment the value for each new record
    },
    category_name: 
    {
        type: DataTypes.STRING, // Set the data type to STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;