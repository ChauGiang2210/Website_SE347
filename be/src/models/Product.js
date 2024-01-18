const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    description: { type: String, required: true}, 
    price: { type: Number, required: true, default: 0},
    category: { type: String, required: true, default: "Unknown"},
    brand: { type: String, required: true, default: "Unknown" },
    skinType: {
      type: String,
      required: true,
      enum: ["normal", "dry", "oily", "sensitive"],
      default: "normal", 
    },
    countInStock: { type: Number, required: true, default: 0},
    rating: { type: Number, default: null},
    imageUrl: { type: String, required: true},
  },
  { timestamps: true }
);

ProductSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: isValidType ? req.query.type : "desc",
    });
  }
  return this;
}

module.exports = mongoose.model("Product", ProductSchema);
