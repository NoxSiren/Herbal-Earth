const router = require('express').Router();

const {
    getAllFood,
}= require('../../../controllers/homePageController');

router.get('/food', getAllFood);

module.exports = router;