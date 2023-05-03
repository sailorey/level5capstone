const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Books Blueprint
const booksSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        enum: ['action', 'fantasy', 'horror'],
        required: true
    },
    releaseYear: Number
})

module.exports = mongoose.model("Book", booksSchema)