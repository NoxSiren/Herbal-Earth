const router = require('express').Router();
const {
	createUser,	
	login,
	signupHandler,
	logout,
} = require('../../../controllers/userController');
// /api/users
router.route('/')
	.post(signupHandler);

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);


module.exports = router;