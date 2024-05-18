import React from 'react';
import './Colours.css';

const colours = ["All", "White", "Red", "Green", "Black", "Blue"];

const Colours = ({ onFilterChange }) => (
  <div className="colours-container">
    {colours.map((colour) => (
      <button
        key={colour}
        onClick={() => onFilterChange({ color: colour.toLowerCase() === 'all' ? '' : colour.toLowerCase() })}
      >
        {colour}
      </button>
    ))}
  </div>
);

export default Colours;
