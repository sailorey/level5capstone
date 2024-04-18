const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config()

const app = express();

// Middleware
app.use(cors()); // Allows cross-origin requests
app.use(express.json()); // Parses incoming JSON requests and puts the parsed data in req.body
app.use(morgan('dev')); // Logging middleware

// Import routers
const bestsellingRouter = require('./routes/bestsellingRouter');
const fictionRouter = require('./routes/fictionRouter');
const nonfictionRouter = require('./routes/nonfictionRouter');
const fantasyRouter = require('./routes/fantasyRouter');
const newreleaseRouter = require('./routes/newreleaseRouter');
const cartRouter = require('./routes/cartRouter');

// Routes
app.use('/bestselling', bestsellingRouter);
app.use('/fiction', fictionRouter);
app.use('/nonfiction', nonfictionRouter);
app.use('/fantasy', fantasyRouter);
app.use('/newrelease', newreleaseRouter);

app.use('/cart', cartRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
