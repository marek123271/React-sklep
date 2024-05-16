import React from 'react';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Category from './Sidebar/Category/Category';
import Colours from './Sidebar/colours/Colours';
import Price from './Sidebar/Price/Price';
function App() {
  return (
    <>
      <Navigation />
      <Recommended />
      <Products />
      
      <Category />
      <Colours/>
      <Price/>
    </>
  );
}

export default App;
