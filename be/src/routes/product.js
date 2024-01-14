const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');
const { authenticate, adminOnly } = require('../middlewares/auth');

// router
router.get("/category/:category", productController.getAllProductsByCategory);
router.get("/brand/:brand", productController.getAllProductsByBrand);
router.get("/skin-type/:skinType", productController.getAllProductsBySkinType);
router.get("/:id", productController.getProductById);
router.get("/", productController.getAllProducts);
router.post("/", authenticate, adminOnly, productController.addProduct);
router.put("/:id", authenticate, adminOnly, productController.updateProduct);
router.delete("/:id", authenticate, adminOnly, productController.deleteProduct);



module.exports = router;