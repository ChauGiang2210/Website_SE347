const ProductService = require('../services/ProductService');

class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAll(req, req.query);

      return res.json({
        success: true,
        products,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Product not found",
      });
    }
  }

  async addProduct(req, res) {
    const errors = ProductService.validate(req);

    if (errors.length > 0) {
      return res.json({
        success: false,
        errors,
      });
    }

    const product = await ProductService.create(req.body);

    return res.json({
      success: true,
      product,
    });
  }

  async updateProduct(req, res) {
    const errors = ProductService.validate(req);

    if (errors.length > 0) {
      return res.json({
        success: false,
        errors,
      });
    }

    try {
      if (!ProductService.isExist(req.params.id)) {
        return res.json({
          success: false,
          error: "Product not found",
        });
      }

      const product = await ProductService.update(req.params.id, req.body);

      return res.json({
        success: true,
        product,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Product not found",
      });
    }
  }

  async deleteProduct(req, res) {
    try {
      if (!ProductService.isExist(req.params.id)) {
        return res.json({
          success: false,
          error: "User not found",
        });
      }

      await ProductService.deleteById(req.params.id);

      return res.json({
        success: true,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Product not found",
      });
    }
  }

  async getProductById(req, res) {
    try {

      const product = await ProductService.getById(req.params.id);

      return res.json({
        success: true,
        product,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Product not found",
      });
    }
  }

  async getAllProductsByCategory(req, res) {
    try {
      req.query.category = req.params.category;
      const products = await ProductService.getAll(req, req.query);

      return res.json({
        success: true,
        products,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Product not found",
      });
    }
  }

  async getAllProductsByBrand(req, res) {
    try {
      req.query.brand = req.params.brand;
      const products = await ProductService.getAll(req, req.query);

      return res.json({
        success: true,
        products,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Product not found",
      });
    }
  }

  async getAllProductsBySkinType(req, res) {
    try {
      req.query.skinType = req.params.skinType;
      const products = await ProductService.getAll(req, req.query);

      return res.json({
        success: true,
        products,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Product not found",
      });
    }
  }
}

module.exports = new ProductController();