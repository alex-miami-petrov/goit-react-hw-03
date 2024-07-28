import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts..."
    />
  );
};

export default SearchBox;
