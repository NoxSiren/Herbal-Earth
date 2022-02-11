const router = require('express').Router();

const Recipes = require ('../../../models/Recipe');

router.get('/:food', async (req, res) => {
    try{
        const food = await Recipes.findByPk(req.params.food);
        res.status(200).json(food);
    }catch (e){
        res.status(404).json(e);
    }
});

module.exports = router;