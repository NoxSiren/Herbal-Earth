const router = require('express').Router();

const{
    getAllDrinks,
}= require('../../../controllers/homePageController');

router.get('/', getAllDrinks);

module.exports = router;