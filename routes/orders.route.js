const router = require("express").Router();
const {
  create,
  getAll,
  getById,
  deleteById,
} = require("../controllers/orders.controller");

router.post("/create", create);
router.get("/", getAll);
router.get("/:id", getById);
router.delete("/:id", deleteById);

module.exports = router;
