const router = require('express').Router();
const {Recipe} = require('../../../models');

router.get('/:food', async (req, res) => {
    try {
        const foods = await Recipe.findByPk(req.params.food);
        res.status(200).json(foods);
    } catch (e) {
        res.status(404).json(e);
    }
});

module.exports = router