import React, { useState } from 'react';

const SearchInput = ({ onSerch }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
    onSerch(value.trim());
  };
  return (
    <div className="search-books-bar">
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default SearchInput;
