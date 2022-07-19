import React from 'react';
import BooksShelf from '../components/BooksShelf';

const Home = ({ books, shelfs }) => {
  console.log(books);
  console.log(shelfs[0].title);

  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelfs.map((shelf, index) => (
            <BooksShelf key={index} shelf={shelf.title} books={shelfs[index].books} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
