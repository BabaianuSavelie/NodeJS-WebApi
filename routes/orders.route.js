const router = require("express").Router();
const { create, getAll } = require("../controllers/orders.controller");

router.post("/create", create);
router.get("/", getAll);

module.exports = router;
