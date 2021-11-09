const express = require("express");
const {
  getAllStocks,
  addStock,
  deleteStock,
  updateStock
} = require("../controllers/portfolio");

const router = express.Router();

router.route("/").get(getAllStocks).post(addStock).delete(deleteStock).patch(updateStock);
//router.route('/:code')

module.exports = router;
