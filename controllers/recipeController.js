const { Recipe } = require('../models');
module.exports = {
	getAllRecipes: async (req, res) => {
		if (!req.session.loggedIn) {

                        //'login.handlebars'
			return res.redirect('');
		}
		try {
			const userRecipeData = await Recipe.findAll({
				where: {
					userId: req.session.user.id,
				}
			});      //from models

			res.render('dashboard', {
			res.render('Recipe', {
				userTodos: userTodosData.map(userTodo => userTodo.get({ plain: true })),


			res.render('recipes', {

				userRecipe: userRecipeData.map(userRecipe => userRecipe.get({ plain: true })),

				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
	createRecipe: async (req, res) => {
		const { description } = req.body;
		try {
			const newRecipe = await Recipe.create({
				description,
				userId: req.session.user.id,
			});
			res.json({ newRecipe });
		} catch (e) {
			res.json(e);
		}
	},
}
