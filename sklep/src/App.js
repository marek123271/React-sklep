import React from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Category from './Sidebar/Category/Category';
import Price from './Sidebar/Price/Price';
import Sidebar from './Sidebar/Sidebar';
function App() {
  return (
    <>
    <Sidebar/>
    
      <Navigation />
      <Recommended />
      <Products />
      
      
      
    </>
  );
}

export default App;
