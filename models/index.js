const Recipe = require('./Recipe');
const User = require('./User');
User.hasMany(Recipe, {
	foreignKey: 'userId',
});
Recipe.belongsTo(User, {
	foreignKey: 'userId'
});
module.exports = {
	Recipe,
	User,
}
