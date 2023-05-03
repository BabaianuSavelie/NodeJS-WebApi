const mongoose = require("mongoose");
// const productSchema = require("./product.model");

const productSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.UUID,
  name: String,
  price: Number,
});

const orderSchema = mongoose.Schema({
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  totalQuantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  products: {
    type: [productSchema],
  },
});

module.exports = mongoose.model("Order", orderSchema);
