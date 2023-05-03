const express = require("express")
const bookRoutes = express.Router()
const Book = require ('../models/books.js')


// Get All Books
bookRoutes.get("/", async (req, res, next) => {
    try {
      const books = await Book.find();
      return res.status(200).send(books);
    } catch (err) {
      res.status(500);
      return next(err);
    }
});

// Get Book ID
bookRoutes.get("/:bookId", async (req, res, next) => {
    try {
        const book = await Book.findOne({_id: req.params.bookId});
        if (!book) {
        return res.status(404).send(`Book with ID ${req.params.bookId} not found.`);
        }
        return res.status(200).send(book);
    } catch (err) {
        res.status(500);
        return next(err);
    }
    });
    


// Post One
bookRoutes.post("/", async (req, res, next) => {
    console.log(req.body)
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      return res.status(201).send(savedBook);
    } catch (err) {
        res.status(500);
      return next(err);
    }
  });
  
  //delete one
  bookRoutes.delete("/:bookId", async (req, res, next) => {
    try {
      const deletedBook = await Book.findOneAndDelete({_id: req.params.bookId});
      if (!deletedBook) {
        return res.status(404).send(`Book with ID ${req.params.bookId} not found.`);
      }
      return res.status(200).send(`Successfully deleted ${deletedBook.title} from the database.`);
    } catch (err) {
      res.status(500);
      return next(err);
    }
  });


bookRoutes.get("/", async (req, res, next) => {
    try {
      const books = await Book.find();
      res.status(200).send(books);
    } catch (err) {
      res.status(500);
      return next(err);
    }
});


bookRoutes.put("/:bookId", async (req, res, next) => {
    try {
        const book = await Book.findOneAndUpdate({ _id: req.params.bookId }, 
            req.body, 
            { new: true }
            )
            return res.status(200).send(book)
    } catch (err) {
        res.status(500);
        return next(err);
    }
})
//get by genre
bookRoutes.get("/search/genre" , async (req, res, next) => {
    try {
        const book = await Book.find({ genre: req.query.genre})
            return res.status(200).send(book)
    }   catch (err) {
        res.status(500);
        return next(err);
}
});




module.exports = bookRoutes