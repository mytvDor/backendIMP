const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const booksRouter = require("./routes/books");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = "mongodb://localhost:27017/mydatabase";
// const MONGODB_URI = "mongodb+srv://user2000:user@my.wx7db1h.mongodb.net/crudApp?retryWrites=true&w=majorit";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Mount routes
app.use("/api/books", booksRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
