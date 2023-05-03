const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.UUID,
  name: String,
  price: Number,
});

module.exports = productSchema;
module.exports = mongoose.model("Product", productSchema);
