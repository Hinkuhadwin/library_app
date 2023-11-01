import React, { useState } from "react";
import './Style.css'

function AddBookForm({ books, setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [error, setError] = useState("");

  const handleAddBook = (e) => {
    e.preventDefault(); 

    if (!title || !author || !isbn) {
      setError("Please fill in all required fields.");
    } else {
      const bookData = {
        title,
        author,
        isbn,
        releaseDate
      };

      const updatedBooks = [...books, bookData];

      setBooks(updatedBooks);
      
      localStorage.setItem("booksData", JSON.stringify(updatedBooks));

      console.log("Book added successfully!");

      setTitle("");
      setAuthor("");
      setIsbn("");
      setReleaseDate("");
      setError("");
    }
  };

  return (
    <div className="add-book-form">
      <h2 className="flexible">Add a Book </h2>
      <div className='textCenter'>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleAddBook}>
          <label>Title: </label>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          <br />
          <br />
          <label>Author: </label>
          <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          <br />
          <br />
          <label>ISBN: </label>
          <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
          <br />
          <br />
          <label>Release Date: </label>
          <input type="date" placeholder="Release Date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
          <br />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBookForm;