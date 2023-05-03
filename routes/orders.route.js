const router = require("express").Router();
const { create, getAll, getById } = require("../controllers/orders.controller");

router.post("/create", create);
router.get("/", getAll);
router.get("/:id", getById);

module.exports = router;
