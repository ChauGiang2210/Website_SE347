const express = require('express');
const router = express.Router();

const orderController = require('../controllers/OrderController.js');

router.get('/user/:user', orderController.getAllOrdersByUser);
router.get('/:id', orderController.getOrderById);
router.get('/', orderController.getAllOrders);
router.post('/', orderController.addOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;