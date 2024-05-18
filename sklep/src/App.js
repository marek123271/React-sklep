import React, { useState } from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import Data from './db/data';
import './app.css';

function App() {
  const [filters, setFilters] = useState({ category: '', price: '', color: '' });
  const [search, setSearch] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const filterByPrice = (product, price) => {
    if (!price) return true;
    const priceValue = parseFloat(product.newPrice);
    if (price === '50') return priceValue < 50;
    if (price === '100') return priceValue >= 50 && priceValue <= 100;
    if (price === '150') return priceValue > 100 && priceValue <= 150;
    if (price === '200') return priceValue > 150 && priceValue <= 200;
    if (price === '200+') return priceValue > 200;
    return true;
  };

  const filteredItems = Data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredData = filteredItems.filter((product) => {
    const { category, price, color } = filters;
    return (
      (!category || product.category === category) &&
      filterByPrice(product, price) &&
      (!color || product.color.toLowerCase() === color)
    );
  });

  const handleCompanyChange = (company) => {
    setSelectedCompany(company);
    setFilters({ ...filters, category: '', color: '' }); // Reset other filters when changing company
  };

  // Filter by selected company
  const filteredByCompany = selectedCompany
    ? filteredData.filter(product => product.company === selectedCompany)
    : filteredData;

  return (
    <>
      <Sidebar handleChange={handleFilterChange} />
      <Navigation search={search} handleChange={handleInputChange} />
      <Recommended onCompanyChange={handleCompanyChange} />
      <Products data={filteredByCompany} />
    </>
  );
}

export default App;
