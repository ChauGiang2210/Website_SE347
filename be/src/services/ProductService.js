const productModel = require("../models/Product");

class ProductService {
  constructor() {
    this.model = productModel
  }

  async getAll(req, query = {}) {
    const conditions = {};
    if (query) {
      for (const key in query) {
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
    const data = req.body;
    const errors = [];

    // Validate data:
    if (!data.name) {
      errors.push({ field: "name", message: "Tên sản phẩm là bắt buộc" });
    }
    if (!data.price) {
      errors.push({ field: "price", message: "Giá sản phẩm là bắt buộc" });
    }
    if (!data.description) {
      errors.push({ field: "description", message: "Mô tả sản phẩm là bắt buộc" });
    }
    if (!data.category) {
      errors.push({ field: "category", message: "Loại sản phẩm là bắt buộc" });
    }
    if (!data.countInStock) {
      errors.push({ field: "countInStock", message: "Số lượng sản phẩm là bắt buộc" });
    }
    if (!data.rating) {
      errors.push({ field: "rating", message: "Đánh giá sản phẩm là bắt buộc" });
    }
    if (!data.imageUrl) {
      errors.push({ field: "imageUrl", message: "Link ảnh sản phẩm là bắt buộc" });
    }

    // Validate price:
    if (data.price < 0) {
      errors.push({ field: "price", message: "Giá sản phẩm phải lớn hơn hoặc bằng 0" });
    }

    // Validate rating:
    if (data.rating < 1 || data.rating > 5) {
      errors.push({ field: "rating", message: "Đánh giá sản phẩm phải từ 1 đến 5" });
    }

    // Validate countInStock:
    if (data.countInStock < 0) {
      errors.push({ field: "countInStock", message: "Số lượng sản phẩm phải lớn hơn hoặc bằng 0" });
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

module.exports = new ProductService();