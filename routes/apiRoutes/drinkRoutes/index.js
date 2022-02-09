const router = require('express').Router();

const Recipes = require ('../../../models/Recipes');

router.get('/:drinkRecipe', async (req, res) => {
    try{
        const drink = await Recipes.findAll();
        res.status(200).json(drink);
    }catch (e){
        res.status(404).json(console.log('404: Page not found'));
    }
});

module.exports = router;

