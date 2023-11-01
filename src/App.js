import React, { useState , useEffect} from "react";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";
import data from './data.json';
import './Style.css'

function App() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    fetch("##########")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data.books );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App bg">
      <h1 className="flexible">Library</h1>
      <AddBookForm className="flexible" books={books} setBooks={setBooks} />
      <BookList  books={books} />
    </div>
  );
}

export default App;