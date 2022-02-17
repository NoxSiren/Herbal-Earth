const router = require('express').Router();
const apiRoutes= require('./apiRoutes');
const {renderHomePage, loginView, signupView}= require('../controllers/homepageController');
const {getAllRecipe} = require('../controllers/dashboardController');
router.get('/', renderHomePage);
router.get('/dashboard', getAllRecipe);
router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/api', apiRoutes);

module.exports= router;