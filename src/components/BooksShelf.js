import React from 'react';
import Book from './Book';

const BooksShelf = ({ shelf, books }) => {
  console.log(books);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BooksShelf;
