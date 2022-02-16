const router = require('express').Router();
const {
    getUserRecipes,
    createRecipe,
}= require('../../../controllers/dashboardController');

router.route('/')
    .get(getUserRecipes);
router.route('/')
    .post(createRecipe);

module.exports = router;