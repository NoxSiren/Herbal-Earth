const { Recipe } = require('../models');
module.exports = {
	getAllRecipe: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const userRecipeData = await Recipe.findAll({
				where: {
					userId: req.session.user.id,
				}
			});
			res.render('dashboard', {
				userRecipes: userRecipeData.map(userTodo => userTodo.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
	createRecipe: async (req, res) => {
        const {name,description,ingredients,image} = req.body;
        try {
            const newRecipe = await Recipe.create({
                name,description,ingredients,image,
                userId: req.session.user.id,
            });
            res.json({newRecipe});
        } catch (e) {
            res.json(e);
        }
    },
}
