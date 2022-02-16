const router = require('express').Router();
const apiRoutes= require('./apiRoutes');
const {renderHomePage, getAllRecipes, getAllDrinks, getAllFood}= require('../controllers/homePageController')
const {loginView, signupView} = require('../controllers/userController');
const {getUserRecipes}= require('../controllers/dashboardController');

router.get('/', renderHomePage, getAllRecipes);
router.get('/drinks', getAllDrinks);
router.get('/food', getAllFood);
router.get('/dashboard', getUserRecipes);
router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/api', apiRoutes);

module.exports = router;