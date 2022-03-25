const {Recipe}= require('../models');

module.exports={
    renderHomePage: async (req, res) => {
        try {
            const getAllRecipes = await Recipe.findAll();
            const food = getAllRecipes.map ((recipe) => recipe.get({plain:true}));
            console.log(food);
            // res.json(getAllRecipes);
            res.render('homepage', {food});
        } catch (e) {
            res.json(e);
        }
    }, 
    getAllRecipes: async (req, res) => {
    }, 
    // seperate controller for drinks
    getAllDrinks: async (req,res)=>{
        try {
            const getAllDrinks = await Recipe.findAll();
            const drinks = getAllDrinks.map ((drinks) => drinks.get({plain:true}));
            console.log(drinks);
            res.render('drinks', {drinks});
        } catch (e) {
            res.json(e);
        }
    }, 
    getAllFood: async (req,res)=>{
        try {
            const getAllFood= await Recipe.findAll();
            const food = getAllFood.map ((food) => food.get({plain:true}));
            console.log(food);
            res.render('food', {food});
        } catch (e) {
            res.json(e);
        }
    }
}