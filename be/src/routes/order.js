const express = require('express');
const router = express.Router();

const orderController = require('../controllers/OrderController.js');
const { authenticate, adminOnly } = require('../middlewares/auth');

router.get('/user/:user', authenticate, orderController.getAllOrdersByUser);
router.get('/:id', authenticate, orderController.getOrderById);
router.get('/', authenticate, adminOnly, orderController.getAllOrders);
router.post('/', orderController.addOrder);
router.put('/:id', authenticate, adminOnly, orderController.updateOrder);
router.delete('/:id', authenticate, adminOnly, orderController.deleteOrder);

module.exports = router;