const cartModel = require("../models/Cart");

class CartService {
  constructor() {
    this.model = cartModel
  }

  async getAll(req, query = {}) {
    const conditions = {};
    if (query) {
      for (const key in query) {
        conditions[key] = query[key];
      }
    }
    const carts = await this.model.find(conditions);
    console.log(carts);
    return carts;
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
    const data = req.body;
    const errors = [];

    // Validate data:
    

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

module.exports = new CartService();