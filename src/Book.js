import React from 'react';

function Book({ book }) {
  return (
    <div className="book">
      <table>
        <tbody>
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.releaseDate}</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Book;
