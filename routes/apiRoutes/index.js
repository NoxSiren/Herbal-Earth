const router = require('express').Router();

const drinkRoutes = require('./drinkRoutes');
const foodRoutes = require('./foodRoutes');
const recipeRoutes = require('./dashboardRoutes');
const userRoutes = require('./userRoutes');

router.use('/drinks', drinkRoutes);
router.use('/food', foodRoutes);
router.use('/dashboard', recipeRoutes);
router.use('/users', userRoutes);

module.exports = router;