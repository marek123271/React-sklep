import React from "react";
import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import {FiShoppingCart,AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai';
export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your search shoes"
        />
      </div>

      <div className="profile-container">
        <a href ='#'>
        

          <FiHeart className="nav-icon" />
        </a>
        <a href="/">
          <AiOutlineShoppingCart className="nav-icon"/>
        </a>
        <a href="/">
          <AiOutlineUserAdd className="nav-icon"/>
        </a>

      </div>
    </nav>
  );
}
