const router = require('express').Router();

const {
    getAllFood,
}= require('../../../controllers/homePageController');

router.get('/', getAllFood);

module.exports = router;