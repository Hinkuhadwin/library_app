import React from "react";
import Book from "./Book";

function BookList({ books }) {
  return (
    <div className="book-list">
      <h2>List of Books</h2>
      {books.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Date Added</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <Book key={book.id} book={book} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default BookList;
