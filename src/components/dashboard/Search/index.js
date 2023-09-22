import React, { useState } from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const Search = ({ search, onSearchChange }) => {
 
  return (
    <div className="search-flex">
      <SearchRoundedIcon />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onSearchChange(e)}
        value={search}
      />
    </div>
  );
};

export default Search;
