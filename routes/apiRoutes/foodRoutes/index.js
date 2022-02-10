const router = require('express').Router();

const Recipes = require ('../../../models/Recipes');

router.get('/:isFood', async (req, res) => {
    try{
        const food = await Recipes.findAll();
        res.status(200).json(food);
    }catch (e){
        res.status(404).json(e);
    }
});

module.exports = router;