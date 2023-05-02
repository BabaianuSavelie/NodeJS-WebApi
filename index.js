const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected succesfully");
  })
  .catch((err) => console.log(err));

const productRoute = require("./routes/productRoute");

app.use("/products", productRoute);

app.listen(process.env.APP_PORT, () =>
  console.log(`Server started at port ${process.env.APP_PORT}`)
);
