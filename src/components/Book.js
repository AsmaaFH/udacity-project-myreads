import React from 'react';
import ShelfSelect from './ShelfSelect';

const Book = ({ book, onShelfSelect }) => {
  const handleShelfChange = (book, shelf) => {
    onShelfSelect(book, shelf);
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`,
          }}
        ></div>
        <ShelfSelect book={book} shellf={book.shelf} onShelfChange={handleShelfChange} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {/* {book.authors.map((author, index) => (
          <span key={index}>{author + ', '}</span>
        ))} */}
      </div>
    </div>
  );
};

export default Book;
