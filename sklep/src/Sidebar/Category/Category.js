import React from 'react';
import './Category.css';

const categories = ["All", "Sneakers", "Flats", "Sandals", "Heels"];

const Category = ({ onFilterChange }) => (
  <div className="category-container">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onFilterChange({ category: category === 'All' ? '' : category.toLowerCase() })}
      >
        {category}
      </button>
    ))}
  </div>
);

export default Category;
