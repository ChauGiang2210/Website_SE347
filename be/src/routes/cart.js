const express = require('express');
const router = express.Router();

const cartController = require('../controllers/CartController');

// router
router.get("/", cartController.getAllCarts);
router.post("/", cartController.addCart);
router.delete("/:id", cartController.deleteCart);

module.exports = router;