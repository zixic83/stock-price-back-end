require('dotenv').config()

const express = require('express');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connectDB');
const homeRouter = require('./routes/stocks');


const app = express();
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send('Welcome to the stock API');
});
app.use("/api/v1/codeList", homeRouter);

// error handling middleware
app.use(notFoundMiddleware)
app.use(errorMiddleware)
const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
    
}

start()