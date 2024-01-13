const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');

// router
router.get("/category/:category", productController.getAllProductsByCategory);
router.get("/brand/:brand", productController.getAllProductsByBrand);
router.get("/skin-type/:skinType", productController.getAllProductsBySkinType);
router.get("/:id", productController.getProductById);
router.get("/", productController.getAllProducts);
router.post("/", productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);



module.exports = router;