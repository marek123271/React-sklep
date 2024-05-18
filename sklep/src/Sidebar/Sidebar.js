import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colours from "./Colours/Colours";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title">
          Category
        </h2>
        <Category onFilterChange={handleChange} />
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title">
          Price
        </h2>
        <Price onFilterChange={handleChange} />
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title">
          Color
        </h2>
        <Colours onFilterChange={handleChange} />
      </div>
    </section>
  );
};

export default Sidebar;
