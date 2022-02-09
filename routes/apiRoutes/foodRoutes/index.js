const router = require('express').Router();

const Recipes = require ('../../../models/Recipes');

router.get('/:foodRecipe', async (req, res) => {
    try{
        const food = await Recipes.findAll();
        res.status(200).json(food);
    }catch (e){
        res.status(404).json(console.log('404: Page not found'));
    }
});

module.exports = router;