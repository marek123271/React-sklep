import React, { useState } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colours from "./Colours/Colours";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  const [isCategoryOpen, setCategoryOpen] = useState(true);
  const [isPriceOpen, setPriceOpen] = useState(true);
  const [isColoursOpen, setColoursOpen] = useState(true);

  const toggleSection = (section) => {
    if (section === 'category') setCategoryOpen(!isCategoryOpen);
    if (section === 'price') setPriceOpen(!isPriceOpen);
    if (section === 'colours') setColoursOpen(!isColoursOpen);
  };

  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title" onClick={() => toggleSection('category')}>
          Category
        </h2>
        <div className={`collapsible-content ${isCategoryOpen ? 'expanded' : ''}`}>
          <Category onFilterChange={handleChange} />
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title" onClick={() => toggleSection('price')}>
          Price
        </h2>
        <div className={`collapsible-content ${isPriceOpen ? 'expanded' : ''}`}>
          <Price onFilterChange={handleChange} />
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title" onClick={() => toggleSection('colours')}>
          Color
        </h2>
        <div className={`collapsible-content ${isColoursOpen ? 'expanded' : ''}`}>
          <Colours onFilterChange={handleChange} />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
