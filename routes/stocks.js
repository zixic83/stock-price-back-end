const express = require('express');
const {getAllStocks,addStock,deleteStock} = require('../controllers/stocks  ')

const router = express.Router();

router.route('/').get(getAllStocks).post(addStock);
router.route('/:code').delete(deleteStock)

module.exports = router

