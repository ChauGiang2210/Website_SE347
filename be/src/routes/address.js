const express = require('express');
const router = express.Router();

const addressController = require('../controllers/AddressController');

// router
router.get("/", addressController.getAllAddresss);
router.post("/", addressController.addAddress);
router.put("/:id", addressController.updateAddress);
router.delete("/:id", addressController.deleteAddress);

module.exports = router;