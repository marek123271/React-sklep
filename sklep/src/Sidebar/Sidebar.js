import React, { useState } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colours from "./Colours/colours";
import "./Sidebar.css";

const Sidebar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);

  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const togglePrice = () => setIsPriceOpen(!isPriceOpen);
  const toggleColor = () => setIsColorOpen(!isColorOpen);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title" onClick={toggleCategory}>
          Category
        </h2>
        <div className={`collapsible-content ${isCategoryOpen ? 'expanded' : ''}`}>
          <Category handleChange={handleChange} />
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title" onClick={togglePrice}>
          Price
        </h2>
        <div className={`collapsible-content ${isPriceOpen ? 'expanded' : ''}`}>
          <Price handleChange={handleChange} />
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-title" onClick={toggleColor}>
          Color
        </h2>
        <div className={`collapsible-content ${isColorOpen ? 'expanded' : ''}`}>
          <Colours handleChange={handleChange} />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
