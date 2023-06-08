const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware (for every request) //
app.use(express.json()) // looks for a request body, and turns it into 'req.body'
app.use(morgan('dev')) // Logs requests to the console

mongoose.connect(`mongodb+srv://books:book@cluster0.2mbcfzq.mongodb.net/books?retryWrites=true&w=majority`)
.then(() => console.log("Connected to database"))
.catch((err) => console.error(err))

//Routes
app.use("/fiction" , require("./routes/fictionRouter.js"))
app.use("/nonfiction" , require("./routes/nonfictionRouter.js"))
app.use("/fantasy" , require("./routes/fantasyRouter.js"))
app.use("/bestselling" , require("./routes/bestsellingRouter.js"))
app.use("/newrelease" , require("./routes/newreleaseRouter.js"))
app.use("/cart", require("./routes/cartRouter.js"));

//Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get('/api/books', async (req, res, next) => {
    try {
      const books = await BestSelling.find();
      res.json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      next(error); // Pass the error to the error handler middleware
    }
  });

//Server
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})