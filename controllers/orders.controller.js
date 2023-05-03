const Order = require("../models/order.model");

const create = async (req, res) => {
  const order = new Order({
    orderDate: req.body.orderDate,
    totalQuantity: req.body.totalQuantity,
    totalPrice: req.body.totalPrice,
    products: req.body.products,
  });

  const result = await order.save();

  res.status(201).json(result);
};

const getAll = async (req, res) => {
  const orders = await Order.find();

  res.status(200).json(orders);
};

const getById = async (req, res) => {
  const id = req.params.id;

  await Order.findById(id);

  res.status(200);
};

const deleteById = async (req, res) => {
  const id = req.params.id;

  const deletedOrder = await Order.deleteOne({ _id: id });

  res.status(200).json(deletedOrder);
};

module.exports = { create, getAll, getById, deleteById };
