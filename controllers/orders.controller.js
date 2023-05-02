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

const getAll = async (req, res) => {
  const orders = await Order.find();

  res.status(200).json(orders);
};

module.exports = { create, getAll };
