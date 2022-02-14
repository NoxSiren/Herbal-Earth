const router = require('express').Router();
const {Recipe} = require('../../../models');

router.get('/:drinks', async (req, res) => {
    try {
        const drinks = await Recipe.findByPk(req.params.drinks);
        res.status(200).json(drinks);
    } catch (e) {
        res.status(404).json(e);
    }
});

module.exports = router