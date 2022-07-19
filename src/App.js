import './App.css';
import { useState, useEffect } from 'react';
import Home from './pages/home';
import Search from './pages/search';
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
      let shelfsBooks = makeShelfs(res);
      setShelfs([
        { title: 'Currently Reading', books: shelfsBooks[0] },
        { title: 'Read', books: shelfsBooks[1] },
        { title: 'Want to Read', books: shelfsBooks[2] },
      ]);
    };
    getBooks();
  }, []);

  const makeShelfs = (books) => {
    const currentBooks = books.filter((book) => book.shelf === 'currentlyReading');
    const readBooks = books.filter((book) => book.shelf === 'read');
    const wantBooks = books.filter((book) => book.shelf === 'wantToRead');
    const shelfsBooks = [currentBooks, readBooks, wantBooks];
    return shelfsBooks;
  };

  const handleShelfChange = (book, shelf) => {
    BooksApi.update(book, shelf);
  };
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Home books={books} shelfs={shelfs} onShelfChange={handleShelfChange} />
    </div>
  );
};

export default App;
