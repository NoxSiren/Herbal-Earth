const router = require('express').Router();
const drinkRoutes= require('./drinkRoutes');
const foodRoutes = require('./foodRoutes');
const recipeRoutes= require('./recipeRoutes');
// const userRoutes= require('./userRoutes');

router.use('/drinkRoutes', drinkRoutes);
router.use('/foodRoutes', foodRoutes);
router.use('/recipeRoutes', recipeRoutes);
// router.use('/userRoutes', userRoutes);

module.exports = router;