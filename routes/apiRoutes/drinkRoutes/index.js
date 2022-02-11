const router = require('express').Router();

const Recipes = require ('../../../models/Recipe');

router.get('/:drink', async (req, res) => {
    try{
        const drink = await Recipes.findByPk(req.params.drink);
        res.status(200).json(drink);
    }catch (e){
        res.status(404).json(e);
    }
});

module.exports = router;

