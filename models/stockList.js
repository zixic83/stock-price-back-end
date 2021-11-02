const mongoose = require('mongoose');

const stockListSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true,'Stock code must not be empty'],
        
    }
})

module.exports = mongoose.model('StockList',stockListSchema)