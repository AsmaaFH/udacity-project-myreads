import React, { useState } from 'react';

const ShelfSelect = ({ book, onShelfChange }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    let { value } = e.target;
    setValue(value);
    onShelfChange(book, value);
  };
  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={value}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfSelect;
