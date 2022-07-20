import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import * as BooksApi from '../BooksAPI';
import SearchedBooks from '../components/SearchedBooks';
const Search = ({ books }) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [error, setError] = useState('');

  const booksShearch = async (value) => {
    if (value === '') {
      setSearchedBooks([]);
      return;
    }
    const result = await BooksApi.search(value);
    console.log(result);
    if (result.error) {
      setError(result.error);
      setSearchedBooks([]);
    } else {
      setError('');
      setSearchedBooks(result);
    }
  };

  return (
    <div className="search-books">
      <SearchInput onSerch={booksShearch} />
      {error === '' && <SearchedBooks books={searchedBooks} />}
    </div>
  );
};

export default Search;
