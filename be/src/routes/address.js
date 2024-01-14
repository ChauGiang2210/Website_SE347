const express = require('express');
const router = express.Router();

const addressController = require('../controllers/AddressController');
const { authenticate, adminOnly } = require('../middlewares/auth');

// router
router.get("/", authenticate, addressController.getAllAddresss);
router.post("/", authenticate, addressController.addAddress);
router.put("/:id", authenticate, addressController.updateAddress);
router.delete("/:id", authenticate, addressController.deleteAddress);

module.exports = router;