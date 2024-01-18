const orderService = require('../services/OrderService.js');

class OrderController {
  async getAllOrders(req, res) {
    try {
      const orders = await orderService.getAll(req, req.query);

      return res.json({
        success: true,
        orders,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Order not found",
      });
    }
  }

  async addOrder(req, res) {
    // console.log(req.body);
    const errors = orderService.validate(req);

    if (errors.length > 0) {
      return res.json({
        success: false,
        errors,
      });
    }

    const order = await orderService.create(req.body);

    return res.json({
      success: true,
      order,
    });
  }

  async updateOrder(req, res) {
    const errors = orderService.validate(req);

    if (errors.length > 0) {
      return res.json({
        success: false,
        errors,
      });
    }

    try {
      if (!orderService.isExist(req.params.id)) {
        return res.json({
          success: false,
          error: "Order not found",
        });
      }

      const order = await orderService.update(req.params.id, req.body);

      return res.json({
        success: true,
        order,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Order not found",
      });
    }
  }

  async deleteOrder(req, res) {
    try {
      if (!orderService.isExist(req.params.id)) {
        return res.json({
          success: false,
          error: "User not found",
        });
      }

      await orderService.deleteById(req.params.id);

      return res.json({
        success: true,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Order not found",
      });
    }
  }

  async getOrderById(req, res) {
    try {

      const order = await orderService.getById(req.params.id);

      return res.json({
        success: true,
        order,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Order not found",
      });
    }
  }

  async getAllOrdersByUser(req, res) {
    try {
      req.query.user = req.params.user;
      const orders = await orderService.getAll(req, req.query);

      return res.json({
        success: true,
        orders,
      });
    }
    catch {
      return res.json({
        success: false,
        error: "Order not found",
      });
    }
  }
}

module.exports = new OrderController();