import React from "react";

function BookList({ books }) {
  return (
    <div className="book-list border">
      <h2 className="flexible">List of Books</h2>
      <div className="flexible">
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
            {books.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.isbn}</td>
                <td>{item.dateAdded}</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No books available.</p>
      )}
      </div>
    </div>
  );
}

export default BookList;
