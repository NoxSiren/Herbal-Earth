const router = require('express').Router();
const recipeRoutes= require('./recipeRoutes');
const foodRoutes = require('./foodRoutes');
const drinkRoutes = require('./drinkRoutes');
// const userRoutes= require('./userRoutes');

router.use('/recipes', recipeRoutes);
router.use('/foods', foodRoutes);
router.use('/drinks', drinkRoutes);
// router.use('/userRoutes', userRoutes);

module.exports = router;