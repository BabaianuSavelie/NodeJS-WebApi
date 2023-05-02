const Product = require("../models/product");

const add = (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = product.save();

  res.status(201).json(result);
};

module.exports = { add };
