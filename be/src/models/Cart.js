const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);

