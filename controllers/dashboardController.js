const {Recipe}= require('../models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    renderHomePage: async (req, res) => {
        res.render('dashboard');
    }, 
    getUserRecipes: async (req, res)=>{
        if(!req.session.loggedIn){
            return res.redirect('/login');
        }
        try {
            const userRecipeData = await Recipe.findAll({
                where:{
                    userId: req.session.user.id,
                }
            });
            res.render('dashboard',{
                userRecipes: userRecipeData.map(userRecipe => userRecipe.get({plain:true})),
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