const router = require("express").Router();
const { create } = require("../controllers/orders.controller");

router.post("/create", create);

module.exports = router;
