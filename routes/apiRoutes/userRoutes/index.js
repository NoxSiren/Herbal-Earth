const router = require('express').Router();
const {
	createUser,
	getUserById,
	login,
	signupHandler,
	logout,
} = require('../../../controllers/userController');
// /api/users
router.route('/')
	.post(createUser);

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);

router.route('/:userId')
	.get(getUserById);

module.exports = router;