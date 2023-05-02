const mongoose = require("mongoose");

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
});

module.exports = mongoose.model("Order", orderSchema);
