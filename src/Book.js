import React from 'react';

function Book({ book }) {
  return (
    <div className="book">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Date Added: {book.dateAdded}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default Book;
