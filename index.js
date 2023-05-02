const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected succesfully");
  })
  .catch((err) => console.log(err));

const productRoute = require("./routes/products.route");
const ordersRoute = require("./routes/orders.route");

app.use("/products", productRoute);
app.use("/orders", ordersRoute);

app.listen(process.env.APP_PORT, () =>
  console.log(`Server started at port ${process.env.APP_PORT}`)
);
