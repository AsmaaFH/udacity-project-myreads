import React from 'react';
import SearchInput from '../components/SearchInput';

const search = () => {
  return (
    <div className="search-books">
      <SearchInput />
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};

export default search;
