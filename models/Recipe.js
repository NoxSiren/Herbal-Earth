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
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        ingredients: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // image: {
        //     type: DataTypes.STRING,
		// 	allowNull: false,
        // },
		userId: {
			type: DataTypes.UUID,
			// references: {
			// 	model: 'User',
			// 	key: 'id',
			// }
		},
		food: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			primaryKey: true,
		},
		drinks:{
			type: DataTypes.BOOLEAN,
			defaultValue: false,
			primaryKey: true,
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