const router = require('express').Router();

const{
    getAllFood,
}= require('../../../controllers/homePageController');

router.get('/', getAll);

module.exports = router;