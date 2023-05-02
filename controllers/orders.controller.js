const Order = require("../models/order.model");

const create = async (req, res) => {
  const order = new Order({
    orderDate: req.body.orderDate,
    totalQuantity: req.body.totalQuantity,
    totalPrice: req.body.totalPrice,
  });

  const result = await order.save();

  res.status(201).json(result);
};



module.exports = { create };
