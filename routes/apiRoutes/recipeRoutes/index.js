const router = require('express').Router();
const {Recipe}= require('../../models/Recipe');

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.findAll(req.body);
        res.status(200).json(recipes);
    } catch (e) {
        res.status(404).json(e)
    }
});

router.get('/:')

module.exports = router;
