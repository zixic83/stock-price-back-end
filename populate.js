require('dotenv').config()

const connectDB = require('./db/connectDB')
const portfolio = require('./models/portfolio')
const jsonPortfolio = require('./existingPortfolio.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await portfolio.deleteMany()
    await portfolio.create(jsonPortfolio)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
