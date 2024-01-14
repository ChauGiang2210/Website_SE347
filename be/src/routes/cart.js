const express = require('express');
const router = express.Router();

const cartController = require('../controllers/CartController');
const { authenticate, adminOnly } = require('../middlewares/auth');

// router
router.get("/", authenticate, cartController.getAllCarts);
router.post("/", authenticate, cartController.addCart);
router.delete("/:id", authenticate, cartController.deleteCart);

module.exports = router;