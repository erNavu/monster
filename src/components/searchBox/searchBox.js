import React from "react";
import "./searchBox.css";

const SearchCard = ({ placeholder, onChange, value }) => {
  return (
    <div className="searchCard">
      <input
        className="searchInput"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchCard;
