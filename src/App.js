import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/home';
import * as BooksApi from './BooksAPI';
const App = () => {
  const [books, setBooks] = useState([]);
  const [shelfs, setShelfs] = useState([
    { title: 'Currently Reading', books: [] },
    { title: 'Read', books: [] },
    { title: 'Want to Read', books: [] },
  ]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksApi.getAll();
      setBooks(res);
      makeShelfs(res);
    };
    getBooks();
    console.log(books);
    console.log(shelfs);
  }, []);

  const makeShelfs = (books) => {
    shelfs[0].books = books.filter((book) => book.shelf === 'currentlyReading');
    shelfs[1].books = books.filter((book) => book.shelf === 'read');
    shelfs[2].books = books.filter((book) => book.shelf === 'wantToRead');
  };
  return (
    <div className="app">
      <Home books={books} shelfs={shelfs} />
    </div>
  );
};

export default App;
