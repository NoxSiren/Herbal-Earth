const {Recipe}= require('../models');

module.exports={
    renderHomePage: async (req, res) => {
        res.render('homepage');
    }, 
    getAllRecipes: async (req, res) => {
        try {
            const getAllRecipes = await Recipe.findAll(req.body.recipes);
            res.json(getAllRecipes);
        } catch (e) {
            res.json(e);
        }
    }, 
    getAllDrinks: async (req,res)=>{
        try {
            const getAllDrinks = await Recipe.findByPk(req.params.drink);
            const drinks = getAllDrinks.get({plain:true});
            res.render('drinksPage', {drinks});
        } catch (e) {
            res.json(e);
        }
    }, 
    getAllFood: async (req,res)=>{
        try {
            const getAllFood= await Recipe.findByPk(req.params.food);
            const food = getAllFood.get({plain:true});
            res.render('foodPage', {food});
        } catch (e) {
            res.json(e);
        }
    }
}