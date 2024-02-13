// const express = require("express");
// const router = express.Router();
// const Book = require("../models/book");

// // Route to get all books
// router.get("/", async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.json(books);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Route to create a new book
// router.post("/", async (req, res) => {
//   const book = new Book({
//     title: req.body.title,
//     author: req.body.author,
//     pages: req.body.pages,
//     publishedAt: req.body.publishedAt,
//   });
//   try {
//     const newBook = await book.save();
//     res.status(201).json(newBook);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Route to get a single book by ID
// router.get("/:id", getBook, (req, res) => {
//   res.json(res.book);
// });

// // Route to update a book by ID
// router.patch("/:id", getBook, async (req, res) => {
//   if (req.body.title != null) {
//     res.book.title = req.body.title;
//   }
//   if (req.body.author != null) {
//     res.book.author = req.body.author;
//   }
//   if (req.body.pages != null) {
//     res.book.pages = req.body.pages;
//   }
//   if (req.body.publishedAt != null) {
//     res.book.publishedAt = req.body.publishedAt;
//   }
//   try {
//     const updatedBook = await res.book.save();
//     res.json(updatedBook);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Route to delete a book by ID
// router.delete("/:id", getBook, async (req, res) => {
//   try {
//     await res.book.remove();
//     res.json({ message: "Book deleted" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Middleware to get a single book by ID
// async function getBook(req, res, next) {
//   try {
//     const book = await Book.findById(req.params.id);
//     if (book == null) {
//       return res.status(404).json({ message: "Cannot find book" });
//     }
//     res.book = book;
//     next();
//   } catch (err) {
//     return res.status(500).json({ message: err.message });
//   }
// }

// module.exports = router;
const express = require("express");
const router = express.Router();
const Book = require("../models/book");

// Route to get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new book
router.post("/", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    publishedAt: req.body.publishedAt,
  });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get a single book by ID
router.get("/:id", getBook, (req, res) => {
  res.json(res.book);
});

// Route to update a book by ID
router.patch("/:id", getBook, async (req, res) => {
  if (req.body.title != null) {
    res.book.title = req.body.title;
  }
  if (req.body.author != null) {
    res.book.author = req.body.author;
  }
  if (req.body.pages != null) {
    res.book.pages = req.body.pages;
  }
  if (req.body.publishedAt != null) {
    res.book.publishedAt = req.body.publishedAt;
  }
  try {
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete a book by ID
router.delete("/:id", getBook, async (req, res) => {
  try {
    await res.book.remove();
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get a single book by ID
async function getBook(req, res, next) {
  try {
    const book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: "Cannot find book" });
    }
    res.book = book;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
