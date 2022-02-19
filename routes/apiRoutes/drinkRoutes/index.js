const router = require('express').Router();

const{
    getAllDrinks,
}= require('../../../controllers/homePageController');

router.get('/drinks', getAllDrinks);

module.exports = router;