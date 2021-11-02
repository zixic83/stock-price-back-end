const stockList = require('../models/stockList');

const getAllStocks = async (req, res) => {
    try {
        const stocks = await stockList.find({})
        res.status(200).json({stocks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const addStock = async (req, res) => {
    // format: {code:123}
    const stock = await stockList.create(req.body)
    res.status(201).json({ msg:`Stock ${req.body.code} sucessfully added`})
}

const deleteStock = async (req, res) => {
    const { code } = req.body;
     const result = await stockList.findOneAndDelete({ code });
     if (!result) {
         res.status(404).send(`No stock with stock code : ${code}`)
     }
     res.status(200).json({ msg:`Stock with code ${code} sucessfully deleted` });
}

module.exports = {getAllStocks,addStock,deleteStock}