const orderModel = require("../models/Order");

class OrderService {
  constructor() {
    this.model = orderModel
  }

  async getAll(req, query) {
    const conditions = {};
    if (query) {
      for (const key in query) {
        if (key === "column" || key === "_sort" || key === "type") continue;
        conditions[key] = query[key];
      }
    }

    return await this.model.find(conditions).sortable(req);
  }

  async getById(id) {
    return await this.model.findById(id);
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(id, data) {
    await this.model.findByIdAndUpdate(id, data);
    return await this.model.findById(id);
  }

  async deleteById(id) {
    return await this.model.findByIdAndDelete(id);
  }

  validate(req) {
    const orderData = req.body;

    // Validate data:
    const errors = [];

    // Kiểm tra các trường bắt buộc
    if (!orderData.user) {
      errors.push("Trường user là bắt buộc");
    }
    if (!orderData.orderItems || orderData.orderItems.length === 0) {
      errors.push("Trường orderItems là bắt buộc và phải có ít nhất một sản phẩm");
    }
    if (!orderData.shippingAddress) {
      errors.push("Trường shippingAddress là bắt buộc");
    }
    if (!orderData.paymentMethod) {
      errors.push("Trường paymentMethod là bắt buộc");
    }
    if (!orderData.itemsPrice) {
      errors.push("Trường itemsPrice là bắt buộc");
    }
    if (!orderData.shippingPrice) {
      errors.push("Trường shippingPrice là bắt buộc");
    }
    if (!orderData.taxPrice) {
      errors.push("Trường taxPrice là bắt buộc");
    }
    if (!orderData.totalPrice) {
      errors.push("Trường totalPrice là bắt buộc");
    }
    if (orderData.isPaid && !orderData.paidAt) {
      errors.push("Trường paidAt là bắt buộc khi đơn hàng đã thanh toán");
    }
    if (orderData.isDelivered && !orderData.deliveredAt) {
      errors.push("Trường deliveredAt là bắt buộc khi đơn hàng đã giao");
    }
    return errors;
  }

  isExist(id) {
    try {
      const model = this.model.findById(id);
      return model ? true : false;
    }
    catch {
      return false;
    }
  }

}

module.exports = new OrderService();