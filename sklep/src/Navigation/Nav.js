import React, { useState } from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

export default function Nav({ onSearchChange }) {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearchChange(text); // Pass search text to parent component
  };

  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
          value={searchText}
          onChange={handleInputChange}
        />
      </div>

      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icon" />
        </a>
        <a href="/">
          <AiOutlineShoppingCart className="nav-icon" />
        </a>
        <a href="/">
          <AiOutlineUserAdd className="nav-icon" />
        </a>
      </div>
    </nav>
  );
}
