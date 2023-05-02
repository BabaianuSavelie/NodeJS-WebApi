const Product = require("../models/product.model");

const add = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await product.save();

  res.status(201).json(result);
};

module.exports = { add };
