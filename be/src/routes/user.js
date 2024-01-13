const express = require('express');
const router = express.Router();

// const registerController = require('../controllers/RegisterController');
const userController = require('../controllers/UserController');

router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);
router.post('/login', userController.login);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
