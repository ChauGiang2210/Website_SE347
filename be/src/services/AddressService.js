const addressModel = require("../models/Address");

class AddressService {
  constructor() {
    this.model = addressModel
  }

  async getAll(req, query = {}) {
    const conditions = {};
    if (query) {
      for (const key in query) {
        conditions[key] = query[key];
      }
    }

    return await this.model.find(conditions);
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
    if (!data.fullName) {
      errors.push("Full name is required");
    }
    if (!data.phone) {
      errors.push("Phone is required");
    }
    if (!data.address) {
      errors.push("Address is required");
    }
    // Kiểm tra phone có phải là số không
    if (isNaN(data.phone)) {
      errors.push("Phone must be a number");
    }
    // Kiểm tra phone có phải là số nguyên không
    if (data.phone % 1 !== 0) {
      errors.push("Phone must be an integer number");
    }
    // Kiểm tra phone có phải là số dương không
    if (data.phone < 0) {
      errors.push("Phone must be a positive number");
    }
    // Kiểm tra phone có phải là số bắt đầu bằng 0 không
    if (data.phone[0] !== "0") {
      errors.push("Phone must start with 0");
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

module.exports = new AddressService();