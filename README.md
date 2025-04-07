# Online Bookstore

This is an Online Bookstore project built with Node.js, Express, MySQL, and React. The project includes functionalities to manage books, including retrieving all books, searching for books by ID or title, and adding new books to the bookstore.

## Project Structure

### Backend (Node.js + Express + MySQL)

The backend of the project is a REST API built using Node.js and Express. MySQL is used for storing data related to books.

- **config/db.js**: Contains the MySQL connection setup.
- **controllers/bookController.js**: Handles requests and responses for books-related actions.
- **models/bookModel.js**: Handles database queries related to books.
- **routes/bookRoutes.js**: Defines API routes related to books.
- **server.js**: Initializes the Express server and listens for incoming requests.


## API Endpoints

### 1. Get All Books
- **Route**: `GET /api/books`
- **Description**: Retrieves all books from the bookstore.

### 2. Get Book by ID
- **Route**: `GET /api/books/:id`
- **Description**: Retrieves a book by its ID.
- **Parameters**:
  - `id`: The ID of the book.

### 3. Get Book by Title
- **Route**: `GET /api/books/title/:title`
- **Description**: Retrieves a book by its title.
- **Parameters**:
  - `title`: The title of the book.

### 4. Add New Book
- **Route**: `POST /api/books`
- **Description**: Adds a new book to the bookstore.
- **Body Parameters**:
  - `title`: The title of the book.
  - `author`: The author of the book.
  - `price`: The price of the book.
  - `genre`: The genre of the book.

## Database Schema

The database used is MySQL, with the following table:

### books
- `id`: INT (Primary Key, Auto Increment)
- `title`: VARCHAR
- `author`: VARCHAR
- `price`: DECIMAL
- `genre`: VARCHAR

