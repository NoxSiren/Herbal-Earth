const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');
class Recipe extends Model {}
Recipe.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
            autoIncrement: true,
			primaryKey: true,
		},
		recipeName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		recipeDescription: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        recipeIngredients: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recipeImage: {
            type: DataTypes.STRING,
        },
		userId: {
			type: DataTypes.UUID,
			references: {
				model: 'user',
				key: 'id',
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'Recipe'
	}
);
module.exports = Recipe;