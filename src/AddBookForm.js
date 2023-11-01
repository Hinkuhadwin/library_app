import React, { useState } from "react";
import './Style.css'

function AddBookForm({ books, setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleAddBook = () => {
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

  };

  return (
    <div className="add-book-form ">
      <h2 className="flexible">Add a Book </h2>
      <div className='textCenter'>
        <label>Title: </label>
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
        <br />
        <br />
        <label>Author: </label>
        <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} required />
        <br />
        <br />
        <label>ISBN: </label>
        <input type="text" placeholder="ISBN" onChange={(e) => setIsbn(e.target.value)} required />
        <br />
        <br />
        <label>Release Date: </label>
        <input type="date" placeholder="Release Date" onChange={(e) => setReleaseDate(e.target.value)} />
        <br />
        <br />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
    </div>
  );
}

export default AddBookForm;
