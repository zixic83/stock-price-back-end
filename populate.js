require('dotenv').config()

const connectDB = require('./db/connectDB')
const stockList = require('./models/stockList')
const jsonCodes = require('./existingCodes.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await stockList.deleteMany()
    await stockList.create(jsonCodes)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
