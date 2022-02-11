const router = require('express').Router();
const {Recipe}= require('../../../models');

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.findAll(req.body);
        res.status(200).json(recipes);
    } catch (e) {
        res.status(404).json(e)
    }
});

router.post('/', async(req, res)=>{
    const {name, description, ingredients, food, drink} = req.body;
    try{
        const result = await Recipe.create({name, description, ingredients, food, drink});
        res.json(result);
    }catch(e){
        res.json(e);
    }
});

module.exports = router;
