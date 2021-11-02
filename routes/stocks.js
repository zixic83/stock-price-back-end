const express = require('express');
const {getAllStocks,addStock,deleteStock} = require('../controllers/stocks')

const router = express.Router();

router.route('/').get(getAllStocks).post(addStock).delete(deleteStock);
//router.route('/:code')

module.exports = router

