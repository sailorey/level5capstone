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
app.use("/books" , require("./routes/bookRoutes.js"))

//Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server
app.listen(9000, () => {
    console.log("The server is running on Port 9000")
})