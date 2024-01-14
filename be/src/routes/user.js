const express = require('express');
const router = express.Router();

// const registerController = require('../controllers/RegisterController');
const userController = require('../controllers/UserController');
const { authenticate, adminOnly } = require('../middlewares/auth');

router.get('/:id', userController.getUserById);
router.get('/', authenticate, adminOnly, userController.getAllUsers);
router.post('/login', userController.login);
router.post('/register', userController.addUser);
router.put('/:id', authenticate, userController.updateUser);
router.delete('/:id', authenticate, userController.deleteUser);

module.exports = router;
