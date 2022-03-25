const router = require('express').Router();
const {
	createUser,	
	login,
	signupHandler,
	logout,
} = require('../../../controllers/userController');
// /api/users


// router.post('/signup', signupHandler);
router.post('/signup', (req, res) => {
	res.json({"message": 'line 13'})
})
router.post('/login', login);
router.post('/logout', logout);


module.exports = router;