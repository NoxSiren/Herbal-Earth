const router = require('express').Router();
const {createRecipe} = require('../../../controllers/dashboardController');
router.post('/', createRecipe);
module.exports = router;