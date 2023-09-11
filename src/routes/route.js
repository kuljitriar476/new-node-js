const express = require("express");
const Router = express.Router();

// const authorController = require("../controller/author");
// const booksController = require("../controller/books");

// const author = require("../model/author");
// const middleware = require("../middleware/Authentication");

// Router.post("/author", authorController.createAuthor);
// Router.get(
//   "/author",
//   middleware.authenticationMiddleware,
//   authorController.getAllAuthor
// );
// Router.get("/author/:id", authorController.singleAuthor);
// Router.put(
//   "/author/:id",
//   middleware.authenticationMiddleware,
//   middleware.authorizationMiddleware,
//   authorController.updateAuthor
// );
// Router.get("/author/:id", authorController.deleteAuthor);
// Router.post("/author/login", authorController.loginAuthor);

// user CRUD

const userController = require("../controller/user");
const user = require("../model/user");

Router.post("/user", userController.createUser);
Router.get("/user", userController.getAllUser);
Router.get("/user/:id", userController.singleUser);
Router.put("/user/:id", userController.updateUser);
Router.delete("/user/:id", userController.deleteUser);

// Router.post("/books", booksController.createBooks);
// Router.get("/books", booksController.getAllBooks);
// Router.get("/books/:id", booksController.singleBooks);
// Router.put("/books/:id", booksController.updatebooks);
// Router.get("/books/:id", booksController.deletebooks);

//  CRUD bookreviews
// const bookReviewsController = require("../controller/bookReviews");
// const bookReviews = require("../model/bookReviews");

// Router.post("/bookReviews", bookReviewsController.createBookReview);
// Router.get("/bookReviews", bookReviewsController.getAllBookReview);
// Router.get("/bookReviews/:id", bookReviewsController.singleBookReviews);

const employController=require("../controller/employ");
const employ=require("../model/employ");

Router.post("/employ",employController.createEmploy);

module.exports = Router;
