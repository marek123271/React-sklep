import React from 'react';
import './Price.css';

const prices = [
  { label: 'All', value: '' },
  { label: 'Under $50', value: '50' },
  { label: '$50 - $100', value: '100' },
  { label: '$100 - $150', value: '150' },
  { label: '$150 - $200', value: '200' },
  { label: 'Above $200', value: '200+' },
];

const Price = ({ onFilterChange }) => (
  <div className="price-container">
    {prices.map((price) => (
      <button
        key={price.label}
        onClick={() => onFilterChange({ price: price.value })}
      >
        {price.label}
      </button>
    ))}
  </div>
);

export default Price;
