const { Recipe } = require('../models');
module.exports = {
	getAllRecipes: async (req, res) => {
		if (!req.session.loggedIn) {

                        //'login.handlebars'
			return res.redirect('');
		}
		try {
			const userRecipeData = await Todo.findAll({
				where: {
					userId: req.session.user.id,
				}
			});      //from models
			res.render('dashboard', {
				userRecipe: userRecipeData.map(userRecipe => userRecipe.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
	createTodo: async (req, res) => {
		const { task } = req.body;
		try {
			const newTodo = await Todo.create({
				task,
				userId: req.session.user.id,
			});
			res.json({ newTodo });
		} catch (e) {
			res.json(e);
		}
	},
}
