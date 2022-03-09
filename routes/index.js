const router = require('express').Router();
const apiRoutes= require('./apiRoutes');
const {renderHomePage, getAllRecipes, getAllDrinks,}= require('../controllers/homepageController')
const {loginView, signupView} = require('../controllers/userController');
const {getUserRecipes}= require('../controllers/dashboardController');

router.get('/', renderHomePage, getAllRecipes);
router.get('/drinks', getAllDrinks);
// router.get('/food', getAllFood);
router.get('/dashboard', getUserRecipes);
router.get('/signin', loginView);
router.get('/signup', signupView);
router.get('/api', apiRoutes);

module.exports= router;