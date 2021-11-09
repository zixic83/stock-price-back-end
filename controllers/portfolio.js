const portfolio = require('../models/portfolio');

const getAllStocks = async (req, res) => {
  try {
    const stocks = await portfolio.find({}, {_id :0, __v:0});
    res.status(200).json({ stocks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addStock = async (req, res) => {
  // format: {code:123}
  const stock = await portfolio.create(req.body);
  res.status(201).json({ msg: `Stock ${req.body.code} sucessfully added` });
};

const deleteStock = async (req, res) => {
  const { code } = req.body;
  const result = await portfolio.findOneAndDelete({ code });
  if (!result) {
    return res.status(404).send(`No stock with stock code : ${code}`);
  }
  res.status(200).json({ msg: `Stock with code ${code} sucessfully deleted` });
};

const updateStock = async (req, res) => {
  const { code } = req.body;
  const result = await portfolio.findOneAndUpdate({ code }, req.body)
  
  if (!result) {
    return res.status(404).json({ msg:`No stock with code of ${code}`})
  }

  res.status(200).json({msg:`Stock with code ${code} sucessfully updated`})
};

module.exports = { getAllStocks, addStock, deleteStock,updateStock };