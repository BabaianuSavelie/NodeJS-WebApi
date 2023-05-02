const router = require("express").Router();
const { add } = require("../controllers/products.controller");

router.post("/add", add);

module.exports = router;
