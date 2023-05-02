const router = require("express").Router();
const { add } = require("../controllers/productsController");

router.post("/add", add);

module.exports = router;
