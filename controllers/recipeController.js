const { Recipe } = require('../models');
module.exports = {
	getAllRecipes: async (req, res) => {
		if (!req.session.loggedIn) {

                        //'login.handlebars'
			return res.redirect('');
		}
		try {
<<<<<<< HEAD
			const userRecipeData = await Todo.findAll({
=======
			const userRecipeData = await Recipe.findAll({
>>>>>>> 2936d2e00b05d11455b059e535311c2858724c26
				where: {
					userId: req.session.user.id,
				}
			});      //from models
<<<<<<< HEAD
			res.render('dashboard', {
=======
			res.render('recipes', {
>>>>>>> 2936d2e00b05d11455b059e535311c2858724c26
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
