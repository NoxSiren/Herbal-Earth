const router = require('express').Router();

const Recipes = require ('../../../models/Recipes');

router.get('/:isDrink', async (req, res) => {
    try{
        const drink = await Recipes.findAll();
        res.status(200).json(drink);
    }catch (e){
        res.status(404).json(e);
    }
});

module.exports = router;

