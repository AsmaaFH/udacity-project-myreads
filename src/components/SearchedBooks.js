import React from 'react';
import Book from './Book';
import * as BooksApi from '../BooksAPI';

const SearchedBooks = ({ books }) => {
  const handleShelfSelect = (book, shelf) => {
    BooksApi.update(book, shelf);
    console.log(shelf);
  };

  return (
    <div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} onShelfSelect={handleShelfSelect} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchedBooks;
