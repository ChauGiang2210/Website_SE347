const cartService = require('../services/CartService');
const Cart = require('../models/Cart');

class CartController {
  async getAllCarts(req, res) {
    try {

      const carts = await cartService.getAll(req);
      res.json({
        success: true,
        carts,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Cart not found",
      });
    }
  }

  async addCart(req, res) {
    const errors = cartService.validate(req);

    if (errors.length > 0) {
      return res.json({
        success: false,
        errors,
      });
    }

    const cart = await cartService.create(req.body);

    res.json({
      success: true,
      cart,
    });
  }

  async deleteCart(req, res) {
    try {
      if (!cartService.isExist(req.params.id)) {
        return res.json({
          success: false,
          error: "User not found",
        });
      }

      await cartService.deleteById(req.params.id);

      res.json({
        success: true,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Cart not found",
      });
    }
  }
}

module.exports = new CartController();